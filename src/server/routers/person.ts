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
    const findFirstPerson = await ctx.prisma.person.findFirst(input)
    return findFirstPerson
  }),
  findManyPerson: procedure.input(PersonFindManySchema).query(async ({ ctx, input }) => {
    const findManyPerson = await ctx.prisma.person.findMany(input)
    return findManyPerson
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
