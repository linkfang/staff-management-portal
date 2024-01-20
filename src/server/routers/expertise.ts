import { z } from 'zod'
import { procedure, router } from '../trpc'

export const expertiseRouter = router({
  findManyExpertise: procedure.query(async ({ ctx }) => {
    const findManyExpertise = await ctx.prisma.field.findMany({ include: { skills: {} }, orderBy: { name: 'asc' } })
    return findManyExpertise
  }),
  editManyExpertise: procedure
    .input(
      z.object({
        toBeDeleted: z.array(z.number()),
        toBeAdded: z.array(z.object({ name: z.string() })),
      })
    )
    .mutation(async ({ ctx: { prisma }, input: { toBeDeleted, toBeAdded } }) => {
      await prisma.$transaction([
        prisma.field.deleteMany({ where: { id: { in: toBeDeleted } } }),
        prisma.field.createMany({ data: toBeAdded }),
      ])
    }),
})
