import { z } from 'zod';
import { PersonCreateWithoutExpertiseInputObjectSchema } from './PersonCreateWithoutExpertiseInput.schema';
import { PersonUncheckedCreateWithoutExpertiseInputObjectSchema } from './PersonUncheckedCreateWithoutExpertiseInput.schema';
import { PersonCreateOrConnectWithoutExpertiseInputObjectSchema } from './PersonCreateOrConnectWithoutExpertiseInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateNestedManyWithoutExpertiseInput> =
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
      connect: z
        .union([
          z.lazy(() => PersonWhereUniqueInputObjectSchema),
          z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PersonUncheckedCreateNestedManyWithoutExpertiseInputObjectSchema =
  Schema;
