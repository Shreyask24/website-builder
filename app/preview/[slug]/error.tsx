"use client";

type Props = {
    error: Error;
    reset: () => void;
};

export default function Error({
    error,
    reset,
}: Props) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">
                Failed to render page
            </h1>

            <p>{error.message}</p>

            <button
                onClick={reset}
                className="rounded bg-black px-4 py-2 text-white"
            >
                Retry
            </button>
        </div>
    );
}