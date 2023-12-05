import { z } from 'zod';
import { ProjectIncludeObjectSchema } from './ProjectInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectArgs> = z
  .object({
    include: z.lazy(() => ProjectIncludeObjectSchema).optional(),
  })
  .strict();

export const ProjectArgsObjectSchema = Schema;
