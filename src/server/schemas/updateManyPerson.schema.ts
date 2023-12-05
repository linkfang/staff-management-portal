import { z } from 'zod';
import { PersonUpdateManyMutationInputObjectSchema } from './objects/PersonUpdateManyMutationInput.schema';
import { PersonWhereInputObjectSchema } from './objects/PersonWhereInput.schema';

export const PersonUpdateManySchema = z.object({
  data: PersonUpdateManyMutationInputObjectSchema,
  where: PersonWhereInputObjectSchema.optional(),
});
