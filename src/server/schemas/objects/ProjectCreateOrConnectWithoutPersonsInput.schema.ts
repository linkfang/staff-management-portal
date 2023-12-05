import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutPersonsInputObjectSchema } from './ProjectCreateWithoutPersonsInput.schema';
import { ProjectUncheckedCreateWithoutPersonsInputObjectSchema } from './ProjectUncheckedCreateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutPersonsInput> = z
  .object({
    where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutPersonsInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutPersonsInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectCreateOrConnectWithoutPersonsInputObjectSchema = Schema;
