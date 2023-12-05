import { z } from 'zod';
import { FieldWhereInputObjectSchema } from './FieldWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldListRelationFilter> = z
  .object({
    every: z.lazy(() => FieldWhereInputObjectSchema).optional(),
    some: z.lazy(() => FieldWhereInputObjectSchema).optional(),
    none: z.lazy(() => FieldWhereInputObjectSchema).optional(),
  })
  .strict();

export const FieldListRelationFilterObjectSchema = Schema;
