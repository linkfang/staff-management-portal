import { z } from 'zod';
import { SkillWhereInputObjectSchema } from './SkillWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillRelationFilter> = z
  .object({
    is: z
      .lazy(() => SkillWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SkillWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SkillRelationFilterObjectSchema = Schema;
