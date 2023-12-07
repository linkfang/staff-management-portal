import dayjs from 'dayjs'
import {
  ProjectCreateManySchema,
  ProjectCreateOneSchema,
  ProjectDeleteManySchema,
  ProjectDeleteOneSchema,
  ProjectFindFirstSchema,
  ProjectFindManySchema,
  ProjectFindUniqueSchema,
  ProjectUpdateManySchema,
  ProjectUpdateOneSchema,
  ProjectUpsertSchema,
} from '../schemas'
import { procedure, router } from '../trpc'
import { PROJECT_STATUSES } from '@/constants/general'

export const projectsRouter = router({
  createManyProject: procedure.input(ProjectCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyProject = await ctx.prisma.project.createMany(input)
    return createManyProject
  }),
  createOneProject: procedure.input(ProjectCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneProject = await ctx.prisma.project.create(input)
    return createOneProject
  }),
  deleteManyProject: procedure.input(ProjectDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyProject = await ctx.prisma.project.deleteMany(input)
    return deleteManyProject
  }),
  deleteOneProject: procedure.input(ProjectDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneProject = await ctx.prisma.project.delete(input)
    return deleteOneProject
  }),
  findFirstProject: procedure.input(ProjectFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstProject = await ctx.prisma.project.findFirst(input)
    return findFirstProject
  }),
  findManyProject: procedure.input(ProjectFindManySchema).query(async ({ ctx, input }) => {
    const findManyProject = await ctx.prisma.project.findMany({ include: { persons: {}, skills: {}, fields: {} } })
    type TProjectRaw = (typeof findManyProject)[0]
    const renderStatus = (project: TProjectRaw) => {
      if (dayjs().isBefore(project.startDate)) return PROJECT_STATUSES.Upcoming
      if (dayjs().isSameOrAfter(project.startDate) && dayjs().isSameOrBefore(project.endDate))
        return PROJECT_STATUSES['On Going']
      return PROJECT_STATUSES.Completed
    }
    return findManyProject.map((project) => ({
      ...project,
      status: renderStatus(project),
    }))
  }),
  findUniqueProject: procedure.input(ProjectFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueProject = await ctx.prisma.project.findUnique(input)
    return findUniqueProject
  }),
  updateManyProject: procedure.input(ProjectUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyProject = await ctx.prisma.project.updateMany(input)
    return updateManyProject
  }),
  updateOneProject: procedure.input(ProjectUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneProject = await ctx.prisma.project.update(input)
    return updateOneProject
  }),
  upsertOneProject: procedure.input(ProjectUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneProject = await ctx.prisma.project.upsert(input)
    return upsertOneProject
  }),
})
