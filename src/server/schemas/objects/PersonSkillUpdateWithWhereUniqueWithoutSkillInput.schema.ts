import { z } from 'zod';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';
import { PersonSkillUpdateWithoutSkillInputObjectSchema } from './PersonSkillUpdateWithoutSkillInput.schema';
import { PersonSkillUncheckedUpdateWithoutSkillInputObjectSchema } from './PersonSkillUncheckedUpdateWithoutSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpdateWithWhereUniqueWithoutSkillInput> =
  z
    .object({
      where: z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonSkillUpdateWithoutSkillInputObjectSchema),
        z.lazy(() => PersonSkillUncheckedUpdateWithoutSkillInputObjectSchema),
      ]),
    })
    .strict();

export const PersonSkillUpdateWithWhereUniqueWithoutSkillInputObjectSchema =
  Schema;
