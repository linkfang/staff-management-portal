import { z } from 'zod';
import { FieldCreateNestedManyWithoutSkillsInputObjectSchema } from './FieldCreateNestedManyWithoutSkillsInput.schema';
import { PersonSkillCreateNestedManyWithoutSkillInputObjectSchema } from './PersonSkillCreateNestedManyWithoutSkillInput.schema';
import { ProjectCreateNestedManyWithoutSkillsInputObjectSchema } from './ProjectCreateNestedManyWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    field: z
      .lazy(() => FieldCreateNestedManyWithoutSkillsInputObjectSchema)
      .optional(),
    personSkill: z
      .lazy(() => PersonSkillCreateNestedManyWithoutSkillInputObjectSchema)
      .optional(),
    project: z
      .lazy(() => ProjectCreateNestedManyWithoutSkillsInputObjectSchema)
      .optional(),
  })
  .strict();

export const SkillCreateInputObjectSchema = Schema;
