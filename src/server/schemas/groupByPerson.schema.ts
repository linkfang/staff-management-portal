import { z } from 'zod';
import { PersonWhereInputObjectSchema } from './objects/PersonWhereInput.schema';
import { PersonOrderByWithAggregationInputObjectSchema } from './objects/PersonOrderByWithAggregationInput.schema';
import { PersonScalarWhereWithAggregatesInputObjectSchema } from './objects/PersonScalarWhereWithAggregatesInput.schema';
import { PersonScalarFieldEnumSchema } from './enums/PersonScalarFieldEnum.schema';

export const PersonGroupBySchema = z.object({
  where: PersonWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PersonOrderByWithAggregationInputObjectSchema,
      PersonOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PersonScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PersonScalarFieldEnumSchema),
});
