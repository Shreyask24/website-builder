import { Button } from "@/components/ui/button";

type Props = {
    label: string;
    url: string;
};

export default function CTA({
    label,
    url,
}: Props) {
    return (
        <section className="rounded-xl bg-blue-600 px-10 py-16 text-center text-white shadow-lg">

            <a
                href={url}
                className="rounded bg-primary px-6 py-3 text-primary-foreground"
            >
                {label}
            </a>
        </section>
    );
}