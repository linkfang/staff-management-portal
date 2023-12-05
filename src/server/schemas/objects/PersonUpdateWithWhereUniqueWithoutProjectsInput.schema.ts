import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutProjectsInputObjectSchema } from './PersonUpdateWithoutProjectsInput.schema';
import { PersonUncheckedUpdateWithoutProjectsInputObjectSchema } from './PersonUncheckedUpdateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateWithWhereUniqueWithoutProjectsInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonUpdateWithoutProjectsInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutProjectsInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpdateWithWhereUniqueWithoutProjectsInputObjectSchema =
  Schema;
