import { z } from 'zod';
import { PersonUncheckedCreateNestedManyWithoutExpertiseInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutExpertiseInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutFieldsInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedCreateWithoutSkillsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    persons: z
      .lazy(
        () => PersonUncheckedCreateNestedManyWithoutExpertiseInputObjectSchema,
      )
      .optional(),
    projects: z
      .lazy(
        () => ProjectUncheckedCreateNestedManyWithoutFieldsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FieldUncheckedCreateWithoutSkillsInputObjectSchema = Schema;
