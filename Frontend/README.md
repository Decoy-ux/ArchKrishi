# Smart Agriculture Platform — Next.js Frontend

Starter frontend based on the project's architecture reference:
- Next.js App Router, React and TypeScript
- Tailwind CSS
- React Context API for shared state
- Web Speech API for optional speech input and text-to-speech
- HTTP/JSON communication with FastAPI

## Run locally

1. Install Node.js LTS.
2. Extract this folder and open it in VS Code.
3. In the terminal, run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Set `NEXT_PUBLIC_API_BASE_URL` to your FastAPI base URL, for example `http://127.0.0.1:8000`.
6. Run `npm run dev` and open http://localhost:3000.

## Backend contract

The frontend currently requests `GET /api/dashboard`. It expects JSON with:
- `farmName` and `location`
- `metrics`: objects with `label`, `value`, optional `unit`, `change`, and `status`
- `rainfall`: objects with `month`, `rainfall`, and `temperature`
- `alerts`: objects with `id`, `level`, `title`, and `detail`

The expected response structure is also declared in `src/types/index.ts`.

## Data integrity

When the API is unavailable, the app displays clearly labelled illustrative sample values. They are not live NASA observations, verified farm measurements, or validated agricultural recommendations.

## Current scope

The dashboard is implemented. Sidebar destinations are navigation scaffolds for future module pages. The frontend does not connect directly to PostgreSQL; database access belongs in the FastAPI backend.


## Newly implemented frontend modules

- **Farm Profile:** editable farm details and locally held form state.
- **NASA Earth Data:** request configuration preview and links to official NASA data portals. It does not fetch NASA data yet.
- **Soil Health:** editable soil observation form; starting values are illustrative placeholders.
- **Crop Rotation Planner:** user-selected three-season sequence and printable scenario. It is not an agronomic recommendation engine.

All four modules are frontend prototypes. Form values are not persisted to PostgreSQL until backend endpoints are implemented.


## React Context API implementation

The shared `AppProvider` in `src/context/app-context.tsx` now exposes:
- `farmerName` and `setFarmerName`
- `selectedSection` and `setSelectedSection`
- `farmProfile` and `setFarmProfile`

Use `useApp()` in client components to read or update shared state. The Farm Profile form commits changes to Context API, and the dashboard reads the updated farm name and location. This is in-memory application state only; it is not persistent across a full page reload and is not a substitute for backend/database storage.
