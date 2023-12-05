import { z } from 'zod';
import { PersonCreateWithoutProjectsInputObjectSchema } from './PersonCreateWithoutProjectsInput.schema';
import { PersonUncheckedCreateWithoutProjectsInputObjectSchema } from './PersonUncheckedCreateWithoutProjectsInput.schema';
import { PersonCreateOrConnectWithoutProjectsInputObjectSchema } from './PersonCreateOrConnectWithoutProjectsInput.schema';
import { PersonUpsertWithWhereUniqueWithoutProjectsInputObjectSchema } from './PersonUpsertWithWhereUniqueWithoutProjectsInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithWhereUniqueWithoutProjectsInputObjectSchema } from './PersonUpdateWithWhereUniqueWithoutProjectsInput.schema';
import { PersonUpdateManyWithWhereWithoutProjectsInputObjectSchema } from './PersonUpdateManyWithWhereWithoutProjectsInput.schema';
import { PersonScalarWhereInputObjectSchema } from './PersonScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateManyWithoutProjectsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PersonCreateWithoutProjectsInputObjectSchema),
        z.lazy(() => PersonCreateWithoutProjectsInputObjectSchema).array(),
        z.lazy(() => PersonUncheckedCreateWithoutProjectsInputObjectSchema),
        z
          .lazy(() => PersonUncheckedCreateWithoutProjectsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PersonCreateOrConnectWithoutProjectsInputObjectSchema),
        z
          .lazy(() => PersonCreateOrConnectWithoutProjectsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PersonUpsertWithWhereUniqueWithoutProjectsInputObjectSchema,
        ),
        z
          .lazy(
            () => PersonUpsertWithWhereUniqueWithoutProjectsInputObjectSchema,
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
          () => PersonUpdateWithWhereUniqueWithoutProjectsInputObjectSchema,
        ),
        z
          .lazy(
            () => PersonUpdateWithWhereUniqueWithoutProjectsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PersonUpdateManyWithWhereWithoutProjectsInputObjectSchema),
        z
          .lazy(() => PersonUpdateManyWithWhereWithoutProjectsInputObjectSchema)
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

export const PersonUpdateManyWithoutProjectsNestedInputObjectSchema = Schema;
