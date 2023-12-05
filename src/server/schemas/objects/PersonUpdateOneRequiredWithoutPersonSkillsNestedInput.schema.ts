import { z } from 'zod';
import { PersonCreateWithoutPersonSkillsInputObjectSchema } from './PersonCreateWithoutPersonSkillsInput.schema';
import { PersonUncheckedCreateWithoutPersonSkillsInputObjectSchema } from './PersonUncheckedCreateWithoutPersonSkillsInput.schema';
import { PersonCreateOrConnectWithoutPersonSkillsInputObjectSchema } from './PersonCreateOrConnectWithoutPersonSkillsInput.schema';
import { PersonUpsertWithoutPersonSkillsInputObjectSchema } from './PersonUpsertWithoutPersonSkillsInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutPersonSkillsInputObjectSchema } from './PersonUpdateWithoutPersonSkillsInput.schema';
import { PersonUncheckedUpdateWithoutPersonSkillsInputObjectSchema } from './PersonUncheckedUpdateWithoutPersonSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutPersonSkillsNestedInput> =
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
      upsert: z
        .lazy(() => PersonUpsertWithoutPersonSkillsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PersonWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PersonUpdateWithoutPersonSkillsInputObjectSchema),
          z.lazy(
            () => PersonUncheckedUpdateWithoutPersonSkillsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PersonUpdateOneRequiredWithoutPersonSkillsNestedInputObjectSchema =
  Schema;
