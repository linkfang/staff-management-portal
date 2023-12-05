import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SkillUpdateOneRequiredWithoutPersonSkillNestedInputObjectSchema } from './SkillUpdateOneRequiredWithoutPersonSkillNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillUpdateWithoutPersonInput> = z
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
    skill: z
      .lazy(
        () => SkillUpdateOneRequiredWithoutPersonSkillNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonSkillUpdateWithoutPersonInputObjectSchema = Schema;
