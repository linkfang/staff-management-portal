import { z } from 'zod';
import { SkillFindManySchema } from '../findManySkill.schema';
import { PersonFindManySchema } from '../findManyPerson.schema';
import { ProjectFindManySchema } from '../findManyProject.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldInclude> = z
  .object({
    skills: z
      .union([z.boolean(), z.lazy(() => SkillFindManySchema)])
      .optional(),
    persons: z
      .union([z.boolean(), z.lazy(() => PersonFindManySchema)])
      .optional(),
    projects: z
      .union([z.boolean(), z.lazy(() => ProjectFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const FieldIncludeObjectSchema = Schema;
