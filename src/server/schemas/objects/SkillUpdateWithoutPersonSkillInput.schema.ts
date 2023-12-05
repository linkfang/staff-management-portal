import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FieldUpdateManyWithoutSkillsNestedInputObjectSchema } from './FieldUpdateManyWithoutSkillsNestedInput.schema';
import { ProjectUpdateManyWithoutSkillsNestedInputObjectSchema } from './ProjectUpdateManyWithoutSkillsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpdateWithoutPersonSkillInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    field: z
      .lazy(() => FieldUpdateManyWithoutSkillsNestedInputObjectSchema)
      .optional(),
    project: z
      .lazy(() => ProjectUpdateManyWithoutSkillsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SkillUpdateWithoutPersonSkillInputObjectSchema = Schema;
