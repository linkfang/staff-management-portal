import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutFieldInputObjectSchema } from './SkillUpdateWithoutFieldInput.schema';
import { SkillUncheckedUpdateWithoutFieldInputObjectSchema } from './SkillUncheckedUpdateWithoutFieldInput.schema';
import { SkillCreateWithoutFieldInputObjectSchema } from './SkillCreateWithoutFieldInput.schema';
import { SkillUncheckedCreateWithoutFieldInputObjectSchema } from './SkillUncheckedCreateWithoutFieldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpsertWithWhereUniqueWithoutFieldInput> = z
  .object({
    where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SkillUpdateWithoutFieldInputObjectSchema),
      z.lazy(() => SkillUncheckedUpdateWithoutFieldInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SkillCreateWithoutFieldInputObjectSchema),
      z.lazy(() => SkillUncheckedCreateWithoutFieldInputObjectSchema),
    ]),
  })
  .strict();

export const SkillUpsertWithWhereUniqueWithoutFieldInputObjectSchema = Schema;
