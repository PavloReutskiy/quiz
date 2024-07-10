import { z } from 'zod';

export const ageSchema = z.object({
  age: z.enum(['18-29 years', '30-39 years', '40-49 years', '50+']),
});

export type AgeSchema = z.infer<typeof ageSchema>;
