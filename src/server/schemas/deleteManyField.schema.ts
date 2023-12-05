import { z } from 'zod';
import { FieldWhereInputObjectSchema } from './objects/FieldWhereInput.schema';

export const FieldDeleteManySchema = z.object({
  where: FieldWhereInputObjectSchema.optional(),
});
