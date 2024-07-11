import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const hasOneToManyTrue = (values: FieldValues, min: number, max: number) => {
  const trueCount = Object.values(values).filter(
    (value) => value === true,
  ).length;
  return trueCount >= min && trueCount <= max;
};

export const topicsSchema = z
  .object({
    werewolf: z.boolean().optional(),
    romance: z.boolean().optional(),
    action: z.boolean().optional(),
    youngAdult: z.boolean().optional(),
    royalObsession: z.boolean().optional(),
    badBoy: z.boolean().optional(),
    billionaire: z.boolean().optional(),
    poetry: z.boolean().optional(),
    crime: z.boolean().optional(),
    horror: z.boolean().optional(),
    fantasy: z.boolean().optional(),
    biography: z.boolean().optional(),
    historicalNovel: z.boolean().optional(),
    manga: z.boolean().optional(),
    nonfiction: z.boolean().optional(),
    comics: z.boolean().optional(),
    classics: z.boolean().optional(),
    travel: z.boolean().optional(),
    scienceFiction: z.boolean().optional(),
  })
  .refine((data) => hasOneToManyTrue(data, 1, 3));

export type TopicsSchema = z.infer<typeof topicsSchema>;
