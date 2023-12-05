import { z } from 'zod';
import { PersonSkillCreateWithoutPersonInputObjectSchema } from './PersonSkillCreateWithoutPersonInput.schema';
import { PersonSkillUncheckedCreateWithoutPersonInputObjectSchema } from './PersonSkillUncheckedCreateWithoutPersonInput.schema';
import { PersonSkillCreateOrConnectWithoutPersonInputObjectSchema } from './PersonSkillCreateOrConnectWithoutPersonInput.schema';
import { PersonSkillUpsertWithWhereUniqueWithoutPersonInputObjectSchema } from './PersonSkillUpsertWithWhereUniqueWithoutPersonInput.schema';
import { PersonSkillCreateManyPersonInputEnvelopeObjectSchema } from './PersonSkillCreateManyPersonInputEnvelope.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';
import { PersonSkillUpdateWithWhereUniqueWithoutPersonInputObjectSchema } from './PersonSkillUpdateWithWhereUniqueWithoutPersonInput.schema';
import { PersonSkillUpdateManyWithWhereWithoutPersonInputObjectSchema } from './PersonSkillUpdateManyWithWhereWithoutPersonInput.schema';
import { PersonSkillScalarWhereInputObjectSchema } from './PersonSkillScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUncheckedUpdateManyWithoutPersonNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              PersonSkillUpsertWithWhereUniqueWithoutPersonInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PersonSkillUpsertWithWhereUniqueWithoutPersonInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PersonSkillCreateManyPersonInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
          z.lazy(() => PersonSkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PersonSkillUpdateWithWhereUniqueWithoutPersonInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PersonSkillUpdateWithWhereUniqueWithoutPersonInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PersonSkillUpdateManyWithWhereWithoutPersonInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PersonSkillUpdateManyWithWhereWithoutPersonInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PersonSkillScalarWhereInputObjectSchema),
          z.lazy(() => PersonSkillScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PersonSkillUncheckedUpdateManyWithoutPersonNestedInputObjectSchema =
  Schema;
