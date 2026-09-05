# أجماس (Agmais) — منصة الاستثمار الصناعي الذكية 🇲🇦

<div dir="rtl">

![Agmais Platform Banner](./image%20website/387dc71f-63ff-4d85-890e-d3a6f52bce76.jpg)

<p align="center">
  <a href="#-نظرة-عامة">نظرة عامة</a> •
  <a href="#-المميزات">المميزات</a> •
  <a href="#️-التقنيات">التقنيات</a> •
  <a href="#-التشغيل-السريع">التشغيل السريع</a> •
  <a href="#-هيكلية-المشروع">هيكلية المشروع</a> •
  <a href="#-الوثائق">الوثائق</a>
</p>

---

## 📌 نظرة عامة

**أجماس (Agmais)** هي منصة رقمية متكاملة ومبتكرة مصممة لتكون البوابة الأولى للاستثمار الصناعي في المملكة المغربية. تربط المنصة بين المستثمرين، والخبراء الصناعيين، ومقدمي الخدمات، وسلاسل الإمداد العالمية لتسهيل عملية تأسيس وتشغيل وتطوير المشاريع الصناعية بكفاءة عالية.

> 🏗️ بنيت بأحدث تقنيات الويب: **Next.js 16** + **React 19** + **TypeScript** + **Tailwind CSS v4**

---

## 📸 معاينة المشروع

![Preview 1](./image%20website/Screenshot%202026-05-19%20104633.png)
![Preview 2](./image%20website/Screenshot%202026-05-19%20104649.png)
![Preview 3](./image%20website/Screenshot%202026-05-19%20104656.png)
![Preview 4](./image%20website/Screenshot%202026-05-19%20104700.png)
![Preview 5](./image%20website/Screenshot%202026-05-19%20104704.png)
![Preview 6](./image%20website/Screenshot%202026-05-19%20104707.png)
![Preview 7](./image%20website/Screenshot%202026-05-19%20104714.png)
![Preview 8](./image%20website/Screenshot%202026-05-19%20104718.png)
![Preview 9](./image%20website/Screenshot%202026-05-19%20104722.png)

---

## 🚀 المميزات

| الميزة | الوصف |
|--------|--------|
| 🗺️ **دليل المدن الصناعية** | استكشاف تفاعلي لـ 7 مدن صناعية مغربية (طنجة المتوسط، القنيطرة، الدار البيضاء، الجرف الأصفر، المحمدية، أكادير، وجدة) مع إحصائيات دقيقة |
| 🏭 **قطاعات الاستثمار** | تغطية شاملة لـ 6 قطاعات استراتيجية: السيارات، الطيران، الفوسفاط، الطاقات المتجددة، النسيج، والصناعات الغذائية |
| 👥 **نظام تسجيل متعدد الأدوار** | بوابات مخصصة لتسجيل المستثمرين، الخبراء، الموردين، المشرفين، ومقدمي الخدمات |
| 🌍 **دعم تعدد اللغات** | واجهة عربية كاملة (RTL) + فرنسية + إنجليزية |
| 🌙 **الوضع الليلي/النهاري** | Dark/Light Mode يتكيف مع تفضيلات المستخدم |
| 📊 **إحصائيات تفاعلية** | رسوم بيانية حية ومؤشرات أداء ديناميكية |
| ❓ **الأسئلة الشائعة** | 6 أسئلة متخصصة حول الاستثمار الصناعي |
| 💬 **نموذج التواصل** | نظام تواصل مباشر مع فريق المنصة |
| 📱 **تصميم متجاوب** | يعمل بكفاءة على جميع الشاشات (موبايل، تابلت، ديسكتوب) |

---

## 🛠️ التقنيات

| التقنية | الغرض | الإصدار |
|---------|--------|---------|
| **Next.js** | إطار العمل الرئيسي (App Router) | 16.2.0 |
| **React** | مكتبة الواجهة | ^19 |
| **TypeScript** | لغة البرمجة المكتوبة بصرامة | 5.7.3 |
| **Tailwind CSS** | تنسيق الواجهات | ^4.2.0 |
| **Radix UI** | مكونات UI متوافقة مع إمكانية الوصول | متعدد |
| **Shadcn UI** | طبقة مكونات فوق Radix | - |
| **Lucide React** | مكتبة الأيقونات | ^0.564.0 |
| **Recharts** | الرسوم البيانية | 2.15.0 |
| **Embla Carousel** | عروض الصور الدوارة | 8.6.0 |
| **React Hook Form** | إدارة النماذج | ^7.54.1 |
| **Zod** | التحقق من البيانات | ^3.24.1 |

---

## ⚡ التشغيل السريع

### المتطلبات

