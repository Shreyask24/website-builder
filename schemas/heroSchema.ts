import { z } from "zod";

export const heroSchema = z.object({
  id: z.string(),
  type: z.literal("hero"),
  props: z.object({
    heading: z.string(),
    subHeading: z.string(),
    image: z.string().optional(),
  }),
});
