import { z } from 'zod';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';
import { PersonSkillUpdateWithoutPersonInputObjectSchema } from './PersonSkillUpdateWithoutPersonInput.schema';
import { PersonSkillUncheckedUpdateWithoutPersonInputObjectSchema } from './PersonSkillUncheckedUpdateWithoutPersonInput.schema';
import { PersonSkillCreateWithoutPersonInputObjectSchema } from './PersonSkillCreateWithoutPersonInput.schema';
import { PersonSkillUncheckedCreateWithoutPersonInputObjectSchema } from './PersonSkillUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpsertWithWhereUniqueWithoutPersonInput> =
  z
    .object({
      where: z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PersonSkillUpdateWithoutPersonInputObjectSchema),
        z.lazy(() => PersonSkillUncheckedUpdateWithoutPersonInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PersonSkillCreateWithoutPersonInputObjectSchema),
        z.lazy(() => PersonSkillUncheckedCreateWithoutPersonInputObjectSchema),
      ]),
    })
    .strict();

export const PersonSkillUpsertWithWhereUniqueWithoutPersonInputObjectSchema =
  Schema;
