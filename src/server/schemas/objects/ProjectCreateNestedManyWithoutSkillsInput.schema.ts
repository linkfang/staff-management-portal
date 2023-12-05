import { z } from 'zod';
import { ProjectCreateWithoutSkillsInputObjectSchema } from './ProjectCreateWithoutSkillsInput.schema';
import { ProjectUncheckedCreateWithoutSkillsInputObjectSchema } from './ProjectUncheckedCreateWithoutSkillsInput.schema';
import { ProjectCreateOrConnectWithoutSkillsInputObjectSchema } from './ProjectCreateOrConnectWithoutSkillsInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateNestedManyWithoutSkillsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProjectCreateWithoutSkillsInputObjectSchema),
        z.lazy(() => ProjectCreateWithoutSkillsInputObjectSchema).array(),
        z.lazy(() => ProjectUncheckedCreateWithoutSkillsInputObjectSchema),
        z
          .lazy(() => ProjectUncheckedCreateWithoutSkillsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProjectCreateOrConnectWithoutSkillsInputObjectSchema),
        z
          .lazy(() => ProjectCreateOrConnectWithoutSkillsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputObjectSchema),
        z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProjectCreateNestedManyWithoutSkillsInputObjectSchema = Schema;
