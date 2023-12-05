import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillSumOrderByAggregateInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
    personId: z.lazy(() => SortOrderSchema).optional(),
    skillId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PersonSkillSumOrderByAggregateInputObjectSchema = Schema;
