import { z } from 'zod';
import { FieldValues } from 'react-hook-form';

const hasAtLeastOneTrue = (values: FieldValues) => {
  return Object.values(values).some((value) => value === true);
};

export const dislikesSchema = z
  .object({
    logic: z.boolean(),
    speed: z.boolean(),
    humor: z.boolean(),
    ending: z.boolean(),
  })
  .refine(hasAtLeastOneTrue);

export type DislikesSchema = z.infer<typeof dislikesSchema>;
