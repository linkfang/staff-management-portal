import { z } from 'zod';
import { ProjectIncludeObjectSchema } from './objects/ProjectInclude.schema';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';

export const ProjectDeleteOneSchema = z.object({
  include: ProjectIncludeObjectSchema.optional(),
  where: ProjectWhereUniqueInputObjectSchema,
});
