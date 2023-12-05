import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FieldCountOrderByAggregateInputObjectSchema } from './FieldCountOrderByAggregateInput.schema';
import { FieldAvgOrderByAggregateInputObjectSchema } from './FieldAvgOrderByAggregateInput.schema';
import { FieldMaxOrderByAggregateInputObjectSchema } from './FieldMaxOrderByAggregateInput.schema';
import { FieldMinOrderByAggregateInputObjectSchema } from './FieldMinOrderByAggregateInput.schema';
import { FieldSumOrderByAggregateInputObjectSchema } from './FieldSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FieldCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => FieldAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => FieldMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FieldMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => FieldSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const FieldOrderByWithAggregationInputObjectSchema = Schema;
