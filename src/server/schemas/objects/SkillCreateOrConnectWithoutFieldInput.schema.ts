import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillCreateWithoutFieldInputObjectSchema } from './SkillCreateWithoutFieldInput.schema';
import { SkillUncheckedCreateWithoutFieldInputObjectSchema } from './SkillUncheckedCreateWithoutFieldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateOrConnectWithoutFieldInput> = z
  .object({
    where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SkillCreateWithoutFieldInputObjectSchema),
      z.lazy(() => SkillUncheckedCreateWithoutFieldInputObjectSchema),
    ]),
  })
  .strict();

export const SkillCreateOrConnectWithoutFieldInputObjectSchema = Schema;
