import { z } from 'zod';
import { PersonCreateWithoutProjectsInputObjectSchema } from './PersonCreateWithoutProjectsInput.schema';
import { PersonUncheckedCreateWithoutProjectsInputObjectSchema } from './PersonUncheckedCreateWithoutProjectsInput.schema';
import { PersonCreateOrConnectWithoutProjectsInputObjectSchema } from './PersonCreateOrConnectWithoutProjectsInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateNestedManyWithoutProjectsInput> =
  z
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
      connect: z
        .union([
          z.lazy(() => PersonWhereUniqueInputObjectSchema),
          z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PersonUncheckedCreateNestedManyWithoutProjectsInputObjectSchema =
  Schema;
