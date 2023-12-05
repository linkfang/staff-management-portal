import { z } from 'zod';
import { FieldCreateNestedManyWithoutSkillsInputObjectSchema } from './FieldCreateNestedManyWithoutSkillsInput.schema';
import { PersonSkillCreateNestedManyWithoutSkillInputObjectSchema } from './PersonSkillCreateNestedManyWithoutSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateWithoutProjectInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    field: z
      .lazy(() => FieldCreateNestedManyWithoutSkillsInputObjectSchema)
      .optional(),
    personSkill: z
      .lazy(() => PersonSkillCreateNestedManyWithoutSkillInputObjectSchema)
      .optional(),
  })
  .strict();

export const SkillCreateWithoutProjectInputObjectSchema = Schema;
