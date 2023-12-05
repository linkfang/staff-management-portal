import { z } from 'zod';
import { SkillCreateNestedManyWithoutProjectInputObjectSchema } from './SkillCreateNestedManyWithoutProjectInput.schema';
import { FieldCreateNestedManyWithoutProjectsInputObjectSchema } from './FieldCreateNestedManyWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateWithoutPersonsInput> = z
  .object({
    name: z.string(),
    customer: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    skills: z
      .lazy(() => SkillCreateNestedManyWithoutProjectInputObjectSchema)
      .optional(),
    fields: z
      .lazy(() => FieldCreateNestedManyWithoutProjectsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectCreateWithoutPersonsInputObjectSchema = Schema;
