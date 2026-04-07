/* ═══════════════════════════════
   DATA
═══════════════════════════════ */
const HOURS = [
  {t:0,  tw:"01:00", wr:78.7, avg:9,  bull:80, bear:77, top:true},
  {t:1,  tw:"02:00", wr:79.4, avg:7,  bull:80, bear:78, top:true},
  {t:2,  tw:"03:00", wr:77.8, avg:6,  bull:77, bear:79, top:true},
  {t:3,  tw:"04:00", wr:65.1, avg:8,  bull:66, bear:64, avoid:true},
  {t:4,  tw:"05:00", wr:66.7, avg:11, bull:68, bear:66, avoid:true},
  {t:5,  tw:"06:00", wr:72.4, avg:10, bull:72, bear:73},
  {t:6,  tw:"07:00", wr:74.2, avg:8,  bull:77, bear:71},
  {t:7,  tw:"08:00", wr:79.0, avg:10, bull:79, bear:79, top:true},
  {t:8,  tw:"09:00", wr:85.0, avg:14, bull:85, bear:85, top:true},
  {t:9,  tw:"10:00", wr:78.6, avg:6,  bull:80, bear:77, top:true},
  {t:10, tw:"11:00", wr:71.1, avg:9,  bull:73, bear:69},
  {t:11, tw:"12:00", wr:71.8, avg:10, bull:69, bear:76},
  {t:12, tw:"13:00", wr:75.7, avg:9,  bull:78, bear:72},
  {t:13, tw:"14:00", wr:75.0, avg:9,  bull:76, bear:73},
  {t:14, tw:"15:00", wr:77.9, avg:10, bull:78, bear:77},
  {t:15, tw:"16:00", wr:55.1, avg:5,  bull:55, bear:55, avoid:true, worst:true},
  {t:18, tw:"19:00", wr:68.1, avg:13, bull:68, bear:69, avoid:true},
  {t:19, tw:"20:00", wr:74.1, avg:7,  bull:75, bear:73},
  {t:20, tw:"21:00", wr:69.4, avg:12, bull:71, bear:67},
  {t:21, tw:"22:00", wr:68.4, avg:11, bull:69, bear:67},
  {t:22, tw:"23:00", wr:67.4, avg:11, bull:70, bear:65, avoid:true},
  {t:23, tw:"00:00", wr:71.1, avg:11, bull:72, bear:70},
];
const DOW = [{d:"Mon",wr:71.9,i:1},{d:"Tue",wr:73.0,i:2},{d:"Wed",wr:72.9,i:3},{d:"Thu",wr:74.5,i:4},{d:"Fri",wr:72.6,i:5}];
const RETRACE = [{b:"0–5 pt",p:53.5},{b:"5–10 pt",p:20.5},{b:"10–15 pt",p:9.5},{b:"15–20 pt",p:5.2},{b:"20–30 pt",p:5.5},{b:"30–50 pt",p:3.8},{b:"50+ pt",p:2.0}];
const DOL_CUMUL = [{m:":00",p:26.7},{m:":02",p:42.2},{m:":05",p:54.1},{m:":10",p:66.4},{m:":15",p:73.9},{m:":30",p:87.9},{m:":45",p:95.6}];
const TIME_STOP = [{min:5,p:53.1},{min:10,p:45.3},{min:15,p:39.2},{min:20,p:33.9},{min:30,p:23.1},{min:45,p:9.8}];

const coreSequences = [
  {from:"EQ",  to:"High", triggers:299,  successes:155,  rate:51.8},
  {from:"Low", to:"High", triggers:1885, successes:985,  rate:52.3},
  {from:"High",to:"Low",  triggers:1860, successes:976,  rate:52.5},
  {from:"EQ",  to:"Low",  triggers:299,  successes:223,  rate:74.6},
  {from:"Low", to:"EQ",   triggers:1885, successes:1688, rate:89.5},
  {from:"High",to:"EQ",   triggers:1860, successes:1690, rate:90.9},
];
const timeSequences = [
  {from:"High",  session:"london", to:"Low", toSession:"ny",        triggers:945,  successes:426,  rate:45.1},
  {from:"High",  session:"asia",   to:"Low", toSession:"london/ny", triggers:1091, successes:543,  rate:49.8},
  {from:"Low",   session:"london", to:"High",toSession:"ny",        triggers:689,  successes:346,  rate:50.2},
  {from:"Low",   session:"asia",   to:"High",toSession:"london/ny", triggers:887,  successes:477,  rate:53.8},
  {from:"EQ",    session:"london", to:"High",toSession:"ny",        triggers:158,  successes:86,   rate:54.4},
  {from:"EQ",    session:"asia",   to:"High",toSession:"london/ny", triggers:185,  successes:105,  rate:56.8},
  {from:"EQ",    session:"asia",   to:"Low", toSession:"london/ny", triggers:185,  successes:140,  rate:75.7},
  {from:"EQ",    session:"london", to:"Low", toSession:"ny",        triggers:158,  successes:120,  rate:75.9},
  {from:"High",  session:"london", to:"EQ",  toSession:"ny",        triggers:945,  successes:835,  rate:88.4},
  {from:"P0.66", session:"london", to:"EQ",  toSession:"ny",        triggers:2974, successes:2642, rate:88.8},
  {from:"P0.33", session:"london", to:"EQ",  toSession:"ny",        triggers:2974, successes:2642, rate:88.8},
  {from:"High",  session:"asia",   to:"EQ",  toSession:"london/ny", triggers:1091, successes:970,  rate:88.9},
  {from:"P0.66", session:"asia",   to:"EQ",  toSession:"london/ny", triggers:2974, successes:2702, rate:90.9},
  {from:"P0.33", session:"asia",   to:"EQ",  toSession:"london/ny", triggers:2974, successes:2702, rate:90.9},
  {from:"Low",   session:"london", to:"EQ",  toSession:"ny",        triggers:689,  successes:633,  rate:91.9},
  {from:"Low",   session:"asia",   to:"EQ",  toSession:"london/ny", triggers:887,  successes:837,  rate:94.4},
];

