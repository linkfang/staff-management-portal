import { z } from 'zod';
import { PersonIncludeObjectSchema } from './objects/PersonInclude.schema';
import { PersonCreateInputObjectSchema } from './objects/PersonCreateInput.schema';
import { PersonUncheckedCreateInputObjectSchema } from './objects/PersonUncheckedCreateInput.schema';

export const PersonCreateOneSchema = z.object({
  include: PersonIncludeObjectSchema.optional(),
  data: z.union([
    PersonCreateInputObjectSchema,
    PersonUncheckedCreateInputObjectSchema,
  ]),
});
