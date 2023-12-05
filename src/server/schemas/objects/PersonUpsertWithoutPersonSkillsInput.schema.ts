import { z } from 'zod';
import { PersonUpdateWithoutPersonSkillsInputObjectSchema } from './PersonUpdateWithoutPersonSkillsInput.schema';
import { PersonUncheckedUpdateWithoutPersonSkillsInputObjectSchema } from './PersonUncheckedUpdateWithoutPersonSkillsInput.schema';
import { PersonCreateWithoutPersonSkillsInputObjectSchema } from './PersonCreateWithoutPersonSkillsInput.schema';
import { PersonUncheckedCreateWithoutPersonSkillsInputObjectSchema } from './PersonUncheckedCreateWithoutPersonSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithoutPersonSkillsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PersonUpdateWithoutPersonSkillsInputObjectSchema),
      z.lazy(() => PersonUncheckedUpdateWithoutPersonSkillsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PersonCreateWithoutPersonSkillsInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutPersonSkillsInputObjectSchema),
    ]),
  })
  .strict();

export const PersonUpsertWithoutPersonSkillsInputObjectSchema = Schema;
