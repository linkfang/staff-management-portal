import { z } from 'zod';
import { ProjectIncludeObjectSchema } from './objects/ProjectInclude.schema';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';

export const ProjectFindUniqueSchema = z.object({
  include: ProjectIncludeObjectSchema.optional(),
  where: ProjectWhereUniqueInputObjectSchema,
});
