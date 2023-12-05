import { z } from 'zod';
import { FieldUncheckedCreateNestedManyWithoutSkillsInputObjectSchema } from './FieldUncheckedCreateNestedManyWithoutSkillsInput.schema';
import { PersonSkillUncheckedCreateNestedManyWithoutSkillInputObjectSchema } from './PersonSkillUncheckedCreateNestedManyWithoutSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedCreateWithoutProjectInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    field: z
      .lazy(() => FieldUncheckedCreateNestedManyWithoutSkillsInputObjectSchema)
      .optional(),
    personSkill: z
      .lazy(
        () => PersonSkillUncheckedCreateNestedManyWithoutSkillInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SkillUncheckedCreateWithoutProjectInputObjectSchema = Schema;
