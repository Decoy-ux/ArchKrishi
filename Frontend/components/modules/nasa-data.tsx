"use client";
import { useState } from "react";
import { Satellite, CalendarDays, MapPin, Database, ExternalLink, Info } from "lucide-react";

const datasets = [
  { name: "NASA POWER", variable: "Daily / monthly meteorology and solar data", use: "Temperature, precipitation, humidity, solar radiation", link: "https://power.larc.nasa.gov/" },
  { name: "NASA GPM IMERG", variable: "Satellite precipitation estimates", use: "Rainfall patterns and precipitation monitoring", link: "https://gpm.nasa.gov/data/imerg" },
  { name: "NASA MODIS", variable: "Land surface and vegetation observations", use: "Vegetation indices and land-surface context", link: "https://modis.gsfc.nasa.gov/data/" },
  { name: "NASA SMAP", variable: "Satellite soil moisture observations", use: "Regional surface soil-moisture context", link: "https://smap.jpl.nasa.gov/data/" }
];

export default function NasaDataModule() {
  const [place, setPlace] = useState("Janakpur, Madhesh Province, Nepal");
  const [start, setStart] = useState("2025-01-01");
  const [end, setEnd] = useState("2025-12-31");
  const [variable, setVariable] = useState("Precipitation");
  const [submitted, setSubmitted] = useState(false);
  return <div className="space-y-6">
    <div><p className="text-sm font-medium text-leaf">Earth observation workspace</p><h2 className="mt-1 text-2xl font-bold">NASA Earth data</h2><p className="mt-2 text-sm muted">Choose a location, date range, and variable to prepare a data request.</p></div>
    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm leading-6 text-sky-950"><div className="flex gap-2 font-semibold"><Info size={17} className="mt-0.5 shrink-0"/> Data connection status</div><p className="mt-1">This module currently prepares a request preview only. It does not fetch NASA data yet, and no values shown here should be treated as live satellite observations.</p></div>
    <div className="card p-5 md:p-6"><div className="mb-5 flex items-center gap-3"><span className="rounded-xl bg-mint p-3 text-leaf"><Satellite size={22}/></span><div><h3 className="font-bold">Prepare an Earth data request</h3><p className="text-xs muted">Request settings preview — not yet submitted to NASA</p></div></div>
      <div className="grid gap-4 md:grid-cols-2">
        <label><span className="mb-2 block text-sm font-medium">Farm location</span><div className="relative"><MapPin className="absolute left-3 top-3 text-[#819087]" size={17}/><input className="field-input pl-10" value={place} onChange={e=>{setPlace(e.target.value);setSubmitted(false)}} /></div></label>
        <label><span className="mb-2 block text-sm font-medium">Data variable</span><select className="field-input" value={variable} onChange={e=>{setVariable(e.target.value);setSubmitted(false)}}>{["Precipitation","Air temperature","Relative humidity","Solar radiation","Vegetation index","Soil moisture"].map(x=><option key={x}>{x}</option>)}</select></label>
        <label><span className="mb-2 block text-sm font-medium">Start date</span><input className="field-input" type="date" value={start} onChange={e=>{setStart(e.target.value);setSubmitted(false)}} /></label>
        <label><span className="mb-2 block text-sm font-medium">End date</span><input className="field-input" type="date" value={end} min={start} onChange={e=>{setEnd(e.target.value);setSubmitted(false)}} /></label>
      </div>
      <button onClick={()=>setSubmitted(true)} disabled={!place.trim() || !start || !end || end < start} className="mt-5 rounded-xl bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-50">Preview request</button>
      {submitted && <div className="mt-4 rounded-xl border border-[#DCE9DF] bg-[#F7FAF7] p-4"><p className="text-sm font-bold text-forest">Request preview created</p><p className="mt-2 text-sm">{variable} · {place}</p><p className="text-xs muted">{start} to {end}</p><p className="mt-2 text-xs muted">Next engineering step: connect a FastAPI endpoint that validates coordinates and calls the selected NASA source.</p></div>}
    </div>
    <div><h3 className="mb-3 font-bold">Potential NASA data sources</h3><div className="grid gap-3 md:grid-cols-2">{datasets.map(d=><article className="card p-5" key={d.name}><div className="flex items-start justify-between gap-3"><div><p className="font-semibold">{d.name}</p><p className="mt-1 text-xs text-leaf">{d.variable}</p></div><Database size={19} className="text-leaf"/></div><p className="mt-3 text-sm muted">{d.use}</p><a className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-leaf hover:underline" href={d.link} target="_blank" rel="noreferrer">Official data portal <ExternalLink size={13}/></a></article>)}</div></div>
  </div>;
}
