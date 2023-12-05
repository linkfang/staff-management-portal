import { z } from 'zod';
import { PersonSkillIncludeObjectSchema } from './objects/PersonSkillInclude.schema';
import { PersonSkillOrderByWithRelationInputObjectSchema } from './objects/PersonSkillOrderByWithRelationInput.schema';
import { PersonSkillWhereInputObjectSchema } from './objects/PersonSkillWhereInput.schema';
import { PersonSkillWhereUniqueInputObjectSchema } from './objects/PersonSkillWhereUniqueInput.schema';
import { PersonSkillScalarFieldEnumSchema } from './enums/PersonSkillScalarFieldEnum.schema';

export const PersonSkillFindFirstSchema = z.object({
  include: PersonSkillIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PersonSkillOrderByWithRelationInputObjectSchema,
      PersonSkillOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PersonSkillWhereInputObjectSchema.optional(),
  cursor: PersonSkillWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PersonSkillScalarFieldEnumSchema).optional(),
});
