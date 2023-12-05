import { z } from 'zod';
import { ProjectCreateWithoutFieldsInputObjectSchema } from './ProjectCreateWithoutFieldsInput.schema';
import { ProjectUncheckedCreateWithoutFieldsInputObjectSchema } from './ProjectUncheckedCreateWithoutFieldsInput.schema';
import { ProjectCreateOrConnectWithoutFieldsInputObjectSchema } from './ProjectCreateOrConnectWithoutFieldsInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutFieldsInput> =
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
      connect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectUncheckedCreateNestedManyWithoutFieldsInputObjectSchema =
  Schema;
