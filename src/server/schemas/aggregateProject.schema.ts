import { z } from 'zod';
import { ProjectOrderByWithRelationInputObjectSchema } from './objects/ProjectOrderByWithRelationInput.schema';
import { ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';
import { ProjectCountAggregateInputObjectSchema } from './objects/ProjectCountAggregateInput.schema';
import { ProjectMinAggregateInputObjectSchema } from './objects/ProjectMinAggregateInput.schema';
import { ProjectMaxAggregateInputObjectSchema } from './objects/ProjectMaxAggregateInput.schema';
import { ProjectAvgAggregateInputObjectSchema } from './objects/ProjectAvgAggregateInput.schema';
import { ProjectSumAggregateInputObjectSchema } from './objects/ProjectSumAggregateInput.schema';

export const ProjectAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), ProjectCountAggregateInputObjectSchema])
    .optional(),
  _min: ProjectMinAggregateInputObjectSchema.optional(),
  _max: ProjectMaxAggregateInputObjectSchema.optional(),
  _avg: ProjectAvgAggregateInputObjectSchema.optional(),
  _sum: ProjectSumAggregateInputObjectSchema.optional(),
});
