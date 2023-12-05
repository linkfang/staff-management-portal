import { z } from 'zod';
import { FieldCreateNestedManyWithoutPersonsInputObjectSchema } from './FieldCreateNestedManyWithoutPersonsInput.schema';
import { ProjectCreateNestedManyWithoutPersonsInputObjectSchema } from './ProjectCreateNestedManyWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateWithoutPersonSkillsInput> = z
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
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutPersonsInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonCreateWithoutPersonSkillsInputObjectSchema = Schema;
