import { z } from 'zod';

export const genderSchema = z.object({
  gender: z.enum(['Female', 'Male', 'Other']),
});

export type GenderSchema = z.infer<typeof genderSchema>;
