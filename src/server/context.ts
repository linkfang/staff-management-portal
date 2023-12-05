import { prisma } from './prisma'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext() {
  return {
    test: 'something',
    prisma,
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
