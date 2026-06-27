type Props = {
    heading: string;
    subHeading: string;
    image?: string;
};

export default function Hero({
    heading,
    subHeading,
    image,
}: Props) {
    return (

        <section className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-12 py-24 text-center text-white shadow-lg">
            <h1 className="text-5xl font-bold tracking-tight">{heading}</h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                {subHeading}
            </p>

            {image && (
                <img
                    src={image}
                    alt={heading}
                    className="mx-auto rounded-lg"
                />
            )}
        </section>
    );
}