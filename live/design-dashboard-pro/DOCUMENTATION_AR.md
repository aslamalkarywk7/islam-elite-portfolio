# 📚 الدليل التقني الشامل — نظام Atrium Industrial OS

> **النسخة:** 4.2.1 | **اللغة:** العربية | **آخر تحديث:** مايو 2026

---

## 🗂️ جدول المحتويات

1. [نظرة عامة على المشروع](#-نظرة-عامة-على-المشروع)
2. [متطلبات التشغيل](#-متطلبات-التشغيل)
3. [خطوات التثبيت والتشغيل](#-خطوات-التثبيت-والتشغيل)
4. [هيكل المجلدات والملفات](#-هيكل-المجلدات-والملفات)
5. [شرح المكونات الرئيسية](#-شرح-المكونات-الرئيسية)
6. [دليل تخصيص الألوان والمظهر](#-دليل-تخصيص-الألوان-والمظهر)
7. [دليل تعديل البيانات والمحتوى](#-دليل-تعديل-البيانات-والمحتوى)
8. [دليل إضافة صفحات ومكونات جديدة](#-دليل-إضافة-صفحات-ومكونات-جديدة)
9. [تخصيص شريط التنقل الجانبي](#-تخصيص-شريط-التنقل-الجانبي)
10. [تعديل الرسوم البيانية التنبؤية](#-تعديل-الرسوم-البيانية-التنبؤية)
11. [تعديل إدارة العطاءات](#-تعديل-إدارة-العطاءات)
12. [تخصيص بطاقات مؤشرات الأداء](#-تخصيص-بطاقات-مؤشرات-الأداء)
13. [إضافة نظام المصادقة](#-إضافة-نظام-المصادقة)
14. [النشر على الإنترنت](#-النشر-على-الإنترنت)
15. [الأسئلة الشائعة وحل المشكلات](#-الأسئلة-الشائعة-وحل-المشكلات)

---

## 🌐 نظرة عامة على المشروع

**Atrium Industrial OS** هو نظام تشغيل متكامل لإدارة رأس المال الصناعي، يتكون من:

| المكوّن | الوصف |
|---------|-------|
| **صفحة الهبوط (Landing Page)** | واجهة تسويقية فاخرة لعرض المنتج |
| **لوحة التحكم (Dashboard)** | نظام متكامل لإدارة العطاءات والأصول والمستثمرين |
| **نظام التنبؤ بالذكاء الاصطناعي** | رسوم بيانية تتنبأ بحجم التداول على مدى 5 أسابيع |
| **سجل الأصول الصناعية** | واجهة لتتبع الأصول والعقود |

### التقنيات المستخدمة

```
Next.js 16 (App Router)    — إطار العمل الرئيسي
React 19                   — مكتبة واجهة المستخدم
TypeScript 5.7             — لغة البرمجة
Tailwind CSS v4            — نظام التصميم
Radix UI                   — مكونات واجهة المستخدم الأساسية
Recharts                   — الرسوم البيانية
Lucide React               — مكتبة الأيقونات
```

---

## 💻 متطلبات التشغيل

قبل البدء، تأكد من توافر ما يلي على جهازك:

| الأداة | الإصدار المطلوب | كيفية التحقق |
|--------|----------------|--------------|
| **Node.js** | 18.17 أو أحدث | `node --version` |
| **npm** | 9+ أو **pnpm** 8+ | `npm --version` |
| **Git** | أي إصدار حديث | `git --version` |
| **محرر الأكواد** | VS Code (موصى به) | — |

### تثبيت Node.js (إذا لم يكن مثبتاً)
انتقل إلى [nodejs.org](https://nodejs.org) وحمّل الإصدار LTS.

---

## 🚀 خطوات التثبيت والتشغيل

### الخطوة 1: استنساخ المشروع أو فتح المجلد

إذا كنت قد حصلت على الملفات بشكل مباشر (مضغوطة ZIP)، قم بفك الضغط في مكان مناسب على جهازك. أما إذا كان المشروع على GitHub:

```bash
git clone https://github.com/your-username/design-dashboard-pro.git
cd design-dashboard-pro
```

### الخطوة 2: الانتقال إلى مجلد المشروع

```bash
# إذا كنت في المجلد الرئيسي الذي تم فك ضغطه
cd design-dashboard-pro-main
```

### الخطوة 3: تثبيت الحزم والمكتبات

**باستخدام pnpm (الأسرع والموصى به):**
```bash
pnpm install
```

**أو باستخدام npm:**
```bash
npm install
```

> ⚠️ **تنبيه:** قد تستغرق هذه الخطوة بضع دقائق في المرة الأولى لأنها تحمّل جميع المكتبات اللازمة (~400 حزمة).

### الخطوة 4: تشغيل خادم التطوير

```bash
# باستخدام pnpm
pnpm dev

# باستخدام npm
npm run dev
```

### الخطوة 5: عرض المشروع في المتصفح

افتح متصفحك وانتقل إلى:
```
http://localhost:3000
```

ستظهر لك صفحة الهبوط الرئيسية. للوصول إلى لوحة التحكم:
```
http://localhost:3000/dashboard
```

---

## 📁 هيكل المجلدات والملفات

فيما يلي شرح تفصيلي لكل ملف ومجلد في المشروع:

```
design-dashboard-pro-main/
│
├── app/                          # ← مجلد صفحات التطبيق (Next.js App Router)
│   ├── layout.tsx                # ← التخطيط الجذري (يُحيط بكل الصفحات)
│   ├── page.tsx                  # ← صفحة الهبوط الرئيسية "/"
│   ├── globals.css               # ← ملف CSS العام (الألوان، المتغيرات، التأثيرات)
│   └── dashboard/                # ← مجلد لوحة التحكم
│       ├── layout.tsx            # ← تخطيط لوحة التحكم (الشريط الجانبي + الشريط العلوي)
│       ├── page.tsx              # ← صفحة النظرة العامة "/dashboard"
│       ├── assets/               # ← صفحة سجل الأصول "/dashboard/assets"
│       ├── bids/                 # ← صفحة العطاءات "/dashboard/bids"
│       ├── contracts/            # ← صفحة العقود "/dashboard/contracts"
│       ├── counterparties/       # ← صفحة الأطراف المقابلة "/dashboard/counterparties"
│       └── insights/             # ← صفحة رؤى المستثمرين "/dashboard/insights"
│
├── components/                   # ← مجلد المكونات القابلة لإعادة الاستخدام
│   ├── dashboard/                # ← مكونات لوحة التحكم
│   │   ├── sidebar.tsx           # ← الشريط الجانبي للتنقل
│   │   ├── topbar.tsx            # ← الشريط العلوي
│   │   ├── page-header.tsx       # ← رأس الصفحة، حبة السوق، تذييل لوحة التحكم
│   │   ├── kpi-cards.tsx         # ← بطاقات مؤشرات الأداء الرئيسية (4 بطاقات)
│   │   ├── predictive-chart.tsx  # ← الرسم البياني التنبؤي بالذكاء الاصطناعي
│   │   ├── bid-management.tsx    # ← جدول إدارة العطاءات
│   │   └── investor-insights.tsx # ← قسم رؤى المستثمرين
│   ├── marketing/                # ← مكونات صفحة الهبوط التسويقية
│   │   ├── site-nav.tsx          # ← شريط التنقل الرئيسي لصفحة الهبوط
│   │   └── hero-preview.tsx      # ← قسم البطل (Hero Section) التمهيدي
│   ├── ui/                       # ← مكونات Radix UI المُخصصة (أزرار، نوافذ، إلخ)
│   └── theme-provider.tsx        # ← موفر الثيم (الوضع الليلي / النهاري)
│
├── hooks/                        # ← خطافات React المخصصة (Custom Hooks)
├── lib/                          # ← مكتبات مساعدة
│   └── utils.ts                  # ← دوال مساعدة (cn لدمج فئات Tailwind)
├── public/                       # ← الملفات الثابتة (صور، أيقونات)
├── styles/                       # ← ملفات CSS إضافية
├── image/                        # ← صور المشروع والمعاينات
├── package.json                  # ← قائمة الحزم والأوامر
├── tsconfig.json                 # ← إعدادات TypeScript
├── next.config.mjs               # ← إعدادات Next.js
└── postcss.config.mjs            # ← إعدادات PostCSS
```

---

## 🧩 شرح المكونات الرئيسية

### 1. ملف التخطيط الجذري — `app/layout.tsx`

هذا الملف هو "الإطار الشامل" الذي يُحيط بجميع صفحات التطبيق. يتحكم في:
- **الخطوط:** يستخدم خط Geist وGeist Mono من Google
- **البيانات الوصفية (Metadata):** عنوان المتصفح ووصف الصفحة لـ SEO
- **التحليلات:** يُدمج Vercel Analytics في بيئة الإنتاج تلقائياً

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: "Atrium — Industrial Marketplace Intelligence",  // ← عنوان المتصفح
  description: "...",                                     // ← وصف الصفحة
}
```

### 2. تخطيط لوحة التحكم — `app/dashboard/layout.tsx`

يُنظّم هذا الملف الهيكل العام للوحة التحكم:
```
┌─────────────────────────────────────────┐
│  الشريط العلوي (Topbar)                │
├──────────┬──────────────────────────────┤
│          │                              │
│ الشريط   │    محتوى الصفحة الرئيسي     │
│ الجانبي  │    (children)               │
│(Sidebar) │                              │
│          │                              │
└──────────┴──────────────────────────────┘
```

### 3. صفحة النظرة العامة — `app/dashboard/page.tsx`

تجمع هذه الصفحة كل مكونات لوحة التحكم بالترتيب التالي:
1. **رأس الصفحة** (PageHeader) — الترحيب والأوامر السريعة
2. **بطاقات الأداء** (KpiCards) — 4 مؤشرات رئيسية
3. **الرسم البياني التنبؤي** (PredictiveChart) — توقعات الذكاء الاصطناعي
4. **رؤى المستثمرين** (InvestorInsights) — تحليل المستثمرين
5. **جدول العطاءات** (BidManagement) — العطاءات الحية

---

## 🎨 دليل تخصيص الألوان والمظهر

جميع ألوان المشروع مُعرَّفة كمتغيرات CSS في ملف `app/globals.css`. التعديل عليها سيؤثر على كامل التطبيق.

### فهم نظام الألوان

يستخدم المشروع نموذج ألوان **OKLCH** الحديث للتحكم الدقيق في:
- **L** = الإضاءة (Lightness) — من 0 (أسود) إلى 1 (أبيض)
- **C** = التشبع (Chroma) — شدة اللون
- **H** = الهيو (Hue) — نوع اللون (درجة من 0 إلى 360)

### الألوان الرئيسية وكيفية تغييرها

```css
/* app/globals.css */
:root {
  /* 🔹 لون الخلفية الرئيسية — داكن فحمي */
  --background: oklch(0.16 0.006 60);
  /* لتفتيحها: رفع القيمة الأولى (0.16 → 0.25) */

  /* 🔹 لون النص الرئيسي — أبيض دافئ */
  --foreground: oklch(0.94 0.012 85);

  /* 🔹 اللون الرئيسي (الذهبي المطفأ) — يؤثر على الأزرار والتمييز */
  --primary: oklch(0.78 0.11 86);
  /* لتغيير اللون إلى أزرق مثلاً: oklch(0.6 0.15 230) */

  /* 🔹 خلفية البطاقات */
  --card: oklch(0.205 0.007 60);

  /* 🔹 النصوص الثانوية (الرمادية) */
  --muted-foreground: oklch(0.66 0.012 80);
}
```

### مثال: تغيير اللون الرئيسي من ذهبي إلى أزرق

```css
/* ابحث عن هذه الأسطر وعدّلها */
--primary: oklch(0.6 0.18 230);        /* أزرق فاتح */
--primary-foreground: oklch(0.98 0 0); /* أبيض نقي */
--ring: oklch(0.6 0.18 230);           /* هالة التركيز */
--sidebar-primary: oklch(0.6 0.18 230);
--sidebar-ring: oklch(0.6 0.18 230);
```

### مثال: تغيير المظهر إلى فاتح (Light Mode)

```css
:root {
  --background: oklch(0.98 0.002 85);   /* أبيض دافئ */
  --foreground: oklch(0.15 0.01 60);    /* داكن */
  --card: oklch(0.95 0.003 85);         /* رمادي فاتح جداً */
  --muted-foreground: oklch(0.45 0.01 60);
  --sidebar: oklch(0.93 0.004 85);
}
```

---

## 📝 دليل تعديل البيانات والمحتوى

### تعديل رأس الصفحة (الترحيب)

افتح ملف `app/dashboard/page.tsx`:

```tsx
// ابحث عن مكوّن PageHeader وعدّل هذه القيم:
<PageHeader
  eyebrow="Q2 · 2026 · Session 184"   // ← السطر الصغير فوق العنوان
  title={
    <>
      Good evening, Elena.              // ← اسم المستخدم — غيّره باسمك
      <br />
      <span className="text-muted-foreground">
        The order book is trending above consensus.  // ← العنوان الفرعي
      </span>
    </>
  }
  description={
    <>
      {/* ← عدّل النص هنا */}
      Atrium is tracking 14 live industrial bids across 6 segments.
    </>
  }
/>
```

**مثال تطبيقي — تعريب رأس الصفحة:**

```tsx
<PageHeader
  eyebrow="الربع الثاني · 2026 · جلسة 184"
  title={
    <>
      مساء الخير، محمد.
      <br />
      <span className="text-muted-foreground">
        دفتر الأوامر يتجاوز توقعات السوق.
      </span>
    </>
  }
  description={
    <>
      أتريوم يتتبع 14 عطاءً صناعياً نشطاً عبر 6 قطاعات.
      تشير النماذج التنبؤية إلى{" "}
      <span className="text-foreground">+18.5% حجم تسوية</span>{" "}
      خلال أفق خمسة أسابيع قادمة.
    </>
  }
  // ...
/>
```

---

## 📊 تخصيص بطاقات مؤشرات الأداء

### الملف: `components/dashboard/kpi-cards.tsx`

تحتوي البطاقات الأربع على البيانات التالية في مصفوفة `kpis`:

```tsx
const kpis: Kpi[] = [
  {
    label: "Gross Bid Volume",    // ← اسم المؤشر
    value: "428.6",               // ← القيمة الرقمية
    unit: "M",                    // ← الوحدة (اختيارية)
    delta: 12.4,                  // ← نسبة التغيير (موجبة = ارتفاع، سالبة = انخفاض)
    icon: Gavel,                  // ← الأيقونة من مكتبة Lucide
    hint: "vs. prior 30d",        // ← نص توضيحي صغير
    series: [                     // ← بيانات الرسم البياني الصغير (Sparkline)
      { v: 12 }, { v: 18 }, { v: 16 }, // ← كل رقم نقطة على الرسم
      { v: 22 }, { v: 28 }, { v: 26 },
      { v: 34 }, { v: 38 }, { v: 44 },
      { v: 42 }, { v: 52 }, { v: 61 },  // ← آخر رقم = القيمة الأحدث
    ],
  },
  // ... باقي البطاقات
]
```

### خطوات تعديل بطاقة موجودة

**مثال: تغيير بطاقة "Gross Bid Volume" لعرض "إجمالي الإيرادات":**

```tsx
{
  label: "إجمالي الإيرادات",        // ← اسم المؤشر بالعربية
  value: "1,250",                   // ← القيمة الجديدة
  unit: "ألف ريال",                 // ← الوحدة الجديدة
  delta: 8.3,                       // ← نسبة النمو
  icon: TrendingUp,                 // ← أيقونة مختلفة
  hint: "مقارنةً بالشهر الماضي",   // ← توضيح
  series: [10, 15, 13, 18, 22, 20, 28, 35, 38, 42, 45, 50].map(v => ({ v })),
}
```

### قائمة الأيقونات المتاحة

استوردها في أعلى الملف من `lucide-react`:

```tsx
import {
  TrendingUp,      // منحنى صاعد
  TrendingDown,    // منحنى هابط
  Gavel,           // مطرقة المزاد
  Landmark,        // بنك/مؤسسة مالية
  Activity,        // نبضة/نشاط
  DollarSign,      // علامة الدولار
  Users,           // مجموعة مستخدمين
  BarChart,        // رسم بياني
  Package,         // صندوق/أصول
  Factory,         // مصنع
} from "lucide-react"
```

### إضافة بطاقة خامسة

لإضافة بطاقة جديدة، أضف عنصراً جديداً في مصفوفة `kpis`:

```tsx
const kpis: Kpi[] = [
  // ... البطاقات الموجودة (4 بطاقات)
  {
    label: "المؤشر الجديد",
    value: "750",
    unit: "K",
    delta: 5.1,
    icon: DollarSign,
    hint: "توضيح إضافي",
    series: [20, 25, 22, 30, 35, 33, 40, 45, 43, 50, 55, 60].map(v => ({ v })),
  },
]
```

> **ملاحظة:** ستحتاج أيضاً إلى تعديل شبكة العرض إذا أردت خمسة أعمدة:
> ```tsx
> // في دالة KpiCards:
> <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
> ```

---

## 📈 تعديل الرسوم البيانية التنبؤية

### الملف: `components/dashboard/predictive-chart.tsx`

#### فهم بنية البيانات

```tsx
const data = [
  // بيانات تاريخية (الأسابيع الماضية) — actual = القيمة الحقيقية
  { d: "W-12", actual: 184, forecast: null, lo: null, hi: null },
  { d: "W-11", actual: 196, forecast: null, lo: null, hi: null },
  // ... حتى الأسبوع -1

  // نقطة الانتقال (الحاضر) — تبدأ التنبؤات
  { d: "W-1", actual: 342, forecast: 342, lo: 342, hi: 342 },
  { d: "Now",  actual: null, forecast: 356, lo: 338, hi: 374 },

  // التنبؤات المستقبلية — forecast = التوقع، lo = الحد الأدنى، hi = الحد الأعلى
  { d: "W+1", actual: null, forecast: 368, lo: 342, hi: 398 },
  { d: "W+2", actual: null, forecast: 381, lo: 348, hi: 418 },
  // ... حتى W+5
]
```

#### مفتاح القراءة

| الحقل | المعنى |
|-------|--------|
| `d` | التسمية على المحور السيني (الزمن) |
| `actual` | القيمة الفعلية المحققة (خط أبيض) |
| `forecast` | تنبؤ الذكاء الاصطناعي (خط ذهبي منقط) |
| `lo` | الحد الأدنى لنطاق الثقة 95% |
| `hi` | الحد الأعلى لنطاق الثقة 95% |

#### تعديل بيانات التنبؤ — مثال عملي

```tsx
const data = [
  // ← ضع بياناتك التاريخية الفعلية هنا
  { d: "يناير", actual: 500, forecast: null, lo: null, hi: null },
  { d: "فبراير", actual: 620, forecast: null, lo: null, hi: null },
  { d: "مارس",  actual: 710, forecast: null, lo: null, hi: null },
  { d: "إبريل", actual: 680, forecast: null, lo: null, hi: null },
  { d: "مايو",  actual: 750, forecast: 750, lo: 750, hi: 750 },

  // ← أدخل تنبؤاتك المستقبلية
  { d: "يونيو", actual: null, forecast: 820, lo: 780, hi: 860 },
  { d: "يوليو", actual: null, forecast: 900, lo: 840, hi: 960 },
  { d: "أغسطس", actual: null, forecast: 970, lo: 890, hi: 1050 },
]
```

#### تعديل مقاييس الرسم البياني (المحور Y)

```tsx
<YAxis
  // ← عدّل نطاق المحور الرأسي ليناسب بياناتك
  domain={[400, 1200]}         // [الحد الأدنى, الحد الأعلى]
  tickFormatter={(v) => `${v}K`}  // ← تنسيق الأرقام (K = آلاف)
/>
```

#### تعديل البطاقات الإحصائية أسفل عنوان الرسم

```tsx
// ابحث عن هذه المصفوفة في الملف
{[
  { k: "الآن",          v: "$356M",  sub: "مُحقق" },
  { k: "توقع W+5",      v: "$422M",  sub: "+18.5% ثقة 74%" },
  { k: "الانحراف المتوقع", v: "+1.4σ", sub: "اتجاه إيجابي" },
  { k: "خطأ النموذج",   v: "3.2%",   sub: "MAPE, آخر 30 يوم" },
].map(...)}
```

---

## 📋 تعديل إدارة العطاءات

### الملف: `components/dashboard/bid-management.tsx`

#### هيكل بيانات العطاء

```tsx
type Bid = {
  id: string          // ← رقم العطاء (مثل: ATR-7841)
  asset: string       // ← اسم الأصل
  sector: string      // ← القطاع الصناعي
  status: "Live" | "Settling" | "Closing" | "Review"  // ← الحالة
  reserve: number     // ← السعر الاحتياطي (الحد الأدنى للبيع) بالمليون
  leading: number     // ← أعلى عطاء حالي بالمليون
  bidders: number     // ← عدد المتقدمين بعطاءات
  ai: number          // ← احتمالية الفوز (0-100) من الذكاء الاصطناعي
  delta: number       // ← الفرق بين أعلى عطاء والاحتياطي (موجب = فوق الاحتياطي)
  closes: string      // ← وقت الإغلاق (نص حر مثل "02h 41m")
}
```

#### إضافة عطاء جديد

أضف عنصراً جديداً في مصفوفة `bids`:

```tsx
const bids: Bid[] = [
  // ... العطاءات الموجودة
  {
    id: "ATR-7900",
    asset: "مجمع الطاقة الشمسية — 500MW",
    sector: "الطاقة المتجددة",
    status: "Live",
    reserve: 200.0,
    leading: 235.5,
    bidders: 18,
    ai: 79,
    delta: 35.5,
    closes: "3d 12h",
  },
]
```

#### شرح ألوان حالة العطاء

```tsx
const statusStyles = {
  Live:     "bg-primary/10 text-primary border-primary/25",      // ← ذهبي (نشط)
  Settling: "bg-secondary/80 text-foreground/90 border-border/60", // ← رمادي (تسوية)
  Closing:  "bg-secondary/80 text-foreground/90 border-border/60", // ← رمادي (إغلاق)
  Review:   "bg-muted/60 text-muted-foreground border-border/60",  // ← شاحب (مراجعة)
}
```

**لإضافة حالة جديدة (مثلاً "Completed"):**

```tsx
// 1. أضف النوع في التعريف
type Bid = {
  status: "Live" | "Settling" | "Closing" | "Review" | "Completed"
  // ...
}

// 2. أضف اللون في statusStyles
const statusStyles = {
  // ... الحالات الأخرى
  Completed: "bg-green-950/40 text-green-400 border-green-700/40",
}
```

#### تعديل شريط احتمالية الذكاء الاصطناعي (AI Bar)

```tsx
function AIBar({ value }: { value: number }) {
  return (
    <div>
      <div style={{ width: `${value}%` }}
        className={cn(
          "...",
          value >= 70  // ← عتبة "احتمالية عالية" (ذهبي متوهج)
            ? "bg-primary shadow-[0_0_8px_oklch(0.78_0.11_86/0.6)]"
            : value >= 40  // ← عتبة "احتمالية متوسطة" (ذهبي داكن)
              ? "bg-accent"
              : "bg-muted-foreground/60"  // ← احتمالية منخفضة (رمادي)
        )}
      />
    </div>
  )
}

// لتغيير العتبات (مثلاً: 80% للعالية، 50% للمتوسطة):
value >= 80 ? "bg-primary ..." : value >= 50 ? "bg-accent" : "..."
```

---

## 🧭 تخصيص شريط التنقل الجانبي

### الملف: `components/dashboard/sidebar.tsx`

#### تعديل عناصر القائمة الرئيسية

```tsx
const primaryNav = [
  // كل عنصر يحتاج: label (الاسم)، icon (الأيقونة)، href (الرابط)
  { label: "Overview",         icon: LayoutDashboard, href: "/dashboard" },
  { label: "Bid Management",   icon: Gavel,           href: "/dashboard/bids",         badge: "14" },
  { label: "Investor Insights",icon: LineChart,        href: "/dashboard/insights" },
  { label: "Asset Registry",   icon: Factory,          href: "/dashboard/assets" },
  { label: "Counterparties",   icon: Users,            href: "/dashboard/counterparties" },
  { label: "Contracts",        icon: FileText,          href: "/dashboard/contracts" },
]
```

**لتعريب القائمة:**

```tsx
const primaryNav = [
  { label: "نظرة عامة",       icon: LayoutDashboard, href: "/dashboard" },
  { label: "إدارة العطاءات",  icon: Gavel,           href: "/dashboard/bids",         badge: "14" },
  { label: "رؤى المستثمرين", icon: LineChart,        href: "/dashboard/insights" },
  { label: "سجل الأصول",     icon: Factory,          href: "/dashboard/assets" },
  { label: "الأطراف المقابلة",icon: Users,            href: "/dashboard/counterparties" },
  { label: "العقود",          icon: FileText,          href: "/dashboard/contracts" },
]
```

#### إضافة عنصر جديد للقائمة

**الخطوة 1:** استورد الأيقونة المطلوبة:
```tsx
import { Bell } from "lucide-react"  // ← مثال: أيقونة الإشعارات
```

**الخطوة 2:** أضف العنصر للمصفوفة:
```tsx
{ label: "الإشعارات", icon: Bell, href: "/dashboard/notifications", badge: "3" }
// badge هو الرقم الأحمر الصغير على العنصر
```

**الخطوة 3:** أنشئ الصفحة المقابلة:
```bash
# أنشئ مجلداً وملف صفحة
mkdir app/dashboard/notifications
```

ثم أنشئ الملف `app/dashboard/notifications/page.tsx`:
```tsx
export default function NotificationsPage() {
  return (
    <div>
      <h1>الإشعارات</h1>
      {/* محتوى الصفحة */}
    </div>
  )
}
```

#### تعديل بطاقة "Atrium AI" في الشريط الجانبي

```tsx
// ابحث عن هذا القسم في sidebar.tsx
<p className="mt-3 text-[13px] ...">
  {/* ← عدّل النص هنا */}
  3 bids forecast to close{" "}
  <span className="text-primary">above market</span> within 48h.
</p>

// تعريب:
<p className="mt-3 text-[13px] ...">
  3 عطاءات متوقع إغلاقها{" "}
  <span className="text-primary">فوق السوق</span> خلال 48 ساعة.
</p>
```

---

## ➕ دليل إضافة صفحات ومكونات جديدة

### الخطوة 1: إنشاء ملف المكوّن

أنشئ ملفاً جديداً في `components/dashboard/` باسم مناسب، مثلاً `reports.tsx`:

```tsx
// components/dashboard/reports.tsx
"use client"  // ← أضفها إذا كنت ستستخدم useState أو useEffect

export function ReportsPanel() {
  return (
    <div className="overflow-hidden rounded-xl border hairline bg-card/70 p-6">
      <h2 className="font-display text-xl font-light tracking-tight">
        التقارير الدورية
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        تقارير الأداء الشهرية والربع سنوية.
      </p>

      {/* محتوى التقارير */}
    </div>
  )
}
```

### الخطوة 2: إنشاء صفحة المسار

أنشئ مجلداً وصفحة في `app/dashboard/`:

```tsx
// app/dashboard/reports/page.tsx
import { ReportsPanel } from "@/components/dashboard/reports"
import { PageHeader } from "@/components/dashboard/page-header"

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        eyebrow="التقارير · Q2 2026"
        title="التقارير والتحليلات"
        description="استعراض شامل لأداء المحفظة والعطاءات."
      />

      <section className="mt-10">
        <ReportsPanel />
      </section>
    </>
  )
}
```

### الخطوة 3: إضافة الرابط للشريط الجانبي

```tsx
// في components/dashboard/sidebar.tsx
import { FileBarChart } from "lucide-react"

const primaryNav = [
  // ... العناصر الأخرى
  { label: "التقارير", icon: FileBarChart, href: "/dashboard/reports" },
]
```

### استخدام الفئات CSS المُعرَّفة مسبقاً

المشروع يوفر هذه الفئات الجاهزة التي يمكنك استخدامها في أي مكوّن:

```css
/* تأثير الزجاج الشفاف */
className="glass"

/* توهج فاخر للخلفية */
className="luxe-glow"

/* حدود رفيعة */
className="hairline"

/* شريط تمرير رفيع */
className="thin-scroll"
```

**مثال استخدام:**
```tsx
<div className="glass rounded-xl p-6">
  {/* محتوى ذو تأثير زجاجي */}
</div>
```

---

## 🔐 إضافة نظام المصادقة

المشروع مصمم ليكون جاهزاً لإضافة المصادقة بسهولة عبر Next.js Middleware.

### الخطوة 1: إنشاء ملف Middleware

أنشئ ملف `middleware.ts` في جذر المشروع (بجانب `package.json`):

```typescript
// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // تحقق من وجود جلسة مستخدم (Cookie أو Token)
  const isLoggedIn = request.cookies.get("session-token")

  // إذا كان المستخدم يحاول الوصول للوحة التحكم وغير مسجّل
  if (request.nextUrl.pathname.startsWith("/dashboard") && !isLoggedIn) {
    // أعد توجيهه لصفحة تسجيل الدخول
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

// حدّد المسارات التي يطبق عليها الـ Middleware
export const config = {
  matcher: ["/dashboard/:path*"],
}
```

### الخطوة 2: إنشاء صفحة تسجيل الدخول

```tsx
// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass rounded-xl p-8 w-full max-w-md">
        <h1 className="font-display text-2xl font-light">تسجيل الدخول</h1>
        <form>
          {/* نموذج تسجيل الدخول */}
        </form>
      </div>
    </div>
  )
}
```

---

## 🌍 النشر على الإنترنت

### النشر على Vercel (الأسهل والأسرع)

**الطريقة الأولى: عبر واجهة Vercel**

1. اذهب إلى [vercel.com](https://vercel.com) وسجّل دخولك
2. اضغط **"Add New Project"**
3. اربط مستودع GitHub الخاص بك
4. اضغط **"Deploy"** — سيتم البناء والنشر تلقائياً

**الطريقة الثانية: عبر سطر الأوامر**

```bash
# تثبيت Vercel CLI
npm install -g vercel

# تسجيل الدخول
vercel login

# النشر (من داخل مجلد المشروع)
vercel

# النشر للإنتاج
vercel --prod
```

### بناء نسخة الإنتاج محلياً

```bash
# بناء المشروع
pnpm build
# أو
npm run build

# تشغيل نسخة الإنتاج
pnpm start
# أو
npm start
```

---

## ❓ الأسئلة الشائعة وحل المشكلات

### مشكلة: `Error: Cannot find module '@/components/...'`

**السبب:** مسار الاستيراد خاطئ أو الملف غير موجود.

**الحل:**
```bash
# تحقق من أن الملف موجود
ls components/dashboard/

# تأكد من إعدادات tsconfig.json
# يجب أن يحتوي على:
# "paths": { "@/*": ["./*"] }
```

### مشكلة: `Error: Module not found: Can't resolve 'recharts'`

**السبب:** لم يتم تثبيت الحزم.

**الحل:**
```bash
pnpm install
# أو
npm install
```

### مشكلة: الصفحة لا تتحدث بعد التعديل

**السبب:** خادم التطوير لم يلتقط التغيير.

**الحل:**
```bash
# أوقف الخادم (Ctrl+C) ثم أعد تشغيله
pnpm dev
```

### مشكلة: `TypeError: Cannot read properties of undefined`

**السبب:** البيانات التي تمررها للمكوّن غير مكتملة.

**الحل:** تأكد من أن جميع الحقول المطلوبة موجودة. مثلاً، في بطاقات KPI يجب أن يكون لكل عنصر في `series` حقل `v`.

### مشكلة: الخطوط لا تظهر بشكل صحيح

**السبب:** قد يكون اتصال الإنترنت مقطوعاً (الخطوط تُحمَّل من Google).

**الحل:** يمكن تحميل الخطوط وتضمينها محلياً، أو المتابعة بعد توفر الاتصال.

### مشكلة: تعارض في إصدارات الحزم (`peer dependency`)

**الحل:**
```bash
# احذف مجلد node_modules وأعد التثبيت
rm -rf node_modules
pnpm install
# أو
npm install --legacy-peer-deps
```

### نصيحة: استخدام VS Code مع هذا المشروع

يُوصى بتثبيت هذه الإضافات:
- **Tailwind CSS IntelliSense** — إكمال تلقائي لفئات Tailwind
- **ESLint** — تنبيهات الأخطاء البرمجية
- **Prettier** — تنسيق الكود تلقائياً
- **TypeScript** — دعم أفضل للغة TypeScript

---

## 📞 ملاحظات ختامية

- جميع المكونات مبنية بنمط **مفصولة ومستقلة** — يمكن تعديل أي منها دون التأثير على الآخرين.
- البيانات الحالية هي **بيانات تجريبية (mock data)** — في التطبيق الحقيقي يجب ربطها بواجهة برمجية (API).
- النظام مصمم ليكون **متوافقاً مع الأجهزة المختلفة** (Responsive Design) ويعمل على الجوال والحاسوب.
- للاستفسارات التقنية، يمكن مراجعة **توثيق Next.js** على [nextjs.org/docs](https://nextjs.org/docs) وتوثيق **Tailwind CSS** على [tailwindcss.com/docs](https://tailwindcss.com/docs).

---

*📄 هذا التوثيق شامل ومحدّث لآخر إصدار من المشروع. آخر تحديث: مايو 2026.*
