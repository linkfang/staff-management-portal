import { z } from 'zod';
import { FieldWhereInputObjectSchema } from './objects/FieldWhereInput.schema';
import { FieldOrderByWithAggregationInputObjectSchema } from './objects/FieldOrderByWithAggregationInput.schema';
import { FieldScalarWhereWithAggregatesInputObjectSchema } from './objects/FieldScalarWhereWithAggregatesInput.schema';
import { FieldScalarFieldEnumSchema } from './enums/FieldScalarFieldEnum.schema';

export const FieldGroupBySchema = z.object({
  where: FieldWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FieldOrderByWithAggregationInputObjectSchema,
      FieldOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FieldScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FieldScalarFieldEnumSchema),
});
