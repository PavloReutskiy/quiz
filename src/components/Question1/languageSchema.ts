import { z } from 'zod';

export const languageSchema = z.object({
  language: z.enum(['English', 'French', 'German', 'Spanish']),
});

export type LanguageSchema = z.infer<typeof languageSchema>;
