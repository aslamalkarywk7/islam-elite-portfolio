# 🏗️ الهيكلية التقنية لنظام Atrium Industrial OS

> **الإصدار:** 4.2.1 | **آخر تحديث:** مايو 2026

---

## جدول المحتويات

1. [التوجه المعماري العام](#-التوجه-المعماري-العام)
2. [محرك التصميم البصري والهوية](#-محرك-التصميم-البصري-والهوية)
3. [هيكلية المكونات](#-هيكلية-المكونات)
4. [نظام التوجيه والصفحات](#-نظام-التوجيه-والصفحات)
5. [طبقة البيانات والحالة](#-طبقة-البيانات-والحالة)
6. [نقاط التكامل والتوسعة](#-نقاط-التكامل-والتوسعة)
7. [الأداء والتحسينات](#-الأداء-والتحسينات)
8. [معايير الأمان والامتثال](#-معايير-الأمان-والامتثال)

---

## 🎯 التوجه المعماري العام

### النهج الهجين (Hybrid Approach)

يعتمد النظام على نهج **هجين** يجمع بين:

```
┌─────────────────────────────────────────────────────────┐
│                   Next.js App Router                     │
├─────────────────────────┬───────────────────────────────┤
│   صفحة الهبوط (/)       │    لوحة التحكم (/dashboard)   │
│                         │                               │
│  React Server Components│   React Client Components     │
│  ─────────────────────  │   ──────────────────────────  │
│  • أداء عالٍ جداً        │   • تفاعلية كاملة             │
│  • SEO مثالي             │   • حالة ديناميكية            │
│  • تحميل أول سريع        │   • رسوم بيانية حية           │
│  • لا JavaScript زائد   │   • تحديثات فورية             │
└─────────────────────────┴───────────────────────────────┘
```

### دور Next.js App Router

هو العمود الفقري للتطبيق بأكمله:

| الوظيفة | التفاصيل |
|---------|---------|
| **Server Components** | تُصيَّر صفحة الهبوط على الخادم للسرعة القصوى |
| **Client Components** | لوحة التحكم والمخططات تعمل على المتصفح |
| **Layout Nesting** | تخطيطات متداخلة (Root → Dashboard) |
| **File-based Routing** | كل مجلد في `/app` يُنشئ مساراً تلقائياً |
| **Metadata API** | إدارة SEO مركزية في كل صفحة |

---

## 🎨 محرك التصميم البصري والهوية

### نظام الألوان — OKLCH

يعتمد التصميم على نموذج **OKLCH** الحديث بدلاً من HEX/RGB التقليدي لأنه:
- يوفر **تدرجات متسقة إدراكياً** (perceptually uniform)
- يُمكّن التحكم الدقيق في الإضاءة بمعزل عن التشبع
- أفضل نتائج في الوضعين الفاتح والداكن

```css
/* نموذج: اللون الذهبي المطفأ الرئيسي */
--primary: oklch(0.78 0.11 86);
/*         ↑ الإضاءة  ↑ التشبع  ↑ الهيو (ذهبي) */

/* نموذج: الخلفية الفحمية الداكنة */
--background: oklch(0.16 0.006 60);
/*             ↑ داكن جداً  ↑ كروما خفيفة  ↑ دافئ قليلاً */
```

### التأثيرات البصرية الأساسية

#### 1. الإضاءة الفاخرة المحيطة (Ambient Luxe Lighting)
```css
.luxe-glow {
  background:
    /* توهج ذهبي في الزاوية العليا اليمنى */
    radial-gradient(60% 50% at 85% 0%, oklch(0.78 0.11 86 / 0.08) 0%, transparent 60%),
    /* توهج ثانوي في الزاوية السفلى اليسرى */
    radial-gradient(40% 40% at 10% 100%, oklch(0.78 0.11 86 / 0.05) 0%, transparent 60%);
}
```
**الغرض:** إضفاء عمق بصري وإحساس بالإضاءة الثلاثية الأبعاد على البطاقات والأقسام الرئيسية.

#### 2. تأثير الزجاج (Glassmorphism)
```css
.glass {
  background: linear-gradient(180deg,
    oklch(0.24 0.008 60 / 0.6) 0%,   /* طبقة علوية شبه شفافة */
    oklch(0.2 0.008 60 / 0.4) 100%   /* طبقة سفلية أكثر شفافية */
  );
  backdrop-filter: blur(14px) saturate(140%);  /* ضبابية الزجاج */
  border: 1px solid oklch(0.32 0.008 60 / 0.6); /* حدود هشّة */
  box-shadow:
    0 1px 0 0 oklch(1 0 0 / 0.03) inset,     /* وميض علوي داخلي */
    0 30px 60px -20px oklch(0 0 0 / 0.5);     /* ظل سفلي عميق */
}
```

#### 3. الطباعة المزدوجة (Dual Typography System)

| النوع | الخط | الاستخدام |
|-------|------|-----------|
| **Display** | Geist (Light/Regular) | عناوين رئيسية، أرقام كبيرة |
| **Mono** | Geist Mono | بيانات، أرقام، أكواد، تسميات |
| **Sans** | Geist | النصوص العادية والواجهة |

هذا المزج يحاكي بصرياً واجهات محطات التداول (Trading Terminals) وأنظمة إدارة البنية التحتية.

---

## 🧩 هيكلية المكونات

### طبقات المكونات

```
components/
│
├── marketing/                 ← طبقة التسويق والإقناع
│   ├── site-nav.tsx           ← التنقل الرئيسي لصفحة الهبوط
│   └── hero-preview.tsx       ← عرض مرئي لنظام لوحة التحكم
│
├── dashboard/                 ← طبقة التطبيق الداخلي
│   ├── sidebar.tsx            ← شريط التنقل الجانبي (مثبت)
│   ├── topbar.tsx             ← شريط الإجراءات العلوي
│   ├── page-header.tsx        ← رأس الصفحة + مؤشر السوق + التذييل
│   ├── kpi-cards.tsx          ← 4 بطاقات مؤشرات مع Sparklines
│   ├── predictive-chart.tsx   ← مخطط تنبؤي بنطاق ثقة 95%
│   ├── bid-management.tsx     ← جدول العطاءات مع تقييم AI
│   └── investor-insights.tsx  ← ملخص المستثمرين النشطين
│
├── ui/                        ← طبقة Radix UI المخصصة
│   └── [مكونات shadcn/ui]     ← أزرار، نوافذ، قوائم، إلخ
│
└── theme-provider.tsx         ← سياق الثيم العام
```

### مخطط تدفق المكونات في لوحة التحكم

```
app/dashboard/layout.tsx
        │
        ├── <Sidebar />          ← ثابت يسار الشاشة
        ├── <Topbar />           ← ثابت أعلى المحتوى
        └── {children}           ← محتوى الصفحة يتغير
                │
                └── app/dashboard/page.tsx
                        │
                        ├── <PageHeader />
                        │     ├── <MarketsPill />    (مؤشر "Markets · Open")
                        │     └── أزرار الإجراءات
                        │
                        ├── <KpiCards />             (4 بطاقات)
                        │
                        ├── <PredictiveChart />      (2/3 العرض)
                        ├── <InvestorInsights />     (1/3 العرض)
                        │
                        ├── <BidManagement />
                        └── <DashboardFooter />
```

### أنماط المكونات المستخدمة

#### النمط 1: مكوّن خادم بسيط (Server Component)
```tsx
// لا تحتاج "use client" — تُصيَّر على الخادم
export function PageHeader({ eyebrow, title, description, actions }) {
  return <section>...</section>
}
```

#### النمط 2: مكوّن عميل تفاعلي (Client Component)
```tsx
"use client"  // ← ضرورية للوصول إلى الحالة والمتصفح

import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()  // ← يقرأ المسار الحالي
  // ...
}
```

#### النمط 3: مكوّن بيانات ثابتة (Static Data Component)
```tsx
// البيانات مُعرَّفة مباشرة كثوابت TypeScript
// في التطبيق الحقيقي، تُستبدل بنداءات API
const bids: Bid[] = [
  { id: "ATR-7841", asset: "...", status: "Live", ... },
]
```

---

## 🗺️ نظام التوجيه والصفحات

### خريطة المسارات

```
/ (Root)
├── /                           صفحة الهبوط الرئيسية
│
└── /dashboard
    ├── /dashboard              النظرة العامة (Overview)
    ├── /dashboard/bids         إدارة العطاءات
    ├── /dashboard/insights     رؤى المستثمرين
    ├── /dashboard/assets       سجل الأصول
    ├── /dashboard/counterparties الأطراف المقابلة
    └── /dashboard/contracts    العقود
```

### إستراتيجية التخطيط (Layout Strategy)

```
app/layout.tsx              ← يُطبّق على كل الصفحات
│  (الخطوط + globals.css + Analytics)
│
├── app/page.tsx            ← صفحة الهبوط (مستقلة تماماً)
│
└── app/dashboard/layout.tsx ← يُطبّق على /dashboard/* فقط
    │  (Sidebar + Topbar + التغليف)
    │
    ├── app/dashboard/page.tsx
    ├── app/dashboard/bids/page.tsx
    └── ...
```

---

## 💾 طبقة البيانات والحالة

### الوضع الحالي — بيانات تجريبية (Mock Data)

جميع البيانات مُعرَّفة كثوابت TypeScript مباشرة في المكونات:

```tsx
// components/dashboard/bid-management.tsx
const bids: Bid[] = [
  { id: "ATR-7841", asset: "Meridian Heavy Equipment Lot 12", ... }
]

// components/dashboard/predictive-chart.tsx
const data = [
  { d: "W-12", actual: 184, forecast: null, lo: null, hi: null },
  { d: "Now",  actual: null, forecast: 356, lo: 338, hi: 374 },
]

// components/dashboard/kpi-cards.tsx
const kpis: Kpi[] = [
  { label: "Gross Bid Volume", value: "428.6", delta: 12.4, ... }
]
```

### خطة ربط البيانات الحقيقية

عند الاتصال بـ API حقيقي، الخطوات المقترحة:

```
المرحلة 1: Server Actions (Next.js)
───────────────────────────────────
app/dashboard/page.tsx يصبح:
  async function OverviewPage() {
    const kpis = await fetchKpis()        // جلب من API
    const bids = await fetchLiveBids()    // جلب العطاءات
    return <KpiCards data={kpis} />
  }

المرحلة 2: SWR / React Query (للتحديث اللحظي)
────────────────────────────────────────────────
"use client"
const { data: bids } = useSWR('/api/bids', fetcher, {
  refreshInterval: 5000  // تحديث كل 5 ثوانٍ
})

المرحلة 3: WebSockets (للبيانات اللحظية الحقيقية)
───────────────────────────────────────────────────
useEffect(() => {
  const ws = new WebSocket('wss://api.atrium.io/bids')
  ws.onmessage = (event) => setBids(JSON.parse(event.data))
}, [])
```

---

## 🔌 نقاط التكامل والتوسعة

### 1. إضافة مصادقة (Authentication)

النظام جاهز لإضافة المصادقة عبر `middleware.ts`:

```typescript
// middleware.ts (في جذر المشروع)
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")

  if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"]
}
```

**مزودو المصادقة الموصى بهم:**
- **NextAuth.js** — للمصادقة الاجتماعية (Google, GitHub)
- **Clerk** — حل متكامل جاهز
- **Supabase Auth** — مع قاعدة بيانات مدمجة

### 2. إضافة قاعدة بيانات

```typescript
// مثال: استخدام Prisma مع PostgreSQL
// lib/db.ts
import { PrismaClient } from '@prisma/client'
export const db = new PrismaClient()

// في Server Component:
const bids = await db.bid.findMany({
  where: { status: "Live" },
  orderBy: { aiScore: "desc" }
})
```

### 3. ربط بيانات حية (Real-time Data)

```
الخيار 1: Supabase Realtime
  → سهل الربط، بنية تحتية جاهزة

الخيار 2: Pusher / Ably
  → مخصص للبث اللحظي، موثوق في المؤسسات

الخيار 3: WebSockets مباشر
  → أقصى تحكم، يتطلب خادماً مخصصاً
```

### 4. إضافة صفحة جديدة

```
الخطوة 1: أنشئ المجلد والصفحة
  app/dashboard/reports/page.tsx

الخطوة 2: أضف المكوّن
  components/dashboard/reports-panel.tsx

الخطوة 3: أضف الرابط في الشريط الجانبي
  components/dashboard/sidebar.tsx → primaryNav[]
```

---

## ⚡ الأداء والتحسينات

### إستراتيجيات الأداء المُطبَّقة

| الإستراتيجية | التفاصيل |
|-------------|---------|
| **Server Components** | صفحة الهبوط لا ترسل JavaScript للمتصفح |
| **Font Optimization** | `display: "swap"` لمنع وميض النص |
| **Backdrop Filter** | `backdrop-blur` بدل صور الخلفية الثقيلة |
| **SVG Icons** | Lucide يُصدِّر فقط الأيقونات المستخدمة (Tree Shaking) |
| **Tailwind Purge** | Tailwind v4 يُزيل الفئات غير المستخدمة تلقائياً |

### قياسات الأداء المستهدفة

```
First Contentful Paint (FCP):   < 1.2 ثانية
Largest Contentful Paint (LCP): < 2.5 ثانية
Cumulative Layout Shift (CLS):  < 0.1
Time to Interactive (TTI):      < 3.8 ثانية
```

### تحسينات مقترحة للإنتاج

```typescript
// 1. ضغط الصور التلقائي
// في next.config.mjs
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
  }
}

// 2. التخزين المؤقت للبيانات
// في Server Component
const data = await fetch('/api/kpis', {
  next: { revalidate: 60 }  // إعادة التحقق كل دقيقة
})
```

---

## 🔒 معايير الأمان والامتثال

### طبقات الأمان المُخطط لها

```
┌─────────────────────────────────────────┐
│         طبقة الشبكة (CDN / WAF)         │
│  Vercel Edge Network + DDoS Protection  │
├─────────────────────────────────────────┤
│        طبقة التطبيق (Middleware)        │
│  JWT Validation + Rate Limiting         │
├─────────────────────────────────────────┤
│        طبقة البيانات (API)             │
│  Row Level Security + Audit Logs        │
└─────────────────────────────────────────┘
```

### الامتثال للمعايير

| المعيار | الحالة | الملاحظات |
|---------|--------|-----------|
| **SOC 2 Type II** | جاهز معمارياً | يحتاج تدقيقاً خارجياً |
| **ISO 27001** | جاهز معمارياً | يحتاج سياسات موثقة |
| **GDPR** | يحتاج تنفيذاً | إضافة سياسة الخصوصية وإدارة الموافقة |
| **WCAG 2.1 AA** | جزئي | Radix UI يوفر إمكانية الوصول الأساسية |

### ميزة Lattice Cipher

المفهوم التصميمي المُطبَّق في الواجهة يُوحي بـ:
- **تشفير التنبؤ الإشباعي** — خوارزميات التشفير المبنية على الشبكات الكمية
- **بصمة أمانية قوية** — تُقنع الجهات المؤسسية بمستوى الحماية
- **في الواجهة:** عناصر الشبكة المتقاطعة في تصميم صفحة الهبوط

---

## 📐 قرارات التصميم الهندسي الرئيسية

### لماذا Next.js App Router بدلاً من Pages Router؟

| السبب | التفصيل |
|-------|---------|
| **Server Components** | صفحات الهبوط لا تحتاج JavaScript على العميل |
| **Nested Layouts** | تخطيط Dashboard مستقل عن تخطيط الهبوط |
| **Streaming** | دعم تحميل تدريجي للمحتوى |
| **مستقبل Next.js** | App Router هو المسار الرسمي الجديد |

### لماذا Tailwind CSS v4 بدلاً من CSS-in-JS؟

| السبب | التفصيل |
|-------|---------|
| **الأداء** | لا وقت تحميل إضافي في Runtime |
| **التوافق مع Server Components** | لا مشاكل مع CSS-in-JS في بيئة الخادم |
| **OKLCH Native** | v4 يدعم OKLCH بشكل مباشر |
| **حجم أصغر** | Purging تلقائي أفضل |

### لماذا Radix UI بدلاً من مكونات مخصصة بالكامل؟

| السبب | التفصيل |
|-------|---------|
| **إمكانية الوصول** | ARIA attributes جاهزة لكل مكوّن |
| **إدارة التركيز** | Keyboard navigation تلقائية |
| **بدون نمط** | نمط كامل عبر Tailwind مع احتفاظ الوظائف |

---

*📄 هذا المستند يعكس الهيكلية التقنية الحالية للنظام — الإصدار 4.2.1 — مايو 2026*
