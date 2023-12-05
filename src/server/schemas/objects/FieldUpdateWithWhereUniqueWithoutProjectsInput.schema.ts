import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithoutProjectsInputObjectSchema } from './FieldUpdateWithoutProjectsInput.schema';
import { FieldUncheckedUpdateWithoutProjectsInputObjectSchema } from './FieldUncheckedUpdateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateWithWhereUniqueWithoutProjectsInput> =
  z
    .object({
      where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FieldUpdateWithoutProjectsInputObjectSchema),
        z.lazy(() => FieldUncheckedUpdateWithoutProjectsInputObjectSchema),
      ]),
    })
    .strict();

export const FieldUpdateWithWhereUniqueWithoutProjectsInputObjectSchema =
  Schema;
