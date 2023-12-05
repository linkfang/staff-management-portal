import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutProjectInputObjectSchema } from './SkillUpdateWithoutProjectInput.schema';
import { SkillUncheckedUpdateWithoutProjectInputObjectSchema } from './SkillUncheckedUpdateWithoutProjectInput.schema';
import { SkillCreateWithoutProjectInputObjectSchema } from './SkillCreateWithoutProjectInput.schema';
import { SkillUncheckedCreateWithoutProjectInputObjectSchema } from './SkillUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpsertWithWhereUniqueWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SkillUpdateWithoutProjectInputObjectSchema),
        z.lazy(() => SkillUncheckedUpdateWithoutProjectInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SkillCreateWithoutProjectInputObjectSchema),
        z.lazy(() => SkillUncheckedCreateWithoutProjectInputObjectSchema),
      ]),
    })
    .strict();

export const SkillUpsertWithWhereUniqueWithoutProjectInputObjectSchema = Schema;
