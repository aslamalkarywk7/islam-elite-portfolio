# 🏗️ الهيكلية التقنية لشات العرب — دليل المطور

> وثيقة تقنية شاملة تشرح البنية المعمارية للمشروع وكيفية التعامل مع كل طبقة فيه

---

## 📋 جدول المحتويات

1. [نظرة عامة على البنية](#1-نظرة-عامة-على-البنية)
2. [التوجه المعماري](#2-التوجه-المعماري)
3. [هيكل الملفات](#3-هيكل-الملفات)
4. [إدارة الحالة الحية](#4-إدارة-الحالة-الحية)
5. [التخصيص للمنطقة العربية](#5-التخصيص-للمنطقة-العربية)
6. [نظام الرتب والألوان](#6-نظام-الرتب-والألوان)
7. [مكونات الواجهة المستخدمة](#7-مكونات-الواجهة-المستخدمة)
8. [الجاهزية للتطوير والربط بالخلفية](#8-الجاهزية-للتطوير-والربط-بالخلفية)
9. [نظام التوجيه والصفحات](#9-نظام-التوجيه-والصفحات)
10. [الأنواع والواجهات البرمجية](#10-الأنواع-والواجهات-البرمجية)

---

## 1. نظرة عامة على البنية

تسلط هذه الوثيقة الضوء على الأساس التقني لتطبيق **شات العرب (Arabic Chat UI)**. تم بناء هذا القالب ليكون الواجهة الأمامية (Frontend) المثالية لأي خادم دردشة (Backend) يعتمد على تقنيات الاتصال اللحظي.

```
┌─────────────────────────────────────────────────────────┐
│                     المستخدم (Browser)                   │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│              Next.js App Router (Frontend)               │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────┐ │
│  │ Server Comp │  │Client Compo  │  │  Static Assets  │ │
│  │(Landing Page│  │ (Chat UI)    │  │  (Images/Icons) │ │
│  └─────────────┘  └──────┬───────┘  └─────────────────┘ │
└─────────────────────────┼───────────────────────────────┘
                          │ WebSocket / REST API
┌─────────────────────────▼───────────────────────────────┐
│                Backend (مستقل - اختياري)                 │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────┐ │
│  │  Socket.io  │  │  REST API    │  │   Database      │ │
│  │  (الرسائل) │  │(المصادقة)   │  │(MongoDB/Postgres)│ │
│  └─────────────┘  └──────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 2. التوجه المعماري

### إطار العمل: Next.js App Router

تم استخدام بيئة عمل **Next.js (App Router)** لبناء هذا التطبيق. ونظراً لأن تطبيقات الدردشة تعتمد بشكل أساسي على تفاعل المستخدم المستمر، فقد تم التركيز على:

#### Client Components (`'use client'`)

يتم استخدامها بشكل واسع في واجهات الدردشة لضمان:
- **الحفاظ على حالة الاتصال** (WebSocket Connection State)
- **معالجة أحداث الكتابة** (Typing Events)
- **التحكم في الإشعارات** محلياً

**المكونات التي تستخدم `"use client"`:**
- `app/chat/[roomId]/page.tsx` — صفحة غرفة الدردشة
- `components/chat/chat-message.tsx` — مكون عرض الرسائل
- `components/chat/emoji-picker.tsx` — منتقي الإيموجي
- `components/chat/private-message-popup.tsx` — الرسائل الخاصة
- `components/chat/user-list-sidebar.tsx` — قائمة المستخدمين

#### Server Components

مستخدمة في الأجزاء الثابتة لضمان **سرعة تحميل أولية عالية (Fast FCP)**:
- `app/layout.tsx` — التخطيط العام
- `app/page.tsx` — صفحة الهبوط
- `app/rooms/page.tsx` — قائمة الغرف

### التقنيات الأساسية:

| التقنية | الإصدار | الغرض |
|---------|---------|-------|
| **Next.js** | 16.1.6 | إطار العمل الرئيسي |
| **React** | 19.2.4 | مكتبة واجهة المستخدم |
| **TypeScript** | 5.7.3 | لغة البرمجة المكتوبة بأنواع |
| **Tailwind CSS** | v4 | نظام التصميم |
| **Radix UI** | 1.x | مكونات واجهة المستخدم |
| **Shadcn UI** | — | طبقة التصميم فوق Radix |
| **Lucide React** | 0.564.0 | مكتبة الأيقونات |

---

## 3. هيكل الملفات

```
arabic-chat-ui/
│
├── 📁 app/                          # Next.js App Router
│   ├── 📄 layout.tsx                # التخطيط الجذري (HTML, خط Cairo, RTL)
│   ├── 📄 page.tsx                  # صفحة الهبوط الرئيسية
│   ├── 📄 globals.css               # متغيرات CSS والأنماط العامة
│   │
│   ├── 📁 chat/
│   │   └── 📁 [roomId]/
│   │       └── 📄 page.tsx          # صفحة غرفة الدردشة (ديناميكية)
│   │
│   ├── 📁 rooms/
│   │   └── 📄 page.tsx              # قائمة الغرف المتاحة
│   │
│   └── 📁 admin/
│       └── 📄 page.tsx              # لوحة تحكم المشرف
│
├── 📁 components/                   # المكونات القابلة لإعادة الاستخدام
│   ├── 📁 chat/
│   │   ├── 📄 chat-message.tsx      # مكون عرض رسالة واحدة
│   │   ├── 📄 emoji-picker.tsx      # منتقي الإيموجي
│   │   ├── 📄 private-message-popup.tsx  # نافذة الرسائل الخاصة
│   │   └── 📄 user-list-sidebar.tsx # قائمة المستخدمين الجانبية
│   │
│   ├── 📁 ui/                       # مكونات Shadcn UI (Button, Input, etc.)
│   └── 📄 theme-provider.tsx        # مزوّد إدارة الثيم
│
├── 📁 hooks/                        # React Hooks مخصصة
│   ├── 📄 use-mobile.ts             # كشف الأجهزة المحمولة
│   └── 📄 use-toast.ts             # نظام الإشعارات (Toast)
│
├── 📁 lib/                          # مكتبات ووظائف مساعدة
│   └── 📄 utils.ts                  # دالة cn() لدمج أصناف Tailwind
│
├── 📁 public/                       # الأصول العامة (أيقونات، صور)
├── 📁 image/                        # صور التوثيق والمعاينة
├── 📁 styles/                       # ملفات CSS إضافية
│
├── 📄 package.json                  # الحزم والسكريبتات
├── 📄 tsconfig.json                 # إعدادات TypeScript
├── 📄 next.config.mjs               # إعدادات Next.js
├── 📄 postcss.config.mjs            # إعدادات PostCSS لـ Tailwind
└── 📄 components.json               # إعدادات Shadcn UI
```

---

## 4. إدارة الحالة الحية

### الحالة المحلية (Local State)

يستخدم التطبيق حالياً `useState` لإدارة الحالة المحلية في كل مكون:

```typescript
// في app/chat/[roomId]/page.tsx
const [messages, setMessages] = useState<Message[]>(mockMessages);
const [inputValue, setInputValue] = useState("");
const [showEmojiPicker, setShowEmojiPicker] = useState(false);
const [isMuted, setIsMuted] = useState(false);
const [showSidebar, setShowSidebar] = useState(true);
const [privateChat, setPrivateChat] = useState<User | null>(null);
```

### التمرير التلقائي (Auto-scroll)

مكون الرسائل مصمم بحيث يقوم بالتمرير التلقائي للأسفل عند استلام رسائل جديدة:

```typescript
const messagesEndRef = useRef<HTMLDivElement>(null);

const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
};

useEffect(() => {
  scrollToBottom();
}, [messages]); // يُشغَّل عند كل تغيير في الرسائل
```

### التوسع نحو إدارة حالة عالمية

هيكل المكونات مصمم ليستقبل تدفقات البيانات اللحظية بسلاسة. يمكن ربطه بمخزن حالة عالمي مثل:

#### Zustand (الأخف والأبسط - موصى به):

```typescript
// lib/stores/chat-store.ts
import { create } from 'zustand';

interface ChatState {
  messages: Message[];
  users: User[];
  addMessage: (message: Message) => void;
  setUsers: (users: User[]) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  users: [],
  addMessage: (message) => 
    set((state) => ({ messages: [...state.messages, message] })),
  setUsers: (users) => set({ users }),
}));
```

#### Redux Toolkit (للمشاريع الكبيرة):

```typescript
// lib/slices/chatSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: { messages: [], users: [] },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
```

---

## 5. التخصيص للمنطقة العربية

### دعم RTL المدمج

تم إعداد ملف `layout.tsx` ليحتوي على `dir="rtl"` كإعداد افتراضي:

```tsx
// app/layout.tsx
<html lang="ar" dir="rtl" className="dark">
```

### Tailwind Logical Properties

تعتمد المكونات على خواص Tailwind المنطقية (Logical Properties) التي تتكيف تلقائياً مع اتجاه الصفحة:

```tsx
// ✅ صحيح - يعمل مع RTL و LTR
<div className="ms-4 me-2 ps-3 pe-1 text-start">

// ❌ خاطئ - مرتبط باليسار/اليمين
<div className="ml-4 mr-2 pl-3 pr-1 text-left">
```

### الخطوط العربية

يستخدم التطبيق خط **Cairo** من Google Fonts:

```tsx
// app/layout.tsx
import { Cairo } from 'next/font/google'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo'
});
```

للتبديل إلى خط آخر، راجع [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md#2-تعديل-الخطوط).

---

## 6. نظام الرتب والألوان

### تعريف الرتب

```typescript
// في app/chat/[roomId]/page.tsx
type Role = "owner" | "admin" | "vip" | "member" | "guest";
```

### الألوان المخصصة لكل رتبة

| الرتبة | العربية | اللون | الصلاحيات |
|--------|---------|-------|----------|
| `owner` | مالك | 🟡 ذهبي | كاملة |
| `admin` | مشرف | 🔴 أحمر | إدارة المستخدمين |
| `vip` | VIP | 🟣 بنفسجي | مميز |
| `member` | عضو | 🔵 أزرق | إرسال رسائل |
| `guest` | زائر | ⚫ رمادي | قراءة فقط |

### دالة تحديد لون الرتبة (مثال للتوسع):

```typescript
// مثال للدالة المساعدة التي يمكن إضافتها في lib/utils.ts
export function getRoleConfig(role: Role) {
  const configs = {
    owner: {
      label: "مالك",
      badgeClass: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      icon: "👑",
      priority: 1,
    },
    admin: {
      label: "مشرف",
      badgeClass: "bg-red-500/20 text-red-400 border-red-500/30",
      icon: "🛡️",
      priority: 2,
    },
    vip: {
      label: "VIP",
      badgeClass: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: "⭐",
      priority: 3,
    },
    member: {
      label: "عضو",
      badgeClass: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: "👤",
      priority: 4,
    },
    guest: {
      label: "زائر",
      badgeClass: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      icon: "👁️",
      priority: 5,
    },
  };
  return configs[role];
}
```

---

## 7. مكونات الواجهة المستخدمة

### مكونات Radix UI المُضمَّنة

يحتوي المشروع على أكثر من 20 مكون من Radix UI جاهزة للاستخدام:

| المكون | الاستخدام |
|--------|----------|
| `Dialog` | النوافذ المنبثقة |
| `DropdownMenu` | قوائم السياق |
| `ScrollArea` | منطقة التمرير للرسائل |
| `Avatar` | صور المستخدمين |
| `Tooltip` | تلميحات الأدوات |
| `Separator` | الفواصل |
| `Badge` | شارات الرتب |
| `Button` | الأزرار |
| `Input` | حقول الإدخال |

### مكتبة الأيقونات: Lucide React

```tsx
// أمثلة على الأيقونات المستخدمة
import {
  MessageCircle,  // أيقونة الدردشة
  Send,           // إرسال
  Smile,          // إيموجي
  Users,          // قائمة المستخدمين
  ArrowLeft,      // رجوع
  Volume2,        // صوت مفعّل
  VolumeX,        // صوت مكتوم
  Settings,       // إعدادات
  LogOut,         // خروج
} from "lucide-react";
```

---

## 8. الجاهزية للتطوير والربط بالخلفية

هذا القالب هو مجرد واجهة مستخدم (UI Template)، وهو جاهز كلياً للربط مع أي نظام خلفي:

### 1. Node.js & Socket.io (الأشهر للدردشة)

```typescript
// مثال على ربط Socket.io
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

// إرسال رسالة
socket.emit('chat-message', { 
  roomId, 
  content, 
  userId 
});

// استقبال رسائل
socket.on('chat-message', (message: Message) => {
  setMessages(prev => [...prev, message]);
});
```

### 2. Firebase / Supabase (الأسهل للبدء)

```typescript
// مثال Firebase Realtime Database
import { ref, onValue, push } from 'firebase/database';
import { database } from '@/lib/firebase';

// الاستماع للرسائل الجديدة
const messagesRef = ref(database, `rooms/${roomId}/messages`);
onValue(messagesRef, (snapshot) => {
  const data = snapshot.val();
  // تحديث الرسائل
});

// إرسال رسالة
push(messagesRef, {
  content,
  userId,
  timestamp: Date.now(),
});
```

### 3. WebRTC (للمستقبل — صوت ومرئيات)

يمكن تخصيص نوافذ الاتصال داخل واجهة المحادثة الخاصة (Direct Messages) لدعم:
- **المكالمات الصوتية** عبر WebRTC
- **مشاركة الشاشة**
- **مكالمات الفيديو**

---

## 9. نظام التوجيه والصفحات

### الصفحات المتوفرة

| المسار | الملف | النوع | الوصف |
|--------|-------|-------|-------|
| `/` | `app/page.tsx` | Server | صفحة الهبوط |
| `/rooms` | `app/rooms/page.tsx` | Server/Client | قائمة الغرف |
| `/chat/[roomId]` | `app/chat/[roomId]/page.tsx` | Client | غرفة الدردشة |
| `/admin` | `app/admin/page.tsx` | Client | لوحة الإدارة |

### المسارات الديناميكية

صفحة الدردشة تستخدم **Dynamic Routes** في Next.js:

```
/chat/general    → roomId = "general"
/chat/music      → roomId = "music"
/chat/gaming     → roomId = "gaming"
```

```typescript
// استخراج معرف الغرفة في Next.js 15+
export default function ChatPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const resolvedParams = use(params);
  const roomId = resolvedParams.roomId;
}
```

---

## 10. الأنواع والواجهات البرمجية

### أنواع البيانات الأساسية

```typescript
// نوع الرتبة
type Role = "owner" | "admin" | "vip" | "member" | "guest";

// واجهة المستخدم
interface User {
  id: string;
  name: string;
  role: Role;
  avatar?: string;        // اختياري
  isOnline: boolean;
}

// واجهة الرسالة
interface Message {
  id: string;
  userId: string;
  userName: string;
  userRole: Role;
  content: string;
  timestamp: Date;
  isPrivate?: boolean;    // للرسائل الخاصة
}

// واجهة الغرفة (للتوسع)
interface ChatRoom {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  membersCount: number;
  isPrivate: boolean;
  maxMembers?: number;
}
```

### خصائص المكونات (Props)

```typescript
// props مكون قائمة المستخدمين
interface UserListSidebarProps {
  onlineUsers: User[];
  offlineUsers: User[];
  onUserClick: (user: User) => void;
}

// props مكون الرسالة
interface ChatMessageProps {
  message: Message;
  currentUserId?: string;  // للتمييز بين رسائلك ورسائل الآخرين
}

// props مكون الرسائل الخاصة
interface PrivateMessagePopupProps {
  user: User;
  currentUser: User;
  onClose: () => void;
}
```

---

> 📌 **للتثبيت والتشغيل:** راجع [INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)  
> 📌 **للتخصيص والتعديل:** راجع [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)  
> 📌 **لحل المشكلات:** راجع [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
