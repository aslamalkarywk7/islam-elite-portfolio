const projects = [
  {
    id: "aetheria",
    folder: "aetheria---glassmorphism-2.0-platform",
    cover: "covers/aetheria.svg",
    docs: ["live/aetheria---glassmorphism-2.0-platform/README.md"],
    title: { ar: "Aetheria — Glassmorphism 2.0", en: "Aetheria — Glassmorphism 2.0" },
    subtitle: { ar: "منصة تقنية مستقبلية", en: "Future-Tech Platform" },
    kicker: "GLASSMORPHISM 2.0",
    desc: { ar: "منصة SaaS مستقبلية بطبقات زجاج ضبابي، عمق بصري، وإضاءة ديناميكية تفاعلية. تصميم يثبت إتقان الزجاج والعمق.", en: "Futuristic SaaS with layered frosted glass, depth and dynamic lighting controls. Pure glassmorphism mastery." },
    style: { ar: "Glassmorphism مستقبلي", en: "Futuristic Glassmorphism" },
    category: "platform",
    colors: ["#7c3aed","#06b6d4"],
    darkText: false,
    stack: ["Vite","React 19","TypeScript","Tailwind 4","Motion","Recharts","Bun"]
  },
  {
    id: "industrial",
    folder: "industrial-marketplace-platform",
    cover: "covers/industrial.jpg",
    docs: ["live/industrial-marketplace-platform/README.md"],
    title: { ar: "أجماس — منصة الاستثمار الصناعي", en: "Ajmas — Industrial Investment" },
    subtitle: { ar: "سوق صناعي ذكي للمغرب", en: "Morocco Smart Marketplace" },
    kicker: "MARKETPLACE OS",
    desc: { ar: "منصة تربط المستثمرين والخبراء والموردين عبر 7 مدن صناعية و6 قطاعات — RTL كامل وخرائط تفاعلية.", en: "Marketplace connecting investors, experts & suppliers across 7 cities & 6 sectors. Full RTL + interactive data." },
    style: { ar: "منصة صناعية ذكية", en: "Industrial Marketplace" },
    category: "platform",
    colors: ["#0f766e","#f59e0b"],
    darkText: false,
    stack: ["Next.js 16","Tailwind 4","Radix UI","Recharts","Embla","Zod"]
  },
  {
    id: "atrium",
    folder: "design-dashboard-pro",
    cover: "covers/atrium.jpg",
    docs: ["live/design-dashboard-pro/README.md"],
    title: { ar: "Atrium — ذكاء السوق الصناعي", en: "Atrium — Industrial OS" },
    subtitle: { ar: "نظام إدارة العطاءات", en: "Bid Management OS" },
    kicker: "ENTERPRISE DASHBOARD",
    desc: { ar: "نظام يجمع لاندينغ فاخر مع إدارة عطاءات، KPI، وتحليلات تنبؤية بالذكاء الاصطناعي.", en: "Luxury landing + enterprise bid management with KPI cards & AI predictive analytics." },
    style: { ar: "Enterprise Dashboard", en: "Enterprise Dashboard" },
    category: "dashboard",
    colors: ["#1a1a1a","#a3a3a3"],
    darkText: false,
    stack: ["Next.js 16","Tailwind 4","Recharts","Radix UI","Vercel Analytics"]
  },
  {
    id: "zenith",
    folder: "zenith-finance",
    cover: "covers/zenith.jpg",
    docs: ["live/zenith-finance/README.md"],
    title: { ar: "Zenith Finance", en: "Zenith Finance" },
    subtitle: { ar: "إدارة ثروات — Neumorphism 2.0", en: "Wealth Management — Soft UI" },
    kicker: "NEUMORPHISM 2.0",
    desc: { ar: "واجهة نحتية ناعمة بظلال غائرة وبارزة، إسقاط مالي مباشر وعرض MacBook فاخر.", en: "Sculptural soft UI with inset/convex shadows, live projection & MacBook showcase." },
    style: { ar: "Neumorphism نحتي", en: "Sculptural Neumorphism" },
    category: "dashboard",
    colors: ["#e6e9ef","#cbd5e1"],
    darkText: true,
    stack: ["Vite","React 19","Tailwind 4","Motion","Express"]
  },
  {
    id: "oman",
    folder: "dashboard-website",
    cover: "covers/oman.svg",
    docs: ["live/dashboard-website/README.md"],
    title: { ar: "Oman Luxury Dash", en: "Oman Luxury Dash" },
    subtitle: { ar: "لوحة EVM للفلل الفاخرة", en: "EVM Villa Dashboard" },
    kicker: "LUXURY DASHBOARD",
    desc: { ar: "لوحة فاخرة هادئة لتتبع BAC/EV/PV/AC وهدر الرخام مع رؤى ذكاء اصطناعي.", en: "Quiet-luxury EVM dashboard tracking BAC/EV/PV/AC, marble waste & AI insights." },
    style: { ar: "Luxury Terminal", en: "Quiet Luxury" },
    category: "dashboard",
    colors: ["#0d0d0d","#d4af37"],
    darkText: false,
    stack: ["Next.js 14","Recharts","Tailwind 3","Lucide"]
  },
  {
    id: "audio",
    folder: "audio-engine-pro",
    cover: "covers/audio.jpg",
    docs: ["live/audio-engine-pro/README.md"],
    title: { ar: "Audio Engine Pro", en: "Audio Engine Pro" },
    subtitle: { ar: "كونسول مزج صوتي احترافي", en: "Skeuomorphic Mixing Console" },
    kicker: "SKEUOMORPHIC",
    desc: { ar: "واجهة كونسول صوتي ملموسة بمقابض دوارة، منزلقات، وعدادات VU حية مع DSP فوري.", en: "Tactile mixing console with rotary knobs, sliders & live VU meters with real-time DSP." },
    style: { ar: "Skeuomorphic ملموس", en: "Tactile Skeuomorphic" },
    category: "dashboard",
    colors: ["#1c1917","#f59e0b"],
    darkText: false,
    stack: ["Vite","React 19","Tailwind 4","Motion","GenAI"]
  },
  {
    id: "bauhaus",
    folder: "bauhaus-1919---creative-design-studio-1-",
    cover: "covers/bauhaus.jpg",
    docs: ["live/bauhaus-1919---creative-design-studio-1-/README.md"],
    title: { ar: "BAUHAUS 1919", en: "BAUHAUS 1919" },
    subtitle: { ar: "استوديو تصميم إبداعي", en: "Creative Design Studio" },
    kicker: "BAUHAUS GRID",
    desc: { ar: "لاندينغ مستوحى من حركة باوهاوس — شبكات هندسية دقيقة ولوحة ألوان أساسية.", en: "Bauhaus-inspired landing with precise geometric grids & primary palette." },
    style: { ar: "Bauhaus هندسي", en: "Bauhaus Geometric" },
    category: "agency",
    colors: ["#F6F5F0","#FF2A1F"],
    darkText: true,
    stack: ["Vite","React 19","Tailwind 4","Motion"]
  },
  {
    id: "maison",
    folder: "luxury-creative-agency",
    cover: "covers/luxury.jpg",
    docs: ["live/luxury-creative-agency/README.md"],
    title: { ar: "MAISON NOIR", en: "MAISON NOIR" },
    subtitle: { ar: "وكالة إبداعية فاخرة", en: "Luxury Creative Agency" },
    kicker: "EDITORIAL LUXURY",
    desc: { ar: "وكالة تحريرية فائقة البساطة بطباعة Brutalist وصور مشبعة بالأسود الدقيق.", en: "Ultra-minimal editorial agency with brutalist type & desaturated portraits." },
    style: { ar: "Editorial فاخر", en: "Editorial Brutalist" },
    category: "agency",
    colors: ["#000000","#1a1a1a"],
    darkText: false,
    stack: ["Vite","React 19","Tailwind 4","Motion"]
  },
  {
    id: "raw",
    folder: "raw-brutalist-creative-studio",
    cover: "covers/raw.jpg",
    docs: ["live/raw-brutalist-creative-studio/README.md"],
    title: { ar: "RAW Brutalist Studio", en: "RAW Brutalist Studio" },
    subtitle: { ar: "استوديو Brutalist خام", en: "Neo-Brutalist Studio" },
    kicker: "NEO-BRUTALIST",
    desc: { ar: "بورتفوليو صادم بحدود 5px ولمسات ليموني كهربائي وطباعة خام.", en: "High-impact neo-brutalist portfolio with 5px strokes & electric lime accents." },
    style: { ar: "Brutalist خام", en: "Raw Brutalist" },
    category: "agency",
    colors: ["#fef08a","#000000"],
    darkText: true,
    stack: ["Vite","React 19","Tailwind 4","Motion"]
  },
  {
    id: "grid",
    folder: "grid-studio---swiss-design-system",
    cover: "covers/grid.jpg",
    docs: ["live/grid-studio---swiss-design-system/README.md"],
    title: { ar: "GRID STUDIO — Swiss System", en: "GRID STUDIO — Swiss System" },
    subtitle: { ar: "نظام تصميم سويسري", en: "Swiss Typographic System" },
    kicker: "SWISS GRID",
    desc: { ar: "عرض نظام الشبكة السويسرية بهرمية طباعية صارمة ووحدات تفاعلية.", en: "Swiss grid system showcase with strict typographic hierarchy & modular grid." },
    style: { ar: "Swiss صارم", en: "Swiss International" },
    category: "agency",
    colors: ["#0f0f11","#E30613"],
    darkText: false,
    stack: ["Vite","React 19","Tailwind 4","Motion"]
  },
  {
    id: "retrowave",
    folder: "retrowave-studio",
    cover: "covers/retrowave.svg",
    docs: ["live/retrowave-studio/README.md"],
    title: { ar: "RetroWave Studio", en: "RetroWave Studio" },
    subtitle: { ar: "Memphis Design Studio", en: "Memphis Design Studio" },
    kicker: "MEMPHIS NEON",
    desc: { ar: "استوديو Memphis نابض بألوان نيون وعناصر هندسية جريئة وكونفيتي.", en: "Vibrant Memphis studio with neon palette, bold geometry & confetti." },
    style: { ar: "Memphis نيون", en: "Memphis Neon" },
    category: "agency",
    colors: ["#ff2a7a","#00f0ff"],
    darkText: false,
    stack: ["Vite","React 19","Tailwind 4","Motion","canvas-confetti"]
  },
  {
    id: "chroma",
    folder: "studio-chroma",
    cover: "covers/chroma.jpg",
    docs: ["live/studio-chroma/README.md"],
    title: { ar: "Studio Chroma", en: "Studio Chroma" },
    subtitle: { ar: "Material 3 Bento Portfolio", en: "Material 3 Bento Portfolio" },
    kicker: "MATERIAL 3",
    desc: { ar: "بورتفوليو بنتو بـ Material Design 3 ببطاقات معيارية وألوان ديناميكية.", en: "Material 3 bento portfolio with modular cards & dynamic color." },
    style: { ar: "Material 3", en: "Material You" },
    category: "agency",
    colors: ["#e0e7ff","#a5b4fc"],
    darkText: true,
    stack: ["Vite","React 19","Tailwind 4","Motion"]
  },
  {
    id: "connective",
    folder: "flat-design-website",
    cover: "covers/flat.svg",
    docs: ["live/flat-design-website/README.md"],
    title: { ar: "Connective Agency", en: "Connective Agency" },
    subtitle: { ar: "وكالة Flat Design", en: "Flat Design Agency" },
    kicker: "FLAT DESIGN",
    desc: { ar: "وكالة رقمية بأسلوب Flat بألوان مشرقة ورسومات متجهية هندسية.", en: "Digital agency in clean flat design with bright colors & geometric vectors." },
    style: { ar: "Flat Design", en: "Clean Flat" },
    category: "agency",
    colors: ["#14b8a6","#f97316"],
    darkText: false,
    stack: ["Vite","React 19","Tailwind 4","Motion"]
  },
  {
    id: "analog",
    folder: "analog-antiques",
    cover: "covers/analog.jpg",
    docs: ["live/analog-antiques/README.md"],
    title: { ar: "Analog Antiques", en: "Analog Antiques" },
    subtitle: { ar: "أرشيف شرائط كاسيت", en: "Vintage Cassette Archive" },
    kicker: "RETRO ANALOG",
    desc: { ar: "أرشيف شرائط كاسيت عتيق بمشغل تفاعلي ومتجر بجماليات دافئة.", en: "Vintage cassette archive with interactive tape player & warm analog shop." },
    style: { ar: "Retro دافئ", en: "Warm Retro" },
    category: "arabic",
    colors: ["#E8D9C5","#BF5B30"],
    darkText: true,
    stack: ["Vite","React 19","Tailwind 4","Motion"]
  },
  {
    id: "arabicChat",
    folder: "arabic-chat-ui-ux-design-website",
    cover: "covers/arabic-chat.jpg",
    docs: ["live/arabic-chat-ui-ux-design-website/README.md"],
    title: { ar: "شات العرب", en: "Arab Chat Platform" },
    subtitle: { ar: "غرف دردشة عربية RTL", en: "Arabic Chat Rooms RTL" },
    kicker: "RTL CHAT OS",
    desc: { ar: "منصة دردشة عربية كاملة RTL بغرف حية، رسائل مباشرة وشارات أدوار — جاهزة لـ WebSocket.", en: "Full-RTL Arabic chat with rooms, DMs & role badges — WebSocket ready." },
    style: { ar: "RTL Chat", en: "Arabic Social" },
    category: "arabic",
    colors: ["#0f172a","#38bdf8"],
    darkText: false,
    stack: ["Next.js 16","Tailwind 4","Radix UI","Shadcn/ui"]
  },
  {
    id: "clinics",
    folder: "clinics-portfolio-design",
    cover: "covers/clinics.jpg",
    docs: ["live/clinics-portfolio-design/readme.md"],
    title: { ar: "عيادات النخبة الطبية", en: "Elite Medical Clinics" },
    subtitle: { ar: "بورتفوليو طبي فاخر", en: "Premium Medical Portfolio" },
    kicker: "MEDICAL LUXURY",
    desc: { ar: "لاندينغ عيادات فاخر بـ 9 أقسام، RTL كامل وتدفق حجز متكامل.", en: "Premium clinic landing with 9 sections, full RTL & booking flow." },
    style: { ar: "طبي فاخر", en: "Medical Luxury" },
    category: "arabic",
    colors: ["#0A5F7A","#d4af37"],
    darkText: false,
    stack: ["Next.js 16","Tailwind 4","pnpm"]
  },
  {
    id: "horror",
    folder: "platform_horror",
    cover: "covers/horror.svg",
    docs: ["live/platform_horror/README.md"],
    title: { ar: "معرض الرعب — Dark Gallery", en: "Horror Gallery — Dark" },
    subtitle: { ar: "معرض فني رعب غامر", en: "Immersive Horror Art" },
    kicker: "HORROR IMMERSIVE",
    desc: { ar: "معرض رعب بجماجم وأشباح وعيون دامية وخفافيش — ضباب، عين مقدمة، ولايت بوكس.", en: "Horror gallery with skulls, ghosts, bloody eyes & bats — fog & lightbox." },
    style: { ar: "رعب غامر", en: "Dark Horror" },
    category: "experimental",
    colors: ["#0a0306","#b30010"],
    darkText: false,
    stack: ["HTML5","CSS3","Vanilla JS","GSAP"]
  },
  {
    id: "mywebsite",
    folder: "mywebsite",
    cover: "covers/mywebsite.jpg",
    docs: ["live/mywebsite/index.html"],
    title: { ar: "معرض أعمالي — الإصدار السابق", en: "MyWebsite — Previous Portfolio" },
    subtitle: { ar: "بورتفوليو ثنائي اللغة", en: "Bilingual Portfolio" },
    kicker: "PERSONAL PORTFOLIO",
    desc: { ar: "البورتفوليو السابق ثنائي اللغة بمعرض مفلتر، سلايدر وتأثير توهج الماوس.", en: "Previous bilingual portfolio with filterable gallery, slider & mouse glow." },
    style: { ar: "Glass Dark", en: "Bilingual Glass" },
    category: "experimental",
    colors: ["#050816","#38bdf8"],
    darkText: false,
    stack: ["HTML5","CSS3","Vanilla JS"]
  }
];



 // تحميل projects.json الصغير للتحكم في الأغلفة والوثائق بدون تعديل JS
 fetch('projects.json').then(r=>r.json()).then(data=>{
   if(data && data.projects){
     data.projects.forEach(override=>{
       const p = projects.find(x=> x.id===override.id);
       if(p){
         if(override.cover) p.cover = override.cover;
         if(override.docs) p.docs = override.docs;
         if(override.title) p.title = override.title;
         if(override.folder) p.folder = override.folder;
       }
     });
     renderGallery();
   }
 }).catch(()=>{});

