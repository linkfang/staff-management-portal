import { z } from 'zod';
import { PersonSkillIncludeObjectSchema } from './PersonSkillInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillArgs> = z
  .object({
    include: z.lazy(() => PersonSkillIncludeObjectSchema).optional(),
  })
  .strict();

export const PersonSkillArgsObjectSchema = Schema;
