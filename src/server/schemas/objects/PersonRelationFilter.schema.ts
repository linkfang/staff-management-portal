import { z } from 'zod';
import { PersonWhereInputObjectSchema } from './PersonWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonRelationFilter> = z
  .object({
    is: z
      .lazy(() => PersonWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PersonWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PersonRelationFilterObjectSchema = Schema;
