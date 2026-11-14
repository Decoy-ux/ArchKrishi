"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bell,
  CalendarDays,
  ChevronDown,
  CloudRain,
  Sprout,
  LayoutDashboard,
  MapPinned,
  MessageCircle,
  Tractor,
  Leaf,
  Menu,
  Search,
  TrendingUp,
  X,
} from "lucide-react";
import { useApp } from "../context/app-context";

export const navigation = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Farm Profile", href: "/farm-profile", icon: Tractor },
  { label: "NASA Earth Data", href: "/nasa-data", icon: MapPinned },
  { label: "Farm Monitoring", href: "/farm-monitoring", icon: Activity },
  { label: "Soil Health", href: "/soil-health", icon: Sprout },
  { label: "Crop Rotation Planner", href: "/crop-rotation", icon: Leaf },
  { label: "Climate & Weather", href: "/climate-weather", icon: CloudRain },
  { label: "Farming Calendar", href: "/calendar", icon: CalendarDays },
  { label: "AI Assistant", href: "/ai-assistant", icon: MessageCircle },
  { label: "Reports", href: "/reports", icon: TrendingUp },
];

export default function DashboardShell({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const { farmerName, setSelectedSection } = useApp();

  const currentNav = navigation.find((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
  );
  const pageTitle = currentNav?.label ?? "Dashboard";

  useEffect(() => {
    if (currentNav) {
      setSelectedSection(currentNav.label);
    }
  }, [currentNav, setSelectedSection]);

  return (
    <div className="min-h-screen md:flex">
      {/* Mobile backdrop */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileNavOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } fixed inset-y-0 left-0 z-30 flex h-full w-[270px] flex-col justify-between overflow-y-auto bg-forest px-5 py-6 text-white transition-transform duration-200 ease-in-out md:sticky md:top-0 md:h-screen md:shrink-0`}
      >
        <div>
          <div className="mb-9 flex items-center justify-between px-2">
            <Link
              href="/"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <div className="rounded-xl bg-[#DDF2E4] p-2 text-forest">
                <Sprout size={24} />
              </div>
              <div>
                <p className="text-lg font-bold leading-tight">Fieldwise</p>
                <p className="text-xs text-[#B9D3C3]">Smart Agriculture</p>
              </div>
            </Link>
            <button
              className="rounded-lg p-1.5 text-[#B9D3C3] hover:bg-white/10 hover:text-white md:hidden"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close navigation"
            >
              <X size={20} />
            </button>
          </div>

          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#9FBEAC]">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map(({ label, href, icon: Icon }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              const className = `sidebar-link ${active ? "active" : ""}`;
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileNavOpen(false)}
                  className={className}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4">
          <p className="text-sm font-semibold">Growing smarter, together</p>
          <p className="mt-1 text-xs leading-5 text-[#C3D9CC]">
            Use farm observations and trusted data to support better decisions.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#E8EEE9] bg-white/90 px-4 py-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-3">
            <button
              className="rounded-lg p-2 text-forest md:hidden"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle navigation"
            >
              <Menu size={21} />
            </button>
            <div>
              <p className="text-xs muted">
                South Asian Smart Agriculture Platform
              </p>
              <h1 className="text-lg font-bold">{pageTitle}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="hidden rounded-xl border border-[#E5ECE6] p-2 text-[#63736A] sm:block"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              className="relative rounded-xl border border-[#E5ECE6] p-2 text-[#63736A]"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-400" />
            </button>
            <div className="flex items-center gap-2 border-l border-[#E8EEE9] pl-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-sm font-bold text-forest">
                {farmerName ? farmerName.charAt(0).toUpperCase() : "F"}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold">{farmerName}</p>
                <p className="text-[11px] muted">Farm account</p>
              </div>
              <ChevronDown
                size={15}
                className="hidden text-[#718078] sm:block"
              />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] space-y-6 p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
