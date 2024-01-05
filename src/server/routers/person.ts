import dayjs from 'dayjs'

import { procedure, router } from '../trpc'
import { renderProjectStatus } from '@/utils/general'
import { z } from 'zod'

export const personRouter = router({
  findFirstPerson: procedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
    const findFirstPerson = await ctx.prisma.person.findFirst({
      include: {
        expertise: {},
        personSkills: { include: { skill: { include: { field: {} } } } },
        projects: {},
      },
      where: { id: { equals: input.id } },
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
      async ({ ctx, input: { id, firstName, lastName, preferredName, title, expertise, projects, personSkills } }) => {
        if (!personSkills) return

        ctx.prisma.$transaction([
          ctx.prisma.person.update({
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
            ctx.prisma.personSkill.upsert({
              where: { personId_skillId: { personId: item.personId, skillId: item.skillId } },
              update: { level: item.level },
              create: { personId: item.personId, skillId: item.skillId, level: item.level },
            })
          ),
          ctx.prisma.personSkill.deleteMany({
            where: {
              skillId: { notIn: personSkills.map((item) => item.skillId) },
              personId: { equals: personSkills[0].personId },
            },
          }),
        ])

        return `Updated ${preferredName || firstName} ${lastName}`
      }
    ),
})
