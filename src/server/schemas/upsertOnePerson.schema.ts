import { z } from 'zod';
import { PersonIncludeObjectSchema } from './objects/PersonInclude.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';
import { PersonCreateInputObjectSchema } from './objects/PersonCreateInput.schema';
import { PersonUncheckedCreateInputObjectSchema } from './objects/PersonUncheckedCreateInput.schema';
import { PersonUpdateInputObjectSchema } from './objects/PersonUpdateInput.schema';
import { PersonUncheckedUpdateInputObjectSchema } from './objects/PersonUncheckedUpdateInput.schema';

export const PersonUpsertSchema = z.object({
  include: PersonIncludeObjectSchema.optional(),
  where: PersonWhereUniqueInputObjectSchema,
  create: z.union([
    PersonCreateInputObjectSchema,
    PersonUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PersonUpdateInputObjectSchema,
    PersonUncheckedUpdateInputObjectSchema,
  ]),
});
