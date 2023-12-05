import { z } from 'zod';
import { PersonSkillCreateManySkillInputObjectSchema } from './PersonSkillCreateManySkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateManySkillInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PersonSkillCreateManySkillInputObjectSchema),
      z.lazy(() => PersonSkillCreateManySkillInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PersonSkillCreateManySkillInputEnvelopeObjectSchema = Schema;
