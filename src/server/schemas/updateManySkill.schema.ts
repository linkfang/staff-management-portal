import { z } from 'zod';
import { SkillUpdateManyMutationInputObjectSchema } from './objects/SkillUpdateManyMutationInput.schema';
import { SkillWhereInputObjectSchema } from './objects/SkillWhereInput.schema';

export const SkillUpdateManySchema = z.object({
  data: SkillUpdateManyMutationInputObjectSchema,
  where: SkillWhereInputObjectSchema.optional(),
});
