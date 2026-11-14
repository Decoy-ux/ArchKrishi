import type { Metadata } from "next";
import NasaDataModule from "@/components/modules/nasa-data";

export const metadata: Metadata = {
  title: "NASA Earth Data",
  description: "Explore NASA Earth observation data for agricultural monitoring.",
};

export default function NasaDataPage() {
  return <NasaDataModule />;
}
