import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutFieldInputObjectSchema } from './SkillUpdateWithoutFieldInput.schema';
import { SkillUncheckedUpdateWithoutFieldInputObjectSchema } from './SkillUncheckedUpdateWithoutFieldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpdateWithWhereUniqueWithoutFieldInput> = z
  .object({
    where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SkillUpdateWithoutFieldInputObjectSchema),
      z.lazy(() => SkillUncheckedUpdateWithoutFieldInputObjectSchema),
    ]),
  })
  .strict();

export const SkillUpdateWithWhereUniqueWithoutFieldInputObjectSchema = Schema;
