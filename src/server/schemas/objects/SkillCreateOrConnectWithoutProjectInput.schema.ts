import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillCreateWithoutProjectInputObjectSchema } from './SkillCreateWithoutProjectInput.schema';
import { SkillUncheckedCreateWithoutProjectInputObjectSchema } from './SkillUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateOrConnectWithoutProjectInput> = z
  .object({
    where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SkillCreateWithoutProjectInputObjectSchema),
      z.lazy(() => SkillUncheckedCreateWithoutProjectInputObjectSchema),
    ]),
  })
  .strict();

export const SkillCreateOrConnectWithoutProjectInputObjectSchema = Schema;
