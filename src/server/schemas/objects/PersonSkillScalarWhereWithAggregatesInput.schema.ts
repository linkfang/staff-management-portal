import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonSkillScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => PersonSkillScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonSkillScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonSkillScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => PersonSkillScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    level: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    personId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    skillId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const PersonSkillScalarWhereWithAggregatesInputObjectSchema = Schema;
