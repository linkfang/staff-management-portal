import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutPersonsInputObjectSchema } from './ProjectUpdateWithoutPersonsInput.schema';
import { ProjectUncheckedUpdateWithoutPersonsInputObjectSchema } from './ProjectUncheckedUpdateWithoutPersonsInput.schema';
import { ProjectCreateWithoutPersonsInputObjectSchema } from './ProjectCreateWithoutPersonsInput.schema';
import { ProjectUncheckedCreateWithoutPersonsInputObjectSchema } from './ProjectUncheckedCreateWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutPersonsInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectUpdateWithoutPersonsInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutPersonsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProjectCreateWithoutPersonsInputObjectSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutPersonsInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpsertWithWhereUniqueWithoutPersonsInputObjectSchema =
  Schema;
