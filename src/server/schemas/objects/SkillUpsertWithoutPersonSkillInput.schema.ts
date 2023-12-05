import { z } from 'zod';
import { SkillUpdateWithoutPersonSkillInputObjectSchema } from './SkillUpdateWithoutPersonSkillInput.schema';
import { SkillUncheckedUpdateWithoutPersonSkillInputObjectSchema } from './SkillUncheckedUpdateWithoutPersonSkillInput.schema';
import { SkillCreateWithoutPersonSkillInputObjectSchema } from './SkillCreateWithoutPersonSkillInput.schema';
import { SkillUncheckedCreateWithoutPersonSkillInputObjectSchema } from './SkillUncheckedCreateWithoutPersonSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpsertWithoutPersonSkillInput> = z
  .object({
    update: z.union([
      z.lazy(() => SkillUpdateWithoutPersonSkillInputObjectSchema),
      z.lazy(() => SkillUncheckedUpdateWithoutPersonSkillInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SkillCreateWithoutPersonSkillInputObjectSchema),
      z.lazy(() => SkillUncheckedCreateWithoutPersonSkillInputObjectSchema),
    ]),
  })
  .strict();

export const SkillUpsertWithoutPersonSkillInputObjectSchema = Schema;
