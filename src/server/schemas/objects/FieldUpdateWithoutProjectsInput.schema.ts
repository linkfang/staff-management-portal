import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SkillUpdateManyWithoutFieldNestedInputObjectSchema } from './SkillUpdateManyWithoutFieldNestedInput.schema';
import { PersonUpdateManyWithoutExpertiseNestedInputObjectSchema } from './PersonUpdateManyWithoutExpertiseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateWithoutProjectsInput> = z
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
  })
  .strict();

export const FieldUpdateWithoutProjectsInputObjectSchema = Schema;
