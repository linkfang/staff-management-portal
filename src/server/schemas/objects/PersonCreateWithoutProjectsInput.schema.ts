import { z } from 'zod';
import { FieldCreateNestedManyWithoutPersonsInputObjectSchema } from './FieldCreateNestedManyWithoutPersonsInput.schema';
import { PersonSkillCreateNestedManyWithoutPersonInputObjectSchema } from './PersonSkillCreateNestedManyWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateWithoutProjectsInput> = z
  .object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    preferredName: z.string(),
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    expertise: z
      .lazy(() => FieldCreateNestedManyWithoutPersonsInputObjectSchema)
      .optional(),
    personSkills: z
      .lazy(() => PersonSkillCreateNestedManyWithoutPersonInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonCreateWithoutProjectsInputObjectSchema = Schema;
