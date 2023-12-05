import { z } from 'zod';
import { PersonSkillWhereInputObjectSchema } from './objects/PersonSkillWhereInput.schema';
import { PersonSkillOrderByWithAggregationInputObjectSchema } from './objects/PersonSkillOrderByWithAggregationInput.schema';
import { PersonSkillScalarWhereWithAggregatesInputObjectSchema } from './objects/PersonSkillScalarWhereWithAggregatesInput.schema';
import { PersonSkillScalarFieldEnumSchema } from './enums/PersonSkillScalarFieldEnum.schema';

export const PersonSkillGroupBySchema = z.object({
  where: PersonSkillWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PersonSkillOrderByWithAggregationInputObjectSchema,
      PersonSkillOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PersonSkillScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PersonSkillScalarFieldEnumSchema),
});
