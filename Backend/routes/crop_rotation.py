"""Crop rotation planner endpoint."""

from fastapi import APIRouter

try:
    from models import CropRotationRequest, CropRotationResponse, SeasonSlot
except ImportError:
    from backend.models import CropRotationRequest, CropRotationResponse, SeasonSlot

router = APIRouter()


@router.post("/crop-rotation", response_model=CropRotationResponse)
async def plan_rotation(plan: CropRotationRequest):
    """Evaluate a three-season crop rotation scenario.

    Pydantic validates:
    - Each season crop must be from the allowed list
    - All three seasons cannot be the same crop (monocropping warning)
    - field name must be non-empty

    This is a planning preview, NOT a validated agronomic recommendation.
    """
    sequence = [
        SeasonSlot(season=1, crop=plan.season1),
        SeasonSlot(season=2, crop=plan.season2),
        SeasonSlot(season=3, crop=plan.season3),
    ]
    crops = [plan.season1, plan.season2, plan.season3]
    has_duplicate = len(set(crops)) != len(crops)

    warnings: list[str] = []
    if has_duplicate:
        warnings.append(
            "A crop appears more than once. Review whether that "
            "repetition is suitable for your local conditions."
        )

    return CropRotationResponse(
        message="Rotation scenario created. This is a planning tool, not validated advice.",
        field=plan.field,
        goal=plan.goal,
        sequence=sequence,
        hasDuplicate=has_duplicate,
        warnings=warnings,
    )
