import { z } from 'zod';
import { SkillUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from './SkillUncheckedCreateNestedManyWithoutProjectInput.schema';
import { FieldUncheckedCreateNestedManyWithoutProjectsInputObjectSchema } from './FieldUncheckedCreateNestedManyWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutPersonsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    customer: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    skills: z
      .lazy(() => SkillUncheckedCreateNestedManyWithoutProjectInputObjectSchema)
      .optional(),
    fields: z
      .lazy(
        () => FieldUncheckedCreateNestedManyWithoutProjectsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjectUncheckedCreateWithoutPersonsInputObjectSchema = Schema;