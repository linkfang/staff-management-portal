import { z } from 'zod';
import { PersonSkillPersonIdSkillIdCompoundUniqueInputObjectSchema } from './PersonSkillPersonIdSkillIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillWhereUniqueInput> = z
  .object({
    personId_skillId: z
      .lazy(() => PersonSkillPersonIdSkillIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonSkillWhereUniqueInputObjectSchema = Schema;
