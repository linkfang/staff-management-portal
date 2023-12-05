import { z } from 'zod';
import { PersonSkillIncludeObjectSchema } from './objects/PersonSkillInclude.schema';
import { PersonSkillCreateInputObjectSchema } from './objects/PersonSkillCreateInput.schema';
import { PersonSkillUncheckedCreateInputObjectSchema } from './objects/PersonSkillUncheckedCreateInput.schema';

export const PersonSkillCreateOneSchema = z.object({
  include: PersonSkillIncludeObjectSchema.optional(),
  data: z.union([
    PersonSkillCreateInputObjectSchema,
    PersonSkillUncheckedCreateInputObjectSchema,
  ]),
});
