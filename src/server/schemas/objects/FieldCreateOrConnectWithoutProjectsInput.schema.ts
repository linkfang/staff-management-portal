import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldCreateWithoutProjectsInputObjectSchema } from './FieldCreateWithoutProjectsInput.schema';
import { FieldUncheckedCreateWithoutProjectsInputObjectSchema } from './FieldUncheckedCreateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldCreateOrConnectWithoutProjectsInput> = z
  .object({
    where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FieldCreateWithoutProjectsInputObjectSchema),
      z.lazy(() => FieldUncheckedCreateWithoutProjectsInputObjectSchema),
    ]),
  })
  .strict();

export const FieldCreateOrConnectWithoutProjectsInputObjectSchema = Schema;
