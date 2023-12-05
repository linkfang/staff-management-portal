import { z } from 'zod';
import { PersonSkillUpdateManyMutationInputObjectSchema } from './objects/PersonSkillUpdateManyMutationInput.schema';
import { PersonSkillWhereInputObjectSchema } from './objects/PersonSkillWhereInput.schema';

export const PersonSkillUpdateManySchema = z.object({
  data: PersonSkillUpdateManyMutationInputObjectSchema,
  where: PersonSkillWhereInputObjectSchema.optional(),
});
