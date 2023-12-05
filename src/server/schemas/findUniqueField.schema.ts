import { z } from 'zod';
import { FieldIncludeObjectSchema } from './objects/FieldInclude.schema';
import { FieldWhereUniqueInputObjectSchema } from './objects/FieldWhereUniqueInput.schema';

export const FieldFindUniqueSchema = z.object({
  include: FieldIncludeObjectSchema.optional(),
  where: FieldWhereUniqueInputObjectSchema,
});
