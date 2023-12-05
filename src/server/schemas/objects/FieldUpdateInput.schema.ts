import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SkillUpdateManyWithoutFieldNestedInputObjectSchema } from './SkillUpdateManyWithoutFieldNestedInput.schema';
import { PersonUpdateManyWithoutExpertiseNestedInputObjectSchema } from './PersonUpdateManyWithoutExpertiseNestedInput.schema';
import { ProjectUpdateManyWithoutFieldsNestedInputObjectSchema } from './ProjectUpdateManyWithoutFieldsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    skills: z
      .lazy(() => SkillUpdateManyWithoutFieldNestedInputObjectSchema)
      .optional(),
    persons: z
      .lazy(() => PersonUpdateManyWithoutExpertiseNestedInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUpdateManyWithoutFieldsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const FieldUpdateInputObjectSchema = Schema;
