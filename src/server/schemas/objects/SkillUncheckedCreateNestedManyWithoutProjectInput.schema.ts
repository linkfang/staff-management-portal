import { z } from 'zod';
import { SkillCreateWithoutProjectInputObjectSchema } from './SkillCreateWithoutProjectInput.schema';
import { SkillUncheckedCreateWithoutProjectInputObjectSchema } from './SkillUncheckedCreateWithoutProjectInput.schema';
import { SkillCreateOrConnectWithoutProjectInputObjectSchema } from './SkillCreateOrConnectWithoutProjectInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedCreateNestedManyWithoutProjectInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SkillCreateWithoutProjectInputObjectSchema),
          z.lazy(() => SkillCreateWithoutProjectInputObjectSchema).array(),
          z.lazy(() => SkillUncheckedCreateWithoutProjectInputObjectSchema),
          z
            .lazy(() => SkillUncheckedCreateWithoutProjectInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SkillCreateOrConnectWithoutProjectInputObjectSchema),
          z
            .lazy(() => SkillCreateOrConnectWithoutProjectInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SkillWhereUniqueInputObjectSchema),
          z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SkillUncheckedCreateNestedManyWithoutProjectInputObjectSchema =
  Schema;
