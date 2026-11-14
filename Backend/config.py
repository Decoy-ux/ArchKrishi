"""Application configuration loaded from environment variables."""

from __future__ import annotations

import os


class Settings:
    """Simple settings container. Reads from env vars at import time."""

    # CORS — comma-separated origins
    cors_origins: list[str] = [
        origin.strip()
        for origin in os.getenv(
            "CORS_ORIGINS", "http://localhost:3000,http://127.0.0.1:3000"
        ).split(",")
    ]

    # Database URL (placeholder for future PostgreSQL integration)
    database_url: str = os.getenv("DATABASE_URL", "")

    # NASA API key (placeholder for future NASA data fetching)
    nasa_api_key: str = os.getenv("NASA_API_KEY", "DEMO_KEY")


settings = Settings()

