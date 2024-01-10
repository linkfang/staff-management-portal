import { procedure, router } from '../trpc'

export const projectsRouter = router({
  findManyProject: procedure.query(async ({ ctx }) => {
    const findManyProject = await ctx.prisma.project.findMany({
      include: { persons: {}, skills: {}, fields: {} },
      orderBy: { startDate: 'asc' },
    })
    return findManyProject
  }),
})
