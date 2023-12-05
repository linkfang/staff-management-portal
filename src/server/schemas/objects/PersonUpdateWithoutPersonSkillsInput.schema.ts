import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FieldUpdateManyWithoutPersonsNestedInputObjectSchema } from './FieldUpdateManyWithoutPersonsNestedInput.schema';
import { ProjectUpdateManyWithoutPersonsNestedInputObjectSchema } from './ProjectUpdateManyWithoutPersonsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateWithoutPersonSkillsInput> = z
  .object({
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
      .lazy(() => FieldUpdateManyWithoutPersonsNestedInputObjectSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectUpdateManyWithoutPersonsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonUpdateWithoutPersonSkillsInputObjectSchema = Schema;
