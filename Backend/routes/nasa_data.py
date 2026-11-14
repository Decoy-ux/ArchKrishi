"""NASA Earth data request preview endpoint."""

from fastapi import APIRouter

try:
    from models import NasaDataRequest, NasaDataResponse, NasaDatasetInfo
except ImportError:
    from backend.models import NasaDataRequest, NasaDataResponse, NasaDatasetInfo

router = APIRouter()

_DATASETS = [
    NasaDatasetInfo(
        name="NASA POWER",
        variable="Daily / monthly meteorology and solar data",
        use="Temperature, precipitation, humidity, solar radiation",
        link="https://power.larc.nasa.gov/",
    ),
    NasaDatasetInfo(
        name="NASA GPM IMERG",
        variable="Satellite precipitation estimates",
        use="Rainfall patterns and precipitation monitoring",
        link="https://gpm.nasa.gov/data/imerg",
    ),
    NasaDatasetInfo(
        name="NASA MODIS",
        variable="Land surface and vegetation observations",
        use="Vegetation indices and land-surface context",
        link="https://modis.gsfc.nasa.gov/data/",
    ),
    NasaDatasetInfo(
        name="NASA SMAP",
        variable="Satellite soil moisture observations",
        use="Regional surface soil-moisture context",
        link="https://smap.jpl.nasa.gov/data/",
    ),
]


@router.post("/nasa-data", response_model=NasaDataResponse)
async def preview_nasa_request(request: NasaDataRequest):
    """Preview a NASA Earth data request.

    Pydantic validates:
    - location is non-empty
    - variable is one of the allowed choices
    - endDate is not before startDate

    This endpoint does NOT fetch real NASA data yet. It returns the
    validated request parameters and a list of relevant data sources.
    """
    return NasaDataResponse(
        message="Request preview created. Connect a NASA data source to fetch real observations.",
        request=request,
        datasets=_DATASETS,
    )
