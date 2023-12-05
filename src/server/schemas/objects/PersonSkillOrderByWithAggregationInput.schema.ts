import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PersonSkillCountOrderByAggregateInputObjectSchema } from './PersonSkillCountOrderByAggregateInput.schema';
import { PersonSkillAvgOrderByAggregateInputObjectSchema } from './PersonSkillAvgOrderByAggregateInput.schema';
import { PersonSkillMaxOrderByAggregateInputObjectSchema } from './PersonSkillMaxOrderByAggregateInput.schema';
import { PersonSkillMinOrderByAggregateInputObjectSchema } from './PersonSkillMinOrderByAggregateInput.schema';
import { PersonSkillSumOrderByAggregateInputObjectSchema } from './PersonSkillSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillOrderByWithAggregationInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    personId: z.lazy(() => SortOrderSchema).optional(),
    skillId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PersonSkillCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PersonSkillAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PersonSkillMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PersonSkillMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PersonSkillSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonSkillOrderByWithAggregationInputObjectSchema = Schema;
