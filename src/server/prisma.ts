import { PrismaClient } from '@prisma/client'

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient
}

export const prisma: PrismaClient = prismaGlobal.prisma ?? new PrismaClient()

prismaGlobal.prisma = prisma
