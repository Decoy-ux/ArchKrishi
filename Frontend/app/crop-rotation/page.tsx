import type { Metadata } from "next";
import RotationPlannerModule from "@/components/modules/crop-rotation";

export const metadata: Metadata = {
  title: "Crop Rotation Planner",
  description: "Explore crop rotation scenarios for your farm.",
};

export default function CropRotationPage() {
  return <RotationPlannerModule />;
}
