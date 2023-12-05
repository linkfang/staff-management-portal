import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutFieldsInputObjectSchema } from './ProjectUpdateWithoutFieldsInput.schema';
import { ProjectUncheckedUpdateWithoutFieldsInputObjectSchema } from './ProjectUncheckedUpdateWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutFieldsInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectUpdateWithoutFieldsInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutFieldsInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpdateWithWhereUniqueWithoutFieldsInputObjectSchema =
  Schema;
