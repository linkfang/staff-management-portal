import { z } from 'zod';
import { PersonSkillCreateManyPersonInputObjectSchema } from './PersonSkillCreateManyPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateManyPersonInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PersonSkillCreateManyPersonInputObjectSchema),
      z.lazy(() => PersonSkillCreateManyPersonInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PersonSkillCreateManyPersonInputEnvelopeObjectSchema = Schema;
