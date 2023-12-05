import { z } from 'zod';
import { PersonCreateNestedOneWithoutPersonSkillsInputObjectSchema } from './PersonCreateNestedOneWithoutPersonSkillsInput.schema';
import { SkillCreateNestedOneWithoutPersonSkillInputObjectSchema } from './SkillCreateNestedOneWithoutPersonSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateInput> = z
  .object({
    level: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    person: z.lazy(
      () => PersonCreateNestedOneWithoutPersonSkillsInputObjectSchema,
    ),
    skill: z.lazy(
      () => SkillCreateNestedOneWithoutPersonSkillInputObjectSchema,
    ),
  })
  .strict();

export const PersonSkillCreateInputObjectSchema = Schema;
