import type { Page } from "@/types/page";
import type { Change } from "./diff";

export interface ReleaseSnapshot {
  version: string;
  publishedAt: string;
  changes: Change[];
  page: Page;
}

export function createSnapshot(
  version: string,
  page: Page,
  changes: Change[],
): ReleaseSnapshot {
  return {
    version,
    publishedAt: new Date().toISOString(),
    changes,
    page: structuredClone(page),
  };
}
