import { z } from 'zod';
import { PersonIncludeObjectSchema } from './PersonInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonArgs> = z
  .object({
    include: z.lazy(() => PersonIncludeObjectSchema).optional(),
  })
  .strict();

export const PersonArgsObjectSchema = Schema;
