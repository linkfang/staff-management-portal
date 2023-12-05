import { z } from 'zod';
import { PersonScalarWhereInputObjectSchema } from './PersonScalarWhereInput.schema';
import { PersonUpdateManyMutationInputObjectSchema } from './PersonUpdateManyMutationInput.schema';
import { PersonUncheckedUpdateManyWithoutPersonsInputObjectSchema } from './PersonUncheckedUpdateManyWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateManyWithWhereWithoutExpertiseInput> =
  z
    .object({
      where: z.lazy(() => PersonScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonUpdateManyMutationInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateManyWithoutPersonsInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpdateManyWithWhereWithoutExpertiseInputObjectSchema =
  Schema;
