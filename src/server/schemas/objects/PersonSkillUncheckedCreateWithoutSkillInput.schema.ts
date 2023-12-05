import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUncheckedCreateWithoutSkillInput> = z
  .object({
    level: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    personId: z.number(),
  })
  .strict();

export const PersonSkillUncheckedCreateWithoutSkillInputObjectSchema = Schema;
