"""GET /api/dashboard — returns farm metrics, rainfall chart data, and alerts."""

from fastapi import APIRouter

try:
    from models import (
        DashboardResponse,
        FarmAlert,
        AlertLevel,
        Metric,
        MetricStatus,
        RainfallPoint,
    )
except ImportError:
    from backend.models import (
        DashboardResponse,
        FarmAlert,
        AlertLevel,
        Metric,
        MetricStatus,
        RainfallPoint,
    )

router = APIRouter()

# ── Demo data (mirrors lib/api.ts on the frontend) ──────

_DEMO_DASHBOARD = DashboardResponse(
    farmName="Green Valley Farm",
    location="Janakpur, Madhesh, Nepal",
    metrics=[
        Metric(
            label="Soil moisture",
            value="32",
            unit="%",
            change="Sample interface value",
            status=MetricStatus.good,
        ),
        Metric(
            label="Temperature",
            value="29",
            unit="°C",
            change="Sample interface value",
            status=MetricStatus.warning,
        ),
        Metric(
            label="Rainfall (7 days)",
            value="18",
            unit="mm",
            change="Sample interface value",
            status=MetricStatus.neutral,
        ),
        Metric(
            label="Soil health score",
            value="78",
            unit="/100",
            change="Illustrative assessment",
            status=MetricStatus.good,
        ),
    ],
    rainfall=[
        RainfallPoint(month="Jan", rainfall=12, temperature=21),
        RainfallPoint(month="Feb", rainfall=18, temperature=24),
        RainfallPoint(month="Mar", rainfall=26, temperature=28),
        RainfallPoint(month="Apr", rainfall=42, temperature=31),
        RainfallPoint(month="May", rainfall=68, temperature=33),
        RainfallPoint(month="Jun", rainfall=115, temperature=31),
        RainfallPoint(month="Jul", rainfall=185, temperature=29),
    ],
    alerts=[
        FarmAlert(
            id="a1",
            level=AlertLevel.high,
            title="Check irrigation schedule",
            detail="Review field moisture before the next irrigation cycle.",
        ),
        FarmAlert(
            id="a2",
            level=AlertLevel.medium,
            title="Plan for warmer conditions",
            detail="Consider heat-tolerant crop options for the coming period.",
        ),
        FarmAlert(
            id="a3",
            level=AlertLevel.low,
            title="Update farm profile",
            detail="Add soil type and field area to improve recommendations.",
        ),
    ],
)


@router.get("/dashboard", response_model=DashboardResponse)
async def get_dashboard():
    """Return dashboard metrics, rainfall chart data, and farm alerts.

    Currently returns illustrative demo data. Replace the body with
    a real database query once PostgreSQL is connected.
    """
    return _DEMO_DASHBOARD
