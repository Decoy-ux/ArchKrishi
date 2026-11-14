import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reports",
  description: "Generate and export farm summary reports.",
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-leaf">Farm summaries</p>
        <h2 className="mt-1 text-2xl font-bold">Reports</h2>
        <p className="mt-2 text-sm muted">
          Seasonal performance summaries, soil analyses, and exported data records.
        </p>
      </div>
      <div className="card p-6">
        <p className="font-semibold text-forest">Reports</p>
        <p className="mt-2 text-sm muted">
          This module is planned but not implemented yet. The next build can add its screens and connect its API endpoint.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-lg bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-leaf"
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
