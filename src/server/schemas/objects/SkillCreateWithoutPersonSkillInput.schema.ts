import { z } from 'zod';
import { FieldCreateNestedManyWithoutSkillsInputObjectSchema } from './FieldCreateNestedManyWithoutSkillsInput.schema';
import { ProjectCreateNestedManyWithoutSkillsInputObjectSchema } from './ProjectCreateNestedManyWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateWithoutPersonSkillInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    field: z
      .lazy(() => FieldCreateNestedManyWithoutSkillsInputObjectSchema)
      .optional(),
    project: z
      .lazy(() => ProjectCreateNestedManyWithoutSkillsInputObjectSchema)
      .optional(),
  })
  .strict();

export const SkillCreateWithoutPersonSkillInputObjectSchema = Schema;
