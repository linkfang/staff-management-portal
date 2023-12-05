import { z } from 'zod';
import { PersonIncludeObjectSchema } from './objects/PersonInclude.schema';
import { PersonUpdateInputObjectSchema } from './objects/PersonUpdateInput.schema';
import { PersonUncheckedUpdateInputObjectSchema } from './objects/PersonUncheckedUpdateInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';

export const PersonUpdateOneSchema = z.object({
  include: PersonIncludeObjectSchema.optional(),
  data: z.union([
    PersonUpdateInputObjectSchema,
    PersonUncheckedUpdateInputObjectSchema,
  ]),
  where: PersonWhereUniqueInputObjectSchema,
});
