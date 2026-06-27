import type { Page } from "@/types/page";

export type ChangeType =
  | "PROP_CHANGED"
  | "SECTION_ADDED"
  | "SECTION_REMOVED"
  | "SECTION_TYPE_CHANGED";

export interface Change {
  type: ChangeType;

  sectionId: string;

  sectionType: string;

  summary: string;
}

export function diffPages(published: Page, draft: Page): Change[] {
  const changes: Change[] = [];

  const publishedMap = new Map(
    published.sections.map((section) => [section.id, section]),
  );

  const draftMap = new Map(
    draft.sections.map((section) => [section.id, section]),
  );

  // Removed + Modified
  for (const publishedSection of published.sections) {
    const draftSection = draftMap.get(publishedSection.id);

    if (!draftSection) {
      changes.push({
        type: "SECTION_REMOVED",
        sectionId: publishedSection.id,
        sectionType: publishedSection.type,
        summary: `${publishedSection.type} removed`,
      });

      continue;
    }

    if (publishedSection.type !== draftSection.type) {
      changes.push({
        type: "SECTION_TYPE_CHANGED",
        sectionId: publishedSection.id,
        sectionType: draftSection.type,
        summary: `${publishedSection.type} changed to ${draftSection.type}`,
      });

      continue;
    }

    if (
      JSON.stringify(publishedSection.props) !==
      JSON.stringify(draftSection.props)
    ) {
      changes.push({
        type: "PROP_CHANGED",
        sectionId: draftSection.id,
        sectionType: draftSection.type,
        summary: `${draftSection.type} properties changed`,
      });
    }
  }

  // Added
  for (const draftSection of draft.sections) {
    if (!publishedMap.has(draftSection.id)) {
      changes.push({
        type: "SECTION_ADDED",
        sectionId: draftSection.id,
        sectionType: draftSection.type,
        summary: `${draftSection.type} added`,
      });
    }
  }

  return changes;
}
