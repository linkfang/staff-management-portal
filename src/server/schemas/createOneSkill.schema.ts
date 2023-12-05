import { z } from 'zod';
import { SkillIncludeObjectSchema } from './objects/SkillInclude.schema';
import { SkillCreateInputObjectSchema } from './objects/SkillCreateInput.schema';
import { SkillUncheckedCreateInputObjectSchema } from './objects/SkillUncheckedCreateInput.schema';

export const SkillCreateOneSchema = z.object({
  include: SkillIncludeObjectSchema.optional(),
  data: z.union([
    SkillCreateInputObjectSchema,
    SkillUncheckedCreateInputObjectSchema,
  ]),
});
