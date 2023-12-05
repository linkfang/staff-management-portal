import { z } from 'zod';
import { PersonCreateWithoutPersonSkillsInputObjectSchema } from './PersonCreateWithoutPersonSkillsInput.schema';
import { PersonUncheckedCreateWithoutPersonSkillsInputObjectSchema } from './PersonUncheckedCreateWithoutPersonSkillsInput.schema';
import { PersonCreateOrConnectWithoutPersonSkillsInputObjectSchema } from './PersonCreateOrConnectWithoutPersonSkillsInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateNestedOneWithoutPersonSkillsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PersonCreateWithoutPersonSkillsInputObjectSchema),
          z.lazy(
            () => PersonUncheckedCreateWithoutPersonSkillsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PersonCreateOrConnectWithoutPersonSkillsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PersonWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const PersonCreateNestedOneWithoutPersonSkillsInputObjectSchema = Schema;
