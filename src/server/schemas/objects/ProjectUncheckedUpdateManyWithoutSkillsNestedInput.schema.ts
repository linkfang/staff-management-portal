import { z } from 'zod';
import { ProjectCreateWithoutSkillsInputObjectSchema } from './ProjectCreateWithoutSkillsInput.schema';
import { ProjectUncheckedCreateWithoutSkillsInputObjectSchema } from './ProjectUncheckedCreateWithoutSkillsInput.schema';
import { ProjectCreateOrConnectWithoutSkillsInputObjectSchema } from './ProjectCreateOrConnectWithoutSkillsInput.schema';
import { ProjectUpsertWithWhereUniqueWithoutSkillsInputObjectSchema } from './ProjectUpsertWithWhereUniqueWithoutSkillsInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithWhereUniqueWithoutSkillsInputObjectSchema } from './ProjectUpdateWithWhereUniqueWithoutSkillsInput.schema';
import { ProjectUpdateManyWithWhereWithoutSkillsInputObjectSchema } from './ProjectUpdateManyWithWhereWithoutSkillsInput.schema';
import { ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutSkillsNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(
            () => ProjectUpsertWithWhereUniqueWithoutSkillsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpsertWithWhereUniqueWithoutSkillsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ProjectUpdateWithWhereUniqueWithoutSkillsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpdateWithWhereUniqueWithoutSkillsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProjectUpdateManyWithWhereWithoutSkillsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpdateManyWithWhereWithoutSkillsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProjectScalarWhereInputObjectSchema),
          z.lazy(() => ProjectScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectUncheckedUpdateManyWithoutSkillsNestedInputObjectSchema =
  Schema;
