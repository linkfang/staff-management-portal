import { z } from 'zod';
import { ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';
import { ProjectUpdateManyMutationInputObjectSchema } from './ProjectUpdateManyMutationInput.schema';
import { ProjectUncheckedUpdateManyWithoutProjectsInputObjectSchema } from './ProjectUncheckedUpdateManyWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutFieldsInput> = z
  .object({
    where: z.lazy(() => ProjectScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ProjectUpdateManyMutationInputObjectSchema),
      z.lazy(() => ProjectUncheckedUpdateManyWithoutProjectsInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectUpdateManyWithWhereWithoutFieldsInputObjectSchema = Schema;
