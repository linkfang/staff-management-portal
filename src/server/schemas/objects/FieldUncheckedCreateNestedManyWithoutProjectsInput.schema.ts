import { z } from 'zod';
import { FieldCreateWithoutProjectsInputObjectSchema } from './FieldCreateWithoutProjectsInput.schema';
import { FieldUncheckedCreateWithoutProjectsInputObjectSchema } from './FieldUncheckedCreateWithoutProjectsInput.schema';
import { FieldCreateOrConnectWithoutProjectsInputObjectSchema } from './FieldCreateOrConnectWithoutProjectsInput.schema';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedCreateNestedManyWithoutProjectsInput> =
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
      connect: z
        .union([
          z.lazy(() => FieldWhereUniqueInputObjectSchema),
          z.lazy(() => FieldWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FieldUncheckedCreateNestedManyWithoutProjectsInputObjectSchema =
  Schema;
