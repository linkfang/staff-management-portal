import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutFieldsInputObjectSchema } from './ProjectCreateWithoutFieldsInput.schema';
import { ProjectUncheckedCreateWithoutFieldsInputObjectSchema } from './ProjectUncheckedCreateWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutFieldsInput> = z
  .object({
    where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutFieldsInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutFieldsInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectCreateOrConnectWithoutFieldsInputObjectSchema = Schema;
