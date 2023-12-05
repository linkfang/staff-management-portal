import { z } from 'zod';
import { SkillCreateWithoutProjectInputObjectSchema } from './SkillCreateWithoutProjectInput.schema';
import { SkillUncheckedCreateWithoutProjectInputObjectSchema } from './SkillUncheckedCreateWithoutProjectInput.schema';
import { SkillCreateOrConnectWithoutProjectInputObjectSchema } from './SkillCreateOrConnectWithoutProjectInput.schema';
import { SkillUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './SkillUpsertWithWhereUniqueWithoutProjectInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './SkillUpdateWithWhereUniqueWithoutProjectInput.schema';
import { SkillUpdateManyWithWhereWithoutProjectInputObjectSchema } from './SkillUpdateManyWithWhereWithoutProjectInput.schema';
import { SkillScalarWhereInputObjectSchema } from './SkillScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedUpdateManyWithoutProjectNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SkillCreateWithoutProjectInputObjectSchema),
          z.lazy(() => SkillCreateWithoutProjectInputObjectSchema).array(),
          z.lazy(() => SkillUncheckedCreateWithoutProjectInputObjectSchema),
          z
            .lazy(() => SkillUncheckedCreateWithoutProjectInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SkillCreateOrConnectWithoutProjectInputObjectSchema),
          z
            .lazy(() => SkillCreateOrConnectWithoutProjectInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => SkillUpsertWithWhereUniqueWithoutProjectInputObjectSchema,
          ),
          z
            .lazy(
              () => SkillUpsertWithWhereUniqueWithoutProjectInputObjectSchema,
            )
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
          z.lazy(
            () => SkillUpdateWithWhereUniqueWithoutProjectInputObjectSchema,
          ),
          z
            .lazy(
              () => SkillUpdateWithWhereUniqueWithoutProjectInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SkillUpdateManyWithWhereWithoutProjectInputObjectSchema),
          z
            .lazy(() => SkillUpdateManyWithWhereWithoutProjectInputObjectSchema)
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

export const SkillUncheckedUpdateManyWithoutProjectNestedInputObjectSchema =
  Schema;
