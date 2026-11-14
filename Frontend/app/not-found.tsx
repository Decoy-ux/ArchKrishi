import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card space-y-3 p-6">
      <p className="text-sm font-semibold text-leaf">404 · Page not found</p>
      <h1 className="text-2xl font-bold text-forest">We could not find that page.</h1>
      <p className="text-sm muted">Check the address or return to your farm dashboard.</p>
      <Link
        href="/"
        className="inline-block rounded-xl bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-leaf"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
