import { z } from 'zod';
import { ProjectIncludeObjectSchema } from './objects/ProjectInclude.schema';
import { ProjectUpdateInputObjectSchema } from './objects/ProjectUpdateInput.schema';
import { ProjectUncheckedUpdateInputObjectSchema } from './objects/ProjectUncheckedUpdateInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';

export const ProjectUpdateOneSchema = z.object({
  include: ProjectIncludeObjectSchema.optional(),
  data: z.union([
    ProjectUpdateInputObjectSchema,
    ProjectUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjectWhereUniqueInputObjectSchema,
});
