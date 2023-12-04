import type { CreateNextContextOptions } from '@trpc/server/adapters/next'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: CreateNextContextOptions) {
  // const usefulConstant = 'useful value'
  return {
    // usefulConstant
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
