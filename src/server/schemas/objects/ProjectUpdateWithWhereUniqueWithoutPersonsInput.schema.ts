import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutPersonsInputObjectSchema } from './ProjectUpdateWithoutPersonsInput.schema';
import { ProjectUncheckedUpdateWithoutPersonsInputObjectSchema } from './ProjectUncheckedUpdateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutPersonsInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectUpdateWithoutPersonsInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutPersonsInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpdateWithWhereUniqueWithoutPersonsInputObjectSchema =
  Schema;
