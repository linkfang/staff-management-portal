import { z } from 'zod';
import { SkillIncludeObjectSchema } from './SkillInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillArgs> = z
  .object({
    include: z.lazy(() => SkillIncludeObjectSchema).optional(),
  })
  .strict();

export const SkillArgsObjectSchema = Schema;
