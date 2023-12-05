import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithoutSkillsInputObjectSchema } from './FieldUpdateWithoutSkillsInput.schema';
import { FieldUncheckedUpdateWithoutSkillsInputObjectSchema } from './FieldUncheckedUpdateWithoutSkillsInput.schema';
import { FieldCreateWithoutSkillsInputObjectSchema } from './FieldCreateWithoutSkillsInput.schema';
import { FieldUncheckedCreateWithoutSkillsInputObjectSchema } from './FieldUncheckedCreateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpsertWithWhereUniqueWithoutSkillsInput> = z
  .object({
    where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => FieldUpdateWithoutSkillsInputObjectSchema),
      z.lazy(() => FieldUncheckedUpdateWithoutSkillsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FieldCreateWithoutSkillsInputObjectSchema),
      z.lazy(() => FieldUncheckedCreateWithoutSkillsInputObjectSchema),
    ]),
  })
  .strict();

export const FieldUpsertWithWhereUniqueWithoutSkillsInputObjectSchema = Schema;
