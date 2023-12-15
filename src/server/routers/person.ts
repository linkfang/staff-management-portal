import dayjs from 'dayjs'

import { procedure, router } from '../trpc'
import { renderProjectStatus } from '@/utils/general'

export const personRouter = router({
  findFirstPerson: procedure.query(async ({ ctx }) => {
    const findFirstPerson = await ctx.prisma.person.findFirst({
      include: {
        expertise: {},
        personSkills: { include: { skill: { include: { field: {} } } } },
        projects: {},
      },
    })
    const formattedProject = findFirstPerson?.projects.map((project) => ({
      ...project,
      status: renderProjectStatus(project),
    }))

    return { ...findFirstPerson, projects: formattedProject }
  }),
  findManyPerson: procedure.query(async ({ ctx }) => {
    const findManyPerson = await ctx.prisma.person.findMany({
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
})
