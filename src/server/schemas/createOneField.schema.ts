import { z } from 'zod';
import { FieldIncludeObjectSchema } from './objects/FieldInclude.schema';
import { FieldCreateInputObjectSchema } from './objects/FieldCreateInput.schema';
import { FieldUncheckedCreateInputObjectSchema } from './objects/FieldUncheckedCreateInput.schema';

export const FieldCreateOneSchema = z.object({
  include: FieldIncludeObjectSchema.optional(),
  data: z.union([
    FieldCreateInputObjectSchema,
    FieldUncheckedCreateInputObjectSchema,
  ]),
});
