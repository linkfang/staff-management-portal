import { z } from 'zod';
import { FieldCreateWithoutSkillsInputObjectSchema } from './FieldCreateWithoutSkillsInput.schema';
import { FieldUncheckedCreateWithoutSkillsInputObjectSchema } from './FieldUncheckedCreateWithoutSkillsInput.schema';
import { FieldCreateOrConnectWithoutSkillsInputObjectSchema } from './FieldCreateOrConnectWithoutSkillsInput.schema';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldCreateNestedManyWithoutSkillsInput> = z
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
    connect: z
      .union([
        z.lazy(() => FieldWhereUniqueInputObjectSchema),
        z.lazy(() => FieldWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const FieldCreateNestedManyWithoutSkillsInputObjectSchema = Schema;
