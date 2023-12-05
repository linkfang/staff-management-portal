import { z } from 'zod';
import { PersonIncludeObjectSchema } from './objects/PersonInclude.schema';
import { PersonOrderByWithRelationInputObjectSchema } from './objects/PersonOrderByWithRelationInput.schema';
import { PersonWhereInputObjectSchema } from './objects/PersonWhereInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';
import { PersonScalarFieldEnumSchema } from './enums/PersonScalarFieldEnum.schema';

export const PersonFindFirstSchema = z.object({
  include: PersonIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PersonOrderByWithRelationInputObjectSchema,
      PersonOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PersonWhereInputObjectSchema.optional(),
  cursor: PersonWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PersonScalarFieldEnumSchema).optional(),
});
