# 📘 دليل التوثيق الشامل — منصة أجماس للاستثمار الصناعي

<div dir="rtl">

> **اللغة:** هذه الوثيقة مكتوبة بالكامل باللغة العربية وتُغطي كل جوانب المنصة: التركيب، التشغيل، التعديل، والتطوير.

---

## 📑 فهرس المحتويات

1. [مقدمة عن المنصة](#-1-مقدمة-عن-المنصة)
2. [متطلبات النظام (Prerequisites)](#-2-متطلبات-النظام)
3. [تركيب المنصة خطوة بخطوة](#-3-تركيب-المنصة-خطوة-بخطوة)
4. [تشغيل المنصة محلياً](#-4-تشغيل-المنصة-محلياً)
5. [هيكلية الملفات والمجلدات](#-5-هيكلية-الملفات-والمجلدات)
6. [دليل تعديل المحتوى والبيانات](#-6-دليل-تعديل-المحتوى-والبيانات)
7. [دليل تعديل التصميم والألوان](#-7-دليل-تعديل-التصميم-والألوان)
8. [إضافة صفحات ومسارات جديدة](#-8-إضافة-صفحات-ومسارات-جديدة)
9. [إضافة وتعديل المكونات (Components)](#-9-إضافة-وتعديل-المكونات)
10. [إدارة واجهات البرمجة (API Routes)](#-10-إدارة-واجهات-البرمجة)
11. [النشر والإنتاج (Deployment)](#-11-النشر-والإنتاج)
12. [حل المشكلات الشائعة](#-12-حل-المشكلات-الشائعة)
13. [أسئلة وأجوبة للمطورين](#-13-أسئلة-وأجوبة-للمطورين)

---

## 🏭 1. مقدمة عن المنصة

**أجماس (Agmais)** هي منصة رقمية متكاملة مصممة لتكون البوابة الأولى للاستثمار الصناعي في المملكة المغربية. تربط المنصة بين:

- 🏗️ **المستثمرين** — الراغبين في تأسيس مشاريع صناعية
- 👨‍🔬 **الخبراء** — المستشارون الفنيون والصناعيون
- 🔗 **سلاسل الإمداد** — الموردون والموزعون المحليون والدوليون
- 🛠️ **مقدمو الخدمات** — خدمات دعم المشاريع الصناعية
- 👥 **المشرفون** — مشرفو المشاريع والقائمون على تنفيذها

### الميزات الأساسية للمنصة

| الميزة | الوصف |
|--------|--------|
| 🗺️ دليل المدن الصناعية | استكشاف تفاعلي لـ 7 مدن صناعية مغربية مع إحصائياتها |
| 🏭 قطاعات الاستثمار | 6 قطاعات استراتيجية مع بيانات الاستثمار والنمو |
| 📋 نظام التسجيل متعدد الأدوار | بوابات تسجيل مخصصة لكل نوع من المستخدمين |
| 🌍 دعم تعدد اللغات | عربي (RTL) + فرنسي + إنجليزي |
| 🌙 الوضع الليلي/النهاري | Dark/Light mode تلقائي |
| 📊 إحصائيات تفاعلية | رسوم بيانية ومؤشرات أداء حية |
| ❓ قسم الأسئلة الشائعة | 6 أسئلة متخصصة حول الاستثمار الصناعي |

---

## 💻 2. متطلبات النظام

قبل البدء في تركيب المنصة، تأكد من توفر المتطلبات التالية على جهازك:

### البرامج الأساسية

| البرنامج | الإصدار الأدنى | رابط التحميل |
|----------|---------------|-------------|
| **Node.js** | v18.17.0 أو أحدث | [nodejs.org](https://nodejs.org) |
| **npm** | v9 أو أحدث (مدمج مع Node.js) | مدمج |
| **pnpm** *(موصى به)* | v8 أو أحدث | `npm install -g pnpm` |
| **Git** | أي إصدار | [git-scm.com](https://git-scm.com) |

### كيفية التحقق من التثبيت

افتح الطرفية (Terminal أو Command Prompt) وشغّل الأوامر التالية:

```bash
# التحقق من إصدار Node.js
node --version
# يجب أن يظهر: v18.17.0 أو أحدث

# التحقق من إصدار npm
npm --version
# يجب أن يظهر: 9.x.x أو أحدث

# التحقق من pnpm (اختياري لكن موصى به)
pnpm --version
# يجب أن يظهر: 8.x.x أو أحدث

# التحقق من Git
git --version
# يجب أن يظهر: git version 2.x.x
```

### متطلبات الأجهزة

- **ذاكرة الوصول العشوائي (RAM):** 4 GB كحد أدنى (8 GB موصى به)
- **مساحة القرص:** 500 MB على الأقل للمشروع والحزم
- **المعالج:** أي معالج حديث (Core i5 أو ما يعادله)
- **نظام التشغيل:** Windows 10/11، macOS 12+، أو Ubuntu 20.04+

---

## 🚀 3. تركيب المنصة خطوة بخطوة

### الخطوة 1: تحميل المشروع

#### الطريقة الأولى: استنساخ من Git

```bash
# استنساخ المستودع
git clone https://github.com/your-username/industrial-marketplace-platform.git

# الدخول إلى مجلد المشروع
cd industrial-marketplace-platform
```

#### الطريقة الثانية: تحميل مباشر (ZIP)

1. قم بتحميل ملف ZIP من المصدر
2. فك ضغط الملف في المجلد المناسب
3. افتح الطرفية وانتقل إلى مجلد المشروع:

```bash
cd C:\Users\YourName\Downloads\industrial-marketplace-platform
# أو على macOS/Linux:
cd ~/Downloads/industrial-marketplace-platform
```

### الخطوة 2: تثبيت الحزم والاعتمادات

> ⚠️ **مهم:** لا تتخطى هذه الخطوة — المشروع لن يعمل بدون تثبيت الحزم.

#### باستخدام pnpm (موصى به للسرعة)

```bash
pnpm install
```

#### باستخدام npm (بديل)

```bash
npm install
```

**ماذا يحدث في هذه الخطوة؟**
- يقرأ مدير الحزم ملف `package.json`
- يُحمّل جميع الحزم المدرجة في `dependencies` و`devDependencies`
- ينشئ مجلد `node_modules` يحتوي على الكود المصدري للحزم
- ينشئ ملف `pnpm-lock.yaml` أو `package-lock.json` لضمان تثبيت الإصدارات نفسها

**الحزم الرئيسية التي سيتم تثبيتها:**

| الحزمة | الغرض | الإصدار |
|--------|--------|---------|
| `next` | إطار العمل الرئيسي | 16.2.0 |
| `react` & `react-dom` | مكتبة الواجهة | ^19 |
| `typescript` | لغة البرمجة | 5.7.3 |
| `tailwindcss` | تنسيق CSS | ^4.2.0 |
| `@radix-ui/*` | مكونات UI أساسية | متعدد |
| `lucide-react` | الأيقونات | ^0.564.0 |
| `recharts` | الرسوم البيانية | 2.15.0 |
| `react-hook-form` | إدارة النماذج | ^7.54.1 |
| `zod` | التحقق من البيانات | ^3.24.1 |

### الخطوة 3: إعداد متغيرات البيئة (اختياري)

إذا كنت تريد ربط المنصة بخدمات خارجية، أنشئ ملف `.env.local` في جذر المشروع:

```bash
# إنشاء ملف البيئة
touch .env.local
# على Windows:
type nul > .env.local
```

أضف المتغيرات التالية حسب حاجتك:

```env
# متغيرات بيئة التطوير - مثال
NEXT_PUBLIC_APP_URL=http://localhost:3000

# مستقبلاً: قاعدة البيانات
# DATABASE_URL=postgresql://user:password@localhost:5432/agmais

# مستقبلاً: خدمة البريد الإلكتروني
# EMAIL_SERVER=smtp://user:pass@smtp.example.com:587
# EMAIL_FROM=no-reply@agmais.ma

# مستقبلاً: مزود الهوية
# NEXTAUTH_URL=http://localhost:3000
# NEXTAUTH_SECRET=your-secret-key-here
```

> 💡 **ملاحظة:** المتغيرات التي تبدأ بـ `NEXT_PUBLIC_` تكون مرئية في كود الواجهة الأمامية (Frontend)، أما الأخرى فتبقى سرية في الخادم فقط.

---

## ▶️ 4. تشغيل المنصة محلياً

### تشغيل وضع التطوير (Development Mode)

```bash
# باستخدام pnpm
pnpm dev

# أو باستخدام npm
npm run dev
```

بعد تشغيل الأمر، ستظهر رسالة مشابهة لهذه:

```
  ▲ Next.js 16.2.0
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 2.1s
```

افتح المتصفح على الرابط: **http://localhost:3000**

### فهم أوضاع التشغيل

| الأمر | الوضع | الاستخدام |
|-------|--------|-----------|
| `pnpm dev` | تطوير | أثناء البرمجة والتعديل |
| `pnpm build` | بناء الإنتاج | قبل النشر على الخادم |
| `pnpm start` | تشغيل الإنتاج | بعد البناء على الخادم |
| `pnpm lint` | فحص الكود | للتحقق من أخطاء الكود |

### ميزة التحديث التلقائي (Hot Reload)

في وضع التطوير، أي تعديل تجريه على ملفات المشروع يُطبَّق فوراً في المتصفح دون الحاجة لإعادة التشغيل. هذا يُسرّع عملية التطوير بشكل كبير.

---

## 📂 5. هيكلية الملفات والمجلدات

فيما يلي شرح تفصيلي لكل مجلد وملف في المشروع:

```
industrial-marketplace-platform/
│
├── 📁 app/                          ← مسارات التطبيق (Next.js App Router)
│   ├── 📁 api/                      ← واجهات برمجة التطبيقات
│   │   ├── 📁 contact/
│   │   │   └── 📄 route.ts          ← معالجة نموذج التواصل
│   │   └── 📁 register/
│   │       └── 📄 route.ts          ← معالجة نماذج التسجيل
│   ├── 📁 industrial/               ← صفحات القسم الصناعي الرئيسي
│   ├── 📄 globals.css               ← الأنماط العامة للتطبيق
│   ├── 📄 layout.tsx                ← التخطيط الجذري (Root Layout)
│   └── 📄 page.tsx                  ← الصفحة الرئيسية (Redirect)
│
├── 📁 components/                   ← مكونات واجهة المستخدم
│   ├── 📁 site/                     ← مكونات خاصة بالموقع
│   │   ├── 📄 actions-context.tsx   ← إدارة الحالة العامة (Context)
│   │   ├── 📄 contact-dialog.tsx    ← نافذة التواصل المنبثقة
│   │   ├── 📄 cta.tsx               ← قسم الدعوة للعمل (Call to Action)
│   │   ├── 📄 faq.tsx               ← قسم الأسئلة الشائعة
│   │   ├── 📄 footer.tsx            ← ذيل الصفحة
│   │   ├── 📄 header.tsx            ← رأس الصفحة والتنقل
│   │   ├── 📄 hero.tsx              ← القسم الرئيسي (Banner)
│   │   ├── 📄 journey.tsx           ← رحلة المستثمر / المدن الصناعية
│   │   ├── 📄 logo.tsx              ← شعار المنصة
│   │   ├── 📄 mission.tsx           ← قسم المهمة والرؤية
│   │   ├── 📄 partners.tsx          ← قسم الشركاء وأنواع المستخدمين
│   │   ├── 📄 register-dialog.tsx   ← نافذة التسجيل المنبثقة
│   │   ├── 📄 sectors.tsx           ← قسم القطاعات الصناعية
│   │   ├── 📄 stats.tsx             ← قسم الإحصائيات
│   │   ├── 📄 vision.tsx            ← قسم الرؤية الاستراتيجية
│   │   └── 📄 whatsapp-fab.tsx      ← زر واتساب العائم
│   ├── 📁 ui/                       ← مكونات UI أساسية (Radix/Shadcn)
│   └── 📄 theme-provider.tsx        ← مزود الثيم (Dark/Light Mode)
│
├── 📁 lib/                          ← البيانات والوظائف المساعدة
│   ├── 📄 industrial-data.ts        ← قاعدة البيانات الثابتة (المدن، القطاعات...)
│   └── 📄 utils.ts                  ← دوال مساعدة (cn, clsx...)
│
├── 📁 hooks/                        ← React Custom Hooks
├── 📁 public/                       ← الملفات العامة (الصور، الأيقونات)
├── 📁 styles/                       ← ملفات CSS إضافية
├── 📁 image website/                ← صور المعاينة للوثائق
│
├── 📄 package.json                  ← تعريف المشروع والحزم
├── 📄 pnpm-lock.yaml                ← قفل إصدارات الحزم
├── 📄 tsconfig.json                 ← إعدادات TypeScript
├── 📄 next.config.mjs               ← إعدادات Next.js
├── 📄 postcss.config.mjs            ← إعدادات PostCSS
├── 📄 components.json               ← إعدادات Shadcn UI
├── 📄 README.md                     ← ملف التعريف بالمشروع
└── 📄 TECHNICAL_ARCHITECTURE.md     ← الوثيقة التقنية
```

---

## ✏️ 6. دليل تعديل المحتوى والبيانات

### 6.1 تعديل بيانات المدن الصناعية

جميع بيانات المدن الصناعية موجودة في ملف واحد:
**`lib/industrial-data.ts`** — قسم `cities`

**مثال: تعديل بيانات مدينة موجودة**

```typescript
// افتح الملف: lib/industrial-data.ts
// ابحث عن المدينة التي تريد تعديلها، مثلاً "طنجة المتوسط"

{
  id: "tanger-med",           // ← معرّف فريد (لا تغيّره إذا كان مستخدماً في مكان آخر)
  name: "طنجة المتوسط",       // ← اسم المدينة (سيظهر في الواجهة)
  subtitle: "المنطقة الصناعية اللوجستية", // ← عنوان فرعي
  region: "طنجة - تطوان - الحسيمة",      // ← اسم الجهة
  image: "/cities/tanger-med.jpg",        // ← مسار الصورة (من مجلد public/)
  investment: "120",          // ← قيمة الاستثمار بالمليار درهم
  employees: "95K",           // ← عدد الموظفين
  factories: "1100",          // ← عدد المصانع
  growth: "18",               // ← نسبة النمو بالمئة
  tag: "اللوجستيك والسيارات", // ← وسم/تصنيف المدينة
  description: "...",         // ← وصف مختصر للمدينة
}
```

**مثال: إضافة مدينة صناعية جديدة**

```typescript
// في نهاية مصفوفة cities في lib/industrial-data.ts، أضف:
{
  id: "marrakech",                      // ← معرّف فريد بالإنجليزية
  name: "مراكش الصناعية",
  subtitle: "منطقة الصناعات التحويلية",
  region: "مراكش - آسفي",
  image: "/cities/marrakech.jpg",       // ← ضع الصورة في public/cities/
  investment: "45",
  employees: "35K",
  factories: "290",
  growth: "16",
  tag: "الصناعات التحويلية",
  description: "قطب صناعي واعد في قلب المغرب يجمع بين الصناعات الحرفية والتحويلية الحديثة.",
},
```

> 💡 **تذكّر:** بعد إضافة مدينة جديدة، ضع صورتها في مجلد `public/cities/` بنفس الاسم المذكور في حقل `image`.

---

### 6.2 تعديل بيانات القطاعات الصناعية

البيانات موجودة في نفس الملف `lib/industrial-data.ts` — قسم `sectors`

```typescript
// مثال: تعديل قطاع صناعة السيارات
{
  id: "automotive",
  title: "صناعة السيارات",           // ← الاسم بالعربية
  titleEn: "Automotive Industry",    // ← الاسم بالإنجليزية
  description: "...",                // ← وصف القطاع
  image: "/sectors/automotive.jpg",  // ← صورة القطاع (في public/sectors/)
  growth: "+22%",                    // ← نسبة النمو
  investment: "110B",                // ← حجم الاستثمار
  employees: "220K",                 // ← عدد العمال
  factories: "260",                  // ← عدد المصانع
  subSectors: [                      // ← القطاعات الفرعية (حد أقصى 4 عناصر)
    "السيارات الكهربائية",
    "قطع الغيار",
    "البطاريات",
    "الكابلاج"
  ],
}
```

---

### 6.3 تعديل الأسئلة الشائعة (FAQ)

البيانات موجودة في `lib/industrial-data.ts` — قسم `faqs`

```typescript
// مثال: تعديل سؤال موجود أو إضافة سؤال جديد
{
  id: "new-question",           // ← معرّف فريد
  question: "سؤالك هنا؟",
  answer: "إجابة تفصيلية هنا...",
  benefits: [                   // ← 3 مزايا رئيسية (ستظهر كشارات)
    "ميزة 1",
    "ميزة 2",
    "ميزة 3"
  ],
  steps: [                      // ← 4 خطوات (ستظهر كمسار)
    "الخطوة الأولى",
    "الخطوة الثانية",
    "الخطوة الثالثة",
    "الخطوة الرابعة"
  ],
}
```

---

### 6.4 تعديل النصوص في المكونات

كل المكونات الموجودة في `components/site/` تحتوي على نصوص ثابتة. للتعديل:

**مثال: تعديل نص قسم Hero (البانر الرئيسي)**

```bash
# افتح الملف:
components/site/hero.tsx
```

ستجد النصوص بشكل مباشر في JSX:

```tsx
// ابحث عن النصوص التي تريد تغييرها وعدّلها مباشرة
<h1>منصة أجماس للاستثمار الصناعي</h1>
// عدّلها إلى:
<h1>اسم المنصة الجديد</h1>
```

**مثال: تعديل روابط التنقل في Header**

```bash
# افتح الملف:
components/site/header.tsx
```

ابحث عن مصفوفة التنقل وعدّلها:

```tsx
// مثال نموذجي لبنية روابط التنقل
const navLinks = [
  { href: "#sectors", label: "القطاعات" },
  { href: "#cities", label: "المدن الصناعية" },
  { href: "#partners", label: "الشركاء" },
  // أضف روابطك هنا
];
```

---

### 6.5 تعديل بيانات الشركاء وأنواع المستخدمين

في `lib/industrial-data.ts` — قسم `partners`:

```typescript
{
  id: "investors",
  title: "المستثمرون",
  subtitle: "Investors",           // ← الاسم بالإنجليزية
  count: "+2,500",                 // ← العدد (للعرض فقط)
  countLabel: "مستثمر",           // ← وحدة القياس
  description: "...",              // ← وصف مختصر
  icon: "factory",                 // ← الأيقونة: factory | handshake | graduation | users | link | globe
  featured: true,                  // ← true = يظهر بشكل بارز
}
```

---

## 🎨 7. دليل تعديل التصميم والألوان

### 7.1 تعديل المتغيرات (CSS Variables)

ملف الأنماط الرئيسي هو: **`app/globals.css`**

```css
/* الوضع النهاري (Light Mode) */
:root {
  --background: oklch(1 0 0);           /* لون الخلفية */
  --foreground: oklch(0.145 0 0);       /* لون النص الرئيسي */
  --primary: oklch(0.205 0 0);          /* اللون الأساسي */
  --primary-foreground: oklch(0.985 0 0); /* نص فوق اللون الأساسي */
  --secondary: oklch(0.97 0 0);         /* اللون الثانوي */
  --accent: oklch(0.97 0 0);            /* لون التمييز */
  --muted: oklch(0.97 0 0);             /* لون خافت */
  --border: oklch(0.922 0 0);           /* لون الحدود */
  --radius: 0.625rem;                   /* نصف قطر الزوايا */
}

/* الوضع الليلي (Dark Mode) */
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... باقي الألوان */
}
```

**كيفية تغيير اللون الأساسي للمنصة:**

```css
/* مثال: تغيير اللون الأساسي إلى أزرق مغربي */
:root {
  --primary: oklch(0.45 0.18 250);          /* أزرق غامق */
  --primary-foreground: oklch(0.98 0 0);    /* أبيض */
}
```

> 💡 **أداة مفيدة:** استخدم [oklch.com](https://oklch.com) لتحويل ألوان HEX أو RGB إلى صيغة OKLCH.

### 7.2 تعديل الخطوط

الخطوط المستخدمة تُعرَّف في `app/layout.tsx`:

```typescript
// الخط الرئيسي
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

// الخط الثانوي
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
})
```

**لتغيير الخط:** استبدل `Cairo` أو `Tajawal` بأي خط عربي من [Google Fonts](https://fonts.google.com/?subset=arabic):

```typescript
// مثال: استخدام خط "Noto Kufi Arabic" بدلاً من Cairo
import { Noto_Kufi_Arabic } from "next/font/google"

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
  weight: ["300", "400", "700", "900"],
  display: "swap",
})
```

### 7.3 تعديل الاستجابة (Responsive Design)

يستخدم المشروع نقاط التوقف التالية من Tailwind CSS:

| الاسم | العرض | الاستخدام |
|-------|-------|-----------|
| `sm` | 640px+ | أجهزة الجوال الكبيرة |
| `md` | 768px+ | الأجهزة اللوحية |
| `lg` | 1024px+ | الحواسيب المحمولة |
| `xl` | 1280px+ | شاشات سطح المكتب |
| `2xl` | 1536px+ | الشاشات الكبيرة |

**مثال استخدام:**

```tsx
// عنصر يظهر بعمود واحد على الجوال وثلاثة أعمدة على الشاشات الكبيرة
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* المحتوى */}
</div>
```

---

## 🗺️ 8. إضافة صفحات ومسارات جديدة

### 8.1 فهم نظام التوجيه (App Router)

يستخدم المشروع **Next.js App Router**. كل مجلد داخل `app/` يمثل مساراً:

```
app/
├── page.tsx          → http://localhost:3000/
├── industrial/
│   └── page.tsx      → http://localhost:3000/industrial
├── about/            ← صفحة جديدة ستنشئها
│   └── page.tsx      → http://localhost:3000/about
```

### 8.2 إنشاء صفحة جديدة: خطوة بخطوة

**مثال: إضافة صفحة "من نحن"**

**الخطوة 1:** أنشئ المجلد والملف

```bash
# على Windows
mkdir app\about
type nul > app\about\page.tsx

# على macOS/Linux
mkdir -p app/about
touch app/about/page.tsx
```

**الخطوة 2:** اكتب محتوى الصفحة

```tsx
// app/about/page.tsx
import type { Metadata } from "next"

// تحسين محركات البحث (SEO)
export const metadata: Metadata = {
  title: "من نحن | أجماس للاستثمار الصناعي",
  description: "تعرف على منصة أجماس ورؤيتها في تطوير الاستثمار الصناعي المغربي",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          من نحن
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          أجماس هي منصة رقمية متكاملة تهدف إلى تسهيل وتسريع عملية الاستثمار الصناعي
          في المملكة المغربية من خلال ربط المستثمرين بالخبراء والموردين وسلاسل الإمداد.
        </p>
      </div>
    </main>
  )
}
```

**الخطوة 3:** أضف رابط الصفحة في القائمة الرئيسية

```bash
# افتح:
components/site/header.tsx
```

أضف الرابط الجديد في قائمة التنقل.

---

### 8.3 إضافة صفحة ديناميكية (Dynamic Route)

**مثال: صفحة تفاصيل مدينة صناعية**

```bash
# أنشئ:
app/cities/[cityId]/page.tsx
```

```tsx
// app/cities/[cityId]/page.tsx
import { cities } from "@/lib/industrial-data"
import { notFound } from "next/navigation"

interface Props {
  params: { cityId: string }
}

export default function CityPage({ params }: Props) {
  // ابحث عن المدينة بالمعرّف
  const city = cities.find((c) => c.id === params.cityId)

  // إذا لم تُوجد المدينة، أظهر صفحة 404
  if (!city) {
    notFound()
  }

  return (
    <main className="min-h-screen py-24 px-6">
      <h1 className="text-5xl font-bold">{city.name}</h1>
      <p className="text-xl text-muted-foreground mt-4">{city.subtitle}</p>
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="text-center">
          <p className="text-3xl font-bold">{city.factories}</p>
          <p className="text-sm text-muted-foreground">مصنع</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{city.employees}</p>
          <p className="text-sm text-muted-foreground">موظف</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{city.investment}B</p>
          <p className="text-sm text-muted-foreground">درهم استثمار</p>
        </div>
      </div>
      <p className="mt-8 text-lg leading-relaxed">{city.description}</p>
    </main>
  )
}
```

الآن يمكن الوصول لمثلاً:
- `http://localhost:3000/cities/tanger-med`
- `http://localhost:3000/cities/casablanca`
- `http://localhost:3000/cities/kenitra`

---

## 🧩 9. إضافة وتعديل المكونات

### 9.1 هيكل مكوّن نموذجي

```tsx
// components/site/my-section.tsx

"use client" // ← أضف هذا فقط إذا كان المكوّن يستخدم state أو browser APIs

import { useState } from "react"
import { Button } from "@/components/ui/button"

// تعريف نوع Props (اختياري لكن موصى به)
interface MySectionProps {
  title?: string
  description?: string
}

export function MySection({ title = "عنوان افتراضي", description }: MySectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-24 px-6 bg-background">
      {/* الحاوية الرئيسية - ثابتة العرض للوسط */}
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>

        {/* الوصف */}
        {description && (
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {description}
          </p>
        )}

        {/* المحتوى */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* البطاقات أو المحتوى هنا */}
        </div>

        {/* زر الإجراء */}
        <div className="text-center mt-8">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "إغلاق" : "عرض المزيد"}
          </Button>
        </div>
      </div>
    </section>
  )
}
```

### 9.2 إضافة مكوّن جديد للصفحة الرئيسية

**الخطوة 1:** أنشئ المكوّن في `components/site/`

**الخطوة 2:** استورده في الصفحة الرئيسية

```bash
# افتح صفحة القسم الصناعي
app/industrial/page.tsx
```

```tsx
// أضف استيراد المكوّن الجديد
import { MySection } from "@/components/site/my-section"

// أضفه في مكانه المناسب ضمن JSX
export default function IndustrialPage() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <MySection title="القسم الجديد" /> {/* ← المكوّن الجديد */}
      <Sectors />
      <Footer />
    </>
  )
}
```

### 9.3 استخدام مكونات Shadcn UI الجاهزة

المشروع يتضمن مجموعة كبيرة من المكونات الجاهزة في `components/ui/`:

```tsx
// استيراد المكونات الجاهزة
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// مثال استخدام بطاقة (Card)
function ExampleCard() {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>عنوان البطاقة</CardTitle>
      </CardHeader>
      <CardContent>
        <p>محتوى البطاقة هنا</p>
        <Badge variant="secondary" className="mt-2">وسم</Badge>
        <Button className="w-full mt-4">إجراء</Button>
      </CardContent>
    </Card>
  )
}
```

---

## 🔌 10. إدارة واجهات البرمجة

### 10.1 فهم هيكل API Routes

```
app/api/
├── contact/
│   └── route.ts    ← POST /api/contact
└── register/
    └── route.ts    ← POST /api/register
```

### 10.2 كيف يعمل API التسجيل الحالي

```typescript
// app/api/register/route.ts (مبسّط)
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()

  // التحقق من البيانات
  if (!body.name || !body.email || !body.role) {
    return NextResponse.json(
      { error: "بيانات ناقصة" },
      { status: 400 }
    )
  }

  // محاكاة حفظ البيانات (حالياً بدون قاعدة بيانات)
  const referenceId = `REF-${Date.now()}`

  return NextResponse.json({
    success: true,
    referenceId,
    message: "تم استلام طلبك بنجاح"
  })
}
```

### 10.3 إضافة API جديد

**مثال: إضافة API للبحث عن المدن**

**الخطوة 1:** أنشئ الملف

```bash
mkdir app\api\cities
type nul > app\api\cities\route.ts
```

**الخطوة 2:** اكتب منطق API

```typescript
// app/api/cities/route.ts
import { NextRequest, NextResponse } from "next/server"
import { cities } from "@/lib/industrial-data"

// GET /api/cities          ← جلب كل المدن
// GET /api/cities?tag=...  ← تصفية حسب الوسم
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const tag = searchParams.get("tag")

  let result = cities

  // تصفية حسب الوسم إذا كان محدداً
  if (tag) {
    result = cities.filter((city) =>
      city.tag.includes(tag)
    )
  }

  return NextResponse.json({
    cities: result,
    total: result.length,
  })
}
```

**الخطوة 3:** استدعاء API من المكوّن

```tsx
// في أي مكوّن client-side
"use client"
import { useEffect, useState } from "react"
import type { City } from "@/lib/industrial-data"

function CitiesFilter() {
  const [cities, setCities] = useState<City[]>([])

  useEffect(() => {
    fetch("/api/cities?tag=السيارات")
      .then((res) => res.json())
      .then((data) => setCities(data.cities))
  }, [])

  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  )
}
```

### 10.4 ربط قاعدة بيانات حقيقية (للمستقبل)

عندما تحتاج لربط قاعدة بيانات، اتبع هذه الخطوات:

**الخيار أ: PostgreSQL مع Prisma**

```bash
# تثبيت Prisma
pnpm add prisma @prisma/client
pnpm dlx prisma init
```

ثم عدّل `prisma/schema.prisma`:

```prisma
model City {
  id         String @id @default(cuid())
  name       String
  investment Float
  employees  Int
  factories  Int
  createdAt  DateTime @default(now())
}
```

**الخيار ب: MongoDB مع Mongoose**

```bash
pnpm add mongoose
```

```typescript
// lib/mongodb.ts
import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI!

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return
  await mongoose.connect(MONGODB_URI)
}
```

---

## 🌐 11. النشر والإنتاج

### 11.1 النشر على Vercel (الأسهل والأسرع)

**Vercel** هو منصة الاستضافة الرسمية لـ Next.js وأسهل طريقة للنشر:

**الخطوة 1:** سجّل في [vercel.com](https://vercel.com)

**الخطوة 2:** ارفع مشروعك على GitHub

```bash
git init
git add .
git commit -m "first commit: منصة أجماس"
git remote add origin https://github.com/username/agmais.git
git push -u origin main
```

**الخطوة 3:** في Vercel، اضغط "New Project" ← اختر المستودع

**الخطوة 4:** Vercel سيكتشف تلقائياً أنه مشروع Next.js ويضبط الإعدادات

**الخطوة 5:** اضغط "Deploy" — سيستغرق النشر 2-3 دقائق فقط!

### 11.2 البناء اليدوي للإنتاج

```bash
# بناء نسخة الإنتاج
pnpm build

# الناتج: مجلد .next/ يحتوي على الملفات المحسّنة
# يظهر تقرير الأداء:
# ✓ Compiled successfully
# Route (app)                    Size    First Load JS
# ┌ ○ /                         xxx kB       xxx kB
# └ ○ /industrial               xxx kB       xxx kB
```

```bash
# تشغيل نسخة الإنتاج محلياً (للاختبار)
pnpm start
```

### 11.3 النشر على VPS (خادم خاص)

إذا كنت تفضل خادماً خاصاً (مثل AWS, DigitalOcean, أو Hostinger):

```bash
# على الخادم:
# 1. ثبّت Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. انسخ المشروع
git clone https://github.com/username/agmais.git
cd agmais

# 3. ثبّت الحزم وابنِ المشروع
npm install
npm run build

# 4. شغّل مع PM2 (لضمان الاستمرارية)
npm install -g pm2
pm2 start npm --name "agmais" -- start
pm2 startup   # لتشغيل تلقائي عند إعادة تشغيل الخادم
pm2 save
```

### 11.4 قائمة فحص قبل النشر

- [ ] هل تم اختبار جميع النماذج (التسجيل، التواصل)؟
- [ ] هل تم فحص الموقع على جميع أحجام الشاشات؟
- [ ] هل تم ضبط متغيرات البيئة `(.env)` على الخادم؟
- [ ] هل تم تحسين الصور ووضعها في المجلد الصحيح؟
- [ ] هل تم فحص سرعة التحميل في [PageSpeed Insights](https://pagespeed.web.dev)؟
- [ ] هل تم التحقق من عمل الوضع الليلي (Dark Mode)؟
- [ ] هل تم التحقق من دعم RTL للغة العربية؟

---

## 🔧 12. حل المشكلات الشائعة

### المشكلة 1: خطأ أثناء `npm install` أو `pnpm install`

```
ERESOLVE unable to resolve dependency tree
```

**الحل:**

```bash
# جرّب حذف مجلد node_modules وأعد التثبيت
rm -rf node_modules
rm package-lock.json   # أو pnpm-lock.yaml
npm install --legacy-peer-deps
```

---

### المشكلة 2: الخادم لا يعمل على المنفذ 3000

```
Error: listen EADDRINUSE: address already in use :::3000
```

**الحل:**

```bash
# تشغيل على منفذ مختلف
pnpm dev --port 3001

# أو إيقاف العملية التي تشغّل على 3000
# على Windows:
netstat -ano | findstr :3000
taskkill /PID <رقم_العملية> /F

# على macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

---

### المشكلة 3: خطأ في TypeScript

```
Type error: Property 'x' does not exist on type 'Y'
```

**الحل:**
1. تحقق من تعريف الأنواع في `lib/industrial-data.ts`
2. تأكد أنك تستخدم الحقول الصحيحة
3. أضف `// @ts-ignore` كحل مؤقت (غير موصى به)

---

### المشكلة 4: الصور لا تظهر

**الأسباب المحتملة:**

```bash
# 1. تأكد أن الصور في مجلد public/
# المسار الصحيح: public/cities/tanger-med.jpg
# الاستخدام في الكود: image: "/cities/tanger-med.jpg"

# 2. تأكد من صحة اسم الملف (حساس لحالة الأحرف على Linux)
# ❌ خطأ: tanger-Med.jpg
# ✓ صح:  tanger-med.jpg

# 3. تحقق من إعدادات next.config.mjs إذا كانت الصور من رابط خارجي
```

---

### المشكلة 5: خطأ في بناء الإنتاج

```
Error occurred prerendering page "/industrial"
```

**الحل:**

```bash
# فحص مفصّل للأخطاء
pnpm build 2>&1 | head -50

# الأسباب الشائعة:
# - استخدام window أو document في مكوّن Server Component
# - بيانات غير صحيحة في lib/industrial-data.ts
# - مكوّن يستخدم useState بدون "use client"
```

---

### المشكلة 6: الخطوط العربية لا تظهر بشكل صحيح

**الحل:**

```typescript
// تأكد في app/layout.tsx أن الـ subsets تتضمن "arabic"
const cairo = Cairo({
  subsets: ["arabic", "latin"], // ← تأكد من وجود "arabic"
  variable: "--font-cairo",
  display: "swap",
})

// وأن الـ html element يحتوي على dir="rtl" و lang="ar"
<html lang="ar" dir="rtl" className={cairo.variable}>
```

---

## ❓ 13. أسئلة وأجوبة للمطورين

**س: كيف أضيف لغة جديدة للمنصة؟**

ج: المشروع حالياً لا يستخدم مكتبة ترجمة (i18n). لإضافة دعم متعدد اللغات بشكل صحيح:
1. ثبّت مكتبة `next-intl`: `pnpm add next-intl`
2. أنشئ ملفات الترجمة في `messages/ar.json`, `messages/fr.json`, `messages/en.json`
3. اتبع [وثائق next-intl](https://next-intl-docs.vercel.app/)

---

**س: كيف أربط المنصة ببريد إلكتروني حقيقي؟**

ج: في ملف `app/api/contact/route.ts` و`app/api/register/route.ts`، استخدم مكتبة `nodemailer` أو `resend`:

```bash
pnpm add resend
```

```typescript
import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: "no-reply@agmais.ma",
  to: "admin@agmais.ma",
  subject: "طلب تسجيل جديد",
  html: `<p>اسم المستخدم: ${body.name}</p>`,
})
```

---

**س: هل يمكن إضافة نظام تسجيل دخول (Authentication)؟**

ج: نعم. الخيار الموصى به هو **NextAuth.js**:

```bash
pnpm add next-auth
```

ثم أنشئ `app/api/auth/[...nextauth]/route.ts` واتبع [الوثائق الرسمية](https://next-auth.js.org/).

---

**س: كيف أحسّن أداء الموقع؟**

ج: المشروع يستخدم بالفعل:
- `next/font` لتحميل الخطوط محلياً (يمنع CLS)
- `next/image` لتحسين الصور تلقائياً
- Server Components افتراضياً لتقليل JavaScript

للمزيد من التحسين:
1. أضف `loading="lazy"` للصور خارج نطاق العرض
2. استخدم `React.memo()` للمكونات الثقيلة
3. استخدم `Suspense` للتحميل التدريجي

---

**س: كيف أختبر الموقع على الجوال؟**

ج: أثناء تشغيل الخادم المحلي:
1. احصل على عنوان IP جهازك: `ipconfig` (Windows) أو `ifconfig` (macOS/Linux)
2. على جهازك الجوال (في نفس الشبكة)، افتح: `http://192.168.x.x:3000`

---

## 📞 الدعم والتواصل

إذا واجهتك أي مشكلة غير مذكورة في هذه الوثيقة:

1. **راجع وثائق Next.js الرسمية:** [nextjs.org/docs](https://nextjs.org/docs)
2. **راجع وثائق Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
3. **راجع وثائق Shadcn UI:** [ui.shadcn.com](https://ui.shadcn.com)
4. **مجتمع Next.js:** [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

*📅 آخر تحديث: مايو 2026 | الإصدار: 1.0.0 | منصة أجماس للاستثمار الصناعي*

</div>
