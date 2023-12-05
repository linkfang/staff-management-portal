import { z } from 'zod';
import { FieldIncludeObjectSchema } from './objects/FieldInclude.schema';
import { FieldOrderByWithRelationInputObjectSchema } from './objects/FieldOrderByWithRelationInput.schema';
import { FieldWhereInputObjectSchema } from './objects/FieldWhereInput.schema';
import { FieldWhereUniqueInputObjectSchema } from './objects/FieldWhereUniqueInput.schema';
import { FieldScalarFieldEnumSchema } from './enums/FieldScalarFieldEnum.schema';

export const FieldFindFirstSchema = z.object({
  include: FieldIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      FieldOrderByWithRelationInputObjectSchema,
      FieldOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FieldWhereInputObjectSchema.optional(),
  cursor: FieldWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FieldScalarFieldEnumSchema).optional(),
});
