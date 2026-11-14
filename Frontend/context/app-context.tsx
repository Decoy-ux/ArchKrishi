"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

export type FarmProfile = {
  farmName: string;
  farmerName: string;
  location: string;
  province: string;
  area: string;
  areaUnit: string;
  soilType: string;
  irrigation: string;
  primaryCrops: string;
  priorities: string;
};

type AppContextValue = {
  farmerName: string;
  setFarmerName: (name: string) => void;
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  farmProfile: FarmProfile;
  setFarmProfile: Dispatch<SetStateAction<FarmProfile>>;
};

const defaultFarmProfile: FarmProfile = {
  farmName: "My Demonstration Farm",
  farmerName: "Farmer",
  location: "Janakpur",
  province: "Madhesh Province",
  area: "2.5",
  areaUnit: "hectares",
  soilType: "Loamy",
  irrigation: "Canal / surface irrigation",
  primaryCrops: "Rice, wheat, lentil",
  priorities: "Soil health, water conservation",
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [farmerName, setFarmerName] = useState(defaultFarmProfile.farmerName);
  const [selectedSection, setSelectedSection] = useState("Dashboard");
  const [farmProfile, setFarmProfile] =
    useState<FarmProfile>(defaultFarmProfile);

  const value = useMemo(
    () => ({
      farmerName,
      setFarmerName,
      selectedSection,
      setSelectedSection,
      farmProfile,
      setFarmProfile,
    }),
    [farmerName, selectedSection, farmProfile],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}
