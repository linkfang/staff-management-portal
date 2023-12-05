import { z } from 'zod';
import { SkillUncheckedCreateNestedManyWithoutFieldInputObjectSchema } from './SkillUncheckedCreateNestedManyWithoutFieldInput.schema';
import { PersonUncheckedCreateNestedManyWithoutExpertiseInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutExpertiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedCreateWithoutProjectsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    skills: z
      .lazy(() => SkillUncheckedCreateNestedManyWithoutFieldInputObjectSchema)
      .optional(),
    persons: z
      .lazy(
        () => PersonUncheckedCreateNestedManyWithoutExpertiseInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FieldUncheckedCreateWithoutProjectsInputObjectSchema = Schema;
