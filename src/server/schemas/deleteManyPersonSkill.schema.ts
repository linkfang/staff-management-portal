import { z } from 'zod';
import { PersonSkillWhereInputObjectSchema } from './objects/PersonSkillWhereInput.schema';

export const PersonSkillDeleteManySchema = z.object({
  where: PersonSkillWhereInputObjectSchema.optional(),
});
