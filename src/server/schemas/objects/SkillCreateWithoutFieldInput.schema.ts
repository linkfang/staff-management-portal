import { z } from 'zod';
import { PersonSkillCreateNestedManyWithoutSkillInputObjectSchema } from './PersonSkillCreateNestedManyWithoutSkillInput.schema';
import { ProjectCreateNestedManyWithoutSkillsInputObjectSchema } from './ProjectCreateNestedManyWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateWithoutFieldInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    personSkill: z
      .lazy(() => PersonSkillCreateNestedManyWithoutSkillInputObjectSchema)
      .optional(),
    project: z
      .lazy(() => ProjectCreateNestedManyWithoutSkillsInputObjectSchema)
      .optional(),
  })
  .strict();

export const SkillCreateWithoutFieldInputObjectSchema = Schema;
