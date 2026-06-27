import fs from "fs/promises";
import path from "path";

export async function getLatestVersion(slug: string) {
  const releaseDir = path.join(process.cwd(), "releases", slug);

  try {
    const files = await fs.readdir(releaseDir);

    if (!files.length) {
      return "1.0.0";
    }

    const versions = files
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));

    versions.sort(compareVersions);

    return versions.at(-1)!;
  } catch {
    return "1.0.0";
  }
}

function compareVersions(a: string, b: string) {
  const pa = a.split(".").map(Number);

  const pb = b.split(".").map(Number);

  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) {
      return pa[i] - pb[i];
    }
  }

  return 0;
}
