import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateManyInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    preferredName: z.string(),
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const PersonCreateManyInputObjectSchema = Schema;
