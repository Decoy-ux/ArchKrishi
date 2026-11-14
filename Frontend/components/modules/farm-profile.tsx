"use client";

import { useState, type FormEvent } from "react";
import { Save, MapPin, Sprout, Tractor, Info } from "lucide-react";
import { useApp, type FarmProfile } from "../../context/app-context";

export default function FarmProfileModule() {
  const { farmProfile, setFarmProfile, setFarmerName } = useApp();
  const [form, setForm] = useState<FarmProfile>(farmProfile);
  const [saved, setSaved] = useState(false);

  function update<K extends keyof FarmProfile>(key: K, value: FarmProfile[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setSaved(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Update shared React Context state so other components can read the new profile.
    setFarmProfile(form);
    setFarmerName(form.farmerName);
    setSaved(true);
  }

  const fields: {
    label: string;
    key: keyof FarmProfile;
    type?: string;
    options?: string[];
  }[] = [
    { label: "Farm name", key: "farmName" },
    { label: "Farmer name", key: "farmerName" },
    { label: "Village / municipality", key: "location" },
    { label: "Province / region", key: "province" },
    { label: "Farm area", key: "area", type: "number" },
    {
      label: "Soil type (farmer-reported)",
      key: "soilType",
      options: ["Loamy", "Sandy", "Clay", "Silty", "Sandy loam", "Unknown"],
    },
    {
      label: "Main irrigation source",
      key: "irrigation",
      options: [
        "Canal / surface irrigation",
        "Groundwater / tube well",
        "Rainfed",
        "Pond / reservoir",
        "Drip / sprinkler",
        "Other",
      ],
    },
    { label: "Main crops", key: "primaryCrops" },
    { label: "Farming priorities", key: "priorities" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-leaf">Farm information</p>
        <h2 className="mt-1 text-2xl font-bold">Farm profile</h2>
        <p className="mt-2 text-sm muted">
          Update your farm details. Saved values are shared with other
          components through React Context API.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: MapPin,
            label: "Location",
            value: `${form.location}, ${form.province}`,
          },
          {
            icon: Tractor,
            label: "Farm size",
            value: `${form.area} ${form.areaUnit}`,
          },
          { icon: Sprout, label: "Main crops", value: form.primaryCrops },
        ].map((item) => (
          <div className="card p-4" key={item.label}>
            <item.icon className="text-leaf" size={19} />
            <p className="mt-3 text-xs muted">{item.label}</p>
            <p className="mt-1 text-sm font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-950">
        <Info size={17} className="mt-0.5 shrink-0" />
        <p>
          Context API shares this profile while the app is running. This example
          does not save it to a database or retain it after a full page refresh.
        </p>
      </div>

      <form onSubmit={submit} className="card p-5 md:p-7">
        <div className="mb-5">
          <h3 className="font-bold">Basic farm details</h3>
          <p className="mt-1 text-xs muted">
            Starting values are examples. Replace them with your actual farm
            information.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field.key} className="block">
              <span className="mb-2 block text-sm font-medium">
                {field.label}
              </span>
              {field.options ? (
                <select
                  className="field-input"
                  value={form[field.key]}
                  onChange={(event) => update(field.key, event.target.value)}
                >
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  className="field-input"
                  type={field.type ?? "text"}
                  min={field.type === "number" ? "0" : undefined}
                  step={field.type === "number" ? "0.01" : undefined}
                  value={form[field.key]}
                  onChange={(event) => update(field.key, event.target.value)}
                  required
                />
              )}
            </label>
          ))}

          <label className="block">
            <span className="mb-2 block text-sm font-medium">Area unit</span>
            <select
              className="field-input"
              value={form.areaUnit}
              onChange={(event) => update("areaUnit", event.target.value)}
            >
              <option>hectares</option>
              <option>acres</option>
              <option>bigha</option>
              <option>kattha</option>
            </select>
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-xl bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-leaf"
            type="submit"
          >
            <Save size={16} />
            Save shared profile
          </button>
          {saved && (
            <span className="text-sm font-medium text-leaf">
              Saved to shared app state. Open Dashboard to see the update.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
