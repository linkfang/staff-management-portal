import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithoutSkillsInputObjectSchema } from './FieldUpdateWithoutSkillsInput.schema';
import { FieldUncheckedUpdateWithoutSkillsInputObjectSchema } from './FieldUncheckedUpdateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateWithWhereUniqueWithoutSkillsInput> = z
  .object({
    where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => FieldUpdateWithoutSkillsInputObjectSchema),
      z.lazy(() => FieldUncheckedUpdateWithoutSkillsInputObjectSchema),
    ]),
  })
  .strict();

export const FieldUpdateWithWhereUniqueWithoutSkillsInputObjectSchema = Schema;
