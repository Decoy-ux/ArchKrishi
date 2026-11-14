"""Pydantic models for request/response validation.

These mirror the TypeScript types in ../types/index.ts so the frontend
and backend stay in sync.
"""

from __future__ import annotations

from enum import Enum
from typing import Literal

from pydantic import BaseModel, Field, field_validator


# ── Dashboard ────────────────────────────────────────────


class MetricStatus(str, Enum):
    good = "good"
    warning = "warning"
    neutral = "neutral"


class Metric(BaseModel):
    label: str = Field(..., min_length=1, examples=["Soil moisture"])
    value: str = Field(..., examples=["32"])
    unit: str | None = Field(None, examples=["%"])
    change: str = Field(..., examples=["↑ 4% from last week"])
    status: MetricStatus = Field(..., examples=["good"])


class RainfallPoint(BaseModel):
    month: str = Field(..., min_length=1, examples=["Jan"])
    rainfall: float = Field(..., ge=0, examples=[12.0])
    temperature: float = Field(..., examples=[21.0])


class AlertLevel(str, Enum):
    high = "High"
    medium = "Medium"
    low = "Low"


class FarmAlert(BaseModel):
    id: str = Field(..., min_length=1, examples=["a1"])
    level: AlertLevel = Field(..., examples=["High"])
    title: str = Field(..., min_length=1, examples=["Check irrigation schedule"])
    detail: str = Field(..., examples=["Review field moisture before next cycle."])


class DashboardResponse(BaseModel):
    """Response model for GET /api/dashboard.

    The frontend adds a `source` field client-side; we do NOT include it here.
    """

    farmName: str = Field(..., min_length=1, examples=["Green Valley Farm"])
    location: str = Field(..., min_length=1, examples=["Janakpur, Madhesh, Nepal"])
    metrics: list[Metric] = Field(default_factory=list)
    rainfall: list[RainfallPoint] = Field(default_factory=list)
    alerts: list[FarmAlert] = Field(default_factory=list)


# ── Farm Profile ─────────────────────────────────────────


class FarmProfileData(BaseModel):
    farmName: str = Field(..., min_length=1, max_length=200, examples=["My Demonstration Farm"])
    farmerName: str = Field(..., min_length=1, max_length=200, examples=["Farmer"])
    location: str = Field(..., min_length=1, max_length=200, examples=["Janakpur"])
    province: str = Field(..., min_length=1, max_length=200, examples=["Madhesh Province"])
    area: str = Field(..., examples=["2.5"])
    areaUnit: str = Field(default="hectares", examples=["hectares"])
    soilType: str = Field(default="Loamy", examples=["Loamy"])
    irrigation: str = Field(default="Canal / surface irrigation", examples=["Canal / surface irrigation"])
    primaryCrops: str = Field(default="", examples=["Rice, wheat, lentil"])
    priorities: str = Field(default="", examples=["Soil health, water conservation"])

    @field_validator("area")
    @classmethod
    def area_must_be_positive_number(cls, v: str) -> str:
        try:
            val = float(v)
            if val <= 0:
                raise ValueError("Farm area must be positive")
        except ValueError as e:
            if "positive" in str(e):
                raise
            raise ValueError("Farm area must be a valid number") from e
        return v


class FarmProfileResponse(BaseModel):
    message: str
    data: FarmProfileData


# ── Soil Health ──────────────────────────────────────────


class SoilObservation(BaseModel):
    ph: str = Field(..., examples=["6.5"])
    organicMatter: str = Field(..., examples=["2.0"])
    nitrogen: str = Field(..., examples=["40"])
    phosphorus: str = Field(..., examples=["20"])
    potassium: str = Field(..., examples=["120"])
    texture: Literal[
        "Sandy", "Sandy loam", "Loamy", "Silty", "Clay", "Unknown"
    ] = Field(default="Loamy", examples=["Loamy"])
    moisture: Literal[
        "Very dry", "Dry", "Moderate", "Moist", "Waterlogged", "Unknown"
    ] = Field(default="Moderate", examples=["Moderate"])

    @field_validator("ph")
    @classmethod
    def ph_must_be_valid(cls, v: str) -> str:
        val = float(v)
        if not (0 <= val <= 14):
            raise ValueError("pH must be between 0 and 14")
        return v

    @field_validator("organicMatter")
    @classmethod
    def om_must_be_non_negative(cls, v: str) -> str:
        val = float(v)
        if val < 0:
            raise ValueError("Organic matter percentage cannot be negative")
        return v

    @field_validator("nitrogen", "phosphorus", "potassium")
    @classmethod
    def nutrient_must_be_non_negative(cls, v: str) -> str:
        val = float(v)
        if val < 0:
            raise ValueError("Nutrient value cannot be negative")
        return v


class SoilObservationResponse(BaseModel):
    message: str
    data: SoilObservation


# ── NASA Data ────────────────────────────────────────────


class NasaDataRequest(BaseModel):
    location: str = Field(
        ..., min_length=1, max_length=500,
        examples=["Janakpur, Madhesh Province, Nepal"],
    )
    variable: Literal[
        "Precipitation",
        "Air temperature",
        "Relative humidity",
        "Solar radiation",
        "Vegetation index",
        "Soil moisture",
    ] = Field(..., examples=["Precipitation"])
    startDate: str = Field(..., examples=["2025-01-01"])
    endDate: str = Field(..., examples=["2025-12-31"])

    @field_validator("endDate")
    @classmethod
    def end_must_not_precede_start(cls, v: str, info) -> str:
        start = info.data.get("startDate")
        if start and v < start:
            raise ValueError("endDate must not be before startDate")
        return v


class NasaDatasetInfo(BaseModel):
    name: str
    variable: str
    use: str
    link: str


class NasaDataResponse(BaseModel):
    message: str
    request: NasaDataRequest
    datasets: list[NasaDatasetInfo]


# ── Crop Rotation ────────────────────────────────────────

CROP_OPTIONS = [
    "Rice", "Wheat", "Lentil", "Maize", "Mustard",
    "Chickpea", "Vegetables", "Fallow / cover crop",
]

CropOption = Literal[
    "Rice", "Wheat", "Lentil", "Maize", "Mustard",
    "Chickpea", "Vegetables", "Fallow / cover crop",
]


class CropRotationRequest(BaseModel):
    field: str = Field(..., min_length=1, max_length=200, examples=["North Field"])
    season1: CropOption = Field(..., examples=["Rice"])
    season2: CropOption = Field(..., examples=["Wheat"])
    season3: CropOption = Field(..., examples=["Lentil"])
    goal: str = Field(
        default="Improve soil organic matter",
        examples=["Improve soil organic matter"],
    )

    @field_validator("season3")
    @classmethod
    def warn_if_all_same(cls, v: str, info) -> str:
        s1 = info.data.get("season1")
        s2 = info.data.get("season2")
        if s1 == s2 == v:
            raise ValueError(
                "All three seasons have the same crop. "
                "Monocropping is generally discouraged for soil health."
            )
        return v


class SeasonSlot(BaseModel):
    season: int = Field(..., ge=1, le=3, examples=[1])
    crop: str = Field(..., examples=["Rice"])


class CropRotationResponse(BaseModel):
    message: str
    field: str
    goal: str
    sequence: list[SeasonSlot]
    hasDuplicate: bool
    warnings: list[str] = Field(default_factory=list)

