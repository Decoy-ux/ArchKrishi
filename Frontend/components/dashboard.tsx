"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import {
  Activity,
  CircleAlert,
  CloudRain,
  Droplets,
  Leaf,
  MessageCircle,
  Sprout,
  ThermometerSun,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getDashboardData } from "../lib/api";
import type { DashboardData } from "../types";
import { useApp } from "../context/app-context";
import VoiceControls from "@/components/voice-controls";

const metricIcons = [Droplets, ThermometerSun, CloudRain, Sprout];

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const { farmerName, farmProfile } = useApp();

  useEffect(() => {
    getDashboardData()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-leaf">
            Good day, {farmerName} 👋
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
            Your farm at a glance
          </h2>
          <p className="mt-2 text-sm muted">
            {farmProfile.farmName || data?.farmName || "Loading farm…"} ·{" "}
            {farmProfile.location || data?.location || "Loading location…"}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start rounded-xl border border-[#DCE9DF] bg-white px-3 py-2 text-xs text-[#52665A] sm:self-auto">
          <span className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {(data?.metrics ?? []).map((metric, index) => {
          const Icon = metricIcons[index] ?? Activity;
          return (
            <article key={metric.label} className="card p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm muted">{metric.label}</span>
                <span className="rounded-xl bg-mint p-2 text-leaf">
                  <Icon size={19} />
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{metric.value}</span>
                <span className="text-sm muted">{metric.unit}</span>
              </div>
              <p
                className={`mt-2 text-xs ${
                  metric.status === "warning"
                    ? "text-amber-700"
                    : metric.status === "good"
                      ? "text-leaf"
                      : "muted"
                }`}
              >
                {metric.change}
              </p>
            </article>
          );
        })}
        {loading && (
          <div className="card p-5 text-sm muted">Loading farm metrics…</div>
        )}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.65fr_1fr]">
        <article className="card p-5 md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-bold">Climate overview</h3>
              <p className="mt-1 text-xs muted">
                Illustrative monthly rainfall trend
              </p>
            </div>
            <span className="rounded-lg bg-mint px-3 py-1.5 text-xs font-semibold text-leaf">
              Monthly view
            </span>
          </div>
          <div className="mt-5 h-[270px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data?.rainfall ?? []}
                margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="rainFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#63A982" stopOpacity={0.28} />
                    <stop
                      offset="100%"
                      stopColor="#63A982"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  stroke="#EDF2EE"
                  strokeDasharray="4 4"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#829087", fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#829087", fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #E5ECE6",
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="rainfall"
                  name="Rainfall (mm)"
                  stroke="#39865C"
                  strokeWidth={2.5}
                  fill="url(#rainFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs muted">
            Rainfall (mm) · sample data for layout demonstration
          </p>
        </article>

        <article className="card p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold">Farm alerts</h3>
              <p className="mt-1 text-xs muted">Items to review</p>
            </div>
            <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">
              {data?.alerts.length ?? 0} active
            </span>
          </div>
          <div className="mt-4 space-y-3">
            {data?.alerts.map((alert) => (
              <div
                key={alert.id}
                className="rounded-xl border border-[#E9EFEB] p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold">{alert.title}</p>
                  <span
                    className={`rounded-md px-2 py-1 text-[10px] font-bold ${
                      alert.level === "High"
                        ? "bg-red-50 text-red-700"
                        : alert.level === "Medium"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-mint text-leaf"
                    }`}
                  >
                    {alert.level}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-5 muted">{alert.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card p-5 md:p-6">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-mint p-2 text-leaf">
              <Leaf size={19} />
            </div>
            <div>
              <h3 className="font-bold">Crop rotation planner</h3>
              <p className="text-xs muted">Explore a field rotation</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 muted">
            Compare possible crop sequences using farm profile, soil
            information, climate context, and farming priorities. Connect
            validated backend logic before treating results as advice.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#F7FAF7] p-3">
              <p className="text-xs muted">Field name</p>
              <p className="mt-1 text-sm font-semibold">North Field</p>
            </div>
            <div className="rounded-xl bg-[#F7FAF7] p-3">
              <p className="text-xs muted">Planning period</p>
              <p className="mt-1 text-sm font-semibold">Next season</p>
            </div>
          </div>
          <Link
            href="/crop-rotation"
            className="mt-4 inline-block rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-white hover:bg-leaf"
          >
            Open planner
          </Link>
        </article>

        <article className="card p-5 md:p-6">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-mint p-2 text-leaf">
              <MessageCircle size={19} />
            </div>
            <div>
              <h3 className="font-bold">Ask your farm assistant</h3>
              <p className="text-xs muted">Type or speak a question</p>
            </div>
          </div>
          <VoiceControls />
        </article>
      </section>

      <footer className="pb-4 text-center text-xs muted">
        Fieldwise Smart Agriculture Platform · Frontend starter · Connect
        verified data sources before operational use
      </footer>
    </>
  );
}
