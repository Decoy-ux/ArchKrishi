export default function Loading() {
  return (
    <div className="card animate-pulse space-y-3 p-6" aria-live="polite">
      <div className="h-5 w-40 rounded bg-[#E5ECE6]" />
      <div className="h-8 w-64 rounded bg-[#E5ECE6]" />
      <div className="h-24 rounded bg-[#F0F4F1]" />
      <p className="text-sm muted">Loading your agriculture workspace…</p>
    </div>
  );
}
