import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'customer',
  'startDate',
  'endDate',
  'description',
  'createdAt',
  'updatedAt',
]);
