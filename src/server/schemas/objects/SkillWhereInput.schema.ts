import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FieldListRelationFilterObjectSchema } from './FieldListRelationFilter.schema';
import { PersonSkillListRelationFilterObjectSchema } from './PersonSkillListRelationFilter.schema';
import { ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SkillWhereInputObjectSchema),
        z.lazy(() => SkillWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SkillWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SkillWhereInputObjectSchema),
        z.lazy(() => SkillWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    field: z.lazy(() => FieldListRelationFilterObjectSchema).optional(),
    personSkill: z
      .lazy(() => PersonSkillListRelationFilterObjectSchema)
      .optional(),
    project: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const SkillWhereInputObjectSchema = Schema;
