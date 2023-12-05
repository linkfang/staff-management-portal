import { z } from 'zod';
import { FieldCreateManyInputObjectSchema } from './objects/FieldCreateManyInput.schema';

export const FieldCreateManySchema = z.object({
  data: z.union([
    FieldCreateManyInputObjectSchema,
    z.array(FieldCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
