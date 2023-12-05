import { z } from 'zod';
import { ProjectIncludeObjectSchema } from './objects/ProjectInclude.schema';
import { ProjectCreateInputObjectSchema } from './objects/ProjectCreateInput.schema';
import { ProjectUncheckedCreateInputObjectSchema } from './objects/ProjectUncheckedCreateInput.schema';

export const ProjectCreateOneSchema = z.object({
  include: ProjectIncludeObjectSchema.optional(),
  data: z.union([
    ProjectCreateInputObjectSchema,
    ProjectUncheckedCreateInputObjectSchema,
  ]),
});
