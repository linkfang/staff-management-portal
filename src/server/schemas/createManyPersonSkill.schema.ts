import { z } from 'zod';
import { PersonSkillCreateManyInputObjectSchema } from './objects/PersonSkillCreateManyInput.schema';

export const PersonSkillCreateManySchema = z.object({
  data: z.union([
    PersonSkillCreateManyInputObjectSchema,
    z.array(PersonSkillCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
