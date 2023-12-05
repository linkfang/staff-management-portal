import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { PersonRelationFilterObjectSchema } from './PersonRelationFilter.schema';
import { PersonWhereInputObjectSchema } from './PersonWhereInput.schema';
import { SkillRelationFilterObjectSchema } from './SkillRelationFilter.schema';
import { SkillWhereInputObjectSchema } from './SkillWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonSkillWhereInputObjectSchema),
        z.lazy(() => PersonSkillWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonSkillWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonSkillWhereInputObjectSchema),
        z.lazy(() => PersonSkillWhereInputObjectSchema).array(),
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
    person: z
      .union([
        z.lazy(() => PersonRelationFilterObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema),
      ])
      .optional(),
    skill: z
      .union([
        z.lazy(() => SkillRelationFilterObjectSchema),
        z.lazy(() => SkillWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PersonSkillWhereInputObjectSchema = Schema;
