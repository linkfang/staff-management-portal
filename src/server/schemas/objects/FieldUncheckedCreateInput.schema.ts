import { z } from 'zod';
import { SkillUncheckedCreateNestedManyWithoutFieldInputObjectSchema } from './SkillUncheckedCreateNestedManyWithoutFieldInput.schema';
import { PersonUncheckedCreateNestedManyWithoutExpertiseInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutExpertiseInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutFieldsInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    skills: z
      .lazy(() => SkillUncheckedCreateNestedManyWithoutFieldInputObjectSchema)
      .optional(),
    persons: z
      .lazy(
        () => PersonUncheckedCreateNestedManyWithoutExpertiseInputObjectSchema,
      )
      .optional(),
    projects: z
      .lazy(
        () => ProjectUncheckedCreateNestedManyWithoutFieldsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FieldUncheckedCreateInputObjectSchema = Schema;
