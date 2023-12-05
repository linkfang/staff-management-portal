import { z } from 'zod';
import { FieldScalarWhereInputObjectSchema } from './FieldScalarWhereInput.schema';
import { FieldUpdateManyMutationInputObjectSchema } from './FieldUpdateManyMutationInput.schema';
import { FieldUncheckedUpdateManyWithoutFieldsInputObjectSchema } from './FieldUncheckedUpdateManyWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateManyWithWhereWithoutProjectsInput> = z
  .object({
    where: z.lazy(() => FieldScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => FieldUpdateManyMutationInputObjectSchema),
      z.lazy(() => FieldUncheckedUpdateManyWithoutFieldsInputObjectSchema),
    ]),
  })
  .strict();

export const FieldUpdateManyWithWhereWithoutProjectsInputObjectSchema = Schema;
