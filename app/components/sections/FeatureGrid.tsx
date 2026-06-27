type Props = {
    title: string;
    items: string[];
};

export default function FeatureGrid({
    title,
    items,
}: Props) {
    return (
        <section className="py-16">
            <h2 className="mb-8 text-3xl font-bold">
                {title}
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
                {items.map((item) => (
                    <div
                        key={item}
                        className="rounded border p-5"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}