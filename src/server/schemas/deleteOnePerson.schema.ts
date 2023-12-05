import { z } from 'zod';
import { PersonIncludeObjectSchema } from './objects/PersonInclude.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';

export const PersonDeleteOneSchema = z.object({
  include: PersonIncludeObjectSchema.optional(),
  where: PersonWhereUniqueInputObjectSchema,
});
