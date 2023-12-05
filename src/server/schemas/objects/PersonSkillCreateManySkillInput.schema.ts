import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateManySkillInput> = z
  .object({
    level: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    personId: z.number(),
  })
  .strict();

export const PersonSkillCreateManySkillInputObjectSchema = Schema;
