"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <h2 className="text-xl font-semibold">
                Something went wrong!
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
                We couldn&apos;t load this property.
            </p>

            <button
                onClick={() => reset()}
                className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground"
            >
                Try again
            </button>
        </div>
    );
}