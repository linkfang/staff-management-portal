import { z } from 'zod';
import { SkillCreateWithoutFieldInputObjectSchema } from './SkillCreateWithoutFieldInput.schema';
import { SkillUncheckedCreateWithoutFieldInputObjectSchema } from './SkillUncheckedCreateWithoutFieldInput.schema';
import { SkillCreateOrConnectWithoutFieldInputObjectSchema } from './SkillCreateOrConnectWithoutFieldInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedCreateNestedManyWithoutFieldInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SkillCreateWithoutFieldInputObjectSchema),
          z.lazy(() => SkillCreateWithoutFieldInputObjectSchema).array(),
          z.lazy(() => SkillUncheckedCreateWithoutFieldInputObjectSchema),
          z
            .lazy(() => SkillUncheckedCreateWithoutFieldInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SkillCreateOrConnectWithoutFieldInputObjectSchema),
          z
            .lazy(() => SkillCreateOrConnectWithoutFieldInputObjectSchema)
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

export const SkillUncheckedCreateNestedManyWithoutFieldInputObjectSchema =
  Schema;
