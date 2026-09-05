# Elite Portfolio — إسلام النشار — 18 مشروع بمعاينة حية

**Full Stack • 7 سنوات • مصر / كمبوند • aslamalkarywka+dev@gmail.com • https://github.com/aslamalkarywk7**

معرض واحد يعرض 18 مشروع ويب حقيقي — كل مشروع يفتح **داخل الموقع** بلا تحميل، مع غلاف خارجي ووثائق مربوطة.

## 📁 الملفات المربوطة — كل وثائق الـ 18 مشروع

هذا المجلد الرئيسي يربط كل `README.md` الأصلية:

| # | المشروع | المجلد | README | الغلاف |
|---|---------|--------|--------|--------|
| 1 | Aetheria — Glassmorphism 2.0 | `aetheria---glassmorphism-2.0-platform` | [README](live/aetheria---glassmorphism-2.0-platform/README.md) | `covers/aetheria.svg` |
| 2 | Analog Antiques | `analog-antiques` | [README](live/analog-antiques/README.md) | `covers/analog.jpg` |
| 3 | شات العرب | `arabic-chat-ui-ux-design-website` | [README](live/arabic-chat-ui-ux-design-website/README.md) | `covers/arabic-chat.jpg` |
| 4 | Audio Engine Pro | `audio-engine-pro` | [README](live/audio-engine-pro/README.md) | `covers/audio.jpg` |
| 5 | BAUHAUS 1919 | `bauhaus-1919---creative-design-studio-1-` | [README](live/bauhaus-1919---creative-design-studio-1-/README.md) | `covers/bauhaus.jpg` |
| 6 | عيادات النخبة | `clinics-portfolio-design` | [readme](live/clinics-portfolio-design/readme.md) | `covers/clinics.jpg` |
| 7 | Oman Luxury Dash | `dashboard-website` | [README](live/dashboard-website/README.md) | `covers/oman.svg` |
| 8 | Atrium — Industrial OS | `design-dashboard-pro` | [README](live/design-dashboard-pro/README.md) | `covers/atrium.jpg` |
| 9 | Connective Agency | `flat-design-website` | [README](live/flat-design-website/README.md) | `covers/flat.svg` |
| 10 | GRID STUDIO | `grid-studio---swiss-design-system` | [README](live/grid-studio---swiss-design-system/README.md) | `covers/grid.jpg` |
| 11 | أجماس — Industrial | `industrial-marketplace-platform` | [README](live/industrial-marketplace-platform/README.md) | `covers/industrial.jpg` |
| 12 | MAISON NOIR | `luxury-creative-agency` | [README](live/luxury-creative-agency/README.md) | `covers/luxury.jpg` |
| 13 | معرض أعمالي السابق | `mywebsite` | [index](live/mywebsite/index.html) | `covers/mywebsite.jpg` |
| 14 | معرض الرعب | `platform_horror` | [README](live/platform_horror/README.md) | `covers/horror.svg` |
| 15 | RAW Brutalist | `raw-brutalist-creative-studio` | [README](live/raw-brutalist-creative-studio/README.md) | `covers/raw.jpg` |
| 16 | RetroWave Studio | `retrowave-studio` | [README](live/retrowave-studio/README.md) | `covers/retrowave.svg` |
| 17 | Studio Chroma | `studio-chroma` | [README](live/studio-chroma/README.md) | `covers/chroma.jpg` |
| 18 | Zenith Finance | `zenith-finance` | [README](live/zenith-finance/README.md) | `covers/zenith.jpg` |

> كل `live/<folder>/README.md` هي نسخة مربوطة من المجلد الأصلي `../<folder>/README.md` — أي تعديل في الأصل ينسخ تلقائياً عبر `projects.json → docs`

## 🖼️ الأغلفة الخارجية — مربوطة

كل مشروع له غلاف في `covers/` مربوط عبر `projects.json → cover`:
```
covers/aetheria.svg, analog.jpg, arabic-chat.jpg, atrium.jpg, audio.jpg, bauhaus.jpg, chroma.jpg, clinics.jpg, flat.svg, grid.jpg, horror.svg, industrial.jpg, luxury.jpg, mywebsite.jpg, oman.svg, raw.jpg, retrowave.svg, zenith.jpg
```
غيّر أي غلاف من `projects.json` وسيتحدث الكارت فوراً.

## ⚙️ ملف التحكم الصغير

عدّل `projects.json` فقط:
```json
{
  "id": "aetheria",
  "cover": "covers/aetheria.svg",
  "docs": ["live/aetheria---glassmorphism-2.0-platform/README.md"]
}
```

## 🔗 مساهماتي

مربوط بـ https://aslamalkarywk7.github.io/aslamalkarywk7 — قسم `#contributions` يعرض GitHub Stats حية + iframe.

## ▶️ التشغيل

```bash
cd islam-portfolio-elite
npm install
npm run dev
# http://localhost:3000
```
أو `START.bat`

## 📂 الهيكل

```
islam-portfolio-elite/
├── index.html          ← المعرض الرئيسي
├── projects.json       ← ملف التحكم الصغير (أغلفة + وثائق)
├── covers/             ← 18 غلاف خارجي
├── live/               ← 18 مشروع مبني (كود حقيقي)
│   └── <folder>/README.md  ← مربوط بالرئيسية
├── assets/             ← صور شخصية
├── script.js / style.css
└── server.js / vercel.json
```
