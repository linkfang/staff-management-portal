import { z } from 'zod';
import { FieldUncheckedCreateNestedManyWithoutSkillsInputObjectSchema } from './FieldUncheckedCreateNestedManyWithoutSkillsInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutSkillsInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedCreateWithoutPersonSkillInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    field: z
      .lazy(() => FieldUncheckedCreateNestedManyWithoutSkillsInputObjectSchema)
      .optional(),
    project: z
      .lazy(
        () => ProjectUncheckedCreateNestedManyWithoutSkillsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SkillUncheckedCreateWithoutPersonSkillInputObjectSchema = Schema;