/* ═══════════════════════════════
   UTILS
═══════════════════════════════ */
function pad(n){ return String(n).padStart(2,'0'); }
function getNY(){ return new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'})); }
function getHD(h){ return HOURS.find(d=>d.t===h)||null; }
function getDOLProb(m){ for(let i=TIME_STOP.length-1;i>=0;i--){ if(m>=TIME_STOP[i].min) return TIME_STOP[i].p; } return 71.2; }

const CERT_IMAGE_FILES = [
  '65FDF9EF-451D-482E-88D7-7F4EDFF17673.png',
  '24C4DA19-4F93-4FD7-94F9-9880E21C1315.png',
  '86F111DA-36AC-429D-92F9-DFD63362F5C8.png',
  '890BA5F7-C929-4E53-8BAA-985E85A99191.png',
  '8224F015-E7B5-4132-A6F4-18FD4BD52C0B.png',
  'image.jpg',
  'G-__ikeW0AAIUxC.png',
  'ChatGPT_Image_Jan_17_2026_10_57_47_AM.png',
  'C40DDDFD-0928-4FEA-B7B0-DB8E75612516.png',
  'IMG_1708.png',
  'IMG_1751.png',
  'IMG_1712.png',
  'Screenshot_2026-02-11_at_19.33.08.png',
  'Passed_Certificate.jpg',
  'pass_certificate_1.jpg'
];

function formatCertLabel(filename){
  const base = filename.replace(/\.[^.]+$/, '');
  const spaced = base.replace(/[_-]+/g, ' ').trim();
  const cleaned = spaced.length > 26 ? `${spaced.slice(0,26)}...` : spaced;
  return `Payout Certificate · ${cleaned}`;
}

const DEFAULT_CERTS = CERT_IMAGE_FILES.map((filename) => ({
  name: formatCertLabel(filename),
  url: filename
}));

function shuffle(items){
  const arr = [...items];
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function payoutCardHTML(cert, hidden=false){
  const hiddenAttr = hidden ? ' aria-hidden="true"' : '';
  const img = cert.url ? `<img src="${cert.url}" alt="${cert.name}">` : '';
  return `<article class="payout-chip"${hiddenAttr}>${img}</article>`;
}

function renderPayoutCertificates(){
  const track = document.getElementById('payout-track');
  if(!track) return;
  const all = shuffle([...DEFAULT_CERTS]);
  track.innerHTML = all.map(c=>payoutCardHTML(c)).join('') + all.map(c=>payoutCardHTML(c,true)).join('');
}

function initMobileHeaderScroll(){
  const update = () => {
    const isMobile = window.matchMedia('(max-width: 800px)').matches;
    const isScrolled = window.scrollY > 24;
    document.body.classList.toggle('mobile-header-condensed', isMobile && isScrolled);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

function wrColor(wr){
  if(wr>=78) return 'var(--green)';
  if(wr>=72) return 'var(--cyan)';
  if(wr>=68) return 'var(--text2)';
  if(wr>=65) return 'var(--amber)';
  return 'var(--red)';
}
function wrBadge(wr){
  if(wr>=78) return `<span class="badge badge-green">A+ ${wr}%</span>`;
  if(wr>=72) return `<span class="badge badge-cyan">Good ${wr}%</span>`;
  if(wr>=68) return `<span class="badge badge-gray">${wr}%</span>`;
  if(wr>=65) return `<span class="badge badge-amber">Weak ${wr}%</span>`;
  return `<span class="badge badge-red">Avoid ${wr}%</span>`;
}

/* ═══════════════════════════════
   APP SWITCHING
═══════════════════════════════ */
function switchApp(name){
  document.querySelectorAll('.app-view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.top-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  document.getElementById('topTab-'+name).classList.add('active');
}

/* ═══════════════════════════════
   H1 NAV
═══════════════════════════════ */
function showH1(name){
  document.querySelectorAll('.h1-tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('[id^=h1nav-]').forEach(b=>{ b.classList.remove('active'); b.style.color='var(--text3)'; b.style.borderBottomColor='transparent'; });
  document.getElementById('h1p-'+name).classList.add('active');
  const btn = document.getElementById('h1nav-'+name);
  btn.classList.add('active'); btn.style.color='var(--cyan)'; btn.style.borderBottomColor='var(--cyan)';
}

/* ═══════════════════════════════
   H1 STATIC RENDERS
═══════════════════════════════ */
function h1RenderRetrace(){
  document.getElementById('h1-retrace').innerHTML = RETRACE.map(r=>`
    <div class="retrace-row">
      <span style="font-size:12px;color:var(--text2);min-width:62px;">${r.b}</span>
      <div class="pbar" style="flex:1;"><div class="pbar-fill" style="width:${r.p*1.8}%;background:var(--blue);"></div></div>
      <span style="font-size:12px;font-weight:600;min-width:36px;text-align:right;">${r.p}%</span>
    </div>`).join('');
}

function h1RenderDOL(){
  document.getElementById('h1-dolcumul').innerHTML = DOL_CUMUL.map(r=>`
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <span style="font-size:13px;font-weight:700;min-width:28px;">${r.m}</span>
      <div class="pbar pbar-lg" style="flex:1;"><div class="pbar-fill" style="width:${r.p}%;background:var(--green);"></div></div>
      <span style="font-size:12px;color:var(--text2);min-width:36px;text-align:right;">${r.p}%</span>
    </div>`).join('');

  document.getElementById('h1-timecutoff').innerHTML = TIME_STOP.map(r=>{
    const c = r.p>=40?'var(--green)':r.p>=25?'var(--amber)':'var(--red)';
    return `<div class="stop-row">
      <span>After <strong>:${pad(r.min)}</strong> minutes</span>
      <span style="font-weight:700;color:${c};">${r.p}% probability</span>
    </div>`;
  }).join('');
}

function h1RenderHours(activeT){
  document.getElementById('h1-hourslist').innerHTML = HOURS.map(d=>{
    const isActive = d.t===activeT;
    const bw = Math.round((d.wr-50)/50*100);
    const icon = d.top?'★':d.avoid?'✕':'';
    const ic = d.top?'var(--green)':d.avoid?'var(--red)':'transparent';
    return `<div class="hour-row${isActive?' active-row':''}">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:11px;color:${ic};min-width:12px;">${icon}</span>
        <span style="font-size:13px;font-weight:700;min-width:40px;">${pad(d.t)}:00</span>
        <span style="font-size:11px;color:var(--text3);">→ ${d.tw}</span>
        ${isActive?'<span class="badge badge-cyan" style="font-size:9px;">NOW</span>':''}
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:13px;font-weight:700;color:${wrColor(d.wr)};min-width:38px;text-align:right;">${d.wr}%</span>
        <div class="win-bar-wrap"><div class="win-bar" style="width:${bw}%;background:${wrColor(d.wr)};"></div></div>
        <span style="font-size:11px;color:var(--text3);min-width:22px;">:${pad(d.avg)}</span>
      </div>
    </div>`;
  }).join('');
}

function h1RenderDOW(){
  const ny = getNY(); const today = ny.getDay();
  document.getElementById('h1-dow').innerHTML = DOW.map(d=>`
    <div class="dow-card${d.i===today?' today':''}">
      <div class="label" style="text-align:center;">${d.d}</div>
      <div style="font-size:13px;font-weight:700;color:${wrColor(d.wr)};text-align:center;margin-top:3px;">${d.wr}%</div>
    </div>`).join('');
}

function h1CalcStops(){
  const e = parseFloat(document.getElementById('h1-entry').value);
  const dir = document.getElementById('h1-dir').value;
  const c = document.getElementById('h1-stopresults');
  if(isNaN(e)||e<=0){c.innerHTML='';return;}
  c.innerHTML = [{pts:10,pct:74},{pts:15,pct:84},{pts:22,pct:90},{pts:33,pct:95}].map(s=>{
    const lvl = dir==='long'?(e-s.pts).toFixed(2):(e+s.pts).toFixed(2);
    return `<div class="stop-row">
      <span><strong>${s.pts} pt</strong> → <span style="font-size:14px;font-weight:700;color:var(--cyan);">${lvl}</span></span>
      <span style="color:var(--text3);font-size:11px;">${s.pct}% of winners</span>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════
   H1 LIVE TICK
═══════════════════════════════ */
function h1Tick(){
  const ny = getNY();
  const h=ny.getHours(), m=ny.getMinutes(), s=ny.getSeconds();
  const trigH = h;
  const tradeTriggH = (h-1+24)%24;
  const tradingNow = getHD(tradeTriggH);

  // IST = UTC+5:30
  const ist = new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}));
  const ih=ist.getHours(), im=ist.getMinutes(), is_=ist.getSeconds();

  // Top nav clocks
  document.getElementById('top-clock').textContent     = `${pad(h)}:${pad(m)}:${pad(s)}`;
  document.getElementById('top-clock-ist').textContent = `${pad(ih)}:${pad(im)}:${pad(is_)}`;

  // H1 live clocks
  document.getElementById('h1-clock').textContent     = `${pad(h)}:${pad(m)}:${pad(s)}`;
  document.getElementById('h1-clock-ist').textContent = `${pad(ih)}:${pad(im)}:${pad(is_)}`;
  document.getElementById('h1-trigger').textContent = `${pad(trigH)}:00`;
  document.getElementById('h1-window').textContent  = `${pad(h)}:00 – ${pad(h)}:59`;

  const secEl = m*60+s;
  document.getElementById('h1-hrprog').style.width = Math.round(secEl/3600*100)+'%';
  document.getElementById('h1-minsleft').textContent = `${60-m}m`;

  if(tradingNow){
    document.getElementById('h1-cbadge').innerHTML = wrBadge(tradingNow.wr);
    document.getElementById('h1-cwr').textContent = tradingNow.wr+'% win rate';
    document.getElementById('h1-cwr').style.color = wrColor(tradingNow.wr);
    document.getElementById('h1-cdetail').innerHTML = `Bull: ${tradingNow.bull}% &nbsp;|&nbsp; Bear: ${tradingNow.bear}%<br>Avg DOL :${pad(tradingNow.avg)} &nbsp;|&nbsp; Trigger: ${pad(tradeTriggH)}:00`;
  }

  document.getElementById('h1-elapsed').textContent = `${m}:${pad(s)}`;
  const mprog = Math.round(m/60*100);
  document.getElementById('h1-minprog').style.width = mprog+'%';
  document.getElementById('h1-minprog').style.background = m>=30?'var(--red)':m>=10?'var(--amber)':'var(--green)';

  const prob = getDOLProb(m);
  const pc = prob>=40?'var(--green)':prob>=25?'var(--amber)':'var(--red)';
  document.getElementById('h1-dolbar').style.width = prob+'%';
  document.getElementById('h1-dolbar').style.background = pc;
  document.getElementById('h1-dolval').textContent = prob.toFixed(1)+'%';
  document.getElementById('h1-dolval').style.color = pc;

  document.getElementById('h1-action-badge').innerHTML =
    m<10  ? '<span class="badge badge-green">Hold</span>' :
    m<15  ? '<span class="badge badge-amber">Consider scratch</span>' :
    m<30  ? '<span class="badge badge-red">Exit signal</span>' :
             '<span class="badge badge-red">Exit now</span>';

  // Time stop pills
  const pills = document.querySelectorAll('#h1-tstops .tstop-pill');
  [10,15,30,45].forEach((thr,i)=>{
    pills[i].classList.remove('is-warn','is-danger');
    if(m>=thr) pills[i].classList.add(thr>=30?'is-danger':'is-warn');
  });

  // Alerts
  const alerts = [];
  if(tradingNow){
    if(tradingNow.wr>=78) alerts.push({t:'fire',title:'A+ Setup Active',msg:`${pad(h)}:00 trade window — ${tradingNow.wr}% WR. Bull ${tradingNow.bull}% / Bear ${tradingNow.bear}%. Avg DOL :${pad(tradingNow.avg)}.`});
    else if(tradingNow.wr>=72) alerts.push({t:'info',title:'Good Setup Active',msg:`${pad(h)}:00 — ${tradingNow.wr}% WR. Avg DOL :${pad(tradingNow.avg)}.`});
    else if(tradingNow.wr<65) alerts.push({t:'avoid',title:'Avoid This Hour',msg:`${pad(h)}:00 — only ${tradingNow.wr}% WR. Below threshold.`});
  }
  if(m>=45) alerts.push({t:'avoid',title:'Dead Trade Zone',msg:`${m} min elapsed — 10% DOL probability. Exit immediately.`});
  else if(m>=30) alerts.push({t:'avoid',title:'Exit Now',msg:`${m} min — 23% DOL probability. Should be out.`});
  else if(m>=15) alerts.push({t:'warn',title:'Strong Exit Signal',msg:`${m} min — 39% probability. Exit if not yet filled.`});
  else if(m>=10) alerts.push({t:'warn',title:'Consider Scratching',msg:`${m} min — 45% probability remaining.`});

  const nextData = getHD(h);
  if(nextData && nextData.wr>=78){
    alerts.push({t:'fire',title:`A+ Setup in ${60-m} min`,msg:`Trigger ${pad(h)}:59 close → Trade ${nextData.tw} (${nextData.wr}% WR). Prepare.`});
  }
  if(h===15) alerts.push({t:'avoid',title:'Worst Hour — Avoid',msg:'15:00 trigger / 16:00 trade = 55.1% WR. No trade.'});
  if(tradingNow && tradingNow.avg<=7 && m<3) alerts.push({t:'info',title:'Fast DOL Hour',msg:`Avg DOL at :${pad(tradingNow.avg)}. Watch for immediate fill at open.`});
  if(alerts.length===0) alerts.push({t:'neutral',title:'Monitoring',msg:`${pad(h)}:00 — no critical alerts. Next trigger closes at ${pad(h)}:59.`});

  document.getElementById('h1-alerts').innerHTML = alerts.map(a=>`
    <div class="alert-box alert-${a.t}">
      <div class="alert-title">${a.title}</div>
      <div>${a.msg}</div>
    </div>`).join('');

  const crit = alerts.filter(a=>a.t==='fire'||a.t==='avoid').length;
  document.getElementById('h1-alertcount').textContent = `${alerts.length} alert${alerts.length!==1?'s':''}`;
  const dot = document.getElementById('top-alert-dot');
  dot.textContent = crit; dot.style.display = crit>0?'inline':'none';

  h1RenderHours(trigH);
  h1RenderDOW();
}

/* ═══════════════════════════════
   RTH DECISION ENGINE LOGIC
═══════════════════════════════ */
let rthLevel=null, rthSession=null;

function getTier(r){ return r>=85?'a':r>=70?'b':'c'; }
function probLabel(r){ return r>=70?'a high probability':'a low probability'; }
function fmtTarget(to){ return to==='EQ'?'EQ':'PD RTH '+to; }

function getCoreName(from,to,rate){
  const fl = from==='EQ'?'EQ':'PD RTH '+from;
  return `If ${fl} is hit first → ${fmtTarget(to)} is ${probLabel(rate)} target`;
}
function getTimeName(seq){
  const fl = seq.from.startsWith('P0.')?seq.from+' projection':(seq.from==='EQ'?'EQ':'PD RTH '+seq.from);
  const sl = seq.session==='asia'?'Asia':'London';
  const tsl = seq.toSession==='ny'?'NY':'London/NY';
  return `If ${fl} is hit first during ${sl} → ${fmtTarget(seq.to)} is ${probLabel(seq.rate)} target during ${tsl}`;
}
function getCoreDesc(from,to,rate){
  if(to==='EQ') return `After tagging PD RTH ${from}, price returns to equilibrium. High-probability mean reversion — fade the extreme back to fair value.`;
  if(from==='EQ'&&to==='Low') return `EQ hit first with downside bias. Price tends to seek the low ~75% — look for short setups from EQ.`;
  if(from==='EQ'&&to==='High') return `EQ hit first with upside target. Near coin-flip — requires additional confluence to trade directionally.`;
  return `Full range traverse from ${from} to ${to}. ~52% — essentially random. Not a standalone edge without extra confirmation.`;
}
function getTimeDesc(seq){
  const sl = seq.session==='asia'?'Asia':'London';
  if(seq.to==='EQ') return `${seq.from} tagged during ${sl} → price returns to EQ during ${seq.toSession}. Strong mean-reversion setup.`;
  return `${seq.from} tagged during ${sl} → price seeks ${seq.to} during ${seq.toSession}. ${seq.rate>=70?'Solid directional edge.':'Weak edge — needs confluence.'}`;
}

function rthSelectLevel(level){
  rthLevel = level;
  document.getElementById('rth-panel1').classList.remove('active');
  document.getElementById('rth-panel2').classList.add('active');
  document.getElementById('rth-dot1').classList.replace('active','complete');
  document.getElementById('rth-dot2').classList.add('active');
}
function rthSelectSession(session){
  rthSession = session;
  document.getElementById('rth-panel2').classList.remove('active');
  document.getElementById('rth-panel3').classList.add('active');
  document.getElementById('rth-dot2').classList.replace('active','complete');
  document.getElementById('rth-dot3').classList.add('active');
  rthRender();
}
function rthReset(){
  rthLevel=null; rthSession=null;
  ['rth-panel3','rth-panel2'].forEach(id=>document.getElementById(id).classList.remove('active'));
  document.getElementById('rth-panel1').classList.add('active');
  document.getElementById('rth-dot1').className='step-dot active';
  document.getElementById('rth-dot2').className='step-dot';
  document.getElementById('rth-dot3').className='step-dot';
}
function rthRender(){
  const sl = rthSession==='asia'?'Asia':rthSession==='london'?'London':'Core (No Session Filter)';
  document.getElementById('rth-bc').innerHTML = `
    <span class="bc-item">First Hit: ${rthLevel==='EQ'?'EQ':'PD RTH '+rthLevel}</span>
    <span class="bc-arrow">→</span>
    <span class="bc-item">${sl}</span>`;

  let seqs = [];
  if(rthSession==='any'){
    seqs = coreSequences.filter(s=>s.from===rthLevel).map(s=>({
      name:getCoreName(s.from,s.to,s.rate), desc:getCoreDesc(s.from,s.to,s.rate),
      triggers:s.triggers, successes:s.successes, rate:s.rate, tier:getTier(s.rate)
    }));
  } else {
    const map = {High:['High','P0.66','P0.33'],Low:['Low'],EQ:['EQ']};
    seqs = timeSequences.filter(s=>(map[rthLevel]||[rthLevel]).includes(s.from)&&s.session===rthSession).map(s=>({
      name:getTimeName(s), desc:getTimeDesc(s),
      triggers:s.triggers, successes:s.successes, rate:s.rate, tier:getTier(s.rate)
    }));
  }
  seqs.sort((a,b)=>b.rate-a.rate);

  document.getElementById('rth-seqlist').innerHTML = seqs.map(s=>`
    <div class="seq-card tier-${s.tier}">
      <div>
        <div class="seq-name">${s.name}</div>
        <div class="seq-description">${s.desc}</div>
        <div class="seq-bar-wrap"><div class="seq-bar" style="width:${s.rate}%"></div></div>
      </div>
      <div class="seq-stats">
        <div class="seq-rate">${s.rate}%</div>
        <div class="seq-counts">${s.successes.toLocaleString()} / ${s.triggers.toLocaleString()}</div>
      </div>
    </div>`).join('');

  const insights = {
    High:"After PD RTH High is tagged, the dominant play is mean reversion back to EQ (88–91%). Full range traversals to the Low are near coin-flip odds. Fade the high, target EQ.",
    Low:"After PD RTH Low is tagged, expect a return to EQ with 89–94% confidence depending on session timing. The strongest edge in the entire dataset. Fade the low, target EQ.",
    EQ:"EQ as the first hit produces a directional skew toward the Low (~75%) over the High (~52–57%). The downside bias from EQ is the notable asymmetry — but both are weaker than the extreme→EQ sequences."
  };
  document.getElementById('rth-insighttext').textContent = insights[rthLevel]||'';
}

function bindUIEvents(){
  document.addEventListener('click', (event) => {
    const appTab = event.target.closest('[data-switch-app]');
    if (appTab) {
      switchApp(appTab.dataset.switchApp);
      return;
    }

    const h1Tab = event.target.closest('[data-show-h1]');
    if (h1Tab) {
      showH1(h1Tab.dataset.showH1);
      return;
    }

    const rthLevel = event.target.closest('[data-rth-level]');
    if (rthLevel) {
      rthSelectLevel(rthLevel.dataset.rthLevel);
      return;
    }

    const rthSession = event.target.closest('[data-rth-session]');
    if (rthSession) {
      rthSelectSession(rthSession.dataset.rthSession);
      return;
    }

    const riskTab = event.target.closest('[data-risk-tab]');
    if (riskTab) {
      showRiskTab(riskTab.dataset.riskTab);
      return;
    }

    const riskInst = event.target.closest('.inst-btn[data-inst]');
    if (riskInst) {
      selectInst(riskInst.dataset.inst);
      return;
    }

    const actionBtn = event.target.closest('[data-action]');
    if (!actionBtn) return;
    if (actionBtn.dataset.action === 'rth-reset') rthReset();
    if (actionBtn.dataset.action === 'toggle-rth-docs') toggleRthDocs();
  });

  document.querySelectorAll('[data-oninput="h1CalcStops"]').forEach(el => el.addEventListener('input', h1CalcStops));
  document.querySelectorAll('[data-onchange="h1CalcStops"]').forEach(el => el.addEventListener('change', h1CalcStops));

  document.querySelectorAll('[data-oninput="riskCalc"]').forEach(el => el.addEventListener('input', riskCalc));
  document.querySelectorAll('[data-onchange="riskCalc"]').forEach(el => el.addEventListener('change', riskCalc));

  document.querySelectorAll('[data-oninput="qvBuild"]').forEach(el => el.addEventListener('input', qvBuild));
  document.querySelectorAll('[data-onchange="qvBuild"]').forEach(el => el.addEventListener('change', qvBuild));

  document.querySelectorAll('[data-oninput="pnlCalc"]').forEach(el => el.addEventListener('input', pnlCalc));
  document.querySelectorAll('[data-onchange="pnlCalc"]').forEach(el => el.addEventListener('change', pnlCalc));

  document.querySelectorAll('[data-switch-app]').forEach(el => {
    if (el.getAttribute('role') !== 'button') return;
    el.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      switchApp(el.dataset.switchApp);
    });
  });

}

/* ═══════════════════════════════
   INIT
═══════════════════════════════ */
bindUIEvents();
initMobileHeaderScroll();
h1RenderRetrace();
h1RenderDOL();
h1RenderHours(getNY().getHours());
h1RenderDOW();
h1Tick();
setInterval(h1Tick, 1000);
renderPayoutCertificates();

/* ═══════════════════════════════════════════════════════════
   RISK MANAGEMENT CALCULATOR
═══════════════════════════════════════════════════════════ */

const INSTRUMENTS = [
  {
    ticker:'NQ',   name:'E-mini Nasdaq-100',  exchange:'CME',  mini:false,
    tickSize:0.25, tickValue:5,    pointValue:20,
    margin:17600,  currency:'USD',
    desc:'Full-size E-mini Nasdaq-100 futures. $20/pt. High volatility index product.',
    color:'var(--cyan)'
  },
  {
    ticker:'MNQ',  name:'Micro E-mini Nasdaq', exchange:'CME', mini:true,
    tickSize:0.25, tickValue:0.5,  pointValue:2,
    margin:1760,   currency:'USD',
    desc:'Micro Nasdaq-100. 1/10th of NQ. $2/pt. Great for beginners & precise risk.',
    color:'var(--cyan)'
  },
  {
    ticker:'ES',   name:'E-mini S&P 500',      exchange:'CME', mini:false,
    tickSize:0.25, tickValue:12.5, pointValue:50,
    margin:13200,  currency:'USD',
    desc:'Full-size E-mini S&P 500 futures. $50/pt. Most liquid futures contract.',
    color:'var(--green)'
  },
  {
    ticker:'MES',  name:'Micro E-mini S&P 500', exchange:'CME', mini:true,
    tickSize:0.25, tickValue:1.25, pointValue:5,
    margin:1320,   currency:'USD',
    desc:'Micro S&P 500. 1/10th of ES. $5/pt. Ideal for smaller accounts.',
    color:'var(--green)'
  },
  {
    ticker:'YM',   name:'E-mini Dow Jones',    exchange:'CME', mini:false,
    tickSize:1,    tickValue:5,    pointValue:5,
    margin:8800,   currency:'USD',
    desc:'E-mini Dow futures. $5/pt. Tracks DJIA 30 blue-chip index.',
    color:'var(--blue)'
  },
  {
    ticker:'GC',   name:'Gold Futures',        exchange:'COMEX', mini:false,
    tickSize:0.10, tickValue:10,   pointValue:100,
    margin:9350,   currency:'USD',
    desc:'Full-size Gold futures. $100/pt ($10/tick). 100 troy oz contract.',
    color:'var(--amber)'
  },
  {
    ticker:'MGC',  name:'Micro Gold',          exchange:'COMEX', mini:true,
    tickSize:0.10, tickValue:1,    pointValue:10,
    margin:935,    currency:'USD',
    desc:'Micro Gold. 1/10th of GC. $10/pt. Perfect for gold exposure in small accounts.',
    color:'var(--amber)'
  },
  {
    ticker:'6E',   name:'Euro FX',             exchange:'CME',  mini:false,
    tickSize:0.00005, tickValue:6.25, pointValue:125000,
    margin:2750,   currency:'USD',
    desc:'Euro/USD futures. 125,000 EUR contract. $12.50/tick (0.0001). Key forex futures.',
    color:'var(--text1)',
    is6E: true
  },
];

let selectedInst = INSTRUMENTS[0];

function fmtUSD(n){ return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function fmtNum(n,d=2){ return n.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d}); }

/* ── Build instrument buttons ── */
function buildInstGrid(){
  const grid = document.getElementById('risk-inst-grid');
  grid.innerHTML = INSTRUMENTS.map(inst=>`
    <div class="inst-btn${inst===selectedInst?' selected':''}" data-inst="${inst.ticker}">
      <div class="inst-ticker" style="color:${inst.color};">${inst.ticker}</div>
      <div class="inst-name">${inst.mini?'Micro':'Standard'}</div>
      <div class="inst-mult">${inst.is6E?'$12.50/tick':('$'+inst.pointValue+'/pt')}</div>
    </div>`).join('');
}

function selectInst(ticker){
  selectedInst = INSTRUMENTS.find(i=>i.ticker===ticker);
  buildInstGrid();
  const info = document.getElementById('risk-inst-info');
  info.style.display = 'block';
  info.innerHTML = `<strong style="color:${selectedInst.color};">${selectedInst.ticker} — ${selectedInst.name}</strong> &nbsp;|&nbsp; ${selectedInst.desc}
    <span style="margin-left:12px;color:var(--text3);">Tick: ${selectedInst.tickSize} = ${fmtUSD(selectedInst.tickValue)} &nbsp;|&nbsp; Approx margin: ${fmtUSD(selectedInst.margin)}</span>`;
  riskCalc();
}

/* ── Main Risk Calculator ── */
function riskCalc(){
  const account  = parseFloat(document.getElementById('r-account').value);
  const riskPct  = parseFloat(document.getElementById('r-riskpct').value);
  const entry    = parseFloat(document.getElementById('r-entry').value);
  const stop     = parseFloat(document.getElementById('r-stop').value);
  const target   = parseFloat(document.getElementById('r-target').value);
  const dir      = document.getElementById('r-dir').value;

  const resultsArea   = document.getElementById('risk-results-area');
  const placeholder   = document.getElementById('risk-placeholder');
  const cardsEl       = document.getElementById('risk-results-cards');
  const breakdownEl   = document.getElementById('risk-breakdown');
  const rrEl          = document.getElementById('risk-rr-area');
  const warningsEl    = document.getElementById('risk-warnings');

  if(!account||!riskPct||!entry||!stop||isNaN(account)||isNaN(entry)||isNaN(stop)){
    resultsArea.style.display='none'; placeholder.style.display='block'; return;
  }

  placeholder.style.display='none';
  resultsArea.style.display='block';

  const inst = selectedInst;
  const dollarRisk   = account * (riskPct / 100);
  const is6E         = inst.is6E;

  // Compute stop distance
  let stopDist, stopDistTicks, riskPerContract;
  if(is6E){
    // 6E: price in 1.XXXXX, tick=0.00005, tickValue=6.25
    stopDist     = Math.abs(entry - stop);
    stopDistTicks= Math.round(stopDist / inst.tickSize);
    riskPerContract = stopDistTicks * inst.tickValue;
  } else {
    stopDist     = Math.abs(entry - stop);
    stopDistTicks= Math.round(stopDist / inst.tickSize);
    riskPerContract = stopDist * inst.pointValue;
  }

  if(riskPerContract <= 0){ resultsArea.style.display='none'; placeholder.style.display='block'; return; }

  // Direction validation
  const dirOk = dir==='long' ? stop < entry : stop > entry;

  // Position size
  const contracts   = Math.floor(dollarRisk / riskPerContract);
  const contractsCeil = Math.ceil(dollarRisk / riskPerContract);
  const actualRisk  = contracts * riskPerContract;
  const totalNotional = is6E ? entry * 125000 * contracts : entry * inst.pointValue * contracts;

  // Target / RR
  let rrRatio = null, rewardDollar = null;
  if(!isNaN(target) && target && contracts > 0){
    const targetDist = is6E
      ? Math.abs(target-entry)/inst.tickSize*inst.tickValue
      : Math.abs(target-entry)*inst.pointValue;
    rewardDollar = targetDist * contracts;
    rrRatio = riskPerContract > 0 ? (targetDist / riskPerContract) : null;
  }

  // ── Cards ──
  const rrColor = rrRatio===null?'var(--text1)':rrRatio>=2?'var(--green)':rrRatio>=1?'var(--amber)':'var(--red)';
  cardsEl.innerHTML = `
    <div class="risk-result-card highlight">
      <div class="risk-result-label">Contracts to Trade</div>
      <div class="risk-result-val" style="color:var(--cyan);font-size:32px;">${contracts}</div>
      <div class="risk-result-sub">${contractsCeil} at full risk</div>
    </div>
    <div class="risk-result-card ${actualRisk>dollarRisk*1.1?'danger':''}">
      <div class="risk-result-label">Actual $ Risk</div>
      <div class="risk-result-val" style="color:${actualRisk>account*0.03?'var(--red)':'var(--text1)'};">${fmtUSD(actualRisk)}</div>
      <div class="risk-result-sub">${fmtNum(actualRisk/account*100,2)}% of account</div>
    </div>
    <div class="risk-result-card">
      <div class="risk-result-label">Max Risk Allowed</div>
      <div class="risk-result-val">${fmtUSD(dollarRisk)}</div>
      <div class="risk-result-sub">${fmtNum(riskPct,1)}% of ${fmtUSD(account)}</div>
    </div>
    <div class="risk-result-card">
      <div class="risk-result-label">Risk / Contract</div>
      <div class="risk-result-val">${fmtUSD(riskPerContract)}</div>
      <div class="risk-result-sub">${fmtNum(stopDistTicks)} ticks · ${is6E?fmtNum(stopDist,5)+'pts':fmtNum(stopDist,2)+' pts'}</div>
    </div>
    <div class="risk-result-card ${rrRatio!==null&&rrRatio<1?'danger':rrRatio!==null&&rrRatio>=2?'success':''}">
      <div class="risk-result-label">Reward / Risk</div>
      <div class="risk-result-val" style="color:${rrColor};">${rrRatio!==null?fmtNum(rrRatio,2)+'R':'--'}</div>
      <div class="risk-result-sub">${rewardDollar!==null?fmtUSD(rewardDollar)+' potential':'Set target price'}</div>
    </div>
    <div class="risk-result-card">
      <div class="risk-result-label">Notional Exposure</div>
      <div class="risk-result-val" style="font-size:14px;">${contracts>0?fmtUSD(totalNotional):'--'}</div>
      <div class="risk-result-sub">${contracts} contract${contracts!==1?'s':''}</div>
    </div>`;

  // ── Breakdown ──
  const slPrice = dir==='long' ? (entry-stopDist).toFixed(is6E?5:2) : (entry+stopDist).toFixed(is6E?5:2);
  breakdownEl.innerHTML = `
    <div class="risk-breakdown-row"><span class="rb-label">Instrument</span><span class="rb-val" style="color:${inst.color};">${inst.ticker} — ${inst.name}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Point Value</span><span class="rb-val">${is6E?'$12.50/tick (0.0001)':fmtUSD(inst.pointValue)+'/point'}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Tick Size / Value</span><span class="rb-val">${inst.tickSize} = ${fmtUSD(inst.tickValue)}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Entry Price</span><span class="rb-val">${fmtNum(entry,is6E?5:2)}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Stop Loss Price</span><span class="rb-val" style="color:var(--red);">${fmtNum(stop,is6E?5:2)} ${!dirOk?'<span style="color:var(--amber);font-size:10px;">⚠ Check direction</span>':''}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Stop Distance</span><span class="rb-val">${is6E?fmtNum(stopDist,5):fmtNum(stopDist,2)} pts · ${stopDistTicks} ticks</span></div>
    ${!isNaN(target)&&target?`<div class="risk-breakdown-row"><span class="rb-label">Target Price</span><span class="rb-val" style="color:var(--green);">${fmtNum(target,is6E?5:2)}</span></div>`:''}
    <div class="risk-breakdown-row"><span class="rb-label">Approx Margin Required</span><span class="rb-val">${contracts>0?fmtUSD(inst.margin*contracts):'--'} (${contracts} × ${fmtUSD(inst.margin)})</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Margin vs Account</span><span class="rb-val" style="color:${contracts>0&&inst.margin*contracts>account*0.5?'var(--red)':'var(--text1)'};">${contracts>0?fmtNum(inst.margin*contracts/account*100,1)+'%':'--'}</span></div>
  `;

  // ── R:R bar ──
  if(rrRatio!==null){
    const barW = Math.min(rrRatio/4*100,100);
    const barC = rrRatio>=2?'var(--green)':rrRatio>=1?'var(--amber)':'var(--red)';
    rrEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:22px;font-weight:700;color:${barC};">${fmtNum(rrRatio,2)} : 1</span>
        <span class="badge ${rrRatio>=2?'badge-green':rrRatio>=1?'badge-amber':'badge-red'}">${rrRatio>=3?'Excellent':rrRatio>=2?'Good':rrRatio>=1?'Marginal':'Poor'}</span>
      </div>
      <div class="rr-bar-wrap"><div class="rr-bar-fill" style="width:${barW}%;background:${barC};"></div></div>
      <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:10px;color:var(--text3);">
        <span>0</span><span>1R</span><span>2R</span><span>3R</span><span>4R+</span>
      </div>
      ${rewardDollar!==null?`<div style="margin-top:10px;font-size:12px;color:var(--text2);">Potential Profit: <strong style="color:var(--green);">${fmtUSD(rewardDollar)}</strong> &nbsp;|&nbsp; Risk: <strong style="color:var(--red);">${fmtUSD(actualRisk)}</strong></div>`:''}`;
  } else {
    rrEl.innerHTML = `<div style="font-size:12px;color:var(--text3);">Enter a target price above to see R:R analysis.</div>`;
  }

  // ── Warnings ──
  const warns = [];
  if(!dirOk) warns.push({type:'warn',msg:`⚠ Stop loss is on the wrong side for a ${dir} trade. Check entry vs stop direction.`});
  if(contracts===0) warns.push({type:'warn',msg:`⚠ Risk per contract (${fmtUSD(riskPerContract)}) exceeds max risk (${fmtUSD(dollarRisk)}). Reduce stop distance or increase account/risk%.`});
  if(inst.margin*Math.max(contracts,1)>account*0.5) warns.push({type:'warn',msg:`⚠ Estimated margin (${fmtUSD(inst.margin*Math.max(contracts,1))}) is over 50% of your account. Consider reducing position size.`});
  if(riskPct>3) warns.push({type:'warn',msg:`⚠ ${riskPct}% risk per trade is above the 2% rule. High risk of account drawdown.`});
  if(rrRatio!==null&&rrRatio<1) warns.push({type:'warn',msg:`⚠ R:R ratio of ${fmtNum(rrRatio,2)} is unfavorable (risking more than you stand to gain).`});
  if(contracts>=10) warns.push({type:'info',msg:`ℹ Large position: ${contracts} contracts = ${fmtUSD(totalNotional)} notional exposure. Ensure adequate liquidity.`});
  warningsEl.innerHTML = warns.map(w=>`<div class="${w.type==='warn'?'warn-box':'info-box'}">${w.msg}</div>`).join('');
}

/* ── Contract Specs Table ── */
function buildSpecsTable(){
  const tbl = document.getElementById('specs-table');
  tbl.innerHTML = `<thead><tr>
    <th>Ticker</th><th>Name</th><th>Exchange</th>
    <th>Contract Size</th><th>Tick Size</th><th>Tick Value</th>
    <th>Point Value</th><th>Approx Margin</th><th>Type</th>
  </tr></thead><tbody>` +
  INSTRUMENTS.map(i=>`<tr>
    <td><span class="spec-ticker">${i.ticker}</span>${i.mini?` <span class="spec-mini">MICRO</span>`:''}</td>
    <td style="color:var(--text2);font-size:11px;">${i.name}</td>
    <td style="color:var(--text3);font-size:10px;">${i.exchange}</td>
    <td>${i.is6E?'125,000 EUR':i.ticker==='GC'||i.ticker==='MGC'?(i.ticker==='GC'?'100 troy oz':'10 troy oz'):'Index'}</td>
    <td>${i.tickSize}</td>
    <td style="color:var(--green);">${fmtUSD(i.tickValue)}</td>
    <td style="color:var(--cyan);">${i.is6E?'$125,000/pt':fmtUSD(i.pointValue)+'/pt'}</td>
    <td style="color:var(--amber);">${fmtUSD(i.margin)}</td>
    <td style="font-size:10px;color:var(--text3);">${i.is6E?'FX':'Index'}</td>
  </tr>`).join('') + '</tbody>';
}

/* ── P&L Simulator ── */
function buildPnlSelect(){
  const sel = document.getElementById('pnl-inst');
  sel.innerHTML = '<option value="">-- Select --</option>' +
    INSTRUMENTS.map(i=>`<option value="${i.ticker}">${i.ticker} — ${i.name}</option>`).join('');
}

function pnlCalc(){
  const ticker    = document.getElementById('pnl-inst').value;
  const contracts = parseFloat(document.getElementById('pnl-contracts').value)||1;
  const entry     = parseFloat(document.getElementById('pnl-entry').value);
  const exit      = parseFloat(document.getElementById('pnl-exit').value);
  const dir       = document.getElementById('pnl-dir').value;
  const comm      = parseFloat(document.getElementById('pnl-comm').value)||0;

  const ph = document.getElementById('pnl-placeholder');
  const pr = document.getElementById('pnl-results');

  if(!ticker||isNaN(entry)||isNaN(exit)){
    ph.style.display='block'; pr.style.display='none'; return;
  }

  const inst  = INSTRUMENTS.find(i=>i.ticker===ticker);
  const is6E  = inst.is6E;
  const priceDiff = dir==='long' ? (exit-entry) : (entry-exit);
  const ticks = Math.round(Math.abs(priceDiff)/inst.tickSize);

  let grossPnl;
  if(is6E){
    grossPnl = (priceDiff/inst.tickSize)*inst.tickValue*contracts;
  } else {
    grossPnl = priceDiff * inst.pointValue * contracts;
  }
  const totalComm = comm * 2 * contracts; // round-trip
  const netPnl    = grossPnl - totalComm;
  const pnlColor  = netPnl>=0?'var(--green)':'var(--red)';
  const grossColor= grossPnl>=0?'var(--green)':'var(--red)';

  ph.style.display='none';
  pr.style.display='block';

  document.getElementById('pnl-cards').innerHTML = `
    <div class="risk-result-card ${netPnl>=0?'success':'danger'}">
      <div class="risk-result-label">Net P&L</div>
      <div class="risk-result-val" style="color:${pnlColor};font-size:28px;">${fmtUSD(netPnl)}</div>
      <div class="risk-result-sub">After commissions</div>
    </div>
    <div class="risk-result-card">
      <div class="risk-result-label">Gross P&L</div>
      <div class="risk-result-val" style="color:${grossColor};">${fmtUSD(grossPnl)}</div>
      <div class="risk-result-sub">Before commissions</div>
    </div>
    <div class="risk-result-card">
      <div class="risk-result-label">Total Commission</div>
      <div class="risk-result-val" style="color:var(--amber);">${fmtUSD(totalComm)}</div>
      <div class="risk-result-sub">Round-trip × ${contracts}</div>
    </div>
    <div class="risk-result-card">
      <div class="risk-result-label">Ticks Moved</div>
      <div class="risk-result-val">${ticks}</div>
      <div class="risk-result-sub">${fmtNum(Math.abs(priceDiff),is6E?5:2)} pts</div>
    </div>
    <div class="risk-result-card">
      <div class="risk-result-label">Per Contract</div>
      <div class="risk-result-val" style="font-size:16px;">${fmtUSD(netPnl/contracts)}</div>
      <div class="risk-result-sub">Net / contract</div>
    </div>
    <div class="risk-result-card">
      <div class="risk-result-label">P&L Per Tick</div>
      <div class="risk-result-val" style="font-size:16px;">${fmtUSD(inst.tickValue*contracts)}</div>
      <div class="risk-result-sub">${contracts} contract${contracts!==1?'s':''}</div>
    </div>`;

  document.getElementById('pnl-breakdown').innerHTML = `
    <div class="risk-breakdown-row"><span class="rb-label">Instrument</span><span class="rb-val" style="color:${inst.color};">${inst.ticker}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Direction</span><span class="rb-val">${dir.toUpperCase()}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Contracts</span><span class="rb-val">${contracts}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Entry</span><span class="rb-val">${fmtNum(entry,is6E?5:2)}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Exit</span><span class="rb-val">${fmtNum(exit,is6E?5:2)}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Price Move</span><span class="rb-val" style="color:${priceDiff>=0?'var(--green)':'var(--red)'};">${priceDiff>=0?'+':''}${fmtNum(priceDiff,is6E?5:2)} pts</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Point Value</span><span class="rb-val">${is6E?'$12.50/tick':fmtUSD(inst.pointValue)+'/pt'}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Gross P&L</span><span class="rb-val" style="color:${grossColor};">${fmtUSD(grossPnl)}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Commission (RT)</span><span class="rb-val" style="color:var(--amber);">− ${fmtUSD(totalComm)}</span></div>
    <div class="risk-breakdown-row"><span class="rb-label">Net P&L</span><span class="rb-val" style="color:${pnlColor};font-size:15px;">${fmtUSD(netPnl)}</span></div>`;

  // Quick reference table
  const points = [1,2,5,10,20,50,100];
  document.getElementById('pnl-point-table').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">
      ${points.map(p=>{
        const pnlP = is6E ? (p/inst.tickSize)*inst.tickValue : p*inst.pointValue;
        return `<div class="h1-stat">
          <div class="label">${p} ${is6E?'ticks':'pt'}${p>1?'s':''}</div>
          <div style="font-size:13px;font-weight:700;color:var(--cyan);">${fmtUSD(pnlP)}</div>
        </div>`;
      }).join('')}
      <div class="h1-stat">
        <div class="label">1 tick</div>
        <div style="font-size:13px;font-weight:700;color:var(--text2);">${fmtUSD(inst.tickValue)}</div>
      </div>
    </div>`;
}

/* ── Risk Tab Switcher ── */
function toggleRthDocs(){
  const panel = document.getElementById('rth-docs-panel');
  const arrow  = document.getElementById('rth-docs-arrow');
  const btn    = document.getElementById('rth-docs-btn');
  const open   = panel.style.display === 'none';
  panel.style.display = open ? 'block' : 'none';
  arrow.style.transform = open ? 'rotate(180deg)' : '';
  btn.style.borderColor = open ? 'var(--cyan)' : 'var(--border)';
  btn.style.color = open ? 'var(--cyan)' : 'var(--text2)';
}
function showRiskTab(name){
  document.querySelectorAll('.risk-tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.risk-tab').forEach(b=>b.classList.remove('active'));
  document.getElementById('rtp-'+name).classList.add('active');
  document.getElementById('rtab-'+name).classList.add('active');
}

/* ══════════════════════════════
   QUICK VIEW
══════════════════════════════ */
// Points to show in the matrix — covers common stop/target ranges
const QV_POINTS_INDEX = [1,2,3,4,5,6,7,8,9,10,12,15,20,25,30,40,50,75,100];
// Contract columns
const QV_CONTRACT_COLS = [1,2,3,5,10];

function qvBuild(){
  const ticker    = document.getElementById('qv-inst').value;
  const contracts = Math.max(1, parseInt(document.getElementById('qv-contracts').value)||1);
  const inst      = INSTRUMENTS.find(i=>i.ticker===ticker);
  if(!inst) return;

  const is6E    = inst.is6E;
  const pv      = inst.pointValue; // $ per point (or per contract for 6E)
  const tv      = inst.tickValue;
  const ts      = inst.tickSize;

  // Dollar value per point per 1 contract
  function dollarForPoints(pts, contr){
    if(is6E){
      // 6E: "points" = ticks for user simplicity in quick view
      return pts * tv * contr;
    }
    return pts * pv * contr;
  }

  // ── Instrument strip ──
  const ticksPerPoint = is6E ? 1 : Math.round(1/ts);
  document.getElementById('qv-inst-strip').innerHTML = `<div class="qv-inst-strip">
    <div class="qv-spec-chip"><span class="qsc-label">Instrument</span><span class="qsc-val" style="color:${inst.color};">${inst.ticker}</span></div>
    <div class="qv-spec-chip"><span class="qsc-label">${is6E?'Tick':'Point'} Value</span><span class="qsc-val" style="color:var(--green);">${fmtUSD(is6E?tv:pv)}</span></div>
    <div class="qv-spec-chip"><span class="qsc-label">Tick Size</span><span class="qsc-val">${ts}</span></div>
    <div class="qv-spec-chip"><span class="qsc-label">Tick Value</span><span class="qsc-val">${fmtUSD(tv)}</span></div>
    <div class="qv-spec-chip"><span class="qsc-label">Selected Qty</span><span class="qsc-val" style="color:var(--cyan);">${contracts} contract${contracts!==1?'s':''}</span></div>
    <div class="qv-spec-chip"><span class="qsc-label">1pt @ ${contracts}c</span><span class="qsc-val" style="color:var(--cyan);">${fmtUSD(dollarForPoints(1,contracts))}</span></div>
  </div>`;

  // ── Headline example (like the user asked) ──
  const eg = dollarForPoints(20, contracts);
  document.getElementById('qv-headline').textContent =
    `${inst.ticker} · ${contracts} contract${contracts!==1?'s':''} · 20 ${is6E?'ticks':'pts'} = ${fmtUSD(eg)}`;

  // ── Build table ──
  // Columns: Points | 1c | 2c | 3c | 5c | 10c | {selected}c (if not already included)
  let cols = [...QV_CONTRACT_COLS];
  if(!cols.includes(contracts)) cols.push(contracts);
  cols.sort((a,b)=>a-b);

  const tbl = document.getElementById('qv-table');
  const label = is6E ? 'Ticks' : 'Points';

  tbl.innerHTML = `<thead class="qv-table-head"><tr>
    <th>${label}</th>
    ${cols.map(c=>`<th style="${c===contracts?'color:var(--cyan);':''}">
      ${c} Contract${c!==1?'s':''}${c===contracts?' ★':''}
    </th>`).join('')}
  </tr></thead><tbody>` +
  QV_POINTS_INDEX.map(pts=>{
    const isHighlight = [10,20,50].includes(pts);
    const cells = cols.map(c=>{
      const val = dollarForPoints(pts, c);
      const isSelected = c===contracts;
      const cls = val>=1000?'qv-cell-big':isSelected?'qv-cell-pos':'';
      return `<td class="${cls}${isSelected?' qv-cell-pos':''}">${fmtUSD(val)}</td>`;
    }).join('');
    return `<tr class="qv-row${isHighlight?' qv-highlight':''}">
      <td>${pts} ${is6E?'tick'+(pts!==1?'s':''):'pt'+(pts!==1?'s':'')}</td>${cells}
    </tr>`;
  }).join('') + '</tbody>';

  // ── Footnote ──
  const note = is6E
    ? `6E (Euro FX): 1 tick = 0.00005 price move = ${fmtUSD(tv)}. Table shows ticks, not full points. 1 full point (0.0001) = ${fmtUSD(tv*2)}.`
    : `${inst.ticker}: 1 point = ${Math.round(1/ts)} tick${Math.round(1/ts)!==1?'s':''}. Each tick = ${fmtUSD(tv)}. Each point = ${fmtUSD(pv)}.
       Highlighted rows (10 / 20 / 50 pts) are common NQ stop & target distances.`;
  document.getElementById('qv-footnote').textContent = note;
}

/* ── INIT Risk Calculator ── */
buildInstGrid();
buildSpecsTable();
buildPnlSelect();
selectInst('NQ');
qvBuild();
