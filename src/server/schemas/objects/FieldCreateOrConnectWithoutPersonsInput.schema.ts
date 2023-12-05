import { z } from 'zod';
import { FieldWhereUniqueInputObjectSchema } from './FieldWhereUniqueInput.schema';
import { FieldCreateWithoutPersonsInputObjectSchema } from './FieldCreateWithoutPersonsInput.schema';
import { FieldUncheckedCreateWithoutPersonsInputObjectSchema } from './FieldUncheckedCreateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldCreateOrConnectWithoutPersonsInput> = z
  .object({
    where: z.lazy(() => FieldWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FieldCreateWithoutPersonsInputObjectSchema),
      z.lazy(() => FieldUncheckedCreateWithoutPersonsInputObjectSchema),
    ]),
  })
  .strict();

export const FieldCreateOrConnectWithoutPersonsInputObjectSchema = Schema;
