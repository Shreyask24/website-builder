type Props = {
    type: string;
};

export default function UnsupportedSection({
    type,
}: Props) {
    return (
        <section className="rounded border border-red-300 bg-red-50 p-6 text-red-700">
            Unsupported section:
            <strong className="ml-2">{type}</strong>
        </section>
    );
}