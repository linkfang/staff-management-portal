import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutExpertiseInputObjectSchema } from './PersonUpdateWithoutExpertiseInput.schema';
import { PersonUncheckedUpdateWithoutExpertiseInputObjectSchema } from './PersonUncheckedUpdateWithoutExpertiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateWithWhereUniqueWithoutExpertiseInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonUpdateWithoutExpertiseInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutExpertiseInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpdateWithWhereUniqueWithoutExpertiseInputObjectSchema =
  Schema;
