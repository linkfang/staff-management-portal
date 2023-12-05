import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    customer: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ProjectCreateManyInputObjectSchema = Schema;
