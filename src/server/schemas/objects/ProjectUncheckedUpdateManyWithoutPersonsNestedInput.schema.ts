import { z } from 'zod';
import { ProjectCreateWithoutPersonsInputObjectSchema } from './ProjectCreateWithoutPersonsInput.schema';
import { ProjectUncheckedCreateWithoutPersonsInputObjectSchema } from './ProjectUncheckedCreateWithoutPersonsInput.schema';
import { ProjectCreateOrConnectWithoutPersonsInputObjectSchema } from './ProjectCreateOrConnectWithoutPersonsInput.schema';
import { ProjectUpsertWithWhereUniqueWithoutPersonsInputObjectSchema } from './ProjectUpsertWithWhereUniqueWithoutPersonsInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithWhereUniqueWithoutPersonsInputObjectSchema } from './ProjectUpdateWithWhereUniqueWithoutPersonsInput.schema';
import { ProjectUpdateManyWithWhereWithoutPersonsInputObjectSchema } from './ProjectUpdateManyWithWhereWithoutPersonsInput.schema';
import { ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutPersonsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjectCreateWithoutPersonsInputObjectSchema),
          z.lazy(() => ProjectCreateWithoutPersonsInputObjectSchema).array(),
          z.lazy(() => ProjectUncheckedCreateWithoutPersonsInputObjectSchema),
          z
            .lazy(() => ProjectUncheckedCreateWithoutPersonsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProjectCreateOrConnectWithoutPersonsInputObjectSchema),
          z
            .lazy(() => ProjectCreateOrConnectWithoutPersonsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ProjectUpsertWithWhereUniqueWithoutPersonsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpsertWithWhereUniqueWithoutPersonsInputObjectSchema,
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
            () => ProjectUpdateWithWhereUniqueWithoutPersonsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpdateWithWhereUniqueWithoutPersonsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProjectUpdateManyWithWhereWithoutPersonsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpdateManyWithWhereWithoutPersonsInputObjectSchema,
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

export const ProjectUncheckedUpdateManyWithoutPersonsNestedInputObjectSchema =
  Schema;
