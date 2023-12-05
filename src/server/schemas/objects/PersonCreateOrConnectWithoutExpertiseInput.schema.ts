import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutExpertiseInputObjectSchema } from './PersonCreateWithoutExpertiseInput.schema';
import { PersonUncheckedCreateWithoutExpertiseInputObjectSchema } from './PersonUncheckedCreateWithoutExpertiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutExpertiseInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonCreateWithoutExpertiseInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutExpertiseInputObjectSchema),
    ]),
  })
  .strict();

export const PersonCreateOrConnectWithoutExpertiseInputObjectSchema = Schema;
