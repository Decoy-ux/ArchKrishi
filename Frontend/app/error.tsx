"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="card space-y-3 p-6">
      <h1 className="text-xl font-bold text-forest">Something went wrong</h1>
      <p className="text-sm muted">The page could not be displayed. Please try again.</p>
      {process.env.NODE_ENV === "development" && (
        <p className="break-words text-xs text-red-700">{error.message}</p>
      )}
      <button
        onClick={() => reset()}
        className="rounded-xl bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-leaf"
      >
        Try again
      </button>
    </section>
  );
}
