import { z } from 'zod';
import { SkillUncheckedCreateNestedManyWithoutFieldInputObjectSchema } from './SkillUncheckedCreateNestedManyWithoutFieldInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutFieldsInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedCreateWithoutPersonsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    skills: z
      .lazy(() => SkillUncheckedCreateNestedManyWithoutFieldInputObjectSchema)
      .optional(),
    projects: z
      .lazy(
        () => ProjectUncheckedCreateNestedManyWithoutFieldsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FieldUncheckedCreateWithoutPersonsInputObjectSchema = Schema;
