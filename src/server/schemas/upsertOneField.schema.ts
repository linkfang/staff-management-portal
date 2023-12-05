import { z } from 'zod';
import { FieldIncludeObjectSchema } from './objects/FieldInclude.schema';
import { FieldWhereUniqueInputObjectSchema } from './objects/FieldWhereUniqueInput.schema';
import { FieldCreateInputObjectSchema } from './objects/FieldCreateInput.schema';
import { FieldUncheckedCreateInputObjectSchema } from './objects/FieldUncheckedCreateInput.schema';
import { FieldUpdateInputObjectSchema } from './objects/FieldUpdateInput.schema';
import { FieldUncheckedUpdateInputObjectSchema } from './objects/FieldUncheckedUpdateInput.schema';

export const FieldUpsertSchema = z.object({
  include: FieldIncludeObjectSchema.optional(),
  where: FieldWhereUniqueInputObjectSchema,
  create: z.union([
    FieldCreateInputObjectSchema,
    FieldUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FieldUpdateInputObjectSchema,
    FieldUncheckedUpdateInputObjectSchema,
  ]),
});
