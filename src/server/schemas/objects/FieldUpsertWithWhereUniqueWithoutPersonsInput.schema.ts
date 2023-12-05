import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithoutPersonsInputObjectSchema } from './FieldUpdateWithoutPersonsInput.schema';
import { FieldUncheckedUpdateWithoutPersonsInputObjectSchema } from './FieldUncheckedUpdateWithoutPersonsInput.schema';
import { FieldCreateWithoutPersonsInputObjectSchema } from './FieldCreateWithoutPersonsInput.schema';
import { FieldUncheckedCreateWithoutPersonsInputObjectSchema } from './FieldUncheckedCreateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpsertWithWhereUniqueWithoutPersonsInput> =
  z
    .object({
      where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FieldUpdateWithoutPersonsInputObjectSchema),
        z.lazy(() => FieldUncheckedUpdateWithoutPersonsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => FieldCreateWithoutPersonsInputObjectSchema),
        z.lazy(() => FieldUncheckedCreateWithoutPersonsInputObjectSchema),
      ]),
    })
    .strict();

export const FieldUpsertWithWhereUniqueWithoutPersonsInputObjectSchema = Schema;
