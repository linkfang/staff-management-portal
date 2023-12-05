import { z } from 'zod';
import { PersonCreateWithoutExpertiseInputObjectSchema } from './PersonCreateWithoutExpertiseInput.schema';
import { PersonUncheckedCreateWithoutExpertiseInputObjectSchema } from './PersonUncheckedCreateWithoutExpertiseInput.schema';
import { PersonCreateOrConnectWithoutExpertiseInputObjectSchema } from './PersonCreateOrConnectWithoutExpertiseInput.schema';
import { PersonUpsertWithWhereUniqueWithoutExpertiseInputObjectSchema } from './PersonUpsertWithWhereUniqueWithoutExpertiseInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithWhereUniqueWithoutExpertiseInputObjectSchema } from './PersonUpdateWithWhereUniqueWithoutExpertiseInput.schema';
import { PersonUpdateManyWithWhereWithoutExpertiseInputObjectSchema } from './PersonUpdateManyWithWhereWithoutExpertiseInput.schema';
import { PersonScalarWhereInputObjectSchema } from './PersonScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedUpdateManyWithoutExpertiseNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PersonCreateWithoutExpertiseInputObjectSchema),
          z.lazy(() => PersonCreateWithoutExpertiseInputObjectSchema).array(),
          z.lazy(() => PersonUncheckedCreateWithoutExpertiseInputObjectSchema),
          z
            .lazy(() => PersonUncheckedCreateWithoutExpertiseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PersonCreateOrConnectWithoutExpertiseInputObjectSchema),
          z
            .lazy(() => PersonCreateOrConnectWithoutExpertiseInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => PersonUpsertWithWhereUniqueWithoutExpertiseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PersonUpsertWithWhereUniqueWithoutExpertiseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => PersonWhereUniqueInputObjectSchema),
          z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PersonWhereUniqueInputObjectSchema),
          z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PersonWhereUniqueInputObjectSchema),
          z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PersonWhereUniqueInputObjectSchema),
          z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PersonUpdateWithWhereUniqueWithoutExpertiseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PersonUpdateWithWhereUniqueWithoutExpertiseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PersonUpdateManyWithWhereWithoutExpertiseInputObjectSchema,
          ),
          z
            .lazy(
              () => PersonUpdateManyWithWhereWithoutExpertiseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PersonScalarWhereInputObjectSchema),
          z.lazy(() => PersonScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PersonUncheckedUpdateManyWithoutExpertiseNestedInputObjectSchema =
  Schema;
