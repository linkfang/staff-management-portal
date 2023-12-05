import { z } from 'zod';
import { SkillWhereInputObjectSchema } from './objects/SkillWhereInput.schema';

export const SkillDeleteManySchema = z.object({
  where: SkillWhereInputObjectSchema.optional(),
});
