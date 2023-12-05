import { z } from 'zod';
import { SkillCreateNestedOneWithoutPersonSkillInputObjectSchema } from './SkillCreateNestedOneWithoutPersonSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateWithoutPersonInput> = z
  .object({
    level: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    skill: z.lazy(
      () => SkillCreateNestedOneWithoutPersonSkillInputObjectSchema,
    ),
  })
  .strict();

export const PersonSkillCreateWithoutPersonInputObjectSchema = Schema;
