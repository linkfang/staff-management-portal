import { z } from 'zod';
import { FieldFindManySchema } from '../findManyField.schema';
import { PersonSkillFindManySchema } from '../findManyPersonSkill.schema';
import { ProjectFindManySchema } from '../findManyProject.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillInclude> = z
  .object({
    field: z.union([z.boolean(), z.lazy(() => FieldFindManySchema)]).optional(),
    personSkill: z
      .union([z.boolean(), z.lazy(() => PersonSkillFindManySchema)])
      .optional(),
    project: z
      .union([z.boolean(), z.lazy(() => ProjectFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const SkillIncludeObjectSchema = Schema;
