import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PersonCountOrderByAggregateInputObjectSchema } from './PersonCountOrderByAggregateInput.schema';
import { PersonAvgOrderByAggregateInputObjectSchema } from './PersonAvgOrderByAggregateInput.schema';
import { PersonMaxOrderByAggregateInputObjectSchema } from './PersonMaxOrderByAggregateInput.schema';
import { PersonMinOrderByAggregateInputObjectSchema } from './PersonMinOrderByAggregateInput.schema';
import { PersonSumOrderByAggregateInputObjectSchema } from './PersonSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    preferredName: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PersonCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PersonAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PersonMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PersonMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PersonSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PersonOrderByWithAggregationInputObjectSchema = Schema;
