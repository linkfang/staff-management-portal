import { z } from 'zod';
import { SkillCreateNestedManyWithoutProjectInputObjectSchema } from './SkillCreateNestedManyWithoutProjectInput.schema';
import { PersonCreateNestedManyWithoutProjectsInputObjectSchema } from './PersonCreateNestedManyWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateWithoutFieldsInput> = z
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
    persons: z
      .lazy(() => PersonCreateNestedManyWithoutProjectsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectCreateWithoutFieldsInputObjectSchema = Schema;
