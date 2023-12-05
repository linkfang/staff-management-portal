import { z } from 'zod'
import { mergeRouters, procedure, router } from '../trpc'
import { personRouter } from './person'

export const appRouter = mergeRouters(
  personRouter,
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
