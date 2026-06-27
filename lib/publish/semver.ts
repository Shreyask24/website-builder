import type { Change } from "./diff";

export function determineVersionBump(
  changes: Change[],
): "major" | "minor" | "patch" | "none" {
  if (changes.length === 0) {
    return "none";
  }

  if (
    changes.some(
      (change) =>
        change.type === "SECTION_REMOVED" ||
        change.type === "SECTION_TYPE_CHANGED",
    )
  ) {
    return "major";
  }

  if (changes.some((change) => change.type === "SECTION_ADDED")) {
    return "minor";
  }

  return "patch";
}

export function nextVersion(
  currentVersion: string,
  bump: "major" | "minor" | "patch",
) {
  const [major, minor, patch] = currentVersion.split(".").map(Number);

  switch (bump) {
    case "major":
      return `${major + 1}.0.0`;

    case "minor":
      return `${major}.${minor + 1}.0`;

    case "patch":
      return `${major}.${minor}.${patch + 1}`;

    default:
      return currentVersion;
  }
}
