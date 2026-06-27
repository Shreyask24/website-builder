import { describe, expect, it } from "vitest";

import { pageSchema } from "@/schemas/pageSchema";

import { mockPage } from "@/lib/data/mockPage";

describe("Page Schema", () => {
  it("validates page", () => {
    expect(pageSchema.safeParse(mockPage).success).toBe(true);
  });
});
