import { z } from 'zod';
import { PersonSkillCreateNestedManyWithoutPersonInputObjectSchema } from './PersonSkillCreateNestedManyWithoutPersonInput.schema';
import { ProjectCreateNestedManyWithoutPersonsInputObjectSchema } from './ProjectCreateNestedManyWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateWithoutExpertiseInput> = z
  .object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    preferredName: z.string(),
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    personSkills: z
      .lazy(() => PersonSkillCreateNestedManyWithoutPersonInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutPersonsInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonCreateWithoutExpertiseInputObjectSchema = Schema;
