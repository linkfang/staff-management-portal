import { procedure, router } from '../trpc'
import { renderProjectStatus } from '@/utils/general'

export const projectsRouter = router({
  findManyProject: procedure.query(async ({ ctx }) => {
    const findManyProject = await ctx.prisma.project.findMany({ include: { persons: {}, skills: {}, fields: {} } })
    return findManyProject.map((project) => ({
      ...project,
      status: renderProjectStatus(project),
    }))
  }),
})
