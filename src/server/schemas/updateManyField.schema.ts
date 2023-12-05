import { z } from 'zod';
import { FieldUpdateManyMutationInputObjectSchema } from './objects/FieldUpdateManyMutationInput.schema';
import { FieldWhereInputObjectSchema } from './objects/FieldWhereInput.schema';

export const FieldUpdateManySchema = z.object({
  data: FieldUpdateManyMutationInputObjectSchema,
  where: FieldWhereInputObjectSchema.optional(),
});
