import {
  SkillCreateManySchema,
  SkillCreateOneSchema,
  SkillDeleteManySchema,
  SkillDeleteOneSchema,
  SkillFindFirstSchema,
  SkillFindManySchema,
  SkillFindUniqueSchema,
  SkillUpdateManySchema,
  SkillUpdateOneSchema,
  SkillUpsertSchema,
} from '../schemas'
import { procedure, router } from '../trpc'

export const skillsRouter = router({
  createManySkill: procedure.input(SkillCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManySkill = await ctx.prisma.skill.createMany(input)
    return createManySkill
  }),
  createOneSkill: procedure.input(SkillCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneSkill = await ctx.prisma.skill.create(input)
    return createOneSkill
  }),
  deleteManySkill: procedure.input(SkillDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManySkill = await ctx.prisma.skill.deleteMany(input)
    return deleteManySkill
  }),
  deleteOneSkill: procedure.input(SkillDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneSkill = await ctx.prisma.skill.delete(input)
    return deleteOneSkill
  }),
  findFirstSkill: procedure.input(SkillFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstSkill = await ctx.prisma.skill.findFirst(input)
    return findFirstSkill
  }),
  findManySkill: procedure.input(SkillFindManySchema).query(async ({ ctx, input }) => {
    const findManySkill = await ctx.prisma.skill.findMany(input)
    return findManySkill
  }),
  findUniqueSkill: procedure.input(SkillFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueSkill = await ctx.prisma.skill.findUnique(input)
    return findUniqueSkill
  }),
  updateManySkill: procedure.input(SkillUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManySkill = await ctx.prisma.skill.updateMany(input)
    return updateManySkill
  }),
  updateOneSkill: procedure.input(SkillUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneSkill = await ctx.prisma.skill.update(input)
    return updateOneSkill
  }),
  upsertOneSkill: procedure.input(SkillUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneSkill = await ctx.prisma.skill.upsert(input)
    return upsertOneSkill
  }),
})
