import { z } from 'zod';
import { PersonSkillIncludeObjectSchema } from './objects/PersonSkillInclude.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './objects/PersonSkillWhereUniqueInput.schema';
import { PersonSkillCreateInputObjectSchema } from './objects/PersonSkillCreateInput.schema';
import { PersonSkillUncheckedCreateInputObjectSchema } from './objects/PersonSkillUncheckedCreateInput.schema';
import { PersonSkillUpdateInputObjectSchema } from './objects/PersonSkillUpdateInput.schema';
import { PersonSkillUncheckedUpdateInputObjectSchema } from './objects/PersonSkillUncheckedUpdateInput.schema';

export const PersonSkillUpsertSchema = z.object({
  include: PersonSkillIncludeObjectSchema.optional(),
  where: PersonSkillWhereUniqueInputObjectSchema,
  create: z.union([
    PersonSkillCreateInputObjectSchema,
    PersonSkillUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PersonSkillUpdateInputObjectSchema,
    PersonSkillUncheckedUpdateInputObjectSchema,
  ]),
});
