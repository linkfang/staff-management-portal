import { z } from 'zod';
import { PersonSkillScalarWhereInputObjectSchema } from './PersonSkillScalarWhereInput.schema';
import { PersonSkillUpdateManyMutationInputObjectSchema } from './PersonSkillUpdateManyMutationInput.schema';
import { PersonSkillUncheckedUpdateManyWithoutPersonSkillsInputObjectSchema } from './PersonSkillUncheckedUpdateManyWithoutPersonSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpdateManyWithWhereWithoutPersonInput> =
  z
    .object({
      where: z.lazy(() => PersonSkillScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonSkillUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PersonSkillUncheckedUpdateManyWithoutPersonSkillsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PersonSkillUpdateManyWithWhereWithoutPersonInputObjectSchema =
  Schema;
