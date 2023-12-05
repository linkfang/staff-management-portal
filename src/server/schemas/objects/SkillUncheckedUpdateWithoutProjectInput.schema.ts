import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FieldUncheckedUpdateManyWithoutSkillsNestedInputObjectSchema } from './FieldUncheckedUpdateManyWithoutSkillsNestedInput.schema';
import { PersonSkillUncheckedUpdateManyWithoutSkillNestedInputObjectSchema } from './PersonSkillUncheckedUpdateManyWithoutSkillNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedUpdateWithoutProjectInput> = z
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
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    field: z
      .lazy(() => FieldUncheckedUpdateManyWithoutSkillsNestedInputObjectSchema)
      .optional(),
    personSkill: z
      .lazy(
        () => PersonSkillUncheckedUpdateManyWithoutSkillNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SkillUncheckedUpdateWithoutProjectInputObjectSchema = Schema;
