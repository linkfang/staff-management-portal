import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FieldUncheckedUpdateManyWithoutProjectsNestedInputObjectSchema } from './FieldUncheckedUpdateManyWithoutProjectsNestedInput.schema';
import { PersonUncheckedUpdateManyWithoutProjectsNestedInputObjectSchema } from './PersonUncheckedUpdateManyWithoutProjectsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutSkillsInput> = z
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
    customer: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    startDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    endDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    fields: z
      .lazy(
        () => FieldUncheckedUpdateManyWithoutProjectsNestedInputObjectSchema,
      )
      .optional(),
    persons: z
      .lazy(
        () => PersonUncheckedUpdateManyWithoutProjectsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjectUncheckedUpdateWithoutSkillsInputObjectSchema = Schema;
