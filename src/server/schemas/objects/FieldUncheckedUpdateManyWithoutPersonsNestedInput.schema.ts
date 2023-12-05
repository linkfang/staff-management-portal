import { z } from 'zod';
import { FieldCreateWithoutPersonsInputObjectSchema } from './FieldCreateWithoutPersonsInput.schema';
import { FieldUncheckedCreateWithoutPersonsInputObjectSchema } from './FieldUncheckedCreateWithoutPersonsInput.schema';
import { FieldCreateOrConnectWithoutPersonsInputObjectSchema } from './FieldCreateOrConnectWithoutPersonsInput.schema';
import { FieldUpsertWithWhereUniqueWithoutPersonsInputObjectSchema } from './FieldUpsertWithWhereUniqueWithoutPersonsInput.schema';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithWhereUniqueWithoutPersonsInputObjectSchema } from './FieldUpdateWithWhereUniqueWithoutPersonsInput.schema';
import { FieldUpdateManyWithWhereWithoutPersonsInputObjectSchema } from './FieldUpdateManyWithWhereWithoutPersonsInput.schema';
import { FieldScalarWhereInputObjectSchema } from './FieldScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedUpdateManyWithoutPersonsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FieldCreateWithoutPersonsInputObjectSchema),
          z.lazy(() => FieldCreateWithoutPersonsInputObjectSchema).array(),
          z.lazy(() => FieldUncheckedCreateWithoutPersonsInputObjectSchema),
          z
            .lazy(() => FieldUncheckedCreateWithoutPersonsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FieldCreateOrConnectWithoutPersonsInputObjectSchema),
          z
            .lazy(() => FieldCreateOrConnectWithoutPersonsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => FieldUpsertWithWhereUniqueWithoutPersonsInputObjectSchema,
          ),
          z
            .lazy(
              () => FieldUpsertWithWhereUniqueWithoutPersonsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => FieldWhereUniqueInputObjectSchema),
          z.lazy(() => FieldWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FieldWhereUniqueInputObjectSchema),
          z.lazy(() => FieldWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FieldWhereUniqueInputObjectSchema),
          z.lazy(() => FieldWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FieldWhereUniqueInputObjectSchema),
          z.lazy(() => FieldWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => FieldUpdateWithWhereUniqueWithoutPersonsInputObjectSchema,
          ),
          z
            .lazy(
              () => FieldUpdateWithWhereUniqueWithoutPersonsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FieldUpdateManyWithWhereWithoutPersonsInputObjectSchema),
          z
            .lazy(() => FieldUpdateManyWithWhereWithoutPersonsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FieldScalarWhereInputObjectSchema),
          z.lazy(() => FieldScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FieldUncheckedUpdateManyWithoutPersonsNestedInputObjectSchema =
  Schema;
