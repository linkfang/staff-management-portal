import { z } from 'zod';
import { SkillCreateNestedManyWithoutFieldInputObjectSchema } from './SkillCreateNestedManyWithoutFieldInput.schema';
import { PersonCreateNestedManyWithoutExpertiseInputObjectSchema } from './PersonCreateNestedManyWithoutExpertiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldCreateWithoutProjectsInput> = z
  .object({
    name: z.string(),
    skills: z
      .lazy(() => SkillCreateNestedManyWithoutFieldInputObjectSchema)
      .optional(),
    persons: z
      .lazy(() => PersonCreateNestedManyWithoutExpertiseInputObjectSchema)
      .optional(),
  })
  .strict();

export const FieldCreateWithoutProjectsInputObjectSchema = Schema;
