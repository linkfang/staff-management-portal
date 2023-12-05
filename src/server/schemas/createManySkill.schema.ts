import { z } from 'zod';
import { SkillCreateManyInputObjectSchema } from './objects/SkillCreateManyInput.schema';

export const SkillCreateManySchema = z.object({
  data: z.union([
    SkillCreateManyInputObjectSchema,
    z.array(SkillCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
