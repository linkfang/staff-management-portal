import { z } from 'zod'
import { FieldOrderByWithRelationInputObjectSchema } from './objects/FieldOrderByWithRelationInput.schema'
import { FieldWhereInputObjectSchema } from './objects/FieldWhereInput.schema'
import { FieldWhereUniqueInputObjectSchema } from './objects/FieldWhereUniqueInput.schema'
import { FieldCountAggregateInputObjectSchema } from './objects/FieldCountAggregateInput.schema'
import { FieldMinAggregateInputObjectSchema } from './objects/FieldMinAggregateInput.schema'
import { FieldMaxAggregateInputObjectSchema } from './objects/FieldMaxAggregateInput.schema'
import { FieldAvgAggregateInputObjectSchema } from './objects/FieldAvgAggregateInput.schema'
import { FieldSumAggregateInputObjectSchema } from './objects/FieldSumAggregateInput.schema'

export const FieldAggregateSchema = z.object({
  orderBy: z
    .union([FieldOrderByWithRelationInputObjectSchema, FieldOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: FieldWhereInputObjectSchema.optional(),
  cursor: FieldWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), FieldCountAggregateInputObjectSchema]).optional(),
  _min: FieldMinAggregateInputObjectSchema.optional(),
  _max: FieldMaxAggregateInputObjectSchema.optional(),
  _avg: FieldAvgAggregateInputObjectSchema.optional(),
  _sum: FieldSumAggregateInputObjectSchema.optional(),
})