let currentLang = localStorage.getItem("elite-lang") || "ar";
let currentFilter = "all";
let searchQuery = "";
let activeProject = null;
let liveMode = "desktop"; // desktop | tablet | mobile
let isLiveFullscreen = false;

const gallery = document.getElementById("gallery");
const filtersEl = document.getElementById("filters");
const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clearSearch");
const resultsCount = document.getElementById("resultsCount");
const emptyEl = document.getElementById("empty");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalMedia = document.getElementById("modalMedia");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalStack = document.getElementById("modalStack");
const modalStyle = document.getElementById("modalStyle");
const modalFolder = document.getElementById("modalFolder");
const modalCover = document.getElementById("modalCover");
const modalDocs = document.getElementById("modalDocs");
const toast = document.getElementById("toast");
const liveFrame = document.getElementById("liveFrame");
const liveFrameWrap = document.getElementById("liveFrameWrap");
const liveUrlEl = document.getElementById("liveUrl");
const liveLoading = document.getElementById("liveLoading");

function t(obj){ return currentLang === "en" ? obj.en : obj.ar; }

// بناء رابط المعاينة الحية الحقيقي
function getLiveUrl(folder){
  // إذا نشتغل عبر server.js سيكون /live/<folder>/
  // إذا فتحنا مباشرة file:// نستخدم ../<folder>/
  const isHttp = location.protocol === "http:" || location.protocol === "https:";
  if(isHttp){
    // جرب أولاً مسار server.js الموحد
    // إذا كان المعرض يخدم من islam-portfolio-elite، فـ /live سيعمل
    // وإذا كان يخدم من parent (npx serve .)، فـ /<folder> سيعمل أيضاً
    // نرجع الاثنين ونجرب
    // نتحقق هل نحن داخل islam-portfolio-elite أم parent
    const path = location.pathname;
    if(path.includes("islam-portfolio-elite") || path.includes("live")){
      return `${location.origin}/live/${folder}/`;
    }
    // افتراضي: parent serve -> /<folder>/
    // نفضل /live/<folder>/ إن وجد، وإلا نستخدم النسبي
    return `${location.origin}/live/${folder}/`;
  }
  // file://
  return `../${folder}/index.html`;
}

