# 🚀 دليل التثبيت والتشغيل التفصيلي — شات العرب

> **الإصدار:** 1.0.0 | **آخر تحديث:** مايو 2026

---

## 📋 جدول المحتويات

1. [متطلبات النظام](#1-متطلبات-النظام)
2. [تثبيت الأدوات الأساسية](#2-تثبيت-الأدوات-الأساسية)
3. [تحميل المشروع](#3-تحميل-المشروع)
4. [تثبيت الحزم والمكتبات](#4-تثبيت-الحزم-والمكتبات)
5. [تشغيل المشروع محلياً](#5-تشغيل-المشروع-محلياً)
6. [بناء النسخة الإنتاجية](#6-بناء-النسخة-الإنتاجية)
7. [النشر على الإنترنت](#7-النشر-على-الإنترنت)
8. [حل المشكلات الشائعة](#8-حل-المشكلات-الشائعة)

---

## 1. متطلبات النظام

قبل البدء، تأكد من توافر الأدوات التالية على جهازك:

| الأداة | الإصدار الأدنى | الإصدار الموصى به | الرابط |
|--------|----------------|-------------------|--------|
| **Node.js** | 18.0.0 | 20.x LTS أو أحدث | [nodejs.org](https://nodejs.org) |
| **npm** | 9.0.0 | يأتي مع Node.js | — |
| **pnpm** *(اختياري)* | 8.0.0 | 9.x | [pnpm.io](https://pnpm.io) |
| **Git** | 2.30.0 | أحدث إصدار | [git-scm.com](https://git-scm.com) |

### 🔍 التحقق من الإصدارات المثبتة

افتح الطرفية (Terminal/Command Prompt) ونفّذ الأوامر التالية:

```bash
# التحقق من Node.js
node --version
# المتوقع: v20.x.x أو أعلى

# التحقق من npm
npm --version
# المتوقع: 10.x.x أو أعلى

# التحقق من Git
git --version
# المتوقع: git version 2.x.x
```

---

## 2. تثبيت الأدوات الأساسية

### تثبيت Node.js

#### على Windows:
1. توجه إلى [nodejs.org](https://nodejs.org/en/download/)
2. حمّل النسخة **LTS** (الموصى بها)
3. شغّل ملف الإعداد `.msi` واتبع الخطوات
4. أعد تشغيل الطرفية بعد الانتهاء

#### على macOS:
```bash
# باستخدام Homebrew (الطريقة الموصى بها)
brew install node

# أو حمّل المثبّت مباشرة من nodejs.org
```

#### على Linux (Ubuntu/Debian):
```bash
# إضافة مستودع NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# تثبيت Node.js
sudo apt-get install -y nodejs
```

### تثبيت pnpm (اختياري لكن موصى به)

```bash
# عبر npm
npm install -g pnpm

# أو عبر corepack (مدمج مع Node.js 16+)
corepack enable
corepack prepare pnpm@latest --activate
```

---

## 3. تحميل المشروع

### الطريقة الأولى: استنساخ من Git

```bash
# استنساخ المستودع
git clone https://github.com/your-username/arabic-chat-ui.git

# الانتقال إلى مجلد المشروع
cd arabic-chat-ui
```

### الطريقة الثانية: تحميل مباشر (ZIP)

1. اذهب إلى صفحة المستودع على GitHub
2. اضغط على زر **"Code"** الأخضر
3. اختر **"Download ZIP"**
4. فكّ الضغط عن الملف المحمّل
5. افتح الطرفية وانتقل إلى المجلد المفكوك:

```bash
cd arabic-chat-ui-ux-design-website-main
```

---

## 4. تثبيت الحزم والمكتبات

بعد الانتقال إلى مجلد المشروع، نفّذ أحد الأوامر التالية:

### باستخدام pnpm (الأسرع والموصى به):

```bash
pnpm install
```

### باستخدام npm:

```bash
npm install
```

> ⏳ **ملاحظة:** قد تستغرق عملية التثبيت من دقيقة إلى بضع دقائق حسب سرعة الإنترنت لديك. يحتوي المشروع على أكثر من 40 حزمة من Radix UI بالإضافة إلى Next.js وReact.

### التحقق من نجاح التثبيت:

```bash
# يجب أن يُنشئ هذا الأمر مجلد node_modules
ls node_modules   # على Linux/macOS
dir node_modules  # على Windows
```

---

## 5. تشغيل المشروع محلياً

### تشغيل خادم التطوير:

```bash
# باستخدام pnpm
pnpm dev

# باستخدام npm
npm run dev
```

بعد تشغيل الأمر، ستظهر رسالة مشابهة لهذه:

```
▲ Next.js 16.1.6
- Local:        http://localhost:3000
- Environments: .env.local

✓ Starting...
✓ Ready in 2.3s
```

### فتح التطبيق في المتصفح:

افتح متصفحك المفضل وانتقل إلى:

```
http://localhost:3000
```

### الصفحات المتاحة في التطبيق:

| الصفحة | الرابط | الوصف |
|--------|--------|-------|
| الصفحة الرئيسية | `http://localhost:3000` | صفحة هبوط المنصة |
| قائمة الغرف | `http://localhost:3000/rooms` | تصفح غرف الدردشة |
| غرفة عامة | `http://localhost:3000/chat/general` | الغرفة العامة |
| غرفة الموسيقى | `http://localhost:3000/chat/music` | غرفة موسيقى |
| غرفة الألعاب | `http://localhost:3000/chat/gaming` | غرفة ألعاب |
| لوحة الإدارة | `http://localhost:3000/admin` | لوحة تحكم المشرف |

---

## 6. بناء النسخة الإنتاجية

عند الانتهاء من التطوير وجاهزيتك للنشر:

```bash
# باستخدام pnpm
pnpm build

# باستخدام npm
npm run build
```

سيُنشئ هذا الأمر مجلد `.next` يحتوي على النسخة المُحسَّنة للإنتاج.

### اختبار النسخة الإنتاجية محلياً:

```bash
# باستخدام pnpm
pnpm start

# باستخدام npm
npm start
```

---

## 7. النشر على الإنترنت

### النشر على Vercel (الأسهل والمجاني):

#### الطريقة السريعة عبر CLI:

```bash
# تثبيت Vercel CLI
npm install -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel --prod
```

#### عبر الموقع الإلكتروني:

1. انتقل إلى [vercel.com](https://vercel.com) وسجّل دخولك
2. اضغط على **"New Project"**
3. استورد المستودع من GitHub
4. اضغط على **"Deploy"**
5. انتظر بضع ثوانٍ وسيكون موقعك جاهزاً!

### النشر على Netlify:

```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# بناء المشروع أولاً
npm run build

# النشر
netlify deploy --prod --dir=.next
```

---

## 8. حل المشكلات الشائعة

### ❌ المشكلة: `node: command not found`

**الحل:** Node.js غير مثبت. راجع [قسم التثبيت](#2-تثبيت-الأدوات-الأساسية).

---

### ❌ المشكلة: خطأ في تثبيت الحزم

```
npm ERR! code ERESOLVE
```

**الحل:**

```bash
# احذف مجلد node_modules وملف القفل
rm -rf node_modules package-lock.json

# أعد التثبيت
npm install --legacy-peer-deps
```

---

### ❌ المشكلة: المنفذ 3000 مشغول

```
Error: listen EADDRINUSE: address already in use :::3000
```

**الحل:**

```bash
# تشغيل على منفذ آخر
npm run dev -- -p 3001

# أو إيقاف العملية الشاغلة للمنفذ (Linux/macOS)
kill $(lsof -t -i:3000)

# على Windows
netstat -ano | findstr :3000
taskkill /PID <الرقم> /F
```

---

### ❌ المشكلة: خطأ TypeScript أثناء البناء

**الحل:**

```bash
# التحقق من أخطاء TypeScript
npx tsc --noEmit

# أو تجاهل أخطاء TypeScript مؤقتاً (غير موصى به للإنتاج)
# أضف هذا في next.config.mjs:
# typescript: { ignoreBuildErrors: true }
```

---

### ❌ المشكلة: مشكلة في حزم Tailwind CSS v4

**الحل:**

```bash
# تأكد من وجود postcss.config.mjs صحيح
cat postcss.config.mjs

# يجب أن يحتوي على:
# export default { plugins: { '@tailwindcss/postcss': {} } }
```

---

> 📌 **هل واجهت مشكلة لم تُذكر هنا؟** راجع [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) أو افتح issue على GitHub.
