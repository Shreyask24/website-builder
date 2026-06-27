import { describe, expect, it } from "vitest";

import { determineVersionBump, nextVersion } from "@/lib/publish/semver";

describe("SemVer", () => {
  it("returns patch", () => {
    expect(
      determineVersionBump([
        {
          type: "PROP_CHANGED",
        } as any,
      ]),
    ).toBe("patch");
  });

  it("returns minor", () => {
    expect(
      determineVersionBump([
        {
          type: "SECTION_ADDED",
        } as any,
      ]),
    ).toBe("minor");
  });

  it("returns major", () => {
    expect(
      determineVersionBump([
        {
          type: "SECTION_REMOVED",
        } as any,
      ]),
    ).toBe("major");
  });

  it("increments patch", () => {
    expect(nextVersion("1.0.0", "patch")).toBe("1.0.1");
  });
});
