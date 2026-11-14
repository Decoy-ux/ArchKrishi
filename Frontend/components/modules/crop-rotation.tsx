"use client";
import { useMemo, useState } from "react";
import { Sprout, ArrowRight, Info, CalendarRange } from "lucide-react";

const cropOptions = ["Rice","Wheat","Lentil","Maize","Mustard","Chickpea","Vegetables","Fallow / cover crop"];
export default function RotationPlannerModule() {
  const [field,setField] = useState("North Field");
  const [first,setFirst] = useState("Rice");
  const [second,setSecond] = useState("Wheat");
  const [third,setThird] = useState("Lentil");
  const [goal,setGoal] = useState("Improve soil organic matter");
  const sequence = useMemo(()=>[first,second,third],[first,second,third]);
  const duplicate = new Set(sequence).size !== sequence.length;
  return <div className="space-y-6">
    <div><p className="text-sm font-medium text-leaf">Scenario planning</p><h2 className="mt-1 text-2xl font-bold">Crop rotation planner</h2><p className="mt-2 text-sm muted">Create and compare a simple multi-season crop sequence for a field.</p></div>
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><div className="flex gap-2 font-semibold"><Info size={17} className="mt-0.5 shrink-0"/> Planning prototype, not a validated recommendation</div><p className="mt-1">The sequence is user-selected and displayed for planning only. It does not calculate soil nutrient balances, pest/disease risk, water demand, local planting windows, or economic returns. Confirm rotations with local agronomists and region-specific guidance.</p></div>
    <div className="card p-5 md:p-6"><h3 className="font-bold">Build a rotation scenario</h3><div className="mt-5 grid gap-4 md:grid-cols-2"><label><span className="mb-2 block text-sm font-medium">Field name</span><input className="field-input" value={field} onChange={e=>setField(e.target.value)}/></label><label><span className="mb-2 block text-sm font-medium">Main planning goal</span><select className="field-input" value={goal} onChange={e=>setGoal(e.target.value)}>{["Improve soil organic matter","Diversify crops","Plan water use","Break pest and disease cycles","Explore market options"].map(x=><option key={x}>{x}</option>)}</select></label>{[first,second,third].map((crop,i)=><label key={i}><span className="mb-2 block text-sm font-medium">Season {i+1} crop</span><select className="field-input" value={crop} onChange={e=>[setFirst,setSecond,setThird][i](e.target.value)}>{cropOptions.map(x=><option key={x}>{x}</option>)}</select></label>)}</div>
      <div className="mt-6 rounded-2xl bg-[#F7FAF7] p-4"><div className="flex items-center gap-2"><CalendarRange className="text-leaf" size={19}/><h4 className="font-semibold">Your selected sequence</h4></div><div className="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">{sequence.map((crop,i)=><div key={i} className="flex flex-1 items-center gap-2"><div className="flex-1 rounded-xl border border-[#DDE9E0] bg-white p-3"><p className="text-[11px] muted">Season {i+1}</p><p className="mt-1 font-bold">{crop}</p></div>{i<2&&<ArrowRight size={16} className="hidden text-leaf sm:block"/>}</div>)}</div><p className="mt-3 text-xs muted">Field: {field || "Unnamed field"} · Goal: {goal}</p></div>
      {duplicate&&<p className="mt-3 text-sm text-amber-700">Note: a crop appears more than once. Review whether that repetition is suitable for your local conditions.</p>}
      <button onClick={()=>window.print()} className="mt-5 rounded-xl bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-leaf">Print this scenario</button>
    </div>
    <div className="card p-5"><div className="flex items-center gap-2"><Sprout className="text-leaf" size={20}/><h3 className="font-bold">What a full recommendation engine should check</h3></div><ul className="mt-4 grid gap-3 text-sm muted md:grid-cols-2">{["Local planting and harvest calendar","Soil test results and nutrient history","Rainfall, temperature, and irrigation access","Crop family and pest / disease history","Seed availability, labor, and market priorities","Evidence-based agronomic rules with citations"].map(x=><li className="rounded-xl bg-[#F7FAF7] p-3" key={x}>• {x}</li>)}</ul></div>
  </div>;
}
