/** Shared frontend contracts. Keep these aligned with the FastAPI response models. */
export type Metric = {
  label: string;
  value: string;
  unit?: string;
  change: string;
  status: "good" | "warning" | "neutral";
};

export type RainfallPoint = {
  month: string;
  rainfall: number;
  temperature: number;
};

export type FarmAlert = {
  id: string;
  level: "High" | "Medium" | "Low";
  title: string;
  detail: string;
};

/** `source` is added by the frontend and is not expected from FastAPI. */
export type DashboardData = {
  farmName: string;
  location: string;
  metrics: Metric[];
  rainfall: RainfallPoint[];
  alerts: FarmAlert[];
};

/** Shape expected from GET /api/dashboard. */
export type DashboardApiResponse = Omit<DashboardData, "source">;
