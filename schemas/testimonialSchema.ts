import { z } from "zod";

export const testimonialSchema = z.object({
  id: z.string(),
  type: z.literal("testimonial"),
  props: z.object({
    quote: z.string(),
    author: z.string(),
  }),
});
