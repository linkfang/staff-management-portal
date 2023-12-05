import { z } from 'zod';
import { SkillIncludeObjectSchema } from './objects/SkillInclude.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';
import { SkillCreateInputObjectSchema } from './objects/SkillCreateInput.schema';
import { SkillUncheckedCreateInputObjectSchema } from './objects/SkillUncheckedCreateInput.schema';
import { SkillUpdateInputObjectSchema } from './objects/SkillUpdateInput.schema';
import { SkillUncheckedUpdateInputObjectSchema } from './objects/SkillUncheckedUpdateInput.schema';

export const SkillUpsertSchema = z.object({
  include: SkillIncludeObjectSchema.optional(),
  where: SkillWhereUniqueInputObjectSchema,
  create: z.union([
    SkillCreateInputObjectSchema,
    SkillUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SkillUpdateInputObjectSchema,
    SkillUncheckedUpdateInputObjectSchema,
  ]),
});
