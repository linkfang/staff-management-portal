import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SkillCountOrderByAggregateInputObjectSchema } from './SkillCountOrderByAggregateInput.schema';
import { SkillAvgOrderByAggregateInputObjectSchema } from './SkillAvgOrderByAggregateInput.schema';
import { SkillMaxOrderByAggregateInputObjectSchema } from './SkillMaxOrderByAggregateInput.schema';
import { SkillMinOrderByAggregateInputObjectSchema } from './SkillMinOrderByAggregateInput.schema';
import { SkillSumOrderByAggregateInputObjectSchema } from './SkillSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SkillCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SkillAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SkillMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SkillMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SkillSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SkillOrderByWithAggregationInputObjectSchema = Schema;
