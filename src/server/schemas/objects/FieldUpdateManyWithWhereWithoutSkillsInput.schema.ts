import { z } from 'zod';
import { FieldScalarWhereInputObjectSchema } from './FieldScalarWhereInput.schema';
import { FieldUpdateManyMutationInputObjectSchema } from './FieldUpdateManyMutationInput.schema';
import { FieldUncheckedUpdateManyWithoutFieldInputObjectSchema } from './FieldUncheckedUpdateManyWithoutFieldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateManyWithWhereWithoutSkillsInput> = z
  .object({
    where: z.lazy(() => FieldScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => FieldUpdateManyMutationInputObjectSchema),
      z.lazy(() => FieldUncheckedUpdateManyWithoutFieldInputObjectSchema),
    ]),
  })
  .strict();

export const FieldUpdateManyWithWhereWithoutSkillsInputObjectSchema = Schema;
