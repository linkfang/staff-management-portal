import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonSkillScalarWhereInputObjectSchema),
        z.lazy(() => PersonSkillScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonSkillScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonSkillScalarWhereInputObjectSchema),
        z.lazy(() => PersonSkillScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    level: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    personId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    skillId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const PersonSkillScalarWhereInputObjectSchema = Schema;
