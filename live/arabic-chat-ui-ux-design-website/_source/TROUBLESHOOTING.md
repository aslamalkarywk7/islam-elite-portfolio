# 🔧 دليل حل المشكلات — شات العرب

> حلول شاملة للمشكلات الشائعة التي قد تواجهها أثناء التطوير والنشر

---

## 📋 جدول المحتويات

1. [مشكلات التثبيت](#1-مشكلات-التثبيت)
2. [مشكلات التشغيل](#2-مشكلات-التشغيل)
3. [مشكلات الأداء والبناء](#3-مشكلات-الأداء-والبناء)
4. [مشكلات الواجهة والتصميم](#4-مشكلات-الواجهة-والتصميم)
5. [مشكلات TypeScript](#5-مشكلات-typescript)
6. [مشكلات RTL والعربية](#6-مشكلات-rtl-والعربية)
7. [أخطاء شائعة في Next.js](#7-أخطاء-شائعة-في-nextjs)

---

## 1. مشكلات التثبيت

### ❌ `npm ERR! code ERESOLVE` — تعارض بين إصدارات الحزم

**السبب:** تعارض في إصدارات الحزم التابعة.

**الحل:**

```bash
# الطريقة 1: استخدام legacy-peer-deps
npm install --legacy-peer-deps

# الطريقة 2: استخدام force
npm install --force

# الطريقة 3: حذف كل شيء والبدء من جديد
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

### ❌ `ENOENT: no such file or directory` — ملف غير موجود

**السبب:** تنفيذ الأمر من مجلد خاطئ.

**الحل:**

```bash
# تأكد أنك في المجلد الصحيح
pwd   # على Linux/macOS
cd    # على Windows

# يجب أن تكون في المجلد الذي يحتوي على package.json
ls package.json   # على Linux/macOS
dir package.json  # على Windows
```

---

### ❌ `EACCES: permission denied` — خطأ في الصلاحيات

**السبب:** نقص في صلاحيات الكتابة.

**الحل على Linux/macOS:**

```bash
# لا تستخدم sudo مع npm! بدلاً من ذلك:

# إصلاح ملكية مجلد npm
sudo chown -R $(whoami) ~/.npm

# أو استخدام nvm لإدارة Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
```

**الحل على Windows:**

```powershell
# شغّل PowerShell كمدير (Administrator)
# ثم نفّذ:
npm install
```

---

### ❌ `pnpm: command not found` — pnpm غير مثبت

**الحل:**

```bash
# الطريقة 1: عبر npm
npm install -g pnpm

# الطريقة 2: عبر corepack
corepack enable
corepack prepare pnpm@latest --activate

# الطريقة 3: استخدم npm بدلاً من pnpm
npm install   # بدلاً من pnpm install
npm run dev   # بدلاً من pnpm dev
```

---

## 2. مشكلات التشغيل

### ❌ `Error: listen EADDRINUSE :::3000` — المنفذ مشغول

**السبب:** تطبيق آخر يستخدم المنفذ 3000.

**الحل:**

```bash
# الطريقة 1: استخدام منفذ آخر
npm run dev -- --port 3001
# أو
pnpm dev -- --port 3001

# الطريقة 2: إيقاف العملية الشاغلة
# على Linux/macOS
lsof -ti:3000 | xargs kill -9

# على Windows (PowerShell)
$pid = (Get-NetTCPConnection -LocalPort 3000).OwningProcess
Stop-Process -Id $pid -Force
```

---

### ❌ الصفحة لا تتحدث تلقائياً (Hot Reload لا يعمل)

**السبب:** مشكلة في نظام ملفات Windows أو إعدادات الـ Firewall.

**الحل:**

```bash
# تشغيل التحديث التلقائي بشكل صريح
WATCHPACK_POLLING=true npm run dev   # Linux/macOS

# على Windows
set WATCHPACK_POLLING=true && npm run dev
```

أو أضف هذا في `next.config.mjs`:

```javascript
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
```

---

### ❌ `Module not found: Can't resolve '@/components/...'`

**السبب:** مسار الاستيراد غير صحيح أو ملف `tsconfig.json` غير مضبوط.

**الحل:**

```bash
# تأكد من وجود paths في tsconfig.json
cat tsconfig.json
```

يجب أن يحتوي على:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 3. مشكلات الأداء والبناء

### ❌ `Error: Failed to compile` — خطأ في التجميع

**الأسباب الشائعة والحلول:**

```bash
# تحقق من تفاصيل الخطأ
npm run build 2>&1 | head -50

# حذف مجلد الـ build القديم
rm -rf .next
npm run build
```

---

### ❌ بطء شديد في وقت البناء

**الحل:**

```bash
# استخدام pnpm بدلاً من npm (أسرع بكثير)
npm install -g pnpm
pnpm install
pnpm build

# أو تفعيل Turbopack (تجريبي)
npm run dev -- --turbopack
```

---

### ❌ `JavaScript heap out of memory` — نفاد الذاكرة

**الحل:**

```bash
# زيادة ذاكرة Node.js
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# على Windows
set NODE_OPTIONS=--max-old-space-size=4096 && npm run build
```

---

## 4. مشكلات الواجهة والتصميم

### ❌ أنماط Tailwind لا تظهر بشكل صحيح

**السبب:** مشكلة في إعداد Tailwind CSS v4.

**تحقق من ملف `postcss.config.mjs`:**

```javascript
// يجب أن يكون هكذا
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

**وتحقق من `app/globals.css`:**

```css
/* يجب أن يبدأ بهذا */
@import "tailwindcss";
```

---

### ❌ الوضع الداكن (Dark Mode) لا يعمل

**السبب:** إعداد `dark` غير موجود في HTML.

**الحل:**

```tsx
// في app/layout.tsx — تأكد من وجود className="dark"
<html lang="ar" dir="rtl" className="dark">
```

---

### ❌ الأيقونات من Lucide لا تظهر

**الحل:**

```bash
# تحديث حزمة lucide-react
npm install lucide-react@latest

# أو تثبيت إصدار محدد
npm install lucide-react@0.564.0
```

---

## 5. مشكلات TypeScript

### ❌ `Type 'X' is not assignable to type 'Y'`

**مثال شائع:**

```tsx
// خطأ
const role = "owner";  // النوع: string
// لكن الدالة تتوقع: Role = "owner" | "admin" | "vip" ...

// الحل: استخدم type assertion
const role = "owner" as Role;

// أو استخدم const assertion
const role = "owner" as const;
```

---

### ❌ `Cannot find module or its corresponding type declarations`

**الحل:**

```bash
# تثبيت أنواع TypeScript الناقصة
npm install --save-dev @types/node @types/react @types/react-dom

# مثال لحزمة بدون أنواع
npm install --save-dev @types/some-package
```

---

### ❌ تجاهل أخطاء TypeScript مؤقتاً (للاختبار فقط)

```tsx
// تجاهل سطر واحد
// @ts-ignore
const problematicCode = something();

// تجاهل ملف كامل
// @ts-nocheck
// في أعلى الملف
```

---

## 6. مشكلات RTL والعربية

### ❌ النص العربي يظهر من اليسار لليمين (LTR)

**الحل:**

```tsx
// تأكد من وجود dir="rtl" في layout.tsx
<html lang="ar" dir="rtl">
```

```css
/* أو في globals.css */
html {
  direction: rtl;
}
```

---

### ❌ الخط العربي لا يظهر بشكل صحيح

**الحل:**

```tsx
// في app/layout.tsx — تأكد من تضمين arabic في subsets
const cairo = Cairo({ 
  subsets: ["arabic", "latin"],  // ← arabic مطلوب
  variable: '--font-cairo'
});
```

---

### ❌ الأيقونات والعناصر في الاتجاه الخاطئ

**الحل:** استخدم Tailwind Logical Properties:

```tsx
// ❌ لا تستخدم هذا (يعتمد على اليسار/اليمين)
<div className="ml-4 pl-2 text-left">

// ✅ استخدم هذا بدلاً منه (يتكيف مع RTL تلقائياً)
<div className="ms-4 ps-2 text-start">
```

| خاصية LTR | خاصية Logical |
|-----------|---------------|
| `ml-*` | `ms-*` (margin-start) |
| `mr-*` | `me-*` (margin-end) |
| `pl-*` | `ps-*` (padding-start) |
| `pr-*` | `pe-*` (padding-end) |
| `text-left` | `text-start` |
| `text-right` | `text-end` |
| `left-0` | `start-0` |
| `right-0` | `end-0` |

---

## 7. أخطاء شائعة في Next.js

### ❌ `Hydration failed` — خطأ في المزامنة بين Server و Client

**السبب الأكثر شيوعاً:** استخدام `Date.now()` أو `Math.random()` مباشرة في JSX.

**الحل:**

```tsx
// ❌ خطأ
const time = Date.now();

// ✅ صحيح
"use client";
import { useState, useEffect } from "react";

const [time, setTime] = useState<number | null>(null);
useEffect(() => {
  setTime(Date.now());
}, []);
```

---

### ❌ `useRouter is not defined` أو `usePathname` لا يعمل

**الحل:**

```tsx
// تأكد من وجود "use client" في أعلى الملف
"use client";

import { useRouter, usePathname } from "next/navigation";  // ← من next/navigation وليس next/router
```

---

### ❌ الصور لا تُحمَّل من مسارات خارجية

**الحل في `next.config.mjs`:**

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};
```

---

### ❌ خطأ في `params` في Next.js 15+

**السبب:** في Next.js 15، أصبحت params خاصية async.

**الحل:**

```tsx
// ❌ قديم (Next.js 14 وأقل)
export default function Page({ params }: { params: { roomId: string } }) {
  const roomId = params.roomId;
}

// ✅ جديد (Next.js 15+)
import { use } from "react";

export default function Page({ params }: { params: Promise<{ roomId: string }> }) {
  const resolvedParams = use(params);
  const roomId = resolvedParams.roomId;
}
```

---

## 🆘 الحصول على مساعدة إضافية

إذا لم تجد حلاً لمشكلتك هنا:

1. **ابحث في GitHub Issues** للمشروع
2. **راجع التوثيق الرسمي:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind CSS v4](https://tailwindcss.com/docs)
   - [Shadcn UI](https://ui.shadcn.com)
3. **افتح Issue جديد** على GitHub مع:
   - وصف المشكلة
   - رسالة الخطأ الكاملة
   - الإصدارات المستخدمة (`node --version`, `npm --version`)
   - نظام التشغيل
