# الهيكلية التقنية لمشروع أجماس (Technical Architecture)

<div dir="rtl">

> هذه الوثيقة موجهة للفرق التقنية والمطورين والمشترين المحتملين الراغبين في فهم جودة الكود، وقابليته للتوسع، وأفضل الممارسات المتبعة في بناء المنصة.

---

## فهرس المحتويات

1. [التوجه المعماري](#-1-التوجه-المعماري)
2. [هيكلية المجلدات](#-2-هيكلية-المجلدات)
3. [طبقة البيانات](#-3-طبقة-البيانات-وإدارتها)
4. [واجهات البرمجة (API)](#-4-واجهات-برمجة-التطبيقات)
5. [واجهة المستخدم وتجربته](#-5-واجهة-المستخدم-وتجربته)
6. [إدارة الحالة](#-6-إدارة-الحالة-state-management)
7. [الأداء وتحسين محركات البحث](#-7-الأداء-وتحسين-محركات-البحث)
8. [نظام التصميم](#-8-نظام-التصميم-design-system)
9. [الأمان وأفضل الممارسات](#-9-الأمان-وأفضل-الممارسات)
10. [خارطة التطوير المستقبلي](#-10-خارطة-التطوير-المستقبلي)

---

## 🏗️ 1. التوجه المعماري

### نموذج Server-First مع Next.js App Router

تم بناء المشروع باستخدام **Next.js 16 App Router**، وهو أحدث نموذج معماري لتطبيقات React يعتمد على:

```
┌─────────────────────────────────────────────────────┐
│                   المتصفح (Browser)                  │
│  ┌──────────────────────────────────────────────┐   │
│  │          React Client Components             │   │
│  │   (التفاعلية: useState, useEffect, Events)   │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
                        ↕ HTTP/WebSocket
┌─────────────────────────────────────────────────────┐
│                    الخادم (Server)                   │
│  ┌──────────────────────────────────────────────┐   │
│  │         React Server Components (RSC)        │   │
│  │     (الإحضار الثابت، SEO، لا JavaScript)     │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │            API Routes (Next.js)              │   │
│  │      /api/register   /api/contact            │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### المبادئ المعمارية المتبعة

| المبدأ | التطبيق في المشروع |
|--------|---------------------|
| **Component-Based Architecture** | كل قسم من الصفحة = مكوّن مستقل قابل لإعادة الاستخدام |
| **Separation of Concerns** | البيانات في `lib/`، المكونات في `components/`، المنطق في `app/api/` |
| **TypeScript Strict Mode** | أنواع بيانات صارمة تمنع الأخطاء في وقت التطوير |
| **Colocation** | كل ملف `page.tsx` بجانب مكوناته ذات الصلة |
| **Progressive Enhancement** | يعمل بدون JavaScript (SSR)، ثم يُعزَّز بالتفاعلية |

---

## 📁 2. هيكلية المجلدات

تنظيم الملفات يتبع أفضل الممارسات الموصى بها في مجتمع Next.js:

```
industrial-marketplace-platform/
│
├── app/                          ← Next.js App Router (جذر المسارات)
│   │
│   ├── api/                      ← Backend API Routes
│   │   ├── contact/
│   │   │   └── route.ts          ← POST /api/contact
│   │   └── register/
│   │       └── route.ts          ← POST /api/register
│   │
│   ├── industrial/               ← مسار /industrial
│   │   └── page.tsx              ← الصفحة الرئيسية للمنصة
│   │
│   ├── globals.css               ← المتغيرات والأنماط العامة
│   ├── layout.tsx                ← Root Layout (HTML, Fonts, Analytics)
│   └── page.tsx                  ← مسار / (إعادة توجيه)
│
├── components/
│   ├── site/                     ← مكونات الأعمال (Business Components)
│   │   ├── actions-context.tsx   ← Context Provider للحالة المشتركة
│   │   ├── contact-dialog.tsx    ← نموذج التواصل (Dialog + Form)
│   │   ├── cta.tsx               ← Call to Action Section
│   │   ├── faq.tsx               ← Accordion FAQ Section
│   │   ├── footer.tsx            ← Site Footer
│   │   ├── header.tsx            ← Navigation Header (Sticky + Mobile)
│   │   ├── hero.tsx              ← Landing Hero Section
│   │   ├── journey.tsx           ← Industrial Cities Interactive Section
│   │   ├── logo.tsx              ← SVG Logo Component
│   │   ├── mission.tsx           ← Mission & Vision Section
│   │   ├── partners.tsx          ← User Types / Partners Section
│   │   ├── register-dialog.tsx   ← Multi-Role Registration Form
│   │   ├── sectors.tsx           ← Industrial Sectors Grid
│   │   ├── stats.tsx             ← KPI Statistics Section
│   │   ├── vision.tsx            ← Strategic Vision Section
│   │   └── whatsapp-fab.tsx      ← Floating WhatsApp Button
│   │
│   ├── ui/                       ← Shadcn UI Primitives (لا تعدّل مباشرة)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   │
│   └── theme-provider.tsx        ← next-themes Dark/Light Provider
│
├── lib/
│   ├── industrial-data.ts        ← Single Source of Truth للبيانات
│   └── utils.ts                  ← cn() helper (clsx + tailwind-merge)
│
├── hooks/                        ← Custom React Hooks
├── public/                       ← Static Assets
│   ├── cities/                   ← صور المدن الصناعية
│   ├── sectors/                  ← صور القطاعات
│   └── favicon.svg
├── styles/                       ← CSS Modules إضافية
│
├── components.json               ← إعدادات Shadcn CLI
├── next.config.mjs               ← إعدادات Next.js
├── package.json                  ← تعريف المشروع
├── postcss.config.mjs            ← Tailwind CSS PostCSS
└── tsconfig.json                 ← TypeScript Configuration
```

---

## 🗄️ 3. طبقة البيانات وإدارتها

### نموذج البيانات الحالي (Static Data Layer)

يعتمد المشروع حالياً على ملف بيانات ثابت واحد:

```
lib/industrial-data.ts
│
├── Type: City          ← نوع بيانات المدينة الصناعية
├── cities[]            ← 7 مدن صناعية مغربية
│
├── Type: Sector        ← نوع بيانات القطاع الصناعي
├── sectors[]           ← 6 قطاعات استراتيجية
│
├── Type: Partner       ← نوع بيانات أنواع المستخدمين
├── partners[]          ← 6 أنواع من الشركاء/المستخدمين
│
├── Type: Faq           ← نوع بيانات الأسئلة الشائعة
└── faqs[]              ← 6 أسئلة متخصصة
```

### تعريفات الأنواع (TypeScript Types)

```typescript
// نوع بيانات المدينة الصناعية
type City = {
  id: string          // معرّف فريد (slug)
  name: string        // الاسم بالعربية
  subtitle: string    // عنوان فرعي
  region: string      // اسم الجهة
  image: string       // مسار الصورة
  investment: string  // حجم الاستثمار (مليار درهم)
  employees: string   // عدد الموظفين
  factories: string   // عدد المصانع
  growth: string      // نسبة النمو السنوي %
  tag: string         // تصنيف/وسم المدينة
  description: string // وصف مختصر
}

// نوع بيانات القطاع الصناعي
type Sector = {
  id: string
  title: string           // الاسم بالعربية
  titleEn: string         // الاسم بالإنجليزية
  description: string
  image: string
  growth: string          // نسبة النمو (+22%)
  investment: string      // حجم الاستثمار (110B)
  employees: string       // عدد العمال (220K)
  factories: string       // عدد المصانع
  subSectors: string[]    // القطاعات الفرعية (4 عناصر)
}

// نوع بيانات أنواع المستخدمين
type Partner = {
  id: string
  title: string
  subtitle: string            // الاسم بالإنجليزية
  count: string               // العدد (+2,500)
  countLabel: string          // الوحدة (مستثمر)
  description: string
  icon: "factory" | "handshake" | "graduation" | "users" | "link" | "globe"
  featured?: boolean          // يُبرز في الواجهة
}

// نوع بيانات الأسئلة الشائعة
type Faq = {
  id: string
  question: string
  answer: string
  benefits: string[]  // 3 مزايا رئيسية
  steps: string[]     // 4 خطوات
}
```

### استراتيجية التطوير المستقبلي للبيانات

```
المرحلة الحالية:    lib/industrial-data.ts (Static JSON-like)
         ↓
المرحلة التالية:    API Routes + PostgreSQL (عبر Prisma ORM)
         ↓
المرحلة المتقدمة:   Microservices + Redis Cache + CDN
```

**مزايا الهيكل الحالي:**
- 🚀 لا حاجة لقاعدة بيانات في التطوير المبكر
- ⚡ أداء فائق (البيانات مُضمّنة في الـ Bundle)
- 🔒 لا متطلبات أمنية لقاعدة بيانات
- 🛠️ سهولة التعديل والتخصيص

---

## 🔌 4. واجهات برمجة التطبيقات

### نقاط الوصول (API Endpoints)

```
POST /api/register
├── الوصف:    استقبال طلبات التسجيل لجميع الأدوار
├── الجسم:    { name, email, phone, role, ...roleSpecificFields }
├── الاستجابة: { success: true, referenceId: "REF-xxx" }
└── الأدوار:  investor | expert | supplier | supervisor | service

POST /api/contact
├── الوصف:    معالجة رسائل التواصل من المستخدمين
├── الجسم:    { name, email, phone, message, subject }
└── الاستجابة: { success: true, message: "تم الإرسال" }
```

### بنية API Route النموذجية

```typescript
// نمط: app/api/[endpoint]/route.ts
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// مخطط التحقق باستخدام Zod
const RegisterSchema = z.object({
  name: z.string().min(2, "الاسم قصير جداً"),
  email: z.string().email("بريد إلكتروني غير صالح"),
  phone: z.string().min(10, "رقم الهاتف غير صالح"),
  role: z.enum(["investor", "expert", "supplier", "supervisor", "service"]),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // التحقق من صحة البيانات
    const validated = RegisterSchema.parse(body)

    // معالجة البيانات (حالياً: محاكاة)
    const referenceId = `REF-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`

    return NextResponse.json({
      success: true,
      referenceId,
      message: "تم استلام طلبك بنجاح. سيتواصل معك فريقنا خلال 24 ساعة.",
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { success: false, message: "خطأ داخلي في الخادم" },
      { status: 500 }
    )
  }
}
```

---

## 🎨 5. واجهة المستخدم وتجربته

### مكتبة المكونات: Radix UI + Shadcn UI

```
@radix-ui/*         ← المكونات الأولية (Primitives) غير مُصمَّمة
        ↓
  Shadcn UI         ← طبقة التصميم فوق Radix (Tailwind-based)
        ↓
 components/ui/*    ← نسخ مُخصَّصة جاهزة للاستخدام في المشروع
```

**المكونات المستخدمة من Shadcn:**

| المكوّن | الاستخدام في المنصة |
|---------|---------------------|
| `Button` | جميع أزرار الإجراءات |
| `Dialog` | نوافذ التسجيل والتواصل المنبثقة |
| `Card` | بطاقات المدن والقطاعات والشركاء |
| `Accordion` | قسم الأسئلة الشائعة |
| `Tabs` | قوائم التصفية والتبويب |
| `Select` | اختيار الدور عند التسجيل |
| `Input` / `Label` | حقول النماذج |
| `Badge` | وسوم المدن والقطاعات |
| `Separator` | فواصل الأقسام |
| `Tooltip` | تلميحات على الأيقونات |

### دعم RTL (Right-to-Left) العربي

```html
<!-- app/layout.tsx -->
<html lang="ar" dir="rtl" className="...">
  <!-- يُطبِّق RTL تلقائياً على الـ Tailwind utilities -->
  <!-- مثال: ms-4 = margin-inline-start: 1rem (في RTL = margin-right) -->
  <!-- مثال: ps-6 = padding-inline-start: 1.5rem -->
</html>
```

**تقنيات Tailwind المستخدمة للـ RTL:**

```tsx
// بدلاً من ml-/mr-, استخدم ms-/me-
className="ms-4"   // margin-start (يتكيف تلقائياً مع RTL/LTR)
className="pe-6"   // padding-end

// بدلاً من left-/right-, استخدم start-/end-
className="start-0 end-auto"
```

---

## ⚙️ 6. إدارة الحالة (State Management)

### هرمية إدارة الحالة

```
أعلى مستوى: ActionsContext (context/actions-context.tsx)
│   ├── isRegisterOpen: boolean      ← هل نافذة التسجيل مفتوحة؟
│   ├── isContactOpen: boolean       ← هل نافذة التواصل مفتوحة؟
│   ├── openRegister()               ← فتح نافذة التسجيل
│   ├── closeRegister()              ← إغلاق نافذة التسجيل
│   ├── openContact()                ← فتح نافذة التواصل
│   └── closeContact()               ← إغلاق نافذة التواصل
│
مستوى المكوّن: useState / useEffect
│   ├── hero.tsx: [activeCity, setActiveCity]    ← المدينة المحددة
│   ├── sectors.tsx: [activeSector, setSector]   ← القطاع المحدد
│   ├── register-dialog.tsx: [step, formData]    ← خطوة التسجيل
│   └── contact-dialog.tsx: [isLoading, error]   ← حالة الإرسال
│
مستوى الثيم: next-themes (ThemeProvider)
    └── theme: "light" | "dark" | "system"
```

### مثال استخدام ActionsContext

```tsx
// في أي مكوّن يريد فتح نافذة التسجيل:
"use client"
import { useActions } from "@/components/site/actions-context"

export function HeroSection() {
  const { openRegister } = useActions()

  return (
    <Button onClick={openRegister}>
      سجّل الآن كمستثمر
    </Button>
  )
}
```

---

## ⚡ 7. الأداء وتحسين محركات البحث

### مؤشرات الأداء الأساسية (Core Web Vitals)

| المؤشر | الهدف | الحل المُطبَّق |
|--------|--------|----------------|
| **LCP** (Largest Contentful Paint) | < 2.5 ثانية | `next/image` + تحسين الصور |
| **CLS** (Cumulative Layout Shift) | < 0.1 | `next/font` بـ `display: swap` |
| **FID/INP** (Interaction to Next Paint) | < 200ms | Server Components + Lazy Loading |

### تحسين الخطوط (Font Optimization)

```typescript
// app/layout.tsx — تحميل محلي كامل (لا CDN)
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",       // ← يمنع FOIT (Flash of Invisible Text)
})
```

**الفائدة:** تقليل CLS بنسبة 100% مقارنة بـ CDN imports، وتوفير طلب HTTP إضافي.

### تحسين الصور

```tsx
// استخدام next/image بدلاً من <img> العادي
import Image from "next/image"

<Image
  src="/cities/tanger-med.jpg"
  alt="طنجة المتوسط"
  width={800}
  height={600}
  priority         // ← للصور في نطاق العرض المباشر (LCP)
  className="object-cover"
/>
```

**الفوائد التلقائية:**
- ضغط الصور تلقائياً (WebP/AVIF)
- تحديد الحجم المناسب لكل جهاز
- التحميل الكسول للصور خارج النطاق المرئي

### SEO والبيانات الوصفية

```typescript
// app/layout.tsx — Metadata عالمية
export const metadata: Metadata = {
  title: "أجماس | منصة الاستثمار الصناعي المغربي",
  description: "منصة رقمية متكاملة تربط المستثمرين بالخبراء والموردين...",
  // ← يمكن التوسع بـ openGraph, twitter, robots, etc.
}
```

---

## 🎨 8. نظام التصميم (Design System)

### المتغيرات العالمية (CSS Custom Properties)

```css
/* app/globals.css — نظام الألوان بـ OKLCH */
:root {
  /* --- الألوان الأساسية --- */
  --background: oklch(1 0 0);           /* أبيض نقي */
  --foreground: oklch(0.145 0 0);       /* رمادي غامق جداً */
  --primary: oklch(0.205 0 0);          /* اللون الأساسي */
  --primary-foreground: oklch(0.985 0 0);

  /* --- الألوان الثانوية --- */
  --secondary: oklch(0.97 0 0);
  --muted: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);

  /* --- الحدود والمداخل --- */
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);

  /* --- الزوايا --- */
  --radius: 0.625rem;                   /* 10px — زوايا المكونات */
}

.dark {
  --background: oklch(0.145 0 0);       /* خلفية داكنة */
  --foreground: oklch(0.985 0 0);       /* نص فاتح */
  /* ... باقي الألوان المعكوسة */
}
```

### الخطوط المستخدمة

| الخط | الاستخدام | الأوزان |
|------|-----------|---------|
| **Cairo** | الخط الرئيسي (العناوين والنصوص) | 300, 400, 500, 600, 700, 800, 900 |
| **Tajawal** | خط ثانوي (بعض الأقسام) | 300, 400, 500, 700, 800, 900 |

### نقاط التوقف (Breakpoints)

```css
/* نقاط توقف Tailwind CSS v4 */
sm:  640px   /* أجهزة الجوال الكبيرة */
md:  768px   /* الأجهزة اللوحية */
lg:  1024px  /* الحواسيب المحمولة */
xl:  1280px  /* شاشات ديسكتوب */
2xl: 1536px  /* شاشات كبيرة جداً */
```

---

## 🔐 9. الأمان وأفضل الممارسات

### ممارسات الأمان المُطبَّقة

| الممارسة | التطبيق |
|----------|---------|
| **Input Validation** | Zod schemas في API Routes |
| **TypeScript Strict** | `strict: true` في tsconfig.json |
| **No Client Secrets** | جميع البيانات الحساسة في `process.env` |
| **CORS by Default** | Next.js يمنع CORS غير المصرّح به |
| **XSS Prevention** | React يُهرِّب HTML تلقائياً |

### أفضل الممارسات في الكود

```typescript
// ✅ صح: استخدام أنواع صارمة
function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id)
}

// ✅ صح: التحقق من القيمة قبل الاستخدام
const city = getCityById(params.id)
if (!city) return notFound()

// ✅ صح: Server Component افتراضياً (لا "use client" إلا عند الحاجة)
// ✅ صح: تجميع الاستيرادات من نفس المصدر
import { cities, sectors, faqs } from "@/lib/industrial-data"

// ❌ خطأ: any type
function processData(data: any) { ... }

// ❌ خطأ: import ثم لا تستخدم
import { useState } from "react" // إذا لم تكن تحتاجه
```

---

## 🗺️ 10. خارطة التطوير المستقبلي

### المرحلة الأولى: البنية التحتية (الأولوية العالية)

```
[ ] ربط قاعدة بيانات — PostgreSQL عبر Prisma أو Supabase
[ ] نظام المصادقة (Auth) — NextAuth.js أو Clerk
[ ] نظام إدارة المحتوى (CMS) — Sanity.io أو Contentful
[ ] إرسال البريد الإلكتروني الحقيقي — Resend أو SendGrid
```

### المرحلة الثانية: الميزات (الأولوية المتوسطة)

```
[ ] لوحة تحكم للمستثمرين (Dashboard)
[ ] بحث متقدم مع فلاتر
[ ] نظام الإشعارات (Notifications)
[ ] دعم i18n كامل (عربي / فرنسي / إنجليزي)
[ ] دفع إلكتروني للخدمات المدفوعة
```

### المرحلة الثالثة: التوسع (الأولوية المنخفضة)

```
[ ] تطبيق جوال (React Native / Expo)
[ ] ذكاء اصطناعي لتوصية الاستثمار
[ ] نظام مقارنة المناطق الصناعية
[ ] تكامل مع أنظمة CRM خارجية
[ ] خريطة تفاعلية (Mapbox / Leaflet)
```

### تقدير الجهد للتوسعة

| الميزة | الجهد المُقدَّر | التقنيات المقترحة |
|--------|----------------|-------------------|
| قاعدة بيانات | 3-5 أيام | Prisma + PostgreSQL |
| نظام Auth | 2-3 أيام | NextAuth.js |
| لوحة تحكم | 5-7 أيام | Next.js Dashboard Pattern |
| دعم i18n | 2-3 أيام | next-intl |
| تطبيق جوال | 4-6 أسابيع | React Native + Expo |

---

*هذه الهيكلية صُممت لتكون قاعدة صلبة يمكن البناء عليها وتطويرها لتصبح منصة ضخمة تخدم آلاف المستخدمين يومياً، مع الحفاظ على سهولة الصيانة وجودة الكود.*

---

📘 للاطلاع على الدليل التفصيلي لتعديل وتركيب المنصة، راجع: **[ARABIC_DOCUMENTATION.md](./ARABIC_DOCUMENTATION.md)**

</div>
