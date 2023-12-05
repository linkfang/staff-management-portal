import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SkillOrderByRelationAggregateInputObjectSchema } from './SkillOrderByRelationAggregateInput.schema';
import { FieldOrderByRelationAggregateInputObjectSchema } from './FieldOrderByRelationAggregateInput.schema';
import { PersonOrderByRelationAggregateInputObjectSchema } from './PersonOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    customer: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    skills: z
      .lazy(() => SkillOrderByRelationAggregateInputObjectSchema)
      .optional(),
    fields: z
      .lazy(() => FieldOrderByRelationAggregateInputObjectSchema)
      .optional(),
    persons: z
      .lazy(() => PersonOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectOrderByWithRelationInputObjectSchema = Schema;
