import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutSkillsInputObjectSchema } from './ProjectUpdateWithoutSkillsInput.schema';
import { ProjectUncheckedUpdateWithoutSkillsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutSkillsInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectUpdateWithoutSkillsInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutSkillsInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpdateWithWhereUniqueWithoutSkillsInputObjectSchema =
  Schema;
