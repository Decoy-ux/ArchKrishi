"""Soil health observation endpoints — GET and POST."""

from fastapi import APIRouter

try:
    from models import SoilObservation, SoilObservationResponse
except ImportError:
    from backend.models import SoilObservation, SoilObservationResponse

router = APIRouter()

# In-memory store (replace with database later)
_current_observation = SoilObservation(
    ph="6.5",
    organicMatter="2.0",
    nitrogen="40",
    phosphorus="20",
    potassium="120",
    texture="Loamy",
    moisture="Moderate",
)


@router.get("/soil-health", response_model=SoilObservationResponse)
async def get_soil_health():
    """Return the most recent soil observation."""
    return SoilObservationResponse(
        message="Current soil observation retrieved.",
        data=_current_observation,
    )


@router.post("/soil-health", response_model=SoilObservationResponse)
async def save_soil_observation(observation: SoilObservation):
    """Save a new soil observation.

    Pydantic validates:
    - pH must be 0–14
    - Organic matter, N, P, K must be non-negative
    - texture and moisture must be one of the allowed literals
    """
    global _current_observation
    _current_observation = observation
    return SoilObservationResponse(
        message="Soil observation saved successfully.",
        data=_current_observation,
    )
