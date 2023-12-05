import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FieldUncheckedUpdateManyWithoutPersonsNestedInputObjectSchema } from './FieldUncheckedUpdateManyWithoutPersonsNestedInput.schema';
import { PersonSkillUncheckedUpdateManyWithoutPersonNestedInputObjectSchema } from './PersonSkillUncheckedUpdateManyWithoutPersonNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutProjectsInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    firstName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lastName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    preferredName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
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
    expertise: z
      .lazy(() => FieldUncheckedUpdateManyWithoutPersonsNestedInputObjectSchema)
      .optional(),
    personSkills: z
      .lazy(
        () =>
          PersonSkillUncheckedUpdateManyWithoutPersonNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonUncheckedUpdateWithoutProjectsInputObjectSchema = Schema;
