import { z } from "zod";

export const featureGridSchema = z.object({
  id: z.string(),
  type: z.literal("featureGrid"),
  props: z.object({
    title: z.string(),
    items: z.array(z.string()),
  }),
});
