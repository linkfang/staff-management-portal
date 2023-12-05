import { z } from 'zod';
import { FieldCreateWithoutProjectsInputObjectSchema } from './FieldCreateWithoutProjectsInput.schema';
import { FieldUncheckedCreateWithoutProjectsInputObjectSchema } from './FieldUncheckedCreateWithoutProjectsInput.schema';
import { FieldCreateOrConnectWithoutProjectsInputObjectSchema } from './FieldCreateOrConnectWithoutProjectsInput.schema';
import { FieldUpsertWithWhereUniqueWithoutProjectsInputObjectSchema } from './FieldUpsertWithWhereUniqueWithoutProjectsInput.schema';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithWhereUniqueWithoutProjectsInputObjectSchema } from './FieldUpdateWithWhereUniqueWithoutProjectsInput.schema';
import { FieldUpdateManyWithWhereWithoutProjectsInputObjectSchema } from './FieldUpdateManyWithWhereWithoutProjectsInput.schema';
import { FieldScalarWhereInputObjectSchema } from './FieldScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedUpdateManyWithoutProjectsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FieldCreateWithoutProjectsInputObjectSchema),
          z.lazy(() => FieldCreateWithoutProjectsInputObjectSchema).array(),
          z.lazy(() => FieldUncheckedCreateWithoutProjectsInputObjectSchema),
          z
            .lazy(() => FieldUncheckedCreateWithoutProjectsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FieldCreateOrConnectWithoutProjectsInputObjectSchema),
          z
            .lazy(() => FieldCreateOrConnectWithoutProjectsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => FieldUpsertWithWhereUniqueWithoutProjectsInputObjectSchema,
          ),
          z
            .lazy(
              () => FieldUpsertWithWhereUniqueWithoutProjectsInputObjectSchema,
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
            () => FieldUpdateWithWhereUniqueWithoutProjectsInputObjectSchema,
          ),
          z
            .lazy(
              () => FieldUpdateWithWhereUniqueWithoutProjectsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => FieldUpdateManyWithWhereWithoutProjectsInputObjectSchema,
          ),
          z
            .lazy(
              () => FieldUpdateManyWithWhereWithoutProjectsInputObjectSchema,
            )
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

export const FieldUncheckedUpdateManyWithoutProjectsNestedInputObjectSchema =
  Schema;
