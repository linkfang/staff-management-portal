import { z } from 'zod';
import { SkillOrderByWithRelationInputObjectSchema } from './objects/SkillOrderByWithRelationInput.schema';
import { SkillWhereInputObjectSchema } from './objects/SkillWhereInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';
import { SkillCountAggregateInputObjectSchema } from './objects/SkillCountAggregateInput.schema';
import { SkillMinAggregateInputObjectSchema } from './objects/SkillMinAggregateInput.schema';
import { SkillMaxAggregateInputObjectSchema } from './objects/SkillMaxAggregateInput.schema';
import { SkillAvgAggregateInputObjectSchema } from './objects/SkillAvgAggregateInput.schema';
import { SkillSumAggregateInputObjectSchema } from './objects/SkillSumAggregateInput.schema';

export const SkillAggregateSchema = z.object({
  orderBy: z
    .union([
      SkillOrderByWithRelationInputObjectSchema,
      SkillOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SkillWhereInputObjectSchema.optional(),
  cursor: SkillWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SkillCountAggregateInputObjectSchema])
    .optional(),
  _min: SkillMinAggregateInputObjectSchema.optional(),
  _max: SkillMaxAggregateInputObjectSchema.optional(),
  _avg: SkillAvgAggregateInputObjectSchema.optional(),
  _sum: SkillSumAggregateInputObjectSchema.optional(),
});
