import { z } from 'zod';
import { SkillCreateWithoutPersonSkillInputObjectSchema } from './SkillCreateWithoutPersonSkillInput.schema';
import { SkillUncheckedCreateWithoutPersonSkillInputObjectSchema } from './SkillUncheckedCreateWithoutPersonSkillInput.schema';
import { SkillCreateOrConnectWithoutPersonSkillInputObjectSchema } from './SkillCreateOrConnectWithoutPersonSkillInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateNestedOneWithoutPersonSkillInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SkillCreateWithoutPersonSkillInputObjectSchema),
        z.lazy(() => SkillUncheckedCreateWithoutPersonSkillInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SkillCreateOrConnectWithoutPersonSkillInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SkillWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SkillCreateNestedOneWithoutPersonSkillInputObjectSchema = Schema;
