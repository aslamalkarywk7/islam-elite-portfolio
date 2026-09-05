import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PARENT = path.join(__dirname, "..");
const PORT = process.env.PORT || 3000;

const app = express();

// مشاريعك الـ 18 — سيتم تقديمها تلقائياً تحت /live/<folder>
const PROJECTS = [
  "aetheria---glassmorphism-2.0-platform",
  "analog-antiques",
  "arabic-chat-ui-ux-design-website",
  "audio-engine-pro",
  "bauhaus-1919---creative-design-studio-1-",
  "clinics-portfolio-design",
  "dashboard-website",
  "design-dashboard-pro",
  "flat-design-website",
  "grid-studio---swiss-design-system",
  "industrial-marketplace-platform",
  "luxury-creative-agency",
  "mywebsite",
  "platform_horror",
  "raw-brutalist-creative-studio",
  "retrowave-studio",
  "studio-chroma",
  "zenith-finance",
];

// تقديم معرضك الرئيسي
app.use(express.static(__dirname));

// تقديم كل مشروع كـ sub-path حي
PROJECTS.forEach(folder => {
  const full = path.join(PARENT, folder);
  if (fs.existsSync(full)) {
    // /live/<folder>  ->  ../<folder>
    app.use(`/live/${folder}`, express.static(full));
    // كذلك للوصول المباشر من الـ iframe عبر مسار نسبي
    // نسمح بقراءة الملفات الثابتة
  }
});

// صفحة 404 أنيقة
app.use((req, res) => {
  res.status(404).send(`<h1 style="font-family:sans-serif;text-align:center;margin-top:10vh">404 — غير موجود<br><a href="/">العودة للمعرض</a></h1>`);
});

app.listen(PORT, () => {
  console.log(`\n✅ Elite Portfolio LIVE`);
  console.log(`   Local:   http://localhost:${PORT}/`);
  console.log(`   Live projects:`);
  PROJECTS.forEach(f => console.log(`   → http://localhost:${PORT}/live/${f}/`));
  console.log(`\n   اضغط على أي مشروع داخل المعرض وستفتح معاينته الحية داخل الموقع.`);
  console.log(`   لإيقاف السيرفر: Ctrl + C\n`);
});
