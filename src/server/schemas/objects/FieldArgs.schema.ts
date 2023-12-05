import { z } from 'zod';
import { FieldIncludeObjectSchema } from './FieldInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldArgs> = z
  .object({
    include: z.lazy(() => FieldIncludeObjectSchema).optional(),
  })
  .strict();

export const FieldArgsObjectSchema = Schema;
