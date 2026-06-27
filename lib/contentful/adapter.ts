import { pageSchema } from "@/schemas/pageSchema";
import { deliveryClient, previewClient } from "./client";

export async function getPageBySlug(slug: string, preview = false) {
  const client = preview ? previewClient : deliveryClient;

  const response = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    limit: 1,
  });

  if (!response.items.length) {
    return null;
  }

  const entry = response.items[0];

  const page = {
    pageId: entry.fields.pageId,
    slug: entry.fields.slug,
    title: entry.fields.title,
    sections: entry.fields.sections,
  };

  return pageSchema.parse(page);
}