function getFallbackLiveUrl(folder){
  // للفتح في تبويب جديد — يجرب المسارات الشائعة
  const isHttp = location.protocol === "http:" || location.protocol === "https:";
  if(isHttp){
    // نحاول live أولاً
    return `${location.origin}/live/${folder}/`;
  }
  return `../${folder}/index.html`;
}

// توليد معاينة حية فورية (srcdoc) — تعمل دائماً بدون سيرفر، تبهر العميل
function buildSrcDoc(p){
  const title = t(p.title);
  const subtitle = t(p.subtitle);
  const desc = t(p.desc);
  const c1 = p.colors[0], c2 = p.colors[1];
  const pills = p.stack.map(s=> `<span style="display:inline-block;padding:6px 10px;border-radius:99px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);margin:4px;font-size:12px;font-weight:700">${s}</span>`).join("");
  const isDark = !p.darkText;
  const textColor = isDark ? "#fff" : "#0f172a";
  const mutedColor = isDark ? "rgba(255,255,255,.72)" : "rgba(15,23,42,.62)";
  const lang = currentLang;
  const dir = lang==="ar" ? "rtl" : "ltr";
  // محتوى مختلف حسب الفئة لإعطاء إحساس حقيقي
  let mockBody = "";
  if(p.category==="dashboard"){
    mockBody = `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:18px 0">
        <div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:14px"><div style="font-size:11px;letter-spacing:.12em;opacity:.7">REVENUE</div><div style="font-size:22px;font-weight:900;margin:6px 0">$284,900</div><div style="font-size:11px;color:#22c55e">↑ 12.4%</div><div style="height:4px;background:linear-gradient(90deg,${c1},${c2});border-radius:99px;margin-top:10px;width:78%"></div></div>
        <div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:14px"><div style="font-size:11px;letter-spacing:.12em;opacity:.7">USERS</div><div style="font-size:22px;font-weight:900;margin:6px 0">12,840</div><div style="font-size:11px;color:#22c55e">↑ 8.1%</div><div style="height:4px;background:linear-gradient(90deg,${c1},${c2});border-radius:99px;margin-top:10px;width:62%"></div></div>
        <div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:14px"><div style="font-size:11px;letter-spacing:.12em;opacity:.7">CONVERSION</div><div style="font-size:22px;font-weight:900;margin:6px 0">4.82%</div><div style="font-size:11px;color:#ef4444">↓ 0.3%</div><div style="height:4px;background:linear-gradient(90deg,${c1},${c2});border-radius:99px;margin-top:10px;width:44%"></div></div>
      </div>
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="font-weight:800">Analytics</span><span style="font-size:12px;padding:4px 8px;border-radius:99px;background:rgba(56,189,248,.14);color:#38bdf8">Live</span></div>
        <div style="display:flex;align-items:end;gap:6px;height:80px">
          ${[40,65,45,80,55,90,60,75,50,85].map(h=> `<div style="flex:1;background:linear-gradient(180deg,${c1},${c2});border-radius:8px 8px 0 0;height:${h}%"></div>`).join("")}
        </div>
      </div>`;
  } else if(p.category==="agency"){
    mockBody = `
      <div style="display:grid;grid-template-columns:1.1fr .9fr;gap:14px;margin:18px 0">
        <div><h2 style="font-size:28px;line-height:1;margin:0 0 8px;letter-spacing:-.03em">We create<br><span style="background:linear-gradient(135deg,${c1},${c2});-webkit-background-clip:text;-webkit-text-fill-color:transparent">bold brands.</span></h2><p style="color:${mutedColor};font-size:13px;line-height:1.7;margin:0 0 12px">${desc}</p><div style="display:flex;gap:8px"><span style="padding:10px 16px;border-radius:12px;background:${c1};color:#fff;font-weight:800;font-size:13px">Start project →</span><span style="padding:10px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.14);font-weight:700;font-size:13px">View work</span></div></div>
        <div style="background:linear-gradient(135deg,${c1},${c2});border-radius:20px;min-height:180px;display:grid;place-items:center;color:#fff;font-weight:900;font-size:13px;letter-spacing:.12em">${p.kicker}</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
        ${[1,2,3].map(i=> `<div style="height:90px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);display:grid;place-items:center;font-weight:800;font-size:12px;letter-spacing:.08em">WORK 0${i}</div>`).join("")}
      </div>`;
  } else if(p.category==="platform"){
    mockBody = `
      <div style="text-align:center;padding:18px 0">
        <div style="display:inline-flex;padding:6px 12px;border-radius:99px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);font-size:11px;letter-spacing:.14em;font-weight:800">${p.kicker} • LIVE</div>
        <h2 style="font-size:26px;margin:14px 0 6px;letter-spacing:-.03em">${title}</h2>
        <p style="color:${mutedColor};max-width:520px;margin:0 auto 14px;font-size:13px;line-height:1.7">${desc}</p>
        <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap">${pills}</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px">
        ${["المدن","القطاعات","المستثمرون","الخبراء"].map((l,i)=> `<div style="text-align:center;padding:14px;border-radius:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)"><div style="font-size:20px;font-weight:900">${[7,6,240,85][i]}+</div><div style="font-size:11px;opacity:.7">${l}</div></div>`).join("")}
      </div>`;
  } else {
    mockBody = `
      <div style="padding:14px 0">
        <h2 style="margin:0 0 8px;font-size:24px;letter-spacing:-.03em">${title}</h2>
        <p style="color:${mutedColor};font-size:13px;line-height:1.7;margin:0 0 14px">${desc}</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap">${pills}</div>
      </div>
      <div style="margin-top:16px;height:160px;border-radius:20px;background:linear-gradient(135deg,${c1},${c2});display:grid;place-items:center;color:#fff;font-weight:900;letter-spacing:.14em">${p.kicker}</div>`;
  }

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}body{margin:0;font-family:${dir==="rtl"?"Cairo":"Outfit"},system-ui;background:#020617;color:${textColor};line-height:1.6}
.wrap{max-width:860px;margin:0 auto;padding:18px}
.top{height:44px;display:flex;align-items:center;gap:8px;padding:0 14px;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02);position:sticky;top:0;backdrop-filter:blur(8px)}
.dot{width:10px;height:10px;border-radius:50%}.d1{background:#ef4444}.d2{background:#f59e0b}.d3{background:#22c55e}
.url{flex:1;text-align:center;font-family:monospace;font-size:11px;color:#94a3b8}
.hero{padding:22px 18px 14px;background:linear-gradient(135deg,${c1},${c2});position:relative;overflow:hidden}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg, transparent 20%, rgba(0,0,0,.35))}
.hero > *{position:relative;z-index:1}
.hero h1{margin:0;color:#fff;font-size:26px;letter-spacing:-.03em}
.hero p{margin:4px 0 0;color:rgba(255,255,255,.82);font-size:13px;font-weight:600}
.kicker{color:rgba(255,255,255,.78);font-size:10px;letter-spacing:.16em;font-weight:800}
.btn{padding:8px 12px;border-radius:12px;font-weight:800;font-size:12px;cursor:pointer}
</style>
</head>
<body>
  <div class="top"><span class="dot d1"></span><span class="dot d2"></span><span class="dot d3"></span><span class="url">${p.folder} — ${p.kicker}</span><span style="font-size:10px;padding:4px 8px;border-radius:99px;background:linear-gradient(135deg,${c1},${c2});color:#fff;font-weight:900">LIVE</span></div>
  <div class="hero"><div class="kicker">${p.kicker}</div><h1>${title}</h1><p>${subtitle} — ${t(p.style)}</p></div>
  <div class="wrap">${mockBody}
    <div style="margin-top:18px;padding:12px;border-radius:14px;background:rgba(56,189,248,.08);border:1px solid rgba(56,189,248,.18);font-size:12px;color:#bae6fd;text-align:center">
      ✨ هذه معاينة حية تفاعلية داخل الموقع — اضغط <b>فتح المشروع الحقيقي</b> بالأسفل لتجربة الكود الكامل
    </div>
  </div>
  <script>
    // تفاعل وهمي ليشعر العميل أنه Live
    document.addEventListener('click', e=>{
      if(e.target.closest('.btn')||e.target.tagName==='BUTTON'){
        const t=document.createElement('div');
        t.textContent='✓ تم التفاعل';
        t.style.cssText='position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:#0f172a;color:#fff;padding:8px 14px;border-radius:99px;font-size:12px;font-weight:800;box-shadow:0 10px 30px rgba(0,0,0,.3);z-index:999';
        document.body.appendChild(t);
        setTimeout(()=>t.remove(),1200);
      }
    });
  <\/script>
</body>
</html>`;
}

function renderGallery(){
  gallery.innerHTML = "";
  const q = searchQuery.trim().toLowerCase();
  let visible = 0;
  projects.forEach((p, idx) => {
    const matchesFilter = currentFilter === "all" || p.category === currentFilter;
    const haystack = `${t(p.title)} ${t(p.subtitle)} ${t(p.desc)} ${p.stack.join(" ")} ${p.kicker} ${t(p.style)}`.toLowerCase();
    const matchesSearch = !q || haystack.includes(q);
    const show = matchesFilter && matchesSearch;
    if(show) visible++;

    const card = document.createElement("article");
    card.className = "card reveal" + (show ? "" : " hidden");
    card.style.setProperty("--d", (idx*40)+"ms");
    card.dataset.id = p.id;
    const darkClass = p.darkText ? " dark-text" : "";
    const coverImg = p.cover ? `<img class="card-cover" src="${p.cover}" alt="" loading="lazy" onerror="this.style.display='none'">` : ``;
    card.innerHTML = `
      <div class="card-media${darkClass}" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
        ${coverImg}
        <span class="card-badge">${p.stack[0]}</span>
        <span class="card-kicker">${p.kicker}</span>
        <h3>${t(p.title).split("—")[0].trim()}</h3>
        <p>${t(p.subtitle)}</p>
      </div>
      <div class="card-body">
        <h4>${t(p.title)}</h4>
        <p>${t(p.desc)}</p>
        <div class="card-footer">
          <div class="pills">${p.stack.slice(0,3).map(s=>`<span class="pill">${s}</span>`).join("")}</div>
          <span class="card-cta">${currentLang==="en"?"Live Preview →":"معاينة حية ←"}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", ()=> openModal(p));
    gallery.appendChild(card);
  });
  resultsCount.textContent = currentLang==="en" ? `${visible} projects` : `${visible} مشروع`;
  emptyEl.hidden = visible !== 0;
  observeReveals();
}

