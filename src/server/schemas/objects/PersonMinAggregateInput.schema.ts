import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    preferredName: z.literal(true).optional(),
    title: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const PersonMinAggregateInputObjectSchema = Schema;
