import { z } from 'zod';
import { FieldCreateWithoutSkillsInputObjectSchema } from './FieldCreateWithoutSkillsInput.schema';
import { FieldUncheckedCreateWithoutSkillsInputObjectSchema } from './FieldUncheckedCreateWithoutSkillsInput.schema';
import { FieldCreateOrConnectWithoutSkillsInputObjectSchema } from './FieldCreateOrConnectWithoutSkillsInput.schema';
import { FieldUpsertWithWhereUniqueWithoutSkillsInputObjectSchema } from './FieldUpsertWithWhereUniqueWithoutSkillsInput.schema';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithWhereUniqueWithoutSkillsInputObjectSchema } from './FieldUpdateWithWhereUniqueWithoutSkillsInput.schema';
import { FieldUpdateManyWithWhereWithoutSkillsInputObjectSchema } from './FieldUpdateManyWithWhereWithoutSkillsInput.schema';
import { FieldScalarWhereInputObjectSchema } from './FieldScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateManyWithoutSkillsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FieldCreateWithoutSkillsInputObjectSchema),
        z.lazy(() => FieldCreateWithoutSkillsInputObjectSchema).array(),
        z.lazy(() => FieldUncheckedCreateWithoutSkillsInputObjectSchema),
        z
          .lazy(() => FieldUncheckedCreateWithoutSkillsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => FieldCreateOrConnectWithoutSkillsInputObjectSchema),
        z
          .lazy(() => FieldCreateOrConnectWithoutSkillsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => FieldUpsertWithWhereUniqueWithoutSkillsInputObjectSchema),
        z
          .lazy(() => FieldUpsertWithWhereUniqueWithoutSkillsInputObjectSchema)
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
        z.lazy(() => FieldUpdateWithWhereUniqueWithoutSkillsInputObjectSchema),
        z
          .lazy(() => FieldUpdateWithWhereUniqueWithoutSkillsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => FieldUpdateManyWithWhereWithoutSkillsInputObjectSchema),
        z
          .lazy(() => FieldUpdateManyWithWhereWithoutSkillsInputObjectSchema)
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

export const FieldUpdateManyWithoutSkillsNestedInputObjectSchema = Schema;
