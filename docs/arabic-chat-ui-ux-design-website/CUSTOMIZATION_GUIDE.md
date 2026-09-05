# 🎨 دليل التخصيص والتعديل — شات العرب

> دليل شامل خطوة بخطوة لتعديل القالب وتكييفه مع احتياجاتك

---

## 📋 جدول المحتويات

1. [تعديل الهوية البصرية والألوان](#1-تعديل-الهوية-البصرية-والألوان)
2. [تعديل الخطوط](#2-تعديل-الخطوط)
3. [تعديل الغرف والمحتوى](#3-تعديل-الغرف-والمحتوى)
4. [تعديل نظام الرتب والصلاحيات](#4-تعديل-نظام-الرتب-والصلاحيات)
5. [تعديل صفحة الهبوط](#5-تعديل-صفحة-الهبوط)
6. [إضافة مكونات جديدة](#6-إضافة-مكونات-جديدة)
7. [تعديل الإعدادات العامة](#7-تعديل-الإعدادات-العامة)
8. [ربط الخلفية (Backend Integration)](#8-ربط-الخلفية)

---

## 1. تعديل الهوية البصرية والألوان

### ملف الألوان الرئيسي

يقع ملف الأنماط الرئيسي في:
```
app/globals.css
```

هذا الملف يحتوي على متغيرات CSS التي تتحكم في كل ألوان التطبيق.

### كيفية تغيير الألوان:

افتح الملف `app/globals.css` وابحث عن القسم `:root`:

```css
:root {
  /* لون الخلفية الرئيسي */
  --background: oklch(0.145 0 0);
  
  /* لون النصوص */
  --foreground: oklch(0.985 0 0);
  
  /* اللون الأساسي (الأزرق الافتراضي) */
  --primary: oklch(0.922 0 0);
  
  /* لون البطاقات */
  --card: oklch(0.205 0 0);
  
  /* لون الحدود */
  --border: oklch(1 0 0 / 10%);
}
```

### مثال عملي — تغيير اللون الأساسي إلى الأخضر:

```css
:root {
  /* اللون الأساسي - أخضر */
  --primary: oklch(0.65 0.2 142);
  --primary-foreground: oklch(0.98 0 0);
}
```

### مثال عملي — تغيير اللون الأساسي إلى البنفسجي:

```css
:root {
  /* اللون الأساسي - بنفسجي */
  --primary: oklch(0.6 0.25 280);
  --primary-foreground: oklch(0.98 0 0);
}
```

> 💡 **نصيحة:** استخدم أداة [oklch.com](https://oklch.com) للحصول على قيم الألوان بصيغة OKLCH.

---

## 2. تعديل الخطوط

### الملف المسؤول عن الخطوط:
```
app/layout.tsx
```

### الخط الحالي: Cairo

```tsx
// app/layout.tsx
import { Cairo } from 'next/font/google'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo'
});
```

### تغيير الخط إلى Tajawal:

```tsx
// الخطوة 1: استبدل الاستيراد
import { Tajawal } from 'next/font/google'

// الخطوة 2: غيّر متغير الخط
const tajawal = Tajawal({ 
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: '--font-tajawal'
});

// الخطوة 3: غيّر استخدام المتغير في body
<body className={`${tajawal.variable} font-sans antialiased`}>
```

### تغيير الخط إلى IBM Plex Arabic:

```tsx
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const ibmPlex = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-ibm'
});
```

### الخطوط العربية المتاحة في Google Fonts:
- `Cairo` — حديث ومريح
- `Tajawal` — نظيف وبسيط
- `Almarai` — أنيق ورسمي
- `IBM_Plex_Sans_Arabic` — احترافي
- `Noto_Sans_Arabic` — شامل ومتوافق

---

## 3. تعديل الغرف والمحتوى

### ملف غرفة الدردشة الرئيسي:
```
app/chat/[roomId]/page.tsx
```

### إضافة غرف جديدة:

ابحث عن الكائن `roomNames` في الملف (السطر ~54):

```tsx
// قبل التعديل
const roomNames: Record<string, string> = {
  general: "الغرفة العامة",
  music: "غرفة الموسيقى",
  gaming: "غرفة الألعاب",
  romance: "غرفة الحب",
  movies: "غرفة الأفلام",
  books: "غرفة القراءة",
  coffee: "غرفة الاستراحة",
  news: "غرفة الأخبار",
};

// بعد التعديل — أضف غرفك الجديدة
const roomNames: Record<string, string> = {
  general: "الغرفة العامة",
  music: "غرفة الموسيقى",
  gaming: "غرفة الألعاب",
  romance: "غرفة الحب",
  movies: "غرفة الأفلام",
  books: "غرفة القراءة",
  coffee: "غرفة الاستراحة",
  news: "غرفة الأخبار",
  // ← غرف جديدة
  sports: "غرفة الرياضة",
  tech: "غرفة التقنية",
  cooking: "غرفة الطبخ",
  travel: "غرفة السفر",
};
```

### تعديل قائمة الغرف في صفحة الاختيار:

الملف: `app/rooms/page.tsx`

```tsx
// ابحث عن مصفوفة الغرف وأضف عناصر جديدة
const rooms = [
  {
    id: "general",
    name: "الغرفة العامة",
    description: "للحديث في كل شيء",
    icon: "💬",
    members: 234,
  },
  // ← أضف غرفك هنا
  {
    id: "sports",
    name: "غرفة الرياضة",
    description: "لمحبي الرياضة والمباريات",
    icon: "⚽",
    members: 156,
  },
];
```

### تعديل الرسائل التجريبية (Mock Data):

ابحث عن `mockMessages` في `app/chat/[roomId]/page.tsx`:

```tsx
const mockMessages: Message[] = [
  { 
    id: "1", 
    userId: "1", 
    userName: "أحمد الخالدي",  // ← غيّر الاسم
    userRole: "owner", 
    content: "مرحباً بالجميع!",  // ← غيّر المحتوى
    timestamp: new Date(Date.now() - 3600000) 
  },
  // أضف رسائل جديدة هنا...
];
```

---

## 4. تعديل نظام الرتب والصلاحيات

### ملف قائمة المستخدمين:
```
components/chat/user-list-sidebar.tsx
```

### ملف الرسائل:
```
components/chat/chat-message.tsx
```

### أنواع الرتب المتاحة:

```tsx
// تعريف الرتب في app/chat/[roomId]/page.tsx
type Role = "owner" | "admin" | "vip" | "member" | "guest";
```

### إضافة رتبة جديدة:

**الخطوة 1:** أضف الرتبة إلى النوع `Role`:

```tsx
type Role = "owner" | "admin" | "moderator" | "vip" | "member" | "guest";
//                              ↑ رتبة جديدة
```

**الخطوة 2:** أضف لون ومظهر للرتبة الجديدة في `chat-message.tsx`:

```tsx
// ابحث عن دالة getRoleStyles أو ما يشابهها
const getRoleBadge = (role: Role) => {
  switch (role) {
    case "owner":
      return { label: "مالك", className: "bg-yellow-500/20 text-yellow-400" };
    case "admin":
      return { label: "مشرف", className: "bg-red-500/20 text-red-400" };
    case "moderator":
      // ← أضف الرتبة الجديدة
      return { label: "مراقب", className: "bg-orange-500/20 text-orange-400" };
    case "vip":
      return { label: "VIP", className: "bg-purple-500/20 text-purple-400" };
    case "member":
      return { label: "عضو", className: "bg-blue-500/20 text-blue-400" };
    default:
      return { label: "زائر", className: "bg-gray-500/20 text-gray-400" };
  }
};
```

### تعديل المستخدمين التجريبيين:

```tsx
// في app/chat/[roomId]/page.tsx
const mockUsers: User[] = [
  { id: "1", name: "اسم المستخدم الأول", role: "owner", isOnline: true },
  { id: "2", name: "اسم المستخدم الثاني", role: "admin", isOnline: true },
  // أضف مستخدمين جدد هنا...
];
```

---

## 5. تعديل صفحة الهبوط

### ملف الصفحة الرئيسية:
```
app/page.tsx
```

هذا الملف هو صفحة الهبوط (Landing Page) الرئيسية.

### تعديل العنوان الرئيسي والوصف:

ابحث في `app/page.tsx` عن النصوص الرئيسية:

```tsx
// ابحث عن قسم البطل (Hero Section)
<h1 className="text-5xl font-bold">
  شات العرب  {/* ← غيّر العنوان */}
</h1>
<p className="text-xl text-muted-foreground">
  منصة دردشة عربية  {/* ← غيّر الوصف */}
</p>
```

### تعديل معلومات SEO (بيانات الصفحة):

```tsx
// في app/layout.tsx
export const metadata: Metadata = {
  title: 'شات العرب - غرف دردشة عربية',      // ← غيّر عنوان المتصفح
  description: 'منصة دردشة عربية حديثة...',  // ← غيّر الوصف
};
```

---

## 6. إضافة مكونات جديدة

### هيكل المكونات:
```
components/
├── chat/
│   ├── chat-message.tsx       ← مكون الرسالة
│   ├── emoji-picker.tsx       ← منتقي الإيموجي
│   ├── private-message-popup.tsx  ← نافذة الرسائل الخاصة
│   └── user-list-sidebar.tsx  ← قائمة المستخدمين
├── ui/                        ← مكونات Shadcn UI
└── theme-provider.tsx         ← مزوّد الثيم
```

### مثال — إنشاء مكون إشعارات جديد:

**الخطوة 1:** أنشئ الملف `components/chat/notification-bell.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  message: string;
  time: Date;
  isRead: boolean;
}

export function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-72 bg-card border border-border rounded-xl shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold">الإشعارات</h3>
          </div>
          {notifications.length === 0 ? (
            <p className="p-4 text-center text-muted-foreground text-sm">
              لا توجد إشعارات
            </p>
          ) : (
            <ul>
              {notifications.map(notification => (
                <li key={notification.id} className="p-3 hover:bg-muted/50 transition-colors">
                  {notification.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
```

**الخطوة 2:** استخدم المكون في الـ Header:

```tsx
// في app/chat/[roomId]/page.tsx
import { NotificationBell } from "@/components/chat/notification-bell";

// داخل JSX في قسم الهيدر
<div className="flex items-center gap-2">
  <NotificationBell />  {/* ← أضف المكون هنا */}
  {/* باقي العناصر... */}
</div>
```

---

## 7. تعديل الإعدادات العامة

### ملف إعدادات Next.js:
```
next.config.mjs
```

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // السماح بتحميل الصور من نطاقات خارجية
  images: {
    domains: ['example.com', 'cdn.yoursite.com'],
  },
  
  // إعدادات إضافية
  experimental: {
    // تفعيل ميزات تجريبية إذا لزم
  },
};

export default nextConfig;
```

### ملف إعدادات TypeScript:
```
tsconfig.json
```

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### ملف إعدادات Shadcn UI:
```
components.json
```

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "zinc",
    "cssVariables": true
  }
}
```

---

## 8. ربط الخلفية

### ربط Socket.io للدردشة الحية:

**الخطوة 1:** ثبّت حزمة Socket.io client:

```bash
npm install socket.io-client
# أو
pnpm add socket.io-client
```

**الخطوة 2:** أنشئ ملف الاتصال `lib/socket.ts`:

```typescript
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4000', {
      transports: ['websocket'],
      autoConnect: false,
    });
  }
  return socket;
}

export function connectSocket(token?: string) {
  const s = getSocket();
  if (token) {
    s.auth = { token };
  }
  s.connect();
  return s;
}

export function disconnectSocket() {
  socket?.disconnect();
  socket = null;
}
```

**الخطوة 3:** استخدم Socket في مكون الدردشة:

```tsx
// في app/chat/[roomId]/page.tsx

"use client";
import { useEffect, useState } from "react";
import { connectSocket, disconnectSocket } from "@/lib/socket";

export default function ChatPage({ params }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // الاتصال بالخادم
    const socket = connectSocket(/* userToken */);

    // الانضمام للغرفة
    socket.emit('join-room', { roomId });

    // استقبال الرسائل الجديدة
    socket.on('new-message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    // استقبال قائمة المستخدمين المتصلين
    socket.on('users-update', (users) => {
      // تحديث قائمة المستخدمين
    });

    // تنظيف الاتصال عند مغادرة الصفحة
    return () => {
      socket.emit('leave-room', { roomId });
      disconnectSocket();
    };
  }, [roomId]);

  const handleSendMessage = (content: string) => {
    const socket = getSocket();
    socket.emit('send-message', {
      roomId,
      content,
      timestamp: new Date(),
    });
  };
}
```

### ربط Firebase Realtime Database:

**الخطوة 1:** ثبّت Firebase:

```bash
npm install firebase
```

**الخطوة 2:** أنشئ ملف `lib/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
```

**الخطوة 3:** إنشاء ملف `.env.local` في جذر المشروع:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

---

> 📌 **للمزيد:** راجع [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md) لفهم البنية التقنية الكاملة.
