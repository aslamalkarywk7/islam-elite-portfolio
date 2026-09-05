# Elite Portfolio — 18 مشروع بمعاينة حية مدمجة

معرض أعمال إسلام النشار — كل المشاريع تشتغل **داخل الموقع الرئيسي** بضغطة واحدة، بدون تحميل.

## التشغيل المحلي (موصى به للعرض على العميل)

```bash
cd islam-portfolio-elite
npm install
npm run dev
# افتح http://localhost:3000
```

أو دبل كليك على `START.bat`

- المعرض الرئيسي: `http://localhost:3000/`
- كل مشروع حي: `http://localhost:3000/live/<اسم المجلد>/`
  - مثال: `http://localhost:3000/live/aetheria---glassmorphism-2.0-platform/`
  - مثال: `http://localhost:3000/live/platform_horror/`

## كيف تعمل المعاينة؟

1. **معاينة فورية (srcdoc)** — عند الضغط على أي كارت، يفتح مودال فيه `iframe` يعرض معاينة حية مولدة بألوان وتقنيات المشروع الحقيقي. هذه تعمل **دائماً** حتى بدون سيرفر، وحتى على GitHub Pages / Netlify.
2. **المشروع الحقيقي** — داخل المودال زر `فتح المشروع الحقيقي ↗` يبدّل الـ iframe ليحمل المشروع الفعلي من `/live/<folder>/` (عند تشغيل `server.js`). للـ Vite/Next يحتاج `npm install && npm run dev` داخل مجلد المشروع إذا أردت التفاعل الكامل.

**المميزات داخل المودال:** معاينة Desktop/Tablet/Mobile + ملء شاشة + فتح في تبويب جديد + نسخ رابط المعاينة.

## الرفع للـ CV (GitHub Pages / Netlify / Vercel)

ارفع مجلد `islam-portfolio-elite` فقط. المعاينات الفورية ستعمل تلقائياً بدون سيرفر. للمعاينات الحقيقية الكاملة على الاستضافة الثابتة، ابنِ مشاريع Vite بـ `npm run build` وانسخ مجلد `dist` إلى `live/<folder>` قبل الرفع.

## التعديل

- البيانات: `script.js:1` مصفوفة `projects`
- التصميم: `style.css:299` مودال المعاينة
- السيرفر: `server.js:1`