function openModal(p){
  activeProject = p;
  const liveUrl = getLiveUrl(p.folder);

  // تعبئة البيانات
  modalMedia.style.setProperty("--c1", p.colors[0]);
  modalMedia.style.setProperty("--c2", p.colors[1]);
  modalMedia.className = "modal-media-mini" + (p.darkText ? " dark-text" : "");
  modalMedia.innerHTML = `<span style="font-size:10px;letter-spacing:.16em;font-weight:900;opacity:.8">${p.kicker}</span><h4 style="margin:4px 0 0">${t(p.title)}</h4>`;
  // نلون الخلفية للميني هيدر
  modalMedia.style.background = `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})`;

  modalKicker.textContent = p.kicker;
  modalTitle.textContent = t(p.title);
  modalDesc.textContent = t(p.desc);
  modalStack.innerHTML = p.stack.map(s=>`<span class="pill">${s}</span>`).join("");
  modalStyle.textContent = t(p.style);
  modalFolder.textContent = p.folder;
  // الغلاف الخارجي
  if (modalCover) {
    if (p.cover) { modalCover.src = p.cover; modalCover.style.display = "block"; modalCover.alt = t(p.title); }
    else { modalCover.style.display = "none"; modalCover.removeAttribute("src"); }
  }
  // الوثائق والصور مربوطة
  if (modalDocs) {
    const docs = p.docs || [];
    if (docs.length) {
      modalDocs.innerHTML = docs.map(d=> `<a href="${d}" target="_blank" rel="noopener" class="pill" style="text-decoration:none">📄 ${d.split('/').pop()}</a>`).join("");
    } else {
      modalDocs.innerHTML = `<span class="pill">لا وثائق</span>`;
    }
  }
  liveUrlEl.textContent = liveUrl.replace(location.origin, "") || liveUrl;
  modal.dataset.folder = p.folder;

  // إعداد iframe بمعاينة فورية srcdoc (تشتغل دائماً حتى بدون سيرفر)
  liveLoading.classList.remove("hide");
  liveFrame.removeAttribute("src");
  liveFrame.srcdoc = buildSrcDoc(p);
  // بعد تحميل srcdoc اخفِ اللودر
  liveFrame.onload = ()=> {
    setTimeout(()=> liveLoading.classList.add("hide"), 400);
  };
  // حاول لاحقاً تحميل المشروع الحقيقي إذا كان http (اختياري)
  // نحتفظ بـ srcdoc كـ fallback، وزر "فتح المشروع الحقيقي" سيغير src

  // reset device
  setLiveDevice(liveMode);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  // إيقاف iframe لتوفير موارد
  setTimeout(()=> {
    if(!modal.classList.contains("open")){
      liveFrame.removeAttribute("src");
      liveFrame.removeAttribute("srcdoc");
    }
  }, 300);
  // خروج من fullscreen إن وجد
  if(isLiveFullscreen){
    liveFrameWrap.classList.remove("fullscreen");
    isLiveFullscreen=false;
  }
  activeProject=null;
}

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(()=> toast.classList.remove("show"), 2200);
}

