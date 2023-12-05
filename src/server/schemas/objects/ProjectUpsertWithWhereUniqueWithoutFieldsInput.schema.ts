import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutFieldsInputObjectSchema } from './ProjectUpdateWithoutFieldsInput.schema';
import { ProjectUncheckedUpdateWithoutFieldsInputObjectSchema } from './ProjectUncheckedUpdateWithoutFieldsInput.schema';
import { ProjectCreateWithoutFieldsInputObjectSchema } from './ProjectCreateWithoutFieldsInput.schema';
import { ProjectUncheckedCreateWithoutFieldsInputObjectSchema } from './ProjectUncheckedCreateWithoutFieldsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutFieldsInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectUpdateWithoutFieldsInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutFieldsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProjectCreateWithoutFieldsInputObjectSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutFieldsInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpsertWithWhereUniqueWithoutFieldsInputObjectSchema =
  Schema;
