type Props = {
    quote: string;
    author: string;
};

export default function Testimonial({
    quote,
    author,
}: Props) {
    return (
        <section className="py-16">
            <blockquote className="text-xl italic">
                "{quote}"
            </blockquote>

            <p className="mt-4 font-semibold">
                — {author}
            </p>
        </section>
    );
}