import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const FieldSumAggregateInputObjectSchema = Schema;
