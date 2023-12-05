import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PersonOrderByWithRelationInputObjectSchema } from './PersonOrderByWithRelationInput.schema';
import { SkillOrderByWithRelationInputObjectSchema } from './SkillOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillOrderByWithRelationInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    personId: z.lazy(() => SortOrderSchema).optional(),
    skillId: z.lazy(() => SortOrderSchema).optional(),
    person: z.lazy(() => PersonOrderByWithRelationInputObjectSchema).optional(),
    skill: z.lazy(() => SkillOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const PersonSkillOrderByWithRelationInputObjectSchema = Schema;
