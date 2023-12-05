import { z } from 'zod';
import { SkillIncludeObjectSchema } from './objects/SkillInclude.schema';
import { SkillUpdateInputObjectSchema } from './objects/SkillUpdateInput.schema';
import { SkillUncheckedUpdateInputObjectSchema } from './objects/SkillUncheckedUpdateInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';

export const SkillUpdateOneSchema = z.object({
  include: SkillIncludeObjectSchema.optional(),
  data: z.union([
    SkillUpdateInputObjectSchema,
    SkillUncheckedUpdateInputObjectSchema,
  ]),
  where: SkillWhereUniqueInputObjectSchema,
});
