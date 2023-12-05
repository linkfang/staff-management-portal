import { z } from 'zod';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';
import { PersonSkillUpdateWithoutSkillInputObjectSchema } from './PersonSkillUpdateWithoutSkillInput.schema';
import { PersonSkillUncheckedUpdateWithoutSkillInputObjectSchema } from './PersonSkillUncheckedUpdateWithoutSkillInput.schema';
import { PersonSkillCreateWithoutSkillInputObjectSchema } from './PersonSkillCreateWithoutSkillInput.schema';
import { PersonSkillUncheckedCreateWithoutSkillInputObjectSchema } from './PersonSkillUncheckedCreateWithoutSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpsertWithWhereUniqueWithoutSkillInput> =
  z
    .object({
      where: z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PersonSkillUpdateWithoutSkillInputObjectSchema),
        z.lazy(() => PersonSkillUncheckedUpdateWithoutSkillInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PersonSkillCreateWithoutSkillInputObjectSchema),
        z.lazy(() => PersonSkillUncheckedCreateWithoutSkillInputObjectSchema),
      ]),
    })
    .strict();

export const PersonSkillUpsertWithWhereUniqueWithoutSkillInputObjectSchema =
  Schema;
