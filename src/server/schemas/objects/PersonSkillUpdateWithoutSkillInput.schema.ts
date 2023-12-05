import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PersonUpdateOneRequiredWithoutPersonSkillsNestedInputObjectSchema } from './PersonUpdateOneRequiredWithoutPersonSkillsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpdateWithoutSkillInput> = z
  .object({
    level: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
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
    person: z
      .lazy(
        () => PersonUpdateOneRequiredWithoutPersonSkillsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonSkillUpdateWithoutSkillInputObjectSchema = Schema;
