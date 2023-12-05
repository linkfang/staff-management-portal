import { z } from 'zod';
import { SkillWhereInputObjectSchema } from './objects/SkillWhereInput.schema';
import { SkillOrderByWithAggregationInputObjectSchema } from './objects/SkillOrderByWithAggregationInput.schema';
import { SkillScalarWhereWithAggregatesInputObjectSchema } from './objects/SkillScalarWhereWithAggregatesInput.schema';
import { SkillScalarFieldEnumSchema } from './enums/SkillScalarFieldEnum.schema';

export const SkillGroupBySchema = z.object({
  where: SkillWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SkillOrderByWithAggregationInputObjectSchema,
      SkillOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SkillScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SkillScalarFieldEnumSchema),
});
