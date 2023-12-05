import { z } from 'zod';
import { PersonSkillCreateWithoutSkillInputObjectSchema } from './PersonSkillCreateWithoutSkillInput.schema';
import { PersonSkillUncheckedCreateWithoutSkillInputObjectSchema } from './PersonSkillUncheckedCreateWithoutSkillInput.schema';
import { PersonSkillCreateOrConnectWithoutSkillInputObjectSchema } from './PersonSkillCreateOrConnectWithoutSkillInput.schema';
import { PersonSkillCreateManySkillInputEnvelopeObjectSchema } from './PersonSkillCreateManySkillInputEnvelope.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './PersonSkillWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonSkillCreateNestedManyWithoutSkillInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PersonSkillCreateWithoutSkillInputObjectSchema),
        z.lazy(() => PersonSkillCreateWithoutSkillInputObjectSchema).array(),
        z.lazy(() => PersonSkillUncheckedCreateWithoutSkillInputObjectSchema),
        z
          .lazy(() => PersonSkillUncheckedCreateWithoutSkillInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PersonSkillCreateOrConnectWithoutSkillInputObjectSchema),
        z
          .lazy(() => PersonSkillCreateOrConnectWithoutSkillInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PersonSkillCreateManySkillInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PersonSkillWhereUniqueInputObjectSchema),
        z.lazy(() => PersonSkillWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PersonSkillCreateNestedManyWithoutSkillInputObjectSchema = Schema;
