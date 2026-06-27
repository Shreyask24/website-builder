import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/contentful/adapter";
import StudioClient from "./StudioClient";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function StudioPage({
    params,
}: Props) {
    const { slug } = await params;

    const page = await getPageBySlug(slug, true);

    if (!page) {
        notFound();
    }

    return <StudioClient initialPage={page} />;
}