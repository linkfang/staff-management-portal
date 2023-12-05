import { z } from 'zod';
import { PersonSkillUncheckedCreateNestedManyWithoutSkillInputObjectSchema } from './PersonSkillUncheckedCreateNestedManyWithoutSkillInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutSkillsInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedCreateWithoutFieldInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    personSkill: z
      .lazy(
        () => PersonSkillUncheckedCreateNestedManyWithoutSkillInputObjectSchema,
      )
      .optional(),
    project: z
      .lazy(
        () => ProjectUncheckedCreateNestedManyWithoutSkillsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SkillUncheckedCreateWithoutFieldInputObjectSchema = Schema;
