import { z } from 'zod';
import { ProjectCreateWithoutFieldsInputObjectSchema } from './ProjectCreateWithoutFieldsInput.schema';
import { ProjectUncheckedCreateWithoutFieldsInputObjectSchema } from './ProjectUncheckedCreateWithoutFieldsInput.schema';
import { ProjectCreateOrConnectWithoutFieldsInputObjectSchema } from './ProjectCreateOrConnectWithoutFieldsInput.schema';
import { ProjectUpsertWithWhereUniqueWithoutFieldsInputObjectSchema } from './ProjectUpsertWithWhereUniqueWithoutFieldsInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithWhereUniqueWithoutFieldsInputObjectSchema } from './ProjectUpdateWithWhereUniqueWithoutFieldsInput.schema';
import { ProjectUpdateManyWithWhereWithoutFieldsInputObjectSchema } from './ProjectUpdateManyWithWhereWithoutFieldsInput.schema';
import { ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutFieldsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjectCreateWithoutFieldsInputObjectSchema),
          z.lazy(() => ProjectCreateWithoutFieldsInputObjectSchema).array(),
          z.lazy(() => ProjectUncheckedCreateWithoutFieldsInputObjectSchema),
          z
            .lazy(() => ProjectUncheckedCreateWithoutFieldsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProjectCreateOrConnectWithoutFieldsInputObjectSchema),
          z
            .lazy(() => ProjectCreateOrConnectWithoutFieldsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ProjectUpsertWithWhereUniqueWithoutFieldsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpsertWithWhereUniqueWithoutFieldsInputObjectSchema,
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
            () => ProjectUpdateWithWhereUniqueWithoutFieldsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpdateWithWhereUniqueWithoutFieldsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProjectUpdateManyWithWhereWithoutFieldsInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjectUpdateManyWithWhereWithoutFieldsInputObjectSchema,
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

export const ProjectUncheckedUpdateManyWithoutFieldsNestedInputObjectSchema =
  Schema;
