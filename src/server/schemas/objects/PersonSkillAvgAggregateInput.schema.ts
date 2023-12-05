import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillAvgAggregateInputType> = z
  .object({
    level: z.literal(true).optional(),
    personId: z.literal(true).optional(),
    skillId: z.literal(true).optional(),
  })
  .strict();

export const PersonSkillAvgAggregateInputObjectSchema = Schema;
