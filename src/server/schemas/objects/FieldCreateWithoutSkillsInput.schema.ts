import { z } from 'zod';
import { PersonCreateNestedManyWithoutExpertiseInputObjectSchema } from './PersonCreateNestedManyWithoutExpertiseInput.schema';
import { ProjectCreateNestedManyWithoutFieldsInputObjectSchema } from './ProjectCreateNestedManyWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldCreateWithoutSkillsInput> = z
  .object({
    name: z.string(),
    persons: z
      .lazy(() => PersonCreateNestedManyWithoutExpertiseInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutFieldsInputObjectSchema)
      .optional(),
  })
  .strict();

export const FieldCreateWithoutSkillsInputObjectSchema = Schema;
