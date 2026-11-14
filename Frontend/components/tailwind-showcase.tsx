"use client";

import { useState } from "react";
import { Sprout, Droplets, ThermometerSun, CloudRain, Menu, X } from "lucide-react";

const farmMetrics = [
  { title: "Soil moisture", value: "28", unit: "%", note: "Illustrative demo value", icon: Droplets },
  { title: "Temperature", value: "29", unit: "°C", note: "Illustrative demo value", icon: ThermometerSun },
  { title: "Rainfall", value: "12", unit: "mm", note: "Illustrative demo value", icon: CloudRain },
];

export default function TailwindShowcase() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-canvas text-ink">
      {/* Responsive header: horizontal on desktop, collapsible on mobile */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-mint p-2 text-forest">
              <Sprout size={25} />
            </span>
            <div>
              <h1 className="text-lg font-bold sm:text-xl">Fieldwise</h1>
              <p className="text-xs text-gray-500">Smart Agriculture Platform</p>
            </div>
          </div>
          <button
            className="rounded-lg p-2 text-forest hover:bg-mint md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
            <a className="hover:text-leaf" href="#overview">Overview</a>
            <a className="hover:text-leaf" href="#metrics">Farm metrics</a>
            <a className="hover:text-leaf" href="#about">About</a>
          </nav>
        </div>
        {menuOpen && (
          <nav className="space-y-1 border-t border-gray-100 px-4 py-3 text-sm md:hidden">
            <a onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-mint" href="#overview">Overview</a>
            <a onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-mint" href="#metrics">Farm metrics</a>
            <a onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-mint" href="#about">About</a>
          </nav>
        )}
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <section id="overview" className="rounded-3xl bg-forest px-6 py-8 text-white shadow-lg sm:px-8 sm:py-10">
          <p className="text-sm font-semibold text-green-200">FARM OVERVIEW</p>
          <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Make informed decisions for a healthier farm.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-green-100 sm:text-base">
            A responsive interface for farm information, observations, and planning tools.
          </p>
          <a href="#metrics" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-forest transition hover:bg-mint">
            View farm metrics
          </a>
        </section>

        <section id="metrics">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">Farm indicators</h2>
              <p className="mt-1 text-sm text-gray-500">Example cards demonstrating responsive Tailwind layouts.</p>
            </div>
            <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              Sample data only
            </span>
          </div>

          {/* 1 column on mobile, 2 on small screens, 3 on desktop */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {farmMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                    <span className="rounded-xl bg-mint p-2 text-leaf"><Icon size={20} /></span>
                  </div>
                  <p className="mt-5 text-3xl font-bold text-forest">
                    {metric.value}<span className="ml-1 text-base font-medium text-gray-500">{metric.unit}</span>
                  </p>
                  <p className="mt-2 text-xs text-gray-500">{metric.note}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
          <h2 className="text-lg font-bold">Why Tailwind CSS?</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Utility classes keep styling beside the component markup. Responsive prefixes such as
            sm:, md:, and lg: let the layout adapt to different screen widths without writing
            separate media-query rules for each component.
          </p>
        </section>
        <p className="pb-4 text-center text-xs text-gray-500">
          Fieldwise · Responsive Tailwind CSS demonstration
        </p>
      </div>
    </main>
  );
}
