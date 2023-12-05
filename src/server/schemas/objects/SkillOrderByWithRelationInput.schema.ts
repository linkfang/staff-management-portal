import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FieldOrderByRelationAggregateInputObjectSchema } from './FieldOrderByRelationAggregateInput.schema';
import { PersonSkillOrderByRelationAggregateInputObjectSchema } from './PersonSkillOrderByRelationAggregateInput.schema';
import { ProjectOrderByRelationAggregateInputObjectSchema } from './ProjectOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    field: z
      .lazy(() => FieldOrderByRelationAggregateInputObjectSchema)
      .optional(),
    personSkill: z
      .lazy(() => PersonSkillOrderByRelationAggregateInputObjectSchema)
      .optional(),
    project: z
      .lazy(() => ProjectOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SkillOrderByWithRelationInputObjectSchema = Schema;
