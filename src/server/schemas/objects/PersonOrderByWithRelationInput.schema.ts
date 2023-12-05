import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FieldOrderByRelationAggregateInputObjectSchema } from './FieldOrderByRelationAggregateInput.schema';
import { PersonSkillOrderByRelationAggregateInputObjectSchema } from './PersonSkillOrderByRelationAggregateInput.schema';
import { ProjectOrderByRelationAggregateInputObjectSchema } from './ProjectOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    preferredName: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    expertise: z
      .lazy(() => FieldOrderByRelationAggregateInputObjectSchema)
      .optional(),
    personSkills: z
      .lazy(() => PersonSkillOrderByRelationAggregateInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonOrderByWithRelationInputObjectSchema = Schema;
