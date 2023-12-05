import { z } from 'zod';
import { PersonArgsObjectSchema } from './PersonArgs.schema';
import { SkillArgsObjectSchema } from './SkillArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillInclude> = z
  .object({
    person: z
      .union([z.boolean(), z.lazy(() => PersonArgsObjectSchema)])
      .optional(),
    skill: z
      .union([z.boolean(), z.lazy(() => SkillArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const PersonSkillIncludeObjectSchema = Schema;
