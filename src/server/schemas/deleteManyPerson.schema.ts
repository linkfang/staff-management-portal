import { z } from 'zod';
import { PersonWhereInputObjectSchema } from './objects/PersonWhereInput.schema';

export const PersonDeleteManySchema = z.object({
  where: PersonWhereInputObjectSchema.optional(),
});
