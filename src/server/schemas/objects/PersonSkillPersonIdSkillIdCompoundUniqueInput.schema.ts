import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillPersonIdSkillIdCompoundUniqueInput> =
  z
    .object({
      personId: z.number(),
      skillId: z.number(),
    })
    .strict();

export const PersonSkillPersonIdSkillIdCompoundUniqueInputObjectSchema = Schema;
