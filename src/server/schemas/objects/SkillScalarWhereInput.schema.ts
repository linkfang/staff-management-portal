import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SkillScalarWhereInputObjectSchema),
        z.lazy(() => SkillScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SkillScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SkillScalarWhereInputObjectSchema),
        z.lazy(() => SkillScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const SkillScalarWhereInputObjectSchema = Schema;
