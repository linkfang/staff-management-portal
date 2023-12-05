import { z } from 'zod';
import { FieldUncheckedCreateNestedManyWithoutPersonsInputObjectSchema } from './FieldUncheckedCreateNestedManyWithoutPersonsInput.schema';
import { PersonSkillUncheckedCreateNestedManyWithoutPersonInputObjectSchema } from './PersonSkillUncheckedCreateNestedManyWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateWithoutProjectsInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    preferredName: z.string(),
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    expertise: z
      .lazy(() => FieldUncheckedCreateNestedManyWithoutPersonsInputObjectSchema)
      .optional(),
    personSkills: z
      .lazy(
        () =>
          PersonSkillUncheckedCreateNestedManyWithoutPersonInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonUncheckedCreateWithoutProjectsInputObjectSchema = Schema;
