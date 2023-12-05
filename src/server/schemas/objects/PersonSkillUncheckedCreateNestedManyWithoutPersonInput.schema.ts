import { z } from 'zod';
import { PersonSkillCreateWithoutPersonInputObjectSchema } from './PersonSkillCreateWithoutPersonInput.schema';
import { PersonSkillUncheckedCreateWithoutPersonInputObjectSchema } from './PersonSkillUncheckedCreateWithoutPersonInput.schema';
import { PersonSkillCreateOrConnectWithoutPersonInputObjectSchema } from './PersonSkillCreateOrConnectWithoutPersonInput.schema';
import { PersonSkillCreateManyPersonInputEnvelopeObjectSchema } from './PersonSkillCreateManyPersonInputEnvelope.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUncheckedCreateNestedManyWithoutPersonInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PersonSkillCreateWithoutPersonInputObjectSchema),
          z.lazy(() => PersonSkillCreateWithoutPersonInputObjectSchema).array(),
          z.lazy(
            () => PersonSkillUncheckedCreateWithoutPersonInputObjectSchema,
          ),
          z
            .lazy(
              () => PersonSkillUncheckedCreateWithoutPersonInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PersonSkillCreateOrConnectWithoutPersonInputObjectSchema,
          ),
          z
            .lazy(
              () => PersonSkillCreateOrConnectWithoutPersonInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PersonSkillCreateManyPersonInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PersonSkillUncheckedCreateNestedManyWithoutPersonInputObjectSchema =
  Schema;
