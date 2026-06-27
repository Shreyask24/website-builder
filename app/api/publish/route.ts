import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

import { diffPages } from "@/lib/publish/diff";
import { determineVersionBump, nextVersion } from "@/lib/publish/semver";
import { createSnapshot } from "@/lib/publish/snapshot";

import { getPageBySlug } from "@/lib/contentful/adapter";
import { pageSchema } from "@/schemas/pageSchema";
import { getLatestVersion } from "@/lib/publish/version";
import { readSnapshot } from "@/lib/publish/readSnapshot";

export async function POST(req: NextRequest) {
  try {
    const role = req.cookies.get("role")?.value;

    if (role !== "publisher") {
      return NextResponse.json(
        {
          success: false,

          message: "Forbidden",
        },

        {
          status: 403,
        },
      );
    }

    const body = await req.json();

    const draft = pageSchema.parse(body.page);

    const published = await getPageBySlug(draft.slug);

    if (!published) {
      return NextResponse.json(
        {
          success: false,
          message: "Published page not found",
        },
        { status: 404 },
      );
    }

    const changes = diffPages(published, draft);

    const bump = determineVersionBump(changes);

    if (bump === "none") {
      return NextResponse.json({
        success: true,
        version: "No changes",
        changes: [],
      });
    }

    const currentVersion = await getLatestVersion(draft.slug);

    const latestSnapshot = await readSnapshot(draft.slug, currentVersion);

    const version = nextVersion(currentVersion, bump);

    const snapshot = createSnapshot(version, draft, changes);

    const releaseDir = path.join(process.cwd(), "releases", draft.slug);

    if (
      latestSnapshot &&
      JSON.stringify(latestSnapshot.page) === JSON.stringify(draft)
    ) {
      return NextResponse.json({
        success: true,

        version: currentVersion,

        message: "No changes since last publish.",

        changes: [],
      });
    }

    await fs.mkdir(releaseDir, {
      recursive: true,
    });

    await fs.writeFile(
      path.join(releaseDir, `${version}.json`),
      JSON.stringify(snapshot, null, 2),
    );

    return NextResponse.json({
      success: true,
      version,
      changes,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Publish failed",
      },
      {
        status: 500,
      },
    );
  }
}
