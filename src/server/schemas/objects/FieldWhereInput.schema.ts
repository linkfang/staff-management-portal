import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { SkillListRelationFilterObjectSchema } from './SkillListRelationFilter.schema';
import { PersonListRelationFilterObjectSchema } from './PersonListRelationFilter.schema';
import { ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FieldWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FieldWhereInputObjectSchema),
        z.lazy(() => FieldWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FieldWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FieldWhereInputObjectSchema),
        z.lazy(() => FieldWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    skills: z.lazy(() => SkillListRelationFilterObjectSchema).optional(),
    persons: z.lazy(() => PersonListRelationFilterObjectSchema).optional(),
    projects: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const FieldWhereInputObjectSchema = Schema;
