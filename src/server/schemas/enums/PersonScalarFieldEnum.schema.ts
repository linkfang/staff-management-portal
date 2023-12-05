import { z } from 'zod';

export const PersonScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'firstName',
  'lastName',
  'preferredName',
  'title',
  'createdAt',
  'updatedAt',
]);
