import { z } from 'zod';
import { SkillFindManySchema } from '../findManySkill.schema';
import { FieldFindManySchema } from '../findManyField.schema';
import { PersonFindManySchema } from '../findManyPerson.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectInclude> = z
  .object({
    skills: z
      .union([z.boolean(), z.lazy(() => SkillFindManySchema)])
      .optional(),
    fields: z
      .union([z.boolean(), z.lazy(() => FieldFindManySchema)])
      .optional(),
    persons: z
      .union([z.boolean(), z.lazy(() => PersonFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const ProjectIncludeObjectSchema = Schema;
