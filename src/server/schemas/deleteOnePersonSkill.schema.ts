import { z } from 'zod';
import { PersonSkillIncludeObjectSchema } from './objects/PersonSkillInclude.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './objects/PersonSkillWhereUniqueInput.schema';

export const PersonSkillDeleteOneSchema = z.object({
  include: PersonSkillIncludeObjectSchema.optional(),
  where: PersonSkillWhereUniqueInputObjectSchema,
});
