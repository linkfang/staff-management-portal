import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FieldListRelationFilterObjectSchema } from './FieldListRelationFilter.schema';
import { PersonSkillListRelationFilterObjectSchema } from './PersonSkillListRelationFilter.schema';
import { ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonWhereInputObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonWhereInputObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    preferredName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    expertise: z.lazy(() => FieldListRelationFilterObjectSchema).optional(),
    personSkills: z
      .lazy(() => PersonSkillListRelationFilterObjectSchema)
      .optional(),
    projects: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const PersonWhereInputObjectSchema = Schema;
