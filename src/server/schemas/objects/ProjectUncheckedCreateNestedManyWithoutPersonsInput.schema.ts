import { z } from 'zod';
import { ProjectCreateWithoutPersonsInputObjectSchema } from './ProjectCreateWithoutPersonsInput.schema';
import { ProjectUncheckedCreateWithoutPersonsInputObjectSchema } from './ProjectUncheckedCreateWithoutPersonsInput.schema';
import { ProjectCreateOrConnectWithoutPersonsInputObjectSchema } from './ProjectCreateOrConnectWithoutPersonsInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutPersonsInput> =
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
      connect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectUncheckedCreateNestedManyWithoutPersonsInputObjectSchema =
  Schema;
