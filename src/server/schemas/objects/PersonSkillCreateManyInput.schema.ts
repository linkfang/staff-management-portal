import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateManyInput> = z
  .object({
    level: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    personId: z.number(),
    skillId: z.number(),
  })
  .strict();

export const PersonSkillCreateManyInputObjectSchema = Schema;
