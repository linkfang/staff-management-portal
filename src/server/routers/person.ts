import { procedure, router } from '../trpc'
import { z } from 'zod'

export const personRouter = router({
  findFirstPerson: procedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
    const findFirstPerson = await ctx.prisma.person.findUnique({
      include: {
        expertise: {},
        personSkills: { include: { skill: { include: { field: {} } } } },
        projects: {},
      },
      where: { id: input.id },
    })

    return findFirstPerson
  }),
  findManyPerson: procedure.query(async ({ ctx }) => {
    const findManyPerson = await ctx.prisma.person.findMany({
      include: { expertise: {}, personSkills: { include: { skill: {} } }, projects: {} },
      orderBy: { id: 'asc' },
    })
    return findManyPerson
  }),
  updateAPerson: procedure
    .input(
      z.object({
        id: z.number(),
        firstName: z.string(),
        lastName: z.string(),
        preferredName: z.string(),
        title: z.string(),
        expertise: z.array(z.number()).optional(),
        projects: z.array(z.number()).optional(),
        personSkills: z.array(z.object({ level: z.number(), personId: z.number(), skillId: z.number() })).optional(),
      })
    )
    .mutation(
      async ({ ctx, input: { id, firstName, lastName, preferredName, title, expertise, projects, personSkills } }) => {
        if (!personSkills) return

        await ctx.prisma.$transaction([
          ctx.prisma.person.update({
            where: { id },
            data: {
              firstName,
              lastName,
              preferredName,
              title,
              expertise: { set: expertise?.map((item) => ({ id: item })) },
              projects: { set: projects?.map((item) => ({ id: item })) },
            },
          }),
          ...personSkills?.map((item) =>
            ctx.prisma.personSkill.upsert({
              where: { personId_skillId: { personId: id, skillId: item.skillId } },
              update: { level: item.level },
              create: { personId: id, skillId: item.skillId, level: item.level },
            })
          ),
          ctx.prisma.personSkill.deleteMany({
            where: {
              skillId: { notIn: personSkills.map((item) => item.skillId) },
              personId: { equals: id },
            },
          }),
        ])

        return `Updated ${preferredName || firstName} ${lastName}`
      }
    ),
})
