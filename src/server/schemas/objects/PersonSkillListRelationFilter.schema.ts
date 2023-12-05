import { z } from 'zod';
import { PersonSkillWhereInputObjectSchema } from './PersonSkillWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillListRelationFilter> = z
  .object({
    every: z.lazy(() => PersonSkillWhereInputObjectSchema).optional(),
    some: z.lazy(() => PersonSkillWhereInputObjectSchema).optional(),
    none: z.lazy(() => PersonSkillWhereInputObjectSchema).optional(),
  })
  .strict();

export const PersonSkillListRelationFilterObjectSchema = Schema;
