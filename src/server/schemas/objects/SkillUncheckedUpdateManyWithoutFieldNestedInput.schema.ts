import { z } from 'zod';
import { SkillCreateWithoutFieldInputObjectSchema } from './SkillCreateWithoutFieldInput.schema';
import { SkillUncheckedCreateWithoutFieldInputObjectSchema } from './SkillUncheckedCreateWithoutFieldInput.schema';
import { SkillCreateOrConnectWithoutFieldInputObjectSchema } from './SkillCreateOrConnectWithoutFieldInput.schema';
import { SkillUpsertWithWhereUniqueWithoutFieldInputObjectSchema } from './SkillUpsertWithWhereUniqueWithoutFieldInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithWhereUniqueWithoutFieldInputObjectSchema } from './SkillUpdateWithWhereUniqueWithoutFieldInput.schema';
import { SkillUpdateManyWithWhereWithoutFieldInputObjectSchema } from './SkillUpdateManyWithWhereWithoutFieldInput.schema';
import { SkillScalarWhereInputObjectSchema } from './SkillScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedUpdateManyWithoutFieldNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SkillCreateWithoutFieldInputObjectSchema),
          z.lazy(() => SkillCreateWithoutFieldInputObjectSchema).array(),
          z.lazy(() => SkillUncheckedCreateWithoutFieldInputObjectSchema),
          z
            .lazy(() => SkillUncheckedCreateWithoutFieldInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SkillCreateOrConnectWithoutFieldInputObjectSchema),
          z
            .lazy(() => SkillCreateOrConnectWithoutFieldInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SkillUpsertWithWhereUniqueWithoutFieldInputObjectSchema),
          z
            .lazy(() => SkillUpsertWithWhereUniqueWithoutFieldInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => SkillWhereUniqueInputObjectSchema),
          z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SkillWhereUniqueInputObjectSchema),
          z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SkillWhereUniqueInputObjectSchema),
          z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SkillWhereUniqueInputObjectSchema),
          z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SkillUpdateWithWhereUniqueWithoutFieldInputObjectSchema),
          z
            .lazy(() => SkillUpdateWithWhereUniqueWithoutFieldInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SkillUpdateManyWithWhereWithoutFieldInputObjectSchema),
          z
            .lazy(() => SkillUpdateManyWithWhereWithoutFieldInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SkillScalarWhereInputObjectSchema),
          z.lazy(() => SkillScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SkillUncheckedUpdateManyWithoutFieldNestedInputObjectSchema =
  Schema;
