import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldCreateWithoutSkillsInputObjectSchema } from './FieldCreateWithoutSkillsInput.schema';
import { FieldUncheckedCreateWithoutSkillsInputObjectSchema } from './FieldUncheckedCreateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldCreateOrConnectWithoutSkillsInput> = z
  .object({
    where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FieldCreateWithoutSkillsInputObjectSchema),
      z.lazy(() => FieldUncheckedCreateWithoutSkillsInputObjectSchema),
    ]),
  })
  .strict();

export const FieldCreateOrConnectWithoutSkillsInputObjectSchema = Schema;
