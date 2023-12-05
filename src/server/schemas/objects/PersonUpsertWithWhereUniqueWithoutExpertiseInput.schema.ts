import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutExpertiseInputObjectSchema } from './PersonUpdateWithoutExpertiseInput.schema';
import { PersonUncheckedUpdateWithoutExpertiseInputObjectSchema } from './PersonUncheckedUpdateWithoutExpertiseInput.schema';
import { PersonCreateWithoutExpertiseInputObjectSchema } from './PersonCreateWithoutExpertiseInput.schema';
import { PersonUncheckedCreateWithoutExpertiseInputObjectSchema } from './PersonUncheckedCreateWithoutExpertiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithWhereUniqueWithoutExpertiseInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PersonUpdateWithoutExpertiseInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutExpertiseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PersonCreateWithoutExpertiseInputObjectSchema),
        z.lazy(() => PersonUncheckedCreateWithoutExpertiseInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpsertWithWhereUniqueWithoutExpertiseInputObjectSchema =
  Schema;
