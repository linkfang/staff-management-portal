import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutProjectsInputObjectSchema } from './PersonUpdateWithoutProjectsInput.schema';
import { PersonUncheckedUpdateWithoutProjectsInputObjectSchema } from './PersonUncheckedUpdateWithoutProjectsInput.schema';
import { PersonCreateWithoutProjectsInputObjectSchema } from './PersonCreateWithoutProjectsInput.schema';
import { PersonUncheckedCreateWithoutProjectsInputObjectSchema } from './PersonUncheckedCreateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithWhereUniqueWithoutProjectsInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PersonUpdateWithoutProjectsInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutProjectsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PersonCreateWithoutProjectsInputObjectSchema),
        z.lazy(() => PersonUncheckedCreateWithoutProjectsInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpsertWithWhereUniqueWithoutProjectsInputObjectSchema =
  Schema;
