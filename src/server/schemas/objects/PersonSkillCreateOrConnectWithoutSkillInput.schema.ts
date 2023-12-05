import { z } from 'zod';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';
import { PersonSkillCreateWithoutSkillInputObjectSchema } from './PersonSkillCreateWithoutSkillInput.schema';
import { PersonSkillUncheckedCreateWithoutSkillInputObjectSchema } from './PersonSkillUncheckedCreateWithoutSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateOrConnectWithoutSkillInput> = z
  .object({
    where: z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonSkillCreateWithoutSkillInputObjectSchema),
      z.lazy(() => PersonSkillUncheckedCreateWithoutSkillInputObjectSchema),
    ]),
  })
  .strict();

export const PersonSkillCreateOrConnectWithoutSkillInputObjectSchema = Schema;
