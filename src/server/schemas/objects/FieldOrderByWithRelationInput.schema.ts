import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SkillOrderByRelationAggregateInputObjectSchema } from './SkillOrderByRelationAggregateInput.schema';
import { PersonOrderByRelationAggregateInputObjectSchema } from './PersonOrderByRelationAggregateInput.schema';
import { ProjectOrderByRelationAggregateInputObjectSchema } from './ProjectOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    skills: z
      .lazy(() => SkillOrderByRelationAggregateInputObjectSchema)
      .optional(),
    persons: z
      .lazy(() => PersonOrderByRelationAggregateInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FieldOrderByWithRelationInputObjectSchema = Schema;
