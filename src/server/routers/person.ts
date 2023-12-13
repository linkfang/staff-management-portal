import dayjs from 'dayjs'
import {
  PersonCreateManySchema,
  PersonCreateOneSchema,
  PersonDeleteManySchema,
  PersonDeleteOneSchema,
  PersonFindFirstSchema,
  PersonFindManySchema,
  PersonFindUniqueSchema,
  PersonUpdateManySchema,
  PersonUpdateOneSchema,
  PersonUpsertSchema,
} from '../schemas'
import { procedure, router } from '../trpc'

export const personRouter = router({
  createManyPerson: procedure.input(PersonCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyPerson = await ctx.prisma.person.createMany(input)
    return createManyPerson
  }),
  createOnePerson: procedure.input(PersonCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOnePerson = await ctx.prisma.person.create(input)
    return createOnePerson
  }),
  deleteManyPerson: procedure.input(PersonDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyPerson = await ctx.prisma.person.deleteMany(input)
    return deleteManyPerson
  }),
  deleteOnePerson: procedure.input(PersonDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOnePerson = await ctx.prisma.person.delete(input)
    return deleteOnePerson
  }),
  findFirstPerson: procedure.input(PersonFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstPerson = await ctx.prisma.person.findFirst({
      ...input,
      include: {
        expertise: {},
        personSkills: { include: { skill: {} } },
        projects: {},
      },
    })
    return findFirstPerson
  }),
  findManyPerson: procedure.input(PersonFindManySchema).query(async ({ ctx, input }) => {
    const findManyPerson = await ctx.prisma.person.findMany({
      ...input,
      include: { expertise: {}, personSkills: { include: { skill: {} } }, projects: {} },
    })
    return findManyPerson.map((person) => {
      type TProjectsRaw = (typeof person.projects)[0]
      type TProjectsFormatted = {
        upcoming: TProjectsRaw[]
        onGoing: TProjectsRaw[]
        completed: TProjectsRaw[]
        totalAmount: number
      }

      const newProjects: TProjectsFormatted = {
        upcoming: [],
        onGoing: [],
        completed: [],
        totalAmount: person.projects.length,
      }

      for (let i = 0; i < person.projects.length; i++) {
        const project = person.projects[i]
        if (dayjs().isAfter(project.endDate)) {
          newProjects.completed.push(project)
          continue
        }

        if (dayjs().isSameOrAfter(project.startDate) && dayjs().isSameOrBefore(project.endDate)) {
          newProjects.onGoing.push(project)
          continue
        }

        if (dayjs().isBefore(project.startDate)) newProjects.upcoming.push(project)
      }

      return {
        ...person,
        projects: newProjects,
      }
    })
  }),
  findUniquePerson: procedure.input(PersonFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniquePerson = await ctx.prisma.person.findUnique(input)
    return findUniquePerson
  }),
  updateManyPerson: procedure.input(PersonUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyPerson = await ctx.prisma.person.updateMany(input)
    return updateManyPerson
  }),
  updateOnePerson: procedure.input(PersonUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOnePerson = await ctx.prisma.person.update(input)
    return updateOnePerson
  }),
  upsertOnePerson: procedure.input(PersonUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOnePerson = await ctx.prisma.person.upsert(input)
    return upsertOnePerson
  }),
})
