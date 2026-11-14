import type { DashboardData } from "../types";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function getDashboardData(){
  if (!API_BASE) throw new Error("API_BASE is not defined");
  try {
    const response = await fetch(`${API_BASE}/api/dashboard`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    const data = (await response.json()) as DashboardData;
    return { ...data};
  } catch (error) {
    console.error(
      "We ran into an issue",
      error,
    );
  }
}
