import { z } from 'zod';
import { FieldCreateNestedManyWithoutProjectsInputObjectSchema } from './FieldCreateNestedManyWithoutProjectsInput.schema';
import { PersonCreateNestedManyWithoutProjectsInputObjectSchema } from './PersonCreateNestedManyWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateWithoutSkillsInput> = z
  .object({
    name: z.string(),
    customer: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    fields: z
      .lazy(() => FieldCreateNestedManyWithoutProjectsInputObjectSchema)
      .optional(),
    persons: z
      .lazy(() => PersonCreateNestedManyWithoutProjectsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectCreateWithoutSkillsInputObjectSchema = Schema;
