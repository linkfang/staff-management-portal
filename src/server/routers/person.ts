import { procedure, router } from '../trpc'
import { z } from 'zod'

export const personRouter = router({
  findFirstPerson: procedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
    const findFirstPerson = await ctx.prisma.person.findUnique({
      include: {
        expertise: {},
        personSkills: { include: { skill: { include: { field: {} } } }, orderBy: { skill: { name: 'asc' } } },
        projects: { orderBy: { startDate: 'asc' } },
      },
      where: { id: input.id },
    })

    return findFirstPerson
  }),
  findManyPerson: procedure.query(async ({ ctx }) => {
    const findManyPerson = await ctx.prisma.person.findMany({
      include: {
        expertise: { orderBy: { name: 'asc' } },
        personSkills: { include: { skill: {} }, orderBy: { skill: { name: 'asc' } } },
        projects: { orderBy: { name: 'asc' } },
      },
      orderBy: { createdAt: 'desc' },
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
      async ({
        ctx: { prisma },
        input: { id, firstName, lastName, preferredName, title, expertise, projects, personSkills },
      }) => {
        if (!personSkills) personSkills = []

        await prisma.$transaction([
          prisma.person.update({
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
            prisma.personSkill.upsert({
              where: { personId_skillId: { personId: id, skillId: item.skillId } },
              update: { level: item.level },
              create: { personId: id, skillId: item.skillId, level: item.level },
            })
          ),
          prisma.personSkill.deleteMany({
            where: {
              skillId: { notIn: personSkills.map((item) => item.skillId) },
              personId: { equals: id },
            },
          }),
        ])

        return `Updated ${preferredName || firstName} ${lastName}`
      }
    ),
  createAPerson: procedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        preferredName: z.string(),
        title: z.string(),
        expertise: z.array(z.number()),
        projects: z.array(z.number()).optional(),
        personSkills: z.array(z.object({ level: z.number(), personId: z.number(), skillId: z.number() })),
      })
    )
    .mutation(
      async ({
        ctx: { prisma },
        input: { firstName, lastName, email, preferredName, title, expertise, projects, personSkills },
      }) => {
        try {
          const newPerson = await prisma.person.create({
            data: {
              firstName,
              lastName,
              email,
              preferredName,
              title,
              expertise: { connect: expertise.map((id) => ({ id })) },
              projects: { connect: projects?.map((id) => ({ id })) },
            },
          })

          await prisma.personSkill.createMany({
            data: personSkills.map(({ skillId, level }) => ({ skillId, level, personId: newPerson.id })),
          })

          return `Created ${preferredName || firstName} ${lastName}`
        } catch (error) {
          return error
        }
      }
    ),
})
