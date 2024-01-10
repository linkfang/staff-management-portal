import { procedure, router } from '../trpc'

export const expertiseRouter = router({
  findManyExpertise: procedure.query(async ({ ctx }) => {
    const findManyExpertise = await ctx.prisma.field.findMany({ include: { skills: {} }, orderBy: { name: 'asc' } })
    return findManyExpertise
  }),
})
