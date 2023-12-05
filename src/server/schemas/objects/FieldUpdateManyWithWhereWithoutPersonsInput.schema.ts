import { z } from 'zod';
import { FieldScalarWhereInputObjectSchema } from './FieldScalarWhereInput.schema';
import { FieldUpdateManyMutationInputObjectSchema } from './FieldUpdateManyMutationInput.schema';
import { FieldUncheckedUpdateManyWithoutExpertiseInputObjectSchema } from './FieldUncheckedUpdateManyWithoutExpertiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateManyWithWhereWithoutPersonsInput> = z
  .object({
    where: z.lazy(() => FieldScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => FieldUpdateManyMutationInputObjectSchema),
      z.lazy(() => FieldUncheckedUpdateManyWithoutExpertiseInputObjectSchema),
    ]),
  })
  .strict();

export const FieldUpdateManyWithWhereWithoutPersonsInputObjectSchema = Schema;
