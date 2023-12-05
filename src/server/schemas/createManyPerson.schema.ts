import { z } from 'zod';
import { PersonCreateManyInputObjectSchema } from './objects/PersonCreateManyInput.schema';

export const PersonCreateManySchema = z.object({
  data: z.union([
    PersonCreateManyInputObjectSchema,
    z.array(PersonCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
