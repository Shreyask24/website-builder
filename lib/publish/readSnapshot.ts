import fs from "fs/promises";
import path from "path";

export async function readSnapshot(slug: string, version: string) {
  try {
    const file = path.join(process.cwd(), "releases", slug, `${version}.json`);

    const content = await fs.readFile(file, "utf8");

    return JSON.parse(content);
  } catch {
    return null;
  }
}
