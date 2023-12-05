import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PersonUncheckedUpdateManyWithoutExpertiseNestedInputObjectSchema } from './PersonUncheckedUpdateManyWithoutExpertiseNestedInput.schema';
import { ProjectUncheckedUpdateManyWithoutFieldsNestedInputObjectSchema } from './ProjectUncheckedUpdateManyWithoutFieldsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldUncheckedUpdateWithoutSkillsInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    persons: z
      .lazy(
        () => PersonUncheckedUpdateManyWithoutExpertiseNestedInputObjectSchema,
      )
      .optional(),
    projects: z
      .lazy(
        () => ProjectUncheckedUpdateManyWithoutFieldsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FieldUncheckedUpdateWithoutSkillsInputObjectSchema = Schema;
