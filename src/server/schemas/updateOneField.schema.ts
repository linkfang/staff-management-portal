import { z } from 'zod';
import { FieldIncludeObjectSchema } from './objects/FieldInclude.schema';
import { FieldUpdateInputObjectSchema } from './objects/FieldUpdateInput.schema';
import { FieldUncheckedUpdateInputObjectSchema } from './objects/FieldUncheckedUpdateInput.schema';
import { FieldWhereUniqueInputObjectSchema } from './objects/FieldWhereUniqueInput.schema';

export const FieldUpdateOneSchema = z.object({
  include: FieldIncludeObjectSchema.optional(),
  data: z.union([
    FieldUpdateInputObjectSchema,
    FieldUncheckedUpdateInputObjectSchema,
  ]),
  where: FieldWhereUniqueInputObjectSchema,
});
