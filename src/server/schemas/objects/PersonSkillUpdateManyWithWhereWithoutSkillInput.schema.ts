import { z } from 'zod';
import { PersonSkillScalarWhereInputObjectSchema } from './PersonSkillScalarWhereInput.schema';
import { PersonSkillUpdateManyMutationInputObjectSchema } from './PersonSkillUpdateManyMutationInput.schema';
import { PersonSkillUncheckedUpdateManyWithoutPersonSkillInputObjectSchema } from './PersonSkillUncheckedUpdateManyWithoutPersonSkillInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpdateManyWithWhereWithoutSkillInput> =
  z
    .object({
      where: z.lazy(() => PersonSkillScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonSkillUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PersonSkillUncheckedUpdateManyWithoutPersonSkillInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PersonSkillUpdateManyWithWhereWithoutSkillInputObjectSchema =
  Schema;
