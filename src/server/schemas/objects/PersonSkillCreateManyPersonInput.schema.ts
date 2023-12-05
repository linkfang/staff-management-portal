import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateManyPersonInput> = z
  .object({
    level: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    skillId: z.number(),
  })
  .strict();

export const PersonSkillCreateManyPersonInputObjectSchema = Schema;
