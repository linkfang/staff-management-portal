import { z } from 'zod';
import { SkillWhereInputObjectSchema } from './SkillWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillListRelationFilter> = z
  .object({
    every: z.lazy(() => SkillWhereInputObjectSchema).optional(),
    some: z.lazy(() => SkillWhereInputObjectSchema).optional(),
    none: z.lazy(() => SkillWhereInputObjectSchema).optional(),
  })
  .strict();

export const SkillListRelationFilterObjectSchema = Schema;
