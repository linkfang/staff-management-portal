import { z } from 'zod';
import { SkillCreateNestedManyWithoutFieldInputObjectSchema } from './SkillCreateNestedManyWithoutFieldInput.schema';
import { ProjectCreateNestedManyWithoutFieldsInputObjectSchema } from './ProjectCreateNestedManyWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldCreateWithoutPersonsInput> = z
  .object({
    name: z.string(),
    skills: z
      .lazy(() => SkillCreateNestedManyWithoutFieldInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutFieldsInputObjectSchema)
      .optional(),
  })
  .strict();

export const FieldCreateWithoutPersonsInputObjectSchema = Schema;
