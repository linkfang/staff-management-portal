import { z } from 'zod';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';
import { PersonSkillUpdateWithoutPersonInputObjectSchema } from './PersonSkillUpdateWithoutPersonInput.schema';
import { PersonSkillUncheckedUpdateWithoutPersonInputObjectSchema } from './PersonSkillUncheckedUpdateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpdateWithWhereUniqueWithoutPersonInput> =
  z
    .object({
      where: z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonSkillUpdateWithoutPersonInputObjectSchema),
        z.lazy(() => PersonSkillUncheckedUpdateWithoutPersonInputObjectSchema),
      ]),
    })
    .strict();

export const PersonSkillUpdateWithWhereUniqueWithoutPersonInputObjectSchema =
  Schema;
