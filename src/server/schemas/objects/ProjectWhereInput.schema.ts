import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SkillListRelationFilterObjectSchema } from './SkillListRelationFilter.schema';
import { FieldListRelationFilterObjectSchema } from './FieldListRelationFilter.schema';
import { PersonListRelationFilterObjectSchema } from './PersonListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectWhereInputObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectWhereInputObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    customer: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    startDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    endDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    skills: z.lazy(() => SkillListRelationFilterObjectSchema).optional(),
    fields: z.lazy(() => FieldListRelationFilterObjectSchema).optional(),
    persons: z.lazy(() => PersonListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ProjectWhereInputObjectSchema = Schema;
