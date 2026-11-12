import requests
import numpy as np
import pandas as pd

farming_locations = {
    "Biratnagar_Terai": {"lat": 26.4525, "lon": 87.2718},
    "Butwal_WestNepal": {"lat": 27.7005, "lon": 83.4484},
    "Dhangadhi_FarWest": {"lat": 28.6763, "lon": 80.5873},
    "Lumbini_Plains": {"lat": 27.4705, "lon": 83.2755},
    "Kathmandu_Valley": {"lat": 27.7172, "lon": 85.3240}
}
start_date = "20210101"
end_date = "20231231"
parameters = "T2M,T2M_MAX,T2M_MIN,PRECTOTCORR,ALLSKY_SFC_SW_DWN,RH2M,GWETTOP,GWETROOT,WS10M"
region_data_list = []
for region, coords in farming_locations.items():
    lat, lon = coords["lat"], coords["lon"]
    print(f"Fetching time-series data for {region}...")
    url = f"https://power.larc.nasa.gov/api/temporal/daily/point?parameters={parameters}&community=AG&longitude={lon}&latitude={lat}&start={start_date}&end={end_date}&format=JSON"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        parameters_data = data["properties"]["parameter"]
        df = pd.DataFrame(parameters_data)
        df = df.replace(-999.0, np.nan)
        df.reset_index(inplace=True)
        df.rename(columns={"index": "Date"}, inplace=True)
        df["Date"] = pd.to_datetime(df["Date"], format="%Y%m%d")
        df = df.sort_values("Date").reset_index(drop=True)
        df["Region"] = region
        region_data_list.append(df)

master_df = pd.concat(region_data_list, ignore_index=True)
master_df.dropna(inplace=True)
feature_columns = ["T2M", "PRECTOTCORR", "ALLSKY_SFC_SW_DWN", "RH2M"]
regions = master_df["Region"].unique()
days_count = master_df.groupby("Region").size().min()

tensor_list = []
for region in regions:
    region_subset = master_df[master_df["Region"] == region][feature_columns].values
    tensor_list.append(region_subset[:days_count])

time_series_3d_array = np.array(tensor_list, dtype=np.float32)
print(f"3D NumPy Tensor Shape: {time_series_3d_array.shape}")
print("(Interpretation: [Regions/Locations, Days/Timesteps, Features])")
output_file = "agriculture.csv"
master_df.to_csv(output_file, index=False)
print(f"Chronological panel data saved to {output_file}!")