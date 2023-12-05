import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SkillUpdateManyWithoutFieldNestedInputObjectSchema } from './SkillUpdateManyWithoutFieldNestedInput.schema';
import { ProjectUpdateManyWithoutFieldsNestedInputObjectSchema } from './ProjectUpdateManyWithoutFieldsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUpdateWithoutPersonsInput> = z
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
    projects: z
      .lazy(() => ProjectUpdateManyWithoutFieldsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const FieldUpdateWithoutPersonsInputObjectSchema = Schema;
