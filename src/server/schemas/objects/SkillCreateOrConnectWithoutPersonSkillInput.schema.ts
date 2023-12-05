import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillCreateWithoutPersonSkillInputObjectSchema } from './SkillCreateWithoutPersonSkillInput.schema';
import { SkillUncheckedCreateWithoutPersonSkillInputObjectSchema } from './SkillUncheckedCreateWithoutPersonSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateOrConnectWithoutPersonSkillInput> = z
  .object({
    where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SkillCreateWithoutPersonSkillInputObjectSchema),
      z.lazy(() => SkillUncheckedCreateWithoutPersonSkillInputObjectSchema),
    ]),
  })
  .strict();

export const SkillCreateOrConnectWithoutPersonSkillInputObjectSchema = Schema;
