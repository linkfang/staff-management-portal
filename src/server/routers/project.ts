import { z } from 'zod'
import { procedure, router } from '../trpc'

export const projectsRouter = router({
  findManyProject: procedure.query(async ({ ctx }) => {
    const findManyProject = await ctx.prisma.project.findMany({
      include: { persons: {}, skills: {}, fields: {} },
      orderBy: { startDate: 'asc' },
    })
    return findManyProject
  }),
  createAProject: procedure
    .input(
      z.object({
        name: z.string(),
        customer: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        skills: z.array(z.number()),
        expertise: z.array(z.number()),
        persons: z.array(z.number()),
      })
    )
    .mutation(
      async ({
        ctx: { prisma },
        input: { name, customer, description, startDate, endDate, skills, expertise, persons },
      }) => {
        await prisma.project.create({
          data: {
            name,
            customer,
            description,
            startDate,
            endDate,
            skills: { connect: skills.map((id) => ({ id })) },
            fields: { connect: expertise.map((id) => ({ id })) },
            persons: { connect: persons.map((id) => ({ id })) },
          },
        })
      }
    ),
  updateAProject: procedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        customer: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        skills: z.array(z.number()),
        expertise: z.array(z.number()),
        persons: z.array(z.number()),
      })
    )
    .mutation(
      async ({
        ctx: { prisma },
        input: { id, name, customer, description, startDate, endDate, skills, expertise, persons },
      }) => {
        await prisma.project.update({
          where: { id },
          data: {
            name,
            customer,
            description,
            startDate,
            endDate,
            skills: { set: skills.map((id) => ({ id })) },
            fields: { set: expertise.map((id) => ({ id })) },
            persons: { set: persons.map((id) => ({ id })) },
          },
        })
      }
    ),
})
