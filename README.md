[Uploading krishi-saathi-demo.html…]()
<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Krishi Saathi – Demo</title>
<style>
:root{--bg:#f4f1e8;--card:#fff;--ink:#23301f;--g:#2f6b3a;--g2:#dcebd5;--warn:#c2410c;--bad:#b91c1c;--mut:#6b7566;--wx:#e8e3d0;--line:#ddd;--w1:#fff4e8;--w2:#fee;--chat:#faf9f3;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#121a11;--card:#1c271b;--ink:#e6eddf;--g:#6fbf7d;--g2:#26402b;--mut:#9aa894;--wx:#192316;--line:#35432f;--w1:#3a2a1a;--w2:#3d1f1f;--chat:#162014;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#121a11;--card:#1c271b;--ink:#e6eddf;--g:#6fbf7d;--g2:#26402b;--mut:#9aa894;--wx:#192316;--line:#35432f;--w1:#3a2a1a;--w2:#3d1f1f;--chat:#162014;color-scheme:dark}
*{box-sizing:border-box}html,body{background:var(--bg)}body{margin:0;font:15px system-ui,sans-serif;color:var(--ink)}
header{background:#2f6b3a;color:#fff;padding:10px 16px;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}
header h1{margin:0;font-size:18px}.sub{font-size:12px;opacity:.9}
#wx{display:flex;gap:8px;overflow-x:auto;padding:10px 16px;background:var(--wx)}
.chip{background:var(--card);border-radius:10px;padding:8px 12px;min-width:108px;font-size:13px;box-shadow:0 1px 2px #0002;flex:none}
.chip b{display:block;font-size:15px}.chip small{color:var(--mut)}
main{display:grid;grid-template-columns:1.1fr 1fr;gap:12px;padding:12px 16px}
@media(max-width:900px){main{grid-template-columns:1fr}}
.card{background:var(--card);border-radius:12px;padding:12px;margin-bottom:12px;box-shadow:0 1px 3px #0002}
h2{margin:0 0 8px;font-size:15px;color:var(--g)}
svg#map{width:100%;border-radius:10px;cursor:crosshair;display:block;touch-action:none}
.alert{padding:8px 10px;border-left:4px solid var(--warn);background:var(--w1);margin:6px 0;border-radius:6px;font-size:13px}
.alert.high{border-color:var(--bad);background:var(--w2)}.alert.ok{border-color:var(--g);background:var(--g2)}
.crop{display:flex;justify-content:space-between;gap:8px;padding:8px;border:1px solid var(--line);border-radius:8px;margin:6px 0;cursor:pointer}
.crop.sel{border-color:var(--g);background:var(--g2)}.crop small{color:var(--mut);display:block}
.bar{height:8px;background:var(--line);border-radius:4px;overflow:hidden;margin-top:4px}.bar i{display:block;height:100%;background:var(--g)}
.task{display:flex;gap:8px;align-items:center;padding:6px 0;border-bottom:1px solid var(--line);font-size:13px}
.tag{font-size:11px;padding:2px 6px;border-radius:8px;background:var(--line)}.tag.now{background:#fde68a;color:#333}.tag.late{background:#fecaca;color:#333}
.sl{display:grid;grid-template-columns:105px 1fr 40px;gap:6px;align-items:center;font-size:13px;margin:4px 0}
#chatlog{height:190px;overflow:auto;background:var(--chat);border-radius:8px;padding:8px;font-size:13px}
.m{margin:4px 0}.m.u{text-align:right;color:var(--g)}
#chatf{display:flex;gap:6px;margin-top:6px}#chatf input{flex:1;padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--ink)}
button{background:#2f6b3a;color:#fff;border:0;border-radius:8px;padding:8px 12px;cursor:pointer}
button.alt{background:var(--card);color:var(--g);border:1px solid var(--g)}
.hint{font-size:12px;color:var(--mut);margin:6px 0}
[hidden]{display:none!important}
.navb{display:flex;gap:6px;padding:8px 16px;background:var(--wx)}.navb button{background:var(--card);color:var(--g);border:1px solid var(--g)}.navb button.sel{background:#2f6b3a;color:#fff}
.chb{margin:3px 3px 3px 0;background:var(--card);color:var(--ink);border:1px solid var(--line)}.chb.sel{background:#2f6b3a;color:#fff;border-color:#2f6b3a}
.auto{display:flex;gap:8px;flex-wrap:wrap}.grp{margin:8px 0}
table{border-collapse:collapse;width:100%;font-size:13px;min-width:560px}th,td{padding:7px 8px;border-bottom:1px solid var(--line);text-align:left}th{color:var(--g);cursor:pointer}th.sel{background:var(--g2)}td.bst{background:var(--g2);font-weight:700}td:first-child{color:var(--mut);font-weight:400;background:none}
.vd{background:var(--g2);border-left:4px solid var(--g);padding:10px;border-radius:8px;margin-bottom:12px;font-size:14px}
.wi{display:grid;grid-template-columns:140px 1fr 130px;gap:8px;align-items:center;font-size:13px;margin:6px 0}.wb{height:12px;background:var(--line);border-radius:6px;overflow:hidden}.wb i{display:block;height:100%;background:var(--g)}.pos{color:var(--g)}.neg{color:var(--bad)}
.cnav{display:flex;justify-content:space-between;align-items:center;margin:8px 0}.cnav b{font-size:15px}
.cal{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}.dow{font-size:11px;color:var(--mut);text-align:center}
.day{min-height:46px;border:1px solid var(--line);border-radius:8px;padding:3px 4px;cursor:pointer;font-size:12px;display:flex;flex-direction:column;justify-content:space-between}
.day.today{border-color:var(--g);font-weight:700}.day.sel{background:var(--g2);outline:2px solid var(--g)}
.dots{display:flex;gap:3px;flex-wrap:wrap}.dots i{width:8px;height:8px;border-radius:50%;display:block}.dots i.dn{opacity:.3}
.leg{display:flex;gap:10px;flex-wrap:wrap;font-size:12px;color:var(--mut);margin:8px 0}.leg i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:4px}
.dd{margin-top:8px;padding:8px;border-radius:8px;background:var(--g2);font-size:13px}
</style></head><body>
<header><div><h1>🌾 Krishi Saathi <small style="font-weight:400">· demo</small></h1><div class="sub">Sample data for Nagarkot, Nepal · live version uses NASA POWER, a forecast API and IoT sensors</div></div><div class="sub" id="area">No field drawn yet</div></header>
<div id="wx"><div class="chip">Draw your field on the map to load farm data</div></div>
<div id="nav" class="navb"><button data-s="farm" class="sel">🏠 My farm</button><button data-s="cmp">⚖ Compare and simulate</button></div>
<main>
<section>
 <div class="card"><h2>1 · Map your farm</h2>
  <svg id="map" viewBox="0 0 400 280">
   <rect width="400" height="280" fill="#b9c98a"/>
   <path d="M0 210 Q100 180 200 200 T400 170 V280 H0Z" fill="#9db56f"/><path d="M0 140 Q120 110 230 130 T400 100 V170 Q300 190 200 175 T0 190Z" fill="#a9bf78"/>
   <path d="M0 60 Q100 30 220 55 T400 30 V100 Q300 130 220 115 T0 130Z" fill="#8fae66"/>
   <path d="M0 20 Q100 0 200 15 T400 0 V30 Q300 55 210 40 T0 60Z" fill="#6f9a59"/>
   <path d="M20 255 Q120 230 210 245 T390 220" stroke="#e7d9a8" stroke-width="5" fill="none"/>
   <g id="poly"></g></svg>
  <div class="hint" id="mh">Tap points on the map to outline your field (at least 3), then press Finish.</div>
  <button id="fin">Finish field</button> <button class="alt" id="clr">Clear</button> <button class="alt" id="demo">Use sample field</button></div>
 <div class="card"><h2>⚠ Alerts</h2><div id="alerts"><div class="alert ok">No farm selected yet.</div></div></div>
 <div class="card"><h2>📡 IoT sensors <small style="color:var(--mut)">(simulated, try the sliders)</small></h2>
  <div class="sl">Soil moisture %<input type="range" id="sm" min="0" max="100" value="45"><span id="smv">45</span></div>
  <div class="sl">Soil temp °C<input type="range" id="st" min="0" max="45" value="14"><span id="stv">14</span></div>
  <div class="sl">Soil pH<input type="range" id="ph" min="40" max="90" value="60"><span id="phv">6</span></div></div>
</section>
<section>
 <div class="card"><h2>2 · Best crops for this farm <small style="color:var(--mut)">(tap one)</small></h2><div id="crops">Waiting for a field…</div></div>
 <div class="card"><h2>3 · Farm schedule &amp; crop status</h2><div id="sched">Draw a field to see the plan.</div></div>
 <div class="card"><h2>🌿 Ask the Elder (chemical-free advice)</h2><div id="chatlog"><div class="m">Namaste! Try: “natural fertilizer”, “aphids”, “drought”, “seed treatment”.</div></div>
  <div id="chatf"><input id="q" placeholder="Ask a question…"><button id="ask">Ask</button></div></div>
</section></main>
<div id="cmp" hidden style="padding:12px 16px">
 <div id="verdict"></div>
 <div class="card"><h2>Auto-detected <small style="color:var(--mut)">(NASA + your sensors, nothing to type)</small></h2><div class="auto" id="auto"></div></div>
 <div class="card"><h2>What do you have? <small style="color:var(--mut)">(4 taps, asked once)</small></h2><div id="prof"></div></div>
 <div class="card"><h2>Crop comparison <small style="color:var(--mut)">(tap a crop name for what-if)</small></h2><div style="overflow-x:auto"><table id="tbl"></table></div><div class="hint">Yield, price and cost numbers are sample placeholders until calibrated with local data.</div></div>
 <div class="card"><h2 id="wit">What if…</h2><div id="wi"></div></div>
</div>
<script>
const $=id=>document.getElementById(id);
const MON=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],DM=[31,28,31,30,31,30,31,31,30,31,30,31];
// Sample NASA POWER style climatology for ~1,900 m hills (T °C, rain mm/day)
const CL={T:[6,8,12,15,18,20,20,20,19,16,11,8],P:[.5,.8,1.3,2.2,4.5,8,12,11,7,2.5,.4,.3]};
const FC={t:[[19,7],[20,8],[21,8],[22,9],[21,8],[20,7],[21,8]],r:[0,0,0,1,0,0,0]};
const MOCK={rain30:12,sun:4.4,rh:58,now:16};
const CROPS=[
{n:'Finger millet (Kodo)',t:[15,30],w:300,d:110,sow:[4,5,6],tip:'Drought-hardy landrace; intercrop with black gram.'},
{n:'Buckwheat (Fapar)',t:[12,26],w:250,d:80,sow:[2,3,7,8],tip:'Fast cover crop; suppresses weeds on poor soil.'},
{n:'Maize + beans + pumpkin',t:[18,32],w:500,d:110,sow:[2,3,4],tip:'Three-sisters polyculture: beans fix nitrogen.',leg:1},
{n:'Lentil (Masuro)',t:[8,22],w:200,d:120,sow:[9,10],tip:'Winter legume sown into residual moisture.',leg:1},
{n:'Mustard',t:[8,24],w:200,d:100,sow:[9,10],tip:'Use as border/trap crop for aphids.'},
{n:'Hill wheat / barley',t:[8,22],w:300,d:130,sow:[9,10,11],tip:'Farmer-saved seed; rotate after a legume.'},
{n:'Potato',t:[10,20],w:400,d:100,sow:[0,1,8],tip:'Mulch with straw; never repeat on same plot.'},
{n:'Turmeric / Ginger',t:[20,32],w:900,d:240,sow:[3,4],tip:'Shade-loving; mulch heavily with leaves.'}];
const KB=[
{k:['fertil','manure','urea','nutrient','natural'],a:'Chemical-free feeding: compost/FYM; Jeevamrit (Jholmal in Nepal): 10 kg cow dung + 10 L cow urine + 2 kg jaggery + 2 kg pulse flour + a handful of soil in 200 L water, ferment 5–7 days, stir daily, apply weekly. Rotate legumes and use green manure.'},
{k:['seed','beej'],a:'Beejamrit seed treatment: 5 kg cow dung + 5 L cow urine + 50 g lime + a handful of soil in 20 L water. Soak overnight, coat seeds, shade-dry. Save seed from your best plants.'},
{k:['pest','insect','aphid','worm','neem'],a:'Neem spray: soak 5 kg crushed neem leaves in 20 L water overnight, strain, add a little soap, spray in the evening. Plant marigold borders and mustard as trap crop.'},
{k:['fung','blight','mildew','disease'],a:'Spray buttermilk (1 L in 10 L water) or Panchagavya 3%. Keep spacing, avoid night watering, rotate crops.'},
{k:['drought','dry','water','irrigat','moisture'],a:'Mulch 5–10 cm with straw or leaves, grow millets, dig half-moon trenches and small ponds, irrigate at dawn, add compost to hold water.'},
{k:['rotat','mono','intercrop','mix'],a:'Rotate cereal → legume → vegetable → green manure. Intercrop millet + black gram, or maize + beans + pumpkin.'}];
let pts=[],field=false,sel=null,rec=[];
const svg=$('map');
svg.addEventListener('click',e=>{if(field)return;const r=svg.getBoundingClientRect();pts.push([(e.clientX-r.left)/r.width*400,(e.clientY-r.top)/r.height*280]);draw()});
function draw(){$('poly').innerHTML=(pts.length>2?`<polygon points="${pts.join(' ')}" fill="#2f6b3a55" stroke="#fff" stroke-width="2"/>`:'')+pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#fff" stroke="#2f6b3a"/>`).join('')}
$('clr').onclick=()=>{pts=[];field=false;draw();$('area').textContent='No field drawn yet'};
$('demo').onclick=()=>{pts=[[110,110],[250,95],[290,170],[190,200],[120,175]];draw();finish()};
$('fin').onclick=()=>{if(pts.length<3){$('mh').textContent='Add at least 3 points first.';return}finish()};
function finish(){
 field=true;let a=0;pts.forEach((p,i)=>{const q=pts[(i+1)%pts.length];a+=p[0]*q[1]-q[0]*p[1]});
 const ha=Math.abs(a/2)*0.37/10000;HA=ha; // 1 map unit ≈ 4 m (demo scale)
 $('area').textContent=`Field ≈ ${ha.toFixed(2)} ha · 27.693° N, 85.520° E`;
 $('wx').innerHTML='<div class="chip">Fetching NASA POWER + forecast…</div>';
 setTimeout(()=>{wx();recommend();alerts()},700)}
function wx(){
 const m=MON[new Date().getMonth()],norm=CL.P[new Date().getMonth()]*30,now=new Date();
 let h=`<div class="chip"><small>Now</small><b>${MOCK.now}°C</b><small>RH ${MOCK.rh}%</small></div><div class="chip"><small>NASA 30-day rain</small><b>${MOCK.rain30} mm</b><small>normal ${norm.toFixed(0)} mm</small></div><div class="chip"><small>Solar (NASA)</small><b>${MOCK.sun}</b><small>kWh/m²/day</small></div>`;
 FC.t.forEach((t,i)=>{const d=new Date(now.getTime()+i*864e5);h+=`<div class="chip"><small>${d.toDateString().slice(4,10)}</small><b>${t[0]}° / ${t[1]}°</b><small>💧 ${FC.r[i]} mm</small></div>`});
 $('wx').innerHTML=h}
const sn=()=>({moist:+$('sm').value,soilT:+$('st').value,ph:$('ph').value/10});
function recommend(){
 if(!field)return;const s=sn(),now=new Date();
 rec=CROPS.map(c=>{let best=null;
  c.sow.forEach(m=>{const mo=Math.ceil(c.d/30);let T=0,R=0;
   for(let i=0;i<mo;i++){const x=(m+i)%12;T+=CL.T[x];R+=CL.P[x]*DM[x]}
   T/=mo;R*=(0.6+s.moist/100*.8);
   const ts=T<c.t[0]?1-(c.t[0]-T)/10:T>c.t[1]?1-(T-c.t[1])/10:1;let rs=R/c.w;rs=rs>1?1-(rs-1)*.4:rs;
   let sc=Math.max(0,ts)*.5+Math.max(0,Math.min(rs,1))*.5;if(!best||sc>best.sc)best={sc,m,T,R}});
  let d=new Date(now.getFullYear(),best.m,best.m==now.getMonth()?now.getDate():10);if(d<new Date(now-5*864e5))d.setFullYear(d.getFullYear()+1);
  return {...c,...best,sow0:d}}).sort((a,b)=>b.sc-a.sc).slice(0,5);
 if(sel==null)sel=0;
 $('crops').innerHTML=rec.map((c,i)=>`<div class="crop ${sel==i?'sel':''}" data-i="${i}"><div><b>${c.n}</b>${c.leg?' 🫘':''}<small>Sow ~${c.sow0.toDateString().slice(4,10)} · ${c.d} days · ~${Math.round(c.R)} mm expected rain</small><small>${c.tip}</small></div><div><b>${Math.round(c.sc*100)}%</b><div class="bar" style="width:60px"><i style="width:${c.sc*100}%"></i></div></div></div>`).join('')+'<div class="hint">🫘 = legume (restores soil). Mixed cropping beats repeating one crop.</div><button id="go" style="margin-top:8px;width:100%">Next: compare crops and simulate yield →</button>';
 document.querySelectorAll('.crop').forEach(el=>el.onclick=()=>{sel=+el.dataset.i;recommend()});sched()}
const done={};
let calM=null,calSel=null,calCrop=null;
const TY={prep:['#a16207','Prepare land'],sow:['#2f6b3a','Sow'],care:['#2563eb','Care / feed'],harv:['#ea580c','Harvest']};
const ymd=d=>d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
function plan(c){const D=n=>new Date(c.sow0.getTime()+n*864e5);return [['Clear field, add compost, plough lightly',-21,'prep'],['Prepare beds and drainage; gather mulch',-7,'prep'],['Beejamrit seed treatment',-1,'prep'],['SOW '+c.n,0,'sow'],['First weeding + mulch',25,'care'],['Jeevamrit top-dressing',30,'care'],['Pest scouting (neem spray if needed)',45,'care'],['Flowering: keep moisture steady',Math.round(c.d*.55),'care'],['HARVEST',c.d,'harv'],['Save seed, compost residue, plan rotation',c.d+7,'harv']].map(([t,o,ty],i)=>({t,ty,d:D(o),k:c.n+i}))}
function sched(){
 const c=rec[sel],now=new Date(),P=plan(c),by={};
 if(calCrop!=c.n){calCrop=c.n;calM=new Date(c.sow0.getFullYear(),c.sow0.getMonth(),1);calSel=ymd(c.sow0)}
 P.forEach(x=>{const k=ymd(x.d);(by[k]=by[k]||[]).push(x)});
 const y=calM.getFullYear(),m=calM.getMonth(),first=new Date(y,m,1).getDay(),nd=new Date(y,m+1,0).getDate(),pr=Math.max(0,Math.min(100,(now-c.sow0)/864e5/c.d*100));
 let g=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>`<div class="dow">${d}</div>`).join('');
 for(let i=0;i<first;i++)g+='<div></div>';
 for(let d=1;d<=nd;d++){const k=y+'-'+m+'-'+d,it=by[k]||[];g+=`<div class="day ${k==ymd(now)?'today':''} ${k==calSel?'sel':''}" data-k="${k}"><span>${d}</span><div class="dots">${it.map(x=>`<i class="${done[x.k]?'dn':''}" style="background:${TY[x.ty][0]}"></i>`).join('')}</div></div>`}
 const day=P.filter(x=>ymd(x.d)==calSel),nxt=P.filter(x=>x.d>=new Date(now-864e5)&&!done[x.k]).slice(0,2);
 $('sched').innerHTML=`<b>${c.n}</b>: ${pr==0?'🟡 not sown yet':pr<100?'🟢 growing':'✅ harvest time'}<div class="bar"><i style="width:${pr}%"></i></div>
 <div class="cnav"><button class="alt" id="cp">‹</button><b>${calM.toLocaleString('en',{month:'long',year:'numeric'})}</b><button class="alt" id="cn">›</button></div>
 <div class="cal">${g}</div>
 <div class="leg">${Object.values(TY).map(t=>`<span><i style="background:${t[0]}"></i>${t[1]}</span>`).join('')}</div>
 <div class="dd">${day.length?day.map(x=>`<div class="task"><input type="checkbox" data-k="${x.k}" ${done[x.k]?'checked':''}><span style="flex:1">${x.t}</span><span class="tag">${TY[x.ty][1]}</span></div>`).join(''):'No tasks on the selected day. Tap a day with a coloured dot.'}</div>
 ${nxt.length?`<div class="hint">Coming up: ${nxt.map(x=>x.d.toDateString().slice(4,10)+' – '+x.t).join(' · ')}</div>`:''}`;
 document.querySelectorAll('.day').forEach(el=>el.onclick=()=>{calSel=el.dataset.k;sched()});
 $('cp').onclick=()=>{calM=new Date(y,m-1,1);sched()};$('cn').onclick=()=>{calM=new Date(y,m+1,1);sched()};
 document.querySelectorAll('.dd input').forEach(el=>el.onchange=()=>{done[el.dataset.k]=el.checked;sched()})}
function schedList(){
 const c=rec[sel],now=new Date(),D=n=>new Date(c.sow0.getTime()+n*864e5);
 const T=[['Clear field, add compost, plough lightly',-21],['Prepare beds and drainage; gather mulch',-7],['Beejamrit seed treatment',-1],['SOW '+c.n,0],['First weeding + mulch',25],['Jeevamrit top-dressing',30],['Pest scouting (neem spray if needed)',45],['Flowering stage: keep moisture steady',Math.round(c.d*.55)],['HARVEST',c.d],['Save seed, compost residue, plan rotation',c.d+7]];
 const pr=Math.max(0,Math.min(100,(now-c.sow0)/864e5/c.d*100));
 $('sched').innerHTML=`<b>${c.n}</b>: ${pr==0?'🟡 not sown yet':pr<100?'🟢 growing':'✅ harvest time'}<div class="bar"><i style="width:${pr}%"></i></div>`+T.map(([t,o],i)=>{const d=D(o),k=c.n+i,st=done[k]?'':d<new Date(now-864e5)?'late':Math.abs(d-now)<3*864e5?'now':'';
  return `<div class="task"><input type="checkbox" data-k="${k}" ${done[k]?'checked':''}><span style="width:62px">${d.toDateString().slice(4,10)}</span><span style="flex:1">${t}</span>${st?`<span class="tag ${st}">${st=='late'?'overdue':'this week'}</span>`:''}</div>`}).join('');
 document.querySelectorAll('.task input').forEach(el=>el.onchange=()=>{done[el.dataset.k]=el.checked})}
function alerts(){
 if(!field)return;const s=sn(),A=[],norm=CL.P[new Date().getMonth()]*30,r7=FC.r.reduce((a,b)=>a+b,0);
 if(MOCK.rain30<norm*.5&&r7<10)A.push(['high',`Drought risk: last 30 days had ${MOCK.rain30} mm vs ~${norm.toFixed(0)} mm normal and almost no rain is forecast. Mulch now and prefer drought-hardy crops.`]);
 if(s.moist<25)A.push(['high',`Sensor: soil moisture is only ${s.moist}%. Irrigate at dawn and mulch.`]);
 if(s.soilT<5)A.push(['','Soil is very cold; delay sowing or use mulch tunnels.']);
 if(s.moist>85)A.push(['','Waterlogging risk: fungal disease likely. Improve drainage.']);
 if(s.ph<5.2)A.push(['',`Soil is acidic (pH ${s.ph}). Add wood ash or lime plus compost.`]);
 if(s.ph>8)A.push(['','Soil is alkaline. Add compost and green manure.']);
 $('alerts').innerHTML=A.length?A.map(a=>`<div class="alert ${a[0]}">${a[1]}</div>`).join(''):'<div class="alert ok">✅ No major risks in the next 7 days.</div>'}
[['sm','smv',1],['st','stv',1],['ph','phv',10]].forEach(([a,b,d])=>$(a).oninput=()=>{$(b).textContent=$(a).value/d;if(field){recommend();alerts()}});
function ask(){const q=$('q').value.trim();if(!q)return;const L=$('chatlog'),h=KB.find(x=>x.k.some(w=>q.toLowerCase().includes(w)));
 const u=document.createElement('div');u.className='m u';u.textContent=q;const b=document.createElement('div');b.className='m';b.textContent='🌿 '+(h?h.a:'I do not have that yet. Ask your local elders and extension office, and add their answer to this knowledge base so it is never lost.');
 L.append(u,b);$('q').value='';L.scrollTop=L.scrollHeight}
$('ask').onclick=ask;$('q').onkeydown=e=>{if(e.key=='Enter')ask()};
let HA=.5,P={water:1,tools:1,seed:1,crew:1},csel=0;
const G={water:['Rain only','Well or pond','Canal or river'],tools:['Hand tools','Bullock plough','Power tiller'],seed:['My saved seed','Improved seed','Hybrid seed'],crew:['1 to 2 people','3 to 4 people','5 or more']};
const GL={water:'💧 Water access',tools:'🛠 Tools',seed:'🌱 Seed',crew:'👨‍🌾 Workers'};
const GV={water:[0,3000,6000],tools:[1,.8,.65],seed:['own','opv','hyb'],crew:[2,4,6]};
// y kg/ha, price NPR/kg, other cost/ha, seed cost/ha, labour days/ha, drought tolerance
const ECON={'Finger millet (Kodo)':[1500,70,20000,2000,180,.8],'Buckwheat (Fapar)':[1000,90,15000,2500,120,.6],'Maize + beans + pumpkin':[2500,45,35000,4000,220,.4],'Lentil (Masuro)':[900,160,20000,6000,140,.6],'Mustard':[800,110,18000,1500,130,.6],'Hill wheat / barley':[2200,45,32000,5000,160,.4],'Potato':[12000,35,120000,40000,300,.3],'Turmeric / Ginger':[3000,120,90000,30000,320,.3]};
const SD={own:{y:.9,c:.25,w:1},opv:{y:1,c:1,w:1},hyb:{y:1.25,c:2.2,w:1.15,hy:1}};
function rng(s){return()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const gs=r=>Math.sqrt(-2*Math.log(r()+1e-9))*Math.cos(6.2832*r());
const nf=x=>Math.round(x).toLocaleString('en-IN');
const prof=()=>({ha:HA,moist:+$('sm').value,L:GV.water[P.water],eff:.6,lab:GV.crew[P.crew],tool:GV.tools[P.tools],seed:GV.seed[P.seed],mulch:0,comp:0});
function sim(c,I,N=300){
 const [Y,Pr,C,S0,Lb,tol]=ECON[c.n],r=rng(7+c.n.length),S=SD[I.seed],o=[],f={Climate:0,Water:0,Labour:0};let fail=0;
 for(let k=0;k<N;k++){
  const rm=Math.max(.4,1+.28*gs(r)),dt=1.2*gs(r),mo=Math.ceil(c.d/30);let T=0,R=0;
  for(let i=0;i<mo;i++){const x=(c.m+i)%12;T+=CL.T[x];R+=CL.P[x]*DM[x]}
  T=T/mo+dt;R*=rm*(.6+I.moist/100*.8);
  const tf=Math.max(0,T<c.t[0]?1-(c.t[0]-T)/10:T>c.t[1]?1-(T-c.t[1])/10:1);
  const need=c.w*S.w*(I.mulch?.8:1),irr=I.L*c.d*I.eff/(I.ha*1e4),ratio=Math.min(1.2,(R*.8+irr)/need),wf=ratio>=1?1:Math.pow(ratio,1.3-.7*tol);
  const lf=Math.pow(Math.min(1,I.lab*c.d*.5/(Lb*I.ha*I.tool)),.7);
  const y=Y*I.ha*tf*wf*lf*S.y*(I.comp?1.12:1)*(S.hy&&!I.comp?.92:1)*(1+.05*gs(r));
  o.push(Math.max(0,y));f.Climate+=tf;f.Water+=wf;f.Labour+=lf;if(wf<.6||tf<.5)fail++}
 o.sort((a,b)=>a-b);const med=o[Math.floor(.5*(N-1))],cost=(C+S0*S.c)*I.ha;
 return {med,inc:med*Pr,cost,net:med*Pr-cost,risk:fail/N,lim:Object.entries(f).sort((a,b)=>a[1]-b[1])[0][0]}}
function show(s){$('cmp').hidden=s!='cmp';document.querySelector('main').hidden=s=='cmp';document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('sel',b.dataset.s==s));if(s=='cmp')cmpRender()}
document.addEventListener('click',e=>{const t=e.target;if(t.id=='go')show('cmp');else if(t.closest('#nav')&&t.dataset.s)show(t.dataset.s);else if(t.dataset&&t.dataset.g){P[t.dataset.g]=+t.dataset.v;cmpRender()}else if(t.closest('th[data-c]')){csel=+t.closest('th').dataset.c;cmpRender()}});
function cmpRender(){
 if(!field||!rec.length){$('verdict').innerHTML='<div class="vd">Draw your field on the My farm screen first.</div>';return}
 const I=prof(),m0=new Date().getMonth(),rain3=[0,1,2].reduce((a,i)=>a+CL.P[(m0+i)%12]*DM[(m0+i)%12],0);
 $('auto').innerHTML=[['Field size',HA.toFixed(2)+' ha','from your map'],['Soil moisture',I.moist+'%','IoT sensor'],['Soil temp',$('st').value+'°C','IoT sensor'],['Soil pH',$('ph').value/10,'IoT sensor'],['Next 3 months rain','~'+Math.round(rain3)+' mm','NASA POWER'],['Last 30 days rain',MOCK.rain30+' mm','NASA POWER']].map(a=>`<div class='chip'><small>${a[0]}</small><b>${a[1]}</b><small>${a[2]}</small></div>`).join('');
 $('prof').innerHTML=Object.keys(G).map(g=>`<div class='grp'><b>${GL[g]}</b><br>${G[g].map((l,i)=>`<button class='chb ${P[g]==i?'sel':''}' data-g='${g}' data-v='${i}'>${l}</button>`).join('')}</div>`).join('');
 const CR=rec.map(c=>({c,...sim(c,I)})),mx=(f,hi)=>{const v=CR.map(f),m=hi?Math.max(...v):Math.min(...v);return v.map(x=>x===m)};
 const top=CR.reduce((a,b)=>b.net>a.net?b:a),safe=CR.reduce((a,b)=>b.risk<a.risk?b:a);
 $('verdict').innerHTML=`<div class='vd'>🏆 <b>Plant ${top.c.n} first:</b> about ${nf(top.med)} kg, net ~NPR ${nf(top.net)} with your ${I.moist}% soil moisture and ${G.water[P.water].toLowerCase()}.<br>🛡 <b>Safest:</b> ${safe.c.n} (${Math.round(safe.risk*100)}% bad-season risk). Plant a cereal plus a legume to spread risk.</div>`;
 if(csel>=CR.length)csel=0;
 const rows=[['Sow on',x=>x.c.sow0.toDateString().slice(4,10)],['Likely yield',x=>nf(x.med)+' kg',x=>x.med,1],['Income',x=>'NPR '+nf(x.inc),x=>x.inc,1],['Cost',x=>'NPR '+nf(x.cost),x=>x.cost,0],['Net profit',x=>'NPR '+nf(x.net),x=>x.net,1],['Bad-season risk',x=>Math.round(x.risk*100)+'%',x=>x.risk,0],['Water needed',x=>x.c.w+' mm',x=>x.c.w,0],['Days to harvest',x=>x.c.d,x=>x.c.d,0],['Held back by',x=>x.lim],['Soil benefit',x=>x.c.leg?'🫘 Restores soil':'-'],['Verdict',x=>x==top?'🏆 Best profit':x==safe?'🛡 Safest':'']];
 $('tbl').innerHTML=`<tr><th></th>${CR.map((x,i)=>`<th data-c='${i}' class='${i==csel?'sel':''}'>${x.c.n}</th>`).join('')}</tr>`+rows.map(([l,f,k,hi])=>{const b=k?mx(k,hi):[];return `<tr><td>${l}</td>${CR.map((x,i)=>`<td class='${b[i]?'bst':''}'>${f(x)}</td>`).join('')}</tr>`}).join('');
 const c=CR[csel].c,sc=[['Your plan now',{}],['+ Mulch the soil',{mulch:1}],['+ Compost or manure',{comp:1}],['+ Drip irrigation',{eff:.9,L:I.L||1500}],['+ Hybrid seed',{seed:'hyb',comp:1}],['+ Power tiller',{tool:.65}],['+ 2 more workers',{lab:I.lab+2}]],res=sc.map(([n,m])=>({n,...sim(c,{...I,...m})})),b=res[0],mxy=Math.max(...res.map(x=>x.med),1);
 $('wit').textContent='If you plant '+c.n+', what if you…';
 $('wi').innerHTML=res.map((x,i)=>{const d=b.med?(x.med-b.med)/b.med*100:0,dn=x.net-b.net;return `<div class='wi'><span>${x.n}</span><div class='wb'><i style='width:${x.med/mxy*100}%'></i></div><span>${nf(x.med)} kg ${i?`<b class='${d>=0?'pos':'neg'}'>${d>=0?'+':''}${d.toFixed(0)}%</b><br><small class='${dn>=0?'pos':'neg'}'>${dn>=0?'+':''}NPR ${nf(dn)}</small>`:''}</span></div>`}).join('')}
document.querySelectorAll('#sm,#st,#ph').forEach(e=>e.addEventListener('input',()=>{if(!$('cmp').hidden)cmpRender()}));
</script></body></html>
