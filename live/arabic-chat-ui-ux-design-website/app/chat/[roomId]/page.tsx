"use client";

import { useState, useRef, useEffect, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  Send,
  Smile,
  Users,
  ArrowLeft,
  MoreVertical,
  Volume2,
  VolumeX,
  Settings,
  LogOut,
  X,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { UserListSidebar } from "@/components/chat/user-list-sidebar";
import { ChatMessage } from "@/components/chat/chat-message";
import { EmojiPicker } from "@/components/chat/emoji-picker";
import { PrivateMessagePopup } from "@/components/chat/private-message-popup";

type Role = "owner" | "admin" | "vip" | "member" | "guest";

interface User {
  id: string;
  name: string;
  role: Role;
  avatar?: string;
  isOnline: boolean;
}

interface Message {
  id: string;
  userId: string;
  userName: string;
  userRole: Role;
  content: string;
  timestamp: Date;
  isPrivate?: boolean;
}

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

const mockUsers: User[] = [
  { id: "1", name: "أحمد الخالدي", role: "owner", isOnline: true },
  { id: "2", name: "فاطمة العلي", role: "admin", isOnline: true },
  { id: "3", name: "محمد السعيد", role: "admin", isOnline: true },
  { id: "4", name: "سارة الحسن", role: "vip", isOnline: true },
  { id: "5", name: "خالد العمري", role: "vip", isOnline: true },
  { id: "6", name: "نورا الفهد", role: "member", isOnline: true },
  { id: "7", name: "عبدالله الراشد", role: "member", isOnline: true },
  { id: "8", name: "ليلى الشمري", role: "member", isOnline: false },
  { id: "9", name: "عمر الحربي", role: "member", isOnline: true },
  { id: "10", name: "رنا الدوسري", role: "guest", isOnline: true },
  { id: "11", name: "زائر123", role: "guest", isOnline: true },
  { id: "12", name: "زائر456", role: "guest", isOnline: false },
];

const mockMessages: Message[] = [
  { id: "1", userId: "1", userName: "أحمد الخالدي", userRole: "owner", content: "مرحباً بالجميع في الغرفة!", timestamp: new Date(Date.now() - 3600000) },
  { id: "2", userId: "2", userName: "فاطمة العلي", userRole: "admin", content: "أهلاً وسهلاً! كيف حالكم اليوم؟", timestamp: new Date(Date.now() - 3500000) },
  { id: "3", userId: "6", userName: "نورا الفهد", userRole: "member", content: "الحمد لله بخير، شكراً للسؤال", timestamp: new Date(Date.now() - 3400000) },
  { id: "4", userId: "4", userName: "سارة الحسن", userRole: "vip", content: "أتمنى لكم يوماً سعيداً جميعاً", timestamp: new Date(Date.now() - 3000000) },
  { id: "5", userId: "7", userName: "عبدالله الراشد", userRole: "member", content: "شكراً سارة، ولك مثله", timestamp: new Date(Date.now() - 2500000) },
  { id: "6", userId: "10", userName: "رنا الدوسري", userRole: "guest", content: "مرحبا، أنا جديدة هنا", timestamp: new Date(Date.now() - 2000000) },
  { id: "7", userId: "3", userName: "محمد السعيد", userRole: "admin", content: "أهلاً بك رنا! نتمنى لك وقتاً ممتعاً معنا", timestamp: new Date(Date.now() - 1500000) },
  { id: "8", userId: "5", userName: "خالد العمري", userRole: "vip", content: "هل شاهد أحدكم المباراة أمس؟", timestamp: new Date(Date.now() - 1000000) },
  { id: "9", userId: "9", userName: "عمر الحربي", userRole: "member", content: "نعم! كانت مباراة رائعة", timestamp: new Date(Date.now() - 500000) },
];

export default function ChatPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const resolvedParams = use(params);
  const roomId = resolvedParams.roomId;
  const roomName = roomNames[roomId] || "غرفة الدردشة";

  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [privateChat, setPrivateChat] = useState<User | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentUser: User = {
    id: "current",
    name: "أنت",
    role: "member",
    isOnline: true,
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      userId: currentUser.id,
      userName: currentUser.name,
      userRole: currentUser.role,
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setInputValue((prev) => prev + emoji);
    inputRef.current?.focus();
  };

  const handleUserClick = (user: User) => {
    if (user.id !== currentUser.id) {
      setPrivateChat(user);
      setShowMobileSidebar(false);
    }
  };

  const onlineUsers = mockUsers.filter((u) => u.isOnline);
  const offlineUsers = mockUsers.filter((u) => !u.isOnline);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="h-16 border-b border-border flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <Link href="/rooms" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">الغرف</span>
          </Link>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground">{roomName}</h1>
              <p className="text-xs text-muted-foreground">
                {onlineUsers.length} متصل الآن
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Users className="w-5 h-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="gap-2">
                <Settings className="w-4 h-4" />
                <span>إعدادات الغرفة</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 text-destructive">
                <LogOut className="w-4 h-4" />
                <span>مغادرة الغرفة</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {showMobileSidebar && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setShowMobileSidebar(false)}
          />
        )}

        {/* Sidebar - Mobile */}
        <div
          className={`fixed inset-y-0 right-0 w-72 bg-card border-l border-border z-50 transform transition-transform lg:hidden ${
            showMobileSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-border">
            <h2 className="font-semibold">المتصلون</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileSidebar(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <UserListSidebar
            onlineUsers={onlineUsers}
            offlineUsers={offlineUsers}
            onUserClick={handleUserClick}
          />
        </div>

        {/* Messages Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 max-w-4xl mx-auto">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="border-t border-border p-4 flex-shrink-0">
            <div className="max-w-4xl mx-auto relative">
              {showEmojiPicker && (
                <div className="absolute bottom-full mb-2 right-0">
                  <EmojiPicker
                    onSelect={handleEmojiSelect}
                    onClose={() => setShowEmojiPicker(false)}
                  />
                </div>
              )}
              <div className="flex items-center gap-2 bg-card rounded-2xl border border-border p-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <Smile className="w-5 h-5 text-muted-foreground" />
                </Button>
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="flex-shrink-0 gap-2"
                >
                  <span className="hidden sm:inline">إرسال</span>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Desktop */}
        {showSidebar && (
          <div className="hidden lg:block w-72 border-r border-border bg-card flex-shrink-0">
            <div className="h-16 flex items-center px-4 border-b border-border">
              <h2 className="font-semibold">المتصلون ({onlineUsers.length})</h2>
            </div>
            <UserListSidebar
              onlineUsers={onlineUsers}
              offlineUsers={offlineUsers}
              onUserClick={handleUserClick}
            />
          </div>
        )}
      </div>

      {/* Private Message Popup */}
      {privateChat && (
        <PrivateMessagePopup
          user={privateChat}
          currentUser={currentUser}
          onClose={() => setPrivateChat(null)}
        />
      )}
    </div>
  );
}
