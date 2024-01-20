import { z } from 'zod'
import { procedure, router } from '../trpc'

export const skillsRouter = router({
  findManySkill: procedure.query(async ({ ctx }) => {
    const findManySkill = await ctx.prisma.skill.findMany({ orderBy: { name: 'asc' } })
    return findManySkill
  }),
  editManySkills: procedure
    .input(
      z.object({
        toBeDeleted: z.array(z.number()),
        toBeAdded: z.array(z.object({ name: z.string(), description: z.string() })),
      })
    )
    .mutation(async ({ ctx: { prisma }, input: { toBeDeleted, toBeAdded } }) => {
      await prisma.$transaction([
        prisma.skill.deleteMany({ where: { id: { in: toBeDeleted } } }),
        prisma.skill.createMany({ data: toBeAdded }),
      ])
    }),
})
