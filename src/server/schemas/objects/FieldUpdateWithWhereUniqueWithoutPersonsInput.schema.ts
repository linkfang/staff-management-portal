import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithoutPersonsInputObjectSchema } from './FieldUpdateWithoutPersonsInput.schema';
import { FieldUncheckedUpdateWithoutPersonsInputObjectSchema } from './FieldUncheckedUpdateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateWithWhereUniqueWithoutPersonsInput> =
  z
    .object({
      where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FieldUpdateWithoutPersonsInputObjectSchema),
        z.lazy(() => FieldUncheckedUpdateWithoutPersonsInputObjectSchema),
      ]),
    })
    .strict();

export const FieldUpdateWithWhereUniqueWithoutPersonsInputObjectSchema = Schema;
