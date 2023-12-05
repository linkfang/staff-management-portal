import { z } from 'zod'
import { PersonOrderByWithRelationInputObjectSchema } from './objects/PersonOrderByWithRelationInput.schema'
import { PersonWhereInputObjectSchema } from './objects/PersonWhereInput.schema'
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema'
import { PersonCountAggregateInputObjectSchema } from './objects/PersonCountAggregateInput.schema'
import { PersonMinAggregateInputObjectSchema } from './objects/PersonMinAggregateInput.schema'
import { PersonMaxAggregateInputObjectSchema } from './objects/PersonMaxAggregateInput.schema'
import { PersonAvgAggregateInputObjectSchema } from './objects/PersonAvgAggregateInput.schema'
import { PersonSumAggregateInputObjectSchema } from './objects/PersonSumAggregateInput.schema'

export const PersonAggregateSchema = z.object({
  orderBy: z
    .union([PersonOrderByWithRelationInputObjectSchema, PersonOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: PersonWhereInputObjectSchema.optional(),
  cursor: PersonWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), PersonCountAggregateInputObjectSchema]).optional(),
  _min: PersonMinAggregateInputObjectSchema.optional(),
  _max: PersonMaxAggregateInputObjectSchema.optional(),
  _avg: PersonAvgAggregateInputObjectSchema.optional(),
  _sum: PersonSumAggregateInputObjectSchema.optional(),
})