- **Node.js** v18.17.0 أو أحدث
- **pnpm** (موصى به) أو npm

### الخطوات

```bash
# 1. تثبيت الحزم
pnpm install

# 2. تشغيل خادم التطوير
pnpm dev

# 3. افتح المتصفح على
# http://localhost:3000
```

### أوامر أخرى

```bash
pnpm build    # بناء نسخة الإنتاج
pnpm start    # تشغيل نسخة الإنتاج
pnpm lint     # فحص جودة الكود
```

---

## 📂 هيكلية المشروع

```
industrial-marketplace-platform/
├── app/                        ← مسارات التطبيق (App Router)
│   ├── api/
│   │   ├── contact/route.ts    ← API معالجة التواصل
│   │   └── register/route.ts   ← API معالجة التسجيل
│   ├── industrial/             ← الصفحات الرئيسية
│   ├── globals.css             ← الأنماط العامة
│   ├── layout.tsx              ← التخطيط الجذري
│   └── page.tsx                ← الصفحة الرئيسية
├── components/
│   ├── site/                   ← مكونات الموقع الخاصة
│   │   ├── hero.tsx            ← القسم الرئيسي (Banner)
│   │   ├── header.tsx          ← رأس الصفحة والتنقل
│   │   ├── footer.tsx          ← ذيل الصفحة
│   │   ├── sectors.tsx         ← القطاعات الصناعية
│   │   ├── journey.tsx         ← المدن الصناعية
│   │   ├── stats.tsx           ← الإحصائيات
│   │   ├── faq.tsx             ← الأسئلة الشائعة
│   │   ├── partners.tsx        ← أنواع المستخدمين
│   │   ├── register-dialog.tsx ← نموذج التسجيل
│   │   └── contact-dialog.tsx  ← نموذج التواصل
│   └── ui/                     ← مكونات UI الأساسية (Shadcn)
├── lib/
│   ├── industrial-data.ts      ← البيانات الثابتة (المدن، القطاعات، FAQ)
│   └── utils.ts                ← دوال مساعدة
├── public/                     ← الصور والملفات الثابتة
├── package.json
└── tsconfig.json
```

---

## 📚 الوثائق

| الوثيقة | الوصف |
|---------|--------|
| 📘 **[ARABIC_DOCUMENTATION.md](./ARABIC_DOCUMENTATION.md)** | **دليل شامل بالعربية:** التركيب، التشغيل، التعديل، النشر، وحل المشكلات — خطوة بخطوة |
| 🏗️ **[TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md)** | الهيكلية التقنية المعمّقة للمشروع |

---

## 🗺️ خريطة الطريق (Roadmap)

- [x] المنصة الأساسية وجميع الأقسام
- [x] نظام التسجيل متعدد الأدوار
- [x] دعم الوضع الليلي والعربية RTL
- [ ] ربط قاعدة بيانات حقيقية (PostgreSQL / MongoDB)
- [ ] نظام تسجيل دخول (Authentication)
- [ ] لوحة تحكم للمستخدمين
- [ ] دعم كامل للغة الفرنسية والإنجليزية (i18n)
- [ ] تطبيق جوال (React Native)

---

## 📄 الترخيص

هذا المشروع خاص وغير مفتوح المصدر. جميع الحقوق محفوظة للمطوّر.

</div>

---

<a name="english-version"></a>

# Agmais — The Smart Industrial Investment Platform 🇲🇦

## 📌 Overview

**Agmais** is an innovative, all-in-one digital platform designed to be the premier gateway for industrial investment in the Kingdom of Morocco. It connects investors, industrial experts, service providers, and global supply chains to facilitate the efficient establishment and operation of industrial projects.

## 🚀 Key Features

- **Industrial Cities Directory:** Interactive exploration of 7 key industrial zones in Morocco with precise investment and factory statistics.
- **Investment Sectors:** Comprehensive coverage of 6 strategic sectors (Automotive, Aeronautics, Phosphates, Renewable Energy, Textiles, Food Industry).
- **Multi-Role Registration System:** Dedicated portals for investors, experts, suppliers, supervisors, and service providers.
- **Multi-Language Support:** Full RTL Arabic interface, alongside French and English.
- **Dark/Light Mode:** A comfortable visual experience adaptable to user preferences.
- **Interactive UI:** A design based on the latest UX standards with fluid micro-animations.

## 🛠️ Tech Stack

- **Framework:** Next.js 16.2.0 (App Router) & React 19
- **Language:** TypeScript 5.7.3
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI & Shadcn UI
- **Icons:** Lucide React
- **Charts & Sliders:** Recharts & Embla Carousel

## ⚙️ Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Open http://localhost:3000 in your browser
```

## 📄 License

This project is proprietary and intended for sale. All rights reserved to the developer.