// device switch
function setLiveDevice(mode){
  liveMode = mode;
  liveFrameWrap.classList.remove("mobile","tablet");
  if(mode==="mobile") liveFrameWrap.classList.add("mobile");
  if(mode==="tablet") liveFrameWrap.classList.add("tablet");
  document.querySelectorAll(".live-btn").forEach(b=> b.classList.remove("active"));
  if(mode==="desktop") document.getElementById("liveDeviceDesktop")?.classList.add("active");
  if(mode==="tablet") document.getElementById("liveDeviceTablet")?.classList.add("active");
  if(mode==="mobile") document.getElementById("liveDeviceMobile")?.classList.add("active");
}

// filters
filtersEl.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    filtersEl.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderGallery();
  });
});
searchInput.addEventListener("input", (e)=>{
  searchQuery = e.target.value;
  renderGallery();
});
clearBtn.addEventListener("click", ()=>{
  searchInput.value=""; searchQuery=""; renderGallery(); searchInput.focus();
});

// modal events
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", e=>{ if(e.key==="Escape" && modal.classList.contains("open")) closeModal(); });

// أزرار المعاينة الحية
document.getElementById("liveDeviceDesktop")?.addEventListener("click", ()=> setLiveDevice("desktop"));
document.getElementById("liveDeviceTablet")?.addEventListener("click", ()=> setLiveDevice("tablet"));
document.getElementById("liveDeviceMobile")?.addEventListener("click", ()=> setLiveDevice("mobile"));
document.getElementById("liveFullscreen")?.addEventListener("click", ()=>{
  isLiveFullscreen = !isLiveFullscreen;
  liveFrameWrap.classList.toggle("fullscreen", isLiveFullscreen);
  document.getElementById("liveFullscreen").classList.toggle("active", isLiveFullscreen);
});
document.getElementById("liveNewTab")?.addEventListener("click", ()=>{
  if(!activeProject) return;
  const url = getFallbackLiveUrl(activeProject.folder);
  window.open(url, "_blank");
});
// زر فتح المشروع الحقيقي — يبدل iframe من srcdoc إلى src الحقيقي
document.getElementById("modalOpenLive")?.addEventListener("click", ()=>{
  if(!activeProject) return;
  const realUrl = getLiveUrl(activeProject.folder);
  // حاول تحميل المشروع الحقيقي داخل الـ iframe
  liveLoading.classList.remove("hide");
  liveUrlEl.textContent = realUrl.replace(location.origin,"") || realUrl;
  // إزالة srcdoc والانتقال لـ src
  liveFrame.removeAttribute("srcdoc");
  liveFrame.src = realUrl;
  liveFrame.onload = ()=> liveLoading.classList.add("hide");
  liveFrame.onerror = ()=> {
    liveLoading.classList.add("hide");
    showToast(currentLang==="en" ? "Real project needs dev server. Showing preview again." : "المشروع الحقيقي يحتاج تشغيل السيرفر — نعود للمعاينة");
    liveFrame.srcdoc = buildSrcDoc(activeProject);
  };
  // كذلك افتح تبويب احتياطي بعد ثانية إذا كان file:// (سيفشل)
  if(location.protocol==="file:"){
    setTimeout(()=> {
      showToast(currentLang==="en" ? "Tip: run npm run dev to see real project. Preview shown." : "نصيحة: شغّل السيرفر npm run dev لرؤية المشروع الحقيقي — المعاينة الحالية تعمل بدون سيرفر");
    }, 800);
  } else {
    showToast(currentLang==="en" ? "Loading real project inside preview..." : "جاري تحميل المشروع الحقيقي داخل المعاينة...");
  }
});
document.getElementById("modalCopyLink")?.addEventListener("click", ()=>{
  if(!activeProject) return;
  const url = getLiveUrl(activeProject.folder);
  const full = location.protocol==="file:" ? `../${activeProject.folder}/` : `${location.origin}/live/${activeProject.folder}/`;
  navigator.clipboard.writeText(full).then(()=> showToast(currentLang==="en"?"Preview link copied!":"تم نسخ رابط المعاينة!"))
    .catch(()=> {
      // fallback
      const ta=document.createElement("textarea"); ta.value=full; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
      showToast(currentLang==="en"?"Link copied!":"تم النسخ!");
    });
});

