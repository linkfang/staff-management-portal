import { z } from 'zod';
import { SkillCreateNestedManyWithoutFieldInputObjectSchema } from './SkillCreateNestedManyWithoutFieldInput.schema';
import { PersonCreateNestedManyWithoutExpertiseInputObjectSchema } from './PersonCreateNestedManyWithoutExpertiseInput.schema';
import { ProjectCreateNestedManyWithoutFieldsInputObjectSchema } from './ProjectCreateNestedManyWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldCreateInput> = z
  .object({
    name: z.string(),
    skills: z
      .lazy(() => SkillCreateNestedManyWithoutFieldInputObjectSchema)
      .optional(),
    persons: z
      .lazy(() => PersonCreateNestedManyWithoutExpertiseInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutFieldsInputObjectSchema)
      .optional(),
  })
  .strict();

export const FieldCreateInputObjectSchema = Schema;
