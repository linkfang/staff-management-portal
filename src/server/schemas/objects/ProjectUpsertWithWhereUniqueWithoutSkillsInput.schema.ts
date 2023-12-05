import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutSkillsInputObjectSchema } from './ProjectUpdateWithoutSkillsInput.schema';
import { ProjectUncheckedUpdateWithoutSkillsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSkillsInput.schema';
import { ProjectCreateWithoutSkillsInputObjectSchema } from './ProjectCreateWithoutSkillsInput.schema';
import { ProjectUncheckedCreateWithoutSkillsInputObjectSchema } from './ProjectUncheckedCreateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutSkillsInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectUpdateWithoutSkillsInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutSkillsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProjectCreateWithoutSkillsInputObjectSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutSkillsInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpsertWithWhereUniqueWithoutSkillsInputObjectSchema =
  Schema;
