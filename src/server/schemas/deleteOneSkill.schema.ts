import { z } from 'zod';
import { SkillIncludeObjectSchema } from './objects/SkillInclude.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';

export const SkillDeleteOneSchema = z.object({
  include: SkillIncludeObjectSchema.optional(),
  where: SkillWhereUniqueInputObjectSchema,
});
