import { z } from 'zod'
import { mergeRouters, procedure, router } from '../trpc'
import { personRouter } from './person'
import { skillsRouter } from './skill'
import { projectsRouter } from './project'
import { expertiseRouter } from './expertise'

export const appRouter = mergeRouters(
  personRouter,
  skillsRouter,
  projectsRouter,
  expertiseRouter,
  router({
    hello: procedure
      .input(
        z.object({
          text: z.string(),
        })
      )
      .query((opts) => {
        return {
          greeting: `hello ${opts.input.text}`,
        }
      }),
  })
)

export type AppRouter = typeof appRouter
