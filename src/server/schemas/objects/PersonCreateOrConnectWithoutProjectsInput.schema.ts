import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutProjectsInputObjectSchema } from './PersonCreateWithoutProjectsInput.schema';
import { PersonUncheckedCreateWithoutProjectsInputObjectSchema } from './PersonUncheckedCreateWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutProjectsInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonCreateWithoutProjectsInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutProjectsInputObjectSchema),
    ]),
  })
  .strict();

export const PersonCreateOrConnectWithoutProjectsInputObjectSchema = Schema;
