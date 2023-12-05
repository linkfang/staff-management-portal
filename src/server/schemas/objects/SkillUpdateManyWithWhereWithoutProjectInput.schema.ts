import { z } from 'zod';
import { SkillScalarWhereInputObjectSchema } from './SkillScalarWhereInput.schema';
import { SkillUpdateManyMutationInputObjectSchema } from './SkillUpdateManyMutationInput.schema';
import { SkillUncheckedUpdateManyWithoutSkillsInputObjectSchema } from './SkillUncheckedUpdateManyWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpdateManyWithWhereWithoutProjectInput> = z
  .object({
    where: z.lazy(() => SkillScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SkillUpdateManyMutationInputObjectSchema),
      z.lazy(() => SkillUncheckedUpdateManyWithoutSkillsInputObjectSchema),
    ]),
  })
  .strict();

export const SkillUpdateManyWithWhereWithoutProjectInputObjectSchema = Schema;
