import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldUpdateWithoutProjectsInputObjectSchema } from './FieldUpdateWithoutProjectsInput.schema';
import { FieldUncheckedUpdateWithoutProjectsInputObjectSchema } from './FieldUncheckedUpdateWithoutProjectsInput.schema';
import { FieldCreateWithoutProjectsInputObjectSchema } from './FieldCreateWithoutProjectsInput.schema';
import { FieldUncheckedCreateWithoutProjectsInputObjectSchema } from './FieldUncheckedCreateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpsertWithWhereUniqueWithoutProjectsInput> =
  z
    .object({
      where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FieldUpdateWithoutProjectsInputObjectSchema),
        z.lazy(() => FieldUncheckedUpdateWithoutProjectsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => FieldCreateWithoutProjectsInputObjectSchema),
        z.lazy(() => FieldUncheckedCreateWithoutProjectsInputObjectSchema),
      ]),
    })
    .strict();

export const FieldUpsertWithWhereUniqueWithoutProjectsInputObjectSchema =
  Schema;
