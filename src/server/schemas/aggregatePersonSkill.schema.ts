import { z } from 'zod';
import { PersonSkillOrderByWithRelationInputObjectSchema } from './objects/PersonSkillOrderByWithRelationInput.schema';
import { PersonSkillWhereInputObjectSchema } from './objects/PersonSkillWhereInput.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './objects/PersonSkillWhereUniqueInput.schema';
import { PersonSkillCountAggregateInputObjectSchema } from './objects/PersonSkillCountAggregateInput.schema';
import { PersonSkillMinAggregateInputObjectSchema } from './objects/PersonSkillMinAggregateInput.schema';
import { PersonSkillMaxAggregateInputObjectSchema } from './objects/PersonSkillMaxAggregateInput.schema';
import { PersonSkillAvgAggregateInputObjectSchema } from './objects/PersonSkillAvgAggregateInput.schema';
import { PersonSkillSumAggregateInputObjectSchema } from './objects/PersonSkillSumAggregateInput.schema';

export const PersonSkillAggregateSchema = z.object({
  orderBy: z
    .union([
      PersonSkillOrderByWithRelationInputObjectSchema,
      PersonSkillOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PersonSkillWhereInputObjectSchema.optional(),
  cursor: PersonSkillWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PersonSkillCountAggregateInputObjectSchema])
    .optional(),
  _min: PersonSkillMinAggregateInputObjectSchema.optional(),
  _max: PersonSkillMaxAggregateInputObjectSchema.optional(),
  _avg: PersonSkillAvgAggregateInputObjectSchema.optional(),
  _sum: PersonSkillSumAggregateInputObjectSchema.optional(),
});