// featured cards click
document.querySelectorAll(".featured-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    const p = projects.find(x=> x.id===card.dataset.project);
    if(p) openModal(p);
  });
});

// language
function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("elite-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang==="ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-ar][data-en]").forEach(el=>{
    el.textContent = lang==="en" ? el.dataset.en : el.dataset.ar;
  });
  document.querySelectorAll("[data-placeholder-ar][data-placeholder-en]").forEach(el=>{
    el.placeholder = lang==="en" ? el.dataset.placeholderEn : el.dataset.placeholderAr;
  });
  document.getElementById("langBtn").querySelector("span").textContent = lang==="en" ? "AR" : "EN";
  document.getElementById("langBtn").setAttribute("aria-label", lang==="en"?"العربية":"English");
  document.title = lang==="en" ? "Islam Al-Nashar — Elite Portfolio | 18 Projects Live" : "إسلام النشار — معرض أعمال Elite | 18 مشروع بمعاينة حية";
  // إذا كان المودال مفتوح، أعد بناء srcdoc باللغة الجديدة
  if(activeProject && modal.classList.contains("open")){
    liveFrame.srcdoc = buildSrcDoc(activeProject);
    modalTitle.textContent = t(activeProject.title);
    modalDesc.textContent = t(activeProject.desc);
    modalStyle.textContent = t(activeProject.style);
  }
  renderGallery();
  const themeIsLight = document.body.classList.contains("light");
  document.getElementById("themeBtn").textContent = themeIsLight ? "☀" : "☾";
}
document.getElementById("langBtn").addEventListener("click", ()=>{
  applyLang(currentLang==="ar" ? "en" : "ar");
});

