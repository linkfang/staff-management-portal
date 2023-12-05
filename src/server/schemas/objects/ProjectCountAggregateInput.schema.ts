import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    customer: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    description: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ProjectCountAggregateInputObjectSchema = Schema;
