import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutSkillsInputObjectSchema } from './ProjectCreateWithoutSkillsInput.schema';
import { ProjectUncheckedCreateWithoutSkillsInputObjectSchema } from './ProjectUncheckedCreateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutSkillsInput> = z
  .object({
    where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutSkillsInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutSkillsInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectCreateOrConnectWithoutSkillsInputObjectSchema = Schema;
