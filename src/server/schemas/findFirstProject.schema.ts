import { z } from 'zod';
import { ProjectIncludeObjectSchema } from './objects/ProjectInclude.schema';
import { ProjectOrderByWithRelationInputObjectSchema } from './objects/ProjectOrderByWithRelationInput.schema';
import { ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';
import { ProjectScalarFieldEnumSchema } from './enums/ProjectScalarFieldEnum.schema';

export const ProjectFindFirstSchema = z.object({
  include: ProjectIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ProjectOrderByWithRelationInputObjectSchema,
      ProjectOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProjectWhereInputObjectSchema.optional(),
  cursor: ProjectWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProjectScalarFieldEnumSchema).optional(),
});
