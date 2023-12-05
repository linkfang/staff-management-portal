import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutPersonSkillsInputObjectSchema } from './PersonCreateWithoutPersonSkillsInput.schema';
import { PersonUncheckedCreateWithoutPersonSkillsInputObjectSchema } from './PersonUncheckedCreateWithoutPersonSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutPersonSkillsInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PersonCreateWithoutPersonSkillsInputObjectSchema),
        z.lazy(() => PersonUncheckedCreateWithoutPersonSkillsInputObjectSchema),
      ]),
    })
    .strict();

export const PersonCreateOrConnectWithoutPersonSkillsInputObjectSchema = Schema;
