import type { Metadata } from "next";
import FarmProfileModule from "@/components/modules/farm-profile";

export const metadata: Metadata = {
  title: "Farm Profile",
  description: "Manage your farm details and farming priorities.",
};

export default function FarmProfilePage() {
  return <FarmProfileModule />;
}
