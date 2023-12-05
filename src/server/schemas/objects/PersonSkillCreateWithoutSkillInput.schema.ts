import { z } from 'zod';
import { PersonCreateNestedOneWithoutPersonSkillsInputObjectSchema } from './PersonCreateNestedOneWithoutPersonSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateWithoutSkillInput> = z
  .object({
    level: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    person: z.lazy(
      () => PersonCreateNestedOneWithoutPersonSkillsInputObjectSchema,
    ),
  })
  .strict();

export const PersonSkillCreateWithoutSkillInputObjectSchema = Schema;
