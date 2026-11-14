import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "../context/app-context";
import DashboardShell from "@/components/dashboard-shell";

export const metadata: Metadata = {
  title: {
    default: "Fieldwise | Smart Agriculture",
    template: "%s | Fieldwise",
  },
  description:
    "A farmer-focused smart agriculture decision support platform using farm information and Earth observation data.",
  applicationName: "Fieldwise Smart Agriculture",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123C2D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <DashboardShell>{children}</DashboardShell>
        </AppProvider>
      </body>
    </html>
  );
}