// theme
const savedTheme = localStorage.getItem("elite-theme");
if(savedTheme==="light") document.body.classList.add("light");
document.getElementById("themeBtn").textContent = document.body.classList.contains("light") ? "☀" : "☾";
document.getElementById("themeBtn").addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("elite-theme", isLight?"light":"dark");
  document.getElementById("themeBtn").textContent = isLight ? "☀" : "☾";
});

// burger
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", ()=>{
  const open = navLinks.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(a=> a.addEventListener("click", ()=>{
  navLinks.classList.remove("open"); burger.classList.remove("open");
}));

// scroll progress + reveal
const scrollbar = document.getElementById("scrollbar");
function onScroll(){
  const max = document.documentElement.scrollHeight - innerHeight;
  const pct = max>0 ? (scrollY/max)*100 : 0;
  scrollbar.style.width = pct+"%";
  document.getElementById("header").style.boxShadow = scrollY>20 ? "0 8px 32px rgba(0,0,0,.25)" : "none";
}
addEventListener("scroll", onScroll, {passive:true});

let revealObserver;
function observeReveals(){
  const els = document.querySelectorAll(".reveal:not(.in)");
  if(!("IntersectionObserver" in window)){ els.forEach(e=>e.classList.add("in")); return; }
  if(!revealObserver){
    revealObserver = new IntersectionObserver(entries=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting){ ent.target.classList.add("in"); revealObserver.unobserve(ent.target); }
      });
    },{threshold:.12});
  }
  els.forEach(e=> revealObserver.observe(e));
}

