import { z } from 'zod';
import { SkillCreateWithoutPersonSkillInputObjectSchema } from './SkillCreateWithoutPersonSkillInput.schema';
import { SkillUncheckedCreateWithoutPersonSkillInputObjectSchema } from './SkillUncheckedCreateWithoutPersonSkillInput.schema';
import { SkillCreateOrConnectWithoutPersonSkillInputObjectSchema } from './SkillCreateOrConnectWithoutPersonSkillInput.schema';
import { SkillUpsertWithoutPersonSkillInputObjectSchema } from './SkillUpsertWithoutPersonSkillInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutPersonSkillInputObjectSchema } from './SkillUpdateWithoutPersonSkillInput.schema';
import { SkillUncheckedUpdateWithoutPersonSkillInputObjectSchema } from './SkillUncheckedUpdateWithoutPersonSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutPersonSkillNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SkillCreateWithoutPersonSkillInputObjectSchema),
          z.lazy(() => SkillUncheckedCreateWithoutPersonSkillInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SkillCreateOrConnectWithoutPersonSkillInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SkillUpsertWithoutPersonSkillInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SkillWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SkillUpdateWithoutPersonSkillInputObjectSchema),
          z.lazy(() => SkillUncheckedUpdateWithoutPersonSkillInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const SkillUpdateOneRequiredWithoutPersonSkillNestedInputObjectSchema =
  Schema;
