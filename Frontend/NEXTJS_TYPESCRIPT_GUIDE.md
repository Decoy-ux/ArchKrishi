# Next.js + TypeScript implementation notes

This project uses the Next.js App Router (`src/app`) with TypeScript and reusable React components.

## Implemented routes
- `/` — farmer dashboard
- `/farm-profile` — farm profile editor
- `/nasa-data` — NASA Earth Data module
- `/farm-monitoring` — farm monitoring module (planned)
- `/soil-health` — soil health module
- `/crop-rotation` — crop rotation planner
- `/climate-weather` — climate & weather module (planned)
- `/calendar` — farming calendar module (planned)
- `/ai-assistant` — AI assistant with voice and text controls
- `/reports` — reports module (planned)

The sidebar and top navigation header are encapsulated in `DashboardShell` inside `src/app/layout.tsx`. As a result, all pages share the persistent sidebar and layout identical to the dashboard. Pages are Server Components by default; interactive modules are Client Components where needed. The root layout provides both the shared `AppProvider` context and the `DashboardShell`.

## TypeScript contracts
`src/types/index.ts` defines the dashboard data shape returned by FastAPI. Keep `DashboardApiResponse` aligned with the backend response model. The `source` field is added by the frontend to distinguish API data from illustrative demo data.

## Next.js route conventions
- `page.tsx`: route UI
- `layout.tsx`: shared application wrapper and metadata
- `loading.tsx`: loading UI
- `error.tsx`: route error boundary (must be a Client Component)
- `not-found.tsx`: 404 UI

## Rendering notes
- Server Components are the default and are appropriate for page shells and server-side data fetching.
- Add `"use client"` only to components that need state, event handlers, browser APIs, or React Context.
- Next.js supports static generation and dynamic/server rendering. Choose based on whether data is public/static or must be fresh/private. This starter's dashboard data helper uses `cache: "no-store"` when calling the configured API, so that request is not cached.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000 and try each route listed above. The app builds cleanly with `npm run build`.

## Data integrity
Dashboard demo values are illustrative. Do not treat them as live NASA observations, verified soil test results, or validated agronomic recommendations.
