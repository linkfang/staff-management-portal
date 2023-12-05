import { z } from 'zod';
import { FieldUncheckedCreateNestedManyWithoutPersonsInputObjectSchema } from './FieldUncheckedCreateNestedManyWithoutPersonsInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutPersonsInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutPersonsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateWithoutPersonSkillsInput> =
  z
    .object({
      id: z.number().optional(),
      email: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      preferredName: z.string(),
      title: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      expertise: z
        .lazy(
          () => FieldUncheckedCreateNestedManyWithoutPersonsInputObjectSchema,
        )
        .optional(),
      projects: z
        .lazy(
          () => ProjectUncheckedCreateNestedManyWithoutPersonsInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PersonUncheckedCreateWithoutPersonSkillsInputObjectSchema = Schema;