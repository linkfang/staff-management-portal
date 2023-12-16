import { procedure, router } from '../trpc'

export const skillsRouter = router({
  findManySkill: procedure.query(async ({ ctx }) => {
    const findManySkill = await ctx.prisma.skill.findMany()
    return findManySkill
  }),
})
