import { z } from "zod";
import { heroSchema } from "./heroSchema";
import { ctaSchema } from "./ctaSchema";
import { featureGridSchema } from "./featureGridSchema";
import { testimonialSchema } from "./testimonialSchema";

export const sectionSchema = z.discriminatedUnion("type", [
  heroSchema,
  ctaSchema,
  featureGridSchema,
  testimonialSchema,
]);

export const pageSchema = z.object({
  pageId: z.string(),
  slug: z.string(),
  title: z.string(),
  sections: z.array(sectionSchema),
});

export type PageSchema = z.infer<typeof pageSchema>;
