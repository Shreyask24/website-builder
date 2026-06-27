import PageRenderer from "@/app/components/preview/PageRenderer";
import { getPageBySlug } from "@/lib/contentful/adapter";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function PreviewPage({
    params,
}: Props) {
    const { slug } = await params;

    const page = await getPageBySlug(slug);

    if (!page) {
        notFound();
    }

    return (
        <main className="container mx-auto py-10">
            <PageRenderer page={page} />
        </main>
    );
}