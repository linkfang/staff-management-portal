import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutProjectInputObjectSchema } from './SkillUpdateWithoutProjectInput.schema';
import { SkillUncheckedUpdateWithoutProjectInputObjectSchema } from './SkillUncheckedUpdateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpdateWithWhereUniqueWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SkillUpdateWithoutProjectInputObjectSchema),
        z.lazy(() => SkillUncheckedUpdateWithoutProjectInputObjectSchema),
      ]),
    })
    .strict();

export const SkillUpdateWithWhereUniqueWithoutProjectInputObjectSchema = Schema;
