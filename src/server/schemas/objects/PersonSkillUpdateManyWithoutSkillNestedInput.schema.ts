import { z } from 'zod';
import { PersonSkillCreateWithoutSkillInputObjectSchema } from './PersonSkillCreateWithoutSkillInput.schema';
import { PersonSkillUncheckedCreateWithoutSkillInputObjectSchema } from './PersonSkillUncheckedCreateWithoutSkillInput.schema';
import { PersonSkillCreateOrConnectWithoutSkillInputObjectSchema } from './PersonSkillCreateOrConnectWithoutSkillInput.schema';
import { PersonSkillUpsertWithWhereUniqueWithoutSkillInputObjectSchema } from './PersonSkillUpsertWithWhereUniqueWithoutSkillInput.schema';
import { PersonSkillCreateManySkillInputEnvelopeObjectSchema } from './PersonSkillCreateManySkillInputEnvelope.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';
import { PersonSkillUpdateWithWhereUniqueWithoutSkillInputObjectSchema } from './PersonSkillUpdateWithWhereUniqueWithoutSkillInput.schema';
import { PersonSkillUpdateManyWithWhereWithoutSkillInputObjectSchema } from './PersonSkillUpdateManyWithWhereWithoutSkillInput.schema';
import { PersonSkillScalarWhereInputObjectSchema } from './PersonSkillScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpdateManyWithoutSkillNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PersonSkillCreateWithoutSkillInputObjectSchema),
        z.lazy(() => PersonSkillCreateWithoutSkillInputObjectSchema).array(),
        z.lazy(() => PersonSkillUncheckedCreateWithoutSkillInputObjectSchema),
        z
          .lazy(() => PersonSkillUncheckedCreateWithoutSkillInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PersonSkillCreateOrConnectWithoutSkillInputObjectSchema),
        z
          .lazy(() => PersonSkillCreateOrConnectWithoutSkillInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PersonSkillUpsertWithWhereUniqueWithoutSkillInputObjectSchema,
        ),
        z
          .lazy(
            () => PersonSkillUpsertWithWhereUniqueWithoutSkillInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PersonSkillCreateManySkillInputEnvelopeObjectSchema)
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
          () => PersonSkillUpdateWithWhereUniqueWithoutSkillInputObjectSchema,
        ),
        z
          .lazy(
            () => PersonSkillUpdateWithWhereUniqueWithoutSkillInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => PersonSkillUpdateManyWithWhereWithoutSkillInputObjectSchema,
        ),
        z
          .lazy(
            () => PersonSkillUpdateManyWithWhereWithoutSkillInputObjectSchema,
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

export const PersonSkillUpdateManyWithoutSkillNestedInputObjectSchema = Schema;
