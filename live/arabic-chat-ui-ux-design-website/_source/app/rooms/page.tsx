"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Users, 
  ArrowLeft, 
  Music, 
  Gamepad2, 
  Heart, 
  Film, 
  BookOpen, 
  Coffee,
  Newspaper,
  Palette
} from "lucide-react";

const rooms = [
  {
    id: "general",
    name: "الغرفة العامة",
    description: "دردشة عامة للجميع",
    icon: MessageCircle,
    onlineCount: 234,
    color: "primary",
  },
  {
    id: "music",
    name: "غرفة الموسيقى",
    description: "شارك أغانيك المفضلة",
    icon: Music,
    onlineCount: 89,
    color: "role-vip",
  },
  {
    id: "gaming",
    name: "غرفة الألعاب",
    description: "للاعبين ومحبي الألعاب",
    icon: Gamepad2,
    onlineCount: 156,
    color: "role-member",
  },
  {
    id: "romance",
    name: "غرفة الحب",
    description: "للتعارف والصداقة",
    icon: Heart,
    onlineCount: 178,
    color: "role-owner",
  },
  {
    id: "movies",
    name: "غرفة الأفلام",
    description: "نقاش الأفلام والمسلسلات",
    icon: Film,
    onlineCount: 67,
    color: "role-admin",
  },
  {
    id: "books",
    name: "غرفة القراءة",
    description: "للقراء ومحبي الكتب",
    icon: BookOpen,
    onlineCount: 45,
    color: "primary",
  },
  {
    id: "coffee",
    name: "غرفة الاستراحة",
    description: "دردشة هادئة ومريحة",
    icon: Coffee,
    onlineCount: 112,
    color: "role-admin",
  },
  {
    id: "news",
    name: "غرفة الأخبار",
    description: "آخر الأخبار والمستجدات",
    icon: Newspaper,
    onlineCount: 78,
    color: "role-member",
  },
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">شات العرب</span>
            </Link>
          </div>
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>الرئيسية</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Rooms Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            غرف الدردشة
          </h1>
          <p className="text-muted-foreground">
            اختر غرفة وابدأ التحدث مع أصدقاء جدد
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </main>
    </div>
  );
}

function RoomCard({ room }: { room: typeof rooms[0] }) {
  const Icon = room.icon;
  
  return (
    <Link href={`/chat/${room.id}`}>
      <div className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-${room.color}/10 flex items-center justify-center text-${room.color} group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>{room.onlineCount}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-1.5">
          {room.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {room.description}
        </p>
        
        <Button variant="secondary" className="w-full gap-2">
          <span>دخول الغرفة</span>
          <Users className="w-4 h-4" />
        </Button>
      </div>
    </Link>
  );
}
