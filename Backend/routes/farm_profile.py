"""Farm profile endpoints — GET and POST."""

from fastapi import APIRouter

try:
    from models import FarmProfileData, FarmProfileResponse
except ImportError:
    from backend.models import FarmProfileData, FarmProfileResponse

router = APIRouter()

# In-memory store (replace with database later)
_current_profile = FarmProfileData(
    farmName="My Demonstration Farm",
    farmerName="Farmer",
    location="Janakpur",
    province="Madhesh Province",
    area="2.5",
    areaUnit="hectares",
    soilType="Loamy",
    irrigation="Canal / surface irrigation",
    primaryCrops="Rice, wheat, lentil",
    priorities="Soil health, water conservation",
)


@router.get("/farm-profile", response_model=FarmProfileResponse)
async def get_farm_profile():
    """Return the current farm profile."""
    return FarmProfileResponse(
        message="Current farm profile retrieved.",
        data=_current_profile,
    )


@router.post("/farm-profile", response_model=FarmProfileResponse)
async def update_farm_profile(profile: FarmProfileData):
    """Update the farm profile.

    Pydantic validates all fields — area must be a positive number,
    names must not be empty, etc.
    """
    global _current_profile
    _current_profile = profile
    return FarmProfileResponse(
        message="Farm profile updated successfully.",
        data=_current_profile,
    )
