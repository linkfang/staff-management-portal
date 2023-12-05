import { z } from 'zod';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';
import { PersonSkillCreateWithoutPersonInputObjectSchema } from './PersonSkillCreateWithoutPersonInput.schema';
import { PersonSkillUncheckedCreateWithoutPersonInputObjectSchema } from './PersonSkillUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateOrConnectWithoutPersonInput> = z
  .object({
    where: z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonSkillCreateWithoutPersonInputObjectSchema),
      z.lazy(() => PersonSkillUncheckedCreateWithoutPersonInputObjectSchema),
    ]),
  })
  .strict();

export const PersonSkillCreateOrConnectWithoutPersonInputObjectSchema = Schema;
