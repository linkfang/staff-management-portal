import { z } from 'zod';
import { PersonWhereInputObjectSchema } from './PersonWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonListRelationFilter> = z
  .object({
    every: z.lazy(() => PersonWhereInputObjectSchema).optional(),
    some: z.lazy(() => PersonWhereInputObjectSchema).optional(),
    none: z.lazy(() => PersonWhereInputObjectSchema).optional(),
  })
  .strict();

export const PersonListRelationFilterObjectSchema = Schema;
