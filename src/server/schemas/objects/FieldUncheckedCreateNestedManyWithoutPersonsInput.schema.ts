import { z } from 'zod';
import { FieldCreateWithoutPersonsInputObjectSchema } from './FieldCreateWithoutPersonsInput.schema';
import { FieldUncheckedCreateWithoutPersonsInputObjectSchema } from './FieldUncheckedCreateWithoutPersonsInput.schema';
import { FieldCreateOrConnectWithoutPersonsInputObjectSchema } from './FieldCreateOrConnectWithoutPersonsInput.schema';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedCreateNestedManyWithoutPersonsInput> =
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
      connect: z
        .union([
          z.lazy(() => FieldWhereUniqueInputObjectSchema),
          z.lazy(() => FieldWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FieldUncheckedCreateNestedManyWithoutPersonsInputObjectSchema =
  Schema;
