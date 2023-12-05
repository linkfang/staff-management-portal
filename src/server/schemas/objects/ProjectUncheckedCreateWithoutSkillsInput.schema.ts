import { z } from 'zod';
import { FieldUncheckedCreateNestedManyWithoutProjectsInputObjectSchema } from './FieldUncheckedCreateNestedManyWithoutProjectsInput.schema';
import { PersonUncheckedCreateNestedManyWithoutProjectsInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutSkillsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    customer: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    fields: z
      .lazy(
        () => FieldUncheckedCreateNestedManyWithoutProjectsInputObjectSchema,
      )
      .optional(),
    persons: z
      .lazy(
        () => PersonUncheckedCreateNestedManyWithoutProjectsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjectUncheckedCreateWithoutSkillsInputObjectSchema = Schema;
