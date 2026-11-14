import sys
from pathlib import Path

# Ensure backend directory is in sys.path so both direct execution
# (`cd backend && uvicorn main:app`) and module execution (`uvicorn backend.main:app`) work seamlessly.
backend_dir = Path(__file__).resolve().parent
if str(backend_dir) not in sys.path:
    sys.path.insert(0, str(backend_dir))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

try:
    from routes import dashboard, farm_profile, soil_health, nasa_data, crop_rotation
    from config import settings
except ImportError:
    from backend.routes import dashboard, farm_profile, soil_health, nasa_data, crop_rotation
    from backend.config import settings

app = FastAPI(
    title="FieldShift Smart Agriculture API",
    description="Backend API for the FieldShift smart agriculture decision-support platform.",
    version="1.0.0",
)

# CORS — allow the Next.js dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ─────────────────────────────────────────────
prefix = "/api"
app.include_router(dashboard.router, prefix=prefix, tags=["Dashboard"])
app.include_router(farm_profile.router, prefix=prefix, tags=["Farm Profile"])
app.include_router(soil_health.router, prefix=prefix, tags=["Soil Health"])
app.include_router(nasa_data.router, prefix=prefix, tags=["NASA Earth Data"])
app.include_router(crop_rotation.router, prefix=prefix, tags=["Crop Rotation"])


@app.get("/", tags=["Health"])
async def health_check():
    """Root health-check endpoint."""
    return {
        "status": "ok",
        "service": "FieldShift API",
        "version": "1.0.0",
        "docs": "/docs",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

