import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    email: z.string().optional(),
  })
  .strict();

export const PersonWhereUniqueInputObjectSchema = Schema;