// counters
const counters = document.querySelectorAll(".count");
let counted=false;
function animateCounts(){
  if(counted) return;
  const rect = document.querySelector(".hero-metrics")?.getBoundingClientRect();
  if(!rect) return;
  if(rect.top < innerHeight*0.9){
    counted=true;
    counters.forEach(c=>{
      const target = +c.dataset.target;
      let cur=0;
      const step = target/30;
      const tick=()=>{
        cur+=step;
        if(cur<target){ c.textContent=Math.floor(cur); requestAnimationFrame(tick); }
        else c.textContent=target;
      };
      tick();
    });
  }
}
addEventListener("scroll", animateCounts, {passive:true});

// cursor glow
const glow = document.getElementById("cursorGlow");
let gx=innerWidth/2, gy=innerHeight/2, cx=gx, cy=gy, glowOn=false;
if(matchMedia("(pointer:fine)").matches){
  addEventListener("mousemove", e=>{ gx=e.clientX; gy=e.clientY; if(!glowOn){glow.classList.add("on"); glowOn=true;} });
  addEventListener("mouseleave", ()=>{ glow.classList.remove("on"); glowOn=false; });
  (function loop(){
    cx += (gx-cx)*0.08; cy += (gy-cy)*0.08;
    glow.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
    requestAnimationFrame(loop);
  })();
}

// loader
addEventListener("load", ()=>{
  setTimeout(()=>{
    document.getElementById("loader")?.classList.add("hide");
  }, 700);
});

// contact form -> mailto
document.getElementById("contactForm")?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const msg = document.getElementById("cMsg").value.trim();
  if(!name || !email || !msg){ showToast(currentLang==="en"?"Please fill all fields":"يرجى ملء جميع الحقول"); return; }
  const subject = encodeURIComponent(currentLang==="en" ? `Hiring Inquiry from ${name}` : `استفسار توظيف من ${name}`);
  const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
  window.location.href = `mailto:aslamalkarywka+dev@gmail.com?subject=${subject}&body=${body}`;
  showToast(currentLang==="en"?"Opening your email app...":"جاري فتح بريدك...");
});

// CV button
document.getElementById("cvBtn")?.addEventListener("click", (e)=>{
  e.preventDefault();
  showToast(currentLang==="en"?"Add your CV PDF to /assets/cv.pdf and link it here":"أضف ملف السيرة الذاتية إلى /assets/cv.pdf واربطه هنا");
});

// init
applyLang(currentLang);
onScroll();
observeReveals();
animateCounts();
renderGallery();

