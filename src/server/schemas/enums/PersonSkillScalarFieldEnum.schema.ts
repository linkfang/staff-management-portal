import { z } from 'zod';

export const PersonSkillScalarFieldEnumSchema = z.enum([
  'level',
  'createdAt',
  'updatedAt',
  'personId',
  'skillId',
]);
