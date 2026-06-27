import { z } from "zod";

export const ctaSchema = z.object({
  id: z.string(),
  type: z.literal("cta"),
  props: z.object({
    label: z.string(),
    url: z.string(),
  }),
});
