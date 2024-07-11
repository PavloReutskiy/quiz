import { z } from 'zod';

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const emailSchema = z.object({
  email: z.string().email().regex(emailRegex),
});

export type EmailSchema = z.infer<typeof emailSchema>;
