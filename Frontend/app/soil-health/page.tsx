import type { Metadata } from "next";
import SoilHealthModule from "@/components/modules/soil-health";

export const metadata: Metadata = {
  title: "Soil Health",
  description: "Record soil information and review soil health indicators.",
};

export default function SoilHealthPage() {
  return <SoilHealthModule />;
}
