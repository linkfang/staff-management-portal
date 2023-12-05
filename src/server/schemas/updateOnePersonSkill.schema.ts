import { z } from 'zod';
import { PersonSkillIncludeObjectSchema } from './objects/PersonSkillInclude.schema';
import { PersonSkillUpdateInputObjectSchema } from './objects/PersonSkillUpdateInput.schema';
import { PersonSkillUncheckedUpdateInputObjectSchema } from './objects/PersonSkillUncheckedUpdateInput.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './objects/PersonSkillWhereUniqueInput.schema';

export const PersonSkillUpdateOneSchema = z.object({
  include: PersonSkillIncludeObjectSchema.optional(),
  data: z.union([
    PersonSkillUpdateInputObjectSchema,
    PersonSkillUncheckedUpdateInputObjectSchema,
  ]),
  where: PersonSkillWhereUniqueInputObjectSchema,
});
