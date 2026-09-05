"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  Users,
  Shield,
  Ban,
  VolumeX,
  LogOut,
  Settings,
  Filter,
  Plus,
  Search,
  MoreVertical,
  Trash2,
  Edit,
  Home,
  Crown,
  Star,
  User,
  UserX,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type Role = "owner" | "admin" | "vip" | "member" | "guest";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: "active" | "muted" | "banned";
  joinDate: Date;
}

interface Room {
  id: string;
  name: string;
  description: string;
  onlineCount: number;
  isActive: boolean;
}

const mockUsers: AdminUser[] = [
  { id: "1", name: "أحمد الخالدي", email: "ahmed@example.com", role: "owner", status: "active", joinDate: new Date(2024, 0, 15) },
  { id: "2", name: "فاطمة العلي", email: "fatima@example.com", role: "admin", status: "active", joinDate: new Date(2024, 1, 20) },
  { id: "3", name: "محمد السعيد", email: "mohamed@example.com", role: "admin", status: "active", joinDate: new Date(2024, 2, 10) },
  { id: "4", name: "سارة الحسن", email: "sara@example.com", role: "vip", status: "active", joinDate: new Date(2024, 3, 5) },
  { id: "5", name: "خالد العمري", email: "khalid@example.com", role: "vip", status: "muted", joinDate: new Date(2024, 4, 12) },
  { id: "6", name: "نورا الفهد", email: "noura@example.com", role: "member", status: "active", joinDate: new Date(2024, 5, 1) },
  { id: "7", name: "عبدالله الراشد", email: "abdullah@example.com", role: "member", status: "banned", joinDate: new Date(2024, 6, 8) },
  { id: "8", name: "ليلى الشمري", email: "layla@example.com", role: "member", status: "active", joinDate: new Date(2024, 7, 15) },
  { id: "9", name: "عمر الحربي", email: "omar@example.com", role: "guest", status: "active", joinDate: new Date(2024, 8, 22) },
  { id: "10", name: "رنا الدوسري", email: "rana@example.com", role: "guest", status: "active", joinDate: new Date(2024, 9, 30) },
];

const mockRooms: Room[] = [
  { id: "general", name: "الغرفة العامة", description: "دردشة عامة للجميع", onlineCount: 234, isActive: true },
  { id: "music", name: "غرفة الموسيقى", description: "شارك أغانيك المفضلة", onlineCount: 89, isActive: true },
  { id: "gaming", name: "غرفة الألعاب", description: "للاعبين ومحبي الألعاب", onlineCount: 156, isActive: true },
  { id: "romance", name: "غرفة الحب", description: "للتعارف والصداقة", onlineCount: 178, isActive: true },
  { id: "movies", name: "غرفة الأفلام", description: "نقاش الأفلام والمسلسلات", onlineCount: 67, isActive: false },
];

const mockBannedWords = [
  "كلمة1",
  "كلمة2", 
  "كلمة3",
  "كلمة4",
  "كلمة5",
];

const roleLabels: Record<Role, string> = {
  owner: "المالك",
  admin: "مشرف",
  vip: "VIP",
  member: "عضو",
  guest: "زائر",
};

const roleColors: Record<Role, string> = {
  owner: "text-role-owner",
  admin: "text-role-admin",
  vip: "text-role-vip",
  member: "text-role-member",
  guest: "text-role-guest",
};

const roleBgColors: Record<Role, string> = {
  owner: "bg-role-owner/10 text-role-owner border-role-owner/30",
  admin: "bg-role-admin/10 text-role-admin border-role-admin/30",
  vip: "bg-role-vip/10 text-role-vip border-role-vip/30",
  member: "bg-role-member/10 text-role-member border-role-member/30",
  guest: "bg-role-guest/10 text-role-guest border-role-guest/30",
};

const roleIcons: Record<Role, React.ReactNode> = {
  owner: <Crown className="w-4 h-4" />,
  admin: <Shield className="w-4 h-4" />,
  vip: <Star className="w-4 h-4" />,
  member: <User className="w-4 h-4" />,
  guest: <UserX className="w-4 h-4" />,
};

type TabType = "users" | "rooms" | "filter";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("users");
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<AdminUser[]>(mockUsers);
  const [rooms, setRooms] = useState<Room[]>(mockRooms);
  const [bannedWords, setBannedWords] = useState<string[]>(mockBannedWords);
  const [newWord, setNewWord] = useState("");
  const [editUserDialog, setEditUserDialog] = useState<AdminUser | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role>("member");

  const filteredUsers = users.filter(
    (user) =>
      user.name.includes(searchQuery) || user.email.includes(searchQuery)
  );

  const handleBanUser = (userId: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, status: "banned" as const } : u))
    );
  };

  const handleMuteUser = (userId: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, status: "muted" as const } : u))
    );
  };

  const handleKickUser = (userId: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId));
  };

  const handleUnbanUser = (userId: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, status: "active" as const } : u))
    );
  };

  const handleToggleRoom = (roomId: string) => {
    setRooms((prev) =>
      prev.map((r) => (r.id === roomId ? { ...r, isActive: !r.isActive } : r))
    );
  };

  const handleAddBannedWord = () => {
    if (newWord.trim() && !bannedWords.includes(newWord.trim())) {
      setBannedWords((prev) => [...prev, newWord.trim()]);
      setNewWord("");
    }
  };

  const handleRemoveBannedWord = (word: string) => {
    setBannedWords((prev) => prev.filter((w) => w !== word));
  };

  const handleSaveUserRole = () => {
    if (editUserDialog) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editUserDialog.id ? { ...u, role: selectedRole } : u
        )
      );
      setEditUserDialog(null);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-l border-border flex-shrink-0 hidden md:flex flex-col">
        <div className="h-16 flex items-center gap-3 px-6 border-b border-border">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">لوحة التحكم</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <SidebarButton
            icon={<Users className="w-5 h-5" />}
            label="إدارة المستخدمين"
            isActive={activeTab === "users"}
            onClick={() => setActiveTab("users")}
          />
          <SidebarButton
            icon={<MessageCircle className="w-5 h-5" />}
            label="إدارة الغرف"
            isActive={activeTab === "rooms"}
            onClick={() => setActiveTab("rooms")}
          />
          <SidebarButton
            icon={<Filter className="w-5 h-5" />}
            label="فلتر الكلمات"
            isActive={activeTab === "filter"}
            onClick={() => setActiveTab("filter")}
          />
        </nav>

        <div className="p-4 border-t border-border">
          <Link href="/">
            <Button variant="outline" className="w-full gap-2">
              <Home className="w-4 h-4" />
              <span>الرئيسية</span>
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-4 md:hidden">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold">لوحة التحكم</span>
          </div>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="w-5 h-5" />
            </Button>
          </Link>
        </header>

        {/* Mobile Tabs */}
        <div className="flex gap-2 p-4 border-b border-border md:hidden overflow-x-auto">
          <Button
            variant={activeTab === "users" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("users")}
          >
            المستخدمين
          </Button>
          <Button
            variant={activeTab === "rooms" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("rooms")}
          >
            الغرف
          </Button>
          <Button
            variant={activeTab === "filter" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("filter")}
          >
            الفلتر
          </Button>
        </div>

        {/* Content Area */}
        <ScrollArea className="flex-1">
          <div className="p-6">
            {activeTab === "users" && (
              <UsersTab
                users={filteredUsers}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onBan={handleBanUser}
                onMute={handleMuteUser}
                onKick={handleKickUser}
                onUnban={handleUnbanUser}
                onEdit={(user) => {
                  setEditUserDialog(user);
                  setSelectedRole(user.role);
                }}
              />
            )}
            {activeTab === "rooms" && (
              <RoomsTab rooms={rooms} onToggle={handleToggleRoom} />
            )}
            {activeTab === "filter" && (
              <FilterTab
                bannedWords={bannedWords}
                newWord={newWord}
                onNewWordChange={setNewWord}
                onAddWord={handleAddBannedWord}
                onRemoveWord={handleRemoveBannedWord}
              />
            )}
          </div>
        </ScrollArea>
      </main>

      {/* Edit User Dialog */}
      <Dialog open={!!editUserDialog} onOpenChange={() => setEditUserDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تعديل صلاحيات المستخدم</DialogTitle>
          </DialogHeader>
          {editUserDialog && (
            <div className="py-4 space-y-4">
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${roleBgColors[editUserDialog.role]}`}>
                  {roleIcons[editUserDialog.role]}
                </div>
                <div>
                  <p className="font-semibold">{editUserDialog.name}</p>
                  <p className="text-sm text-muted-foreground">{editUserDialog.email}</p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">الرتبة</label>
                <Select value={selectedRole} onValueChange={(v) => setSelectedRole(v as Role)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">مشرف</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                    <SelectItem value="member">عضو</SelectItem>
                    <SelectItem value="guest">زائر</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditUserDialog(null)}>
              إلغاء
            </Button>
            <Button onClick={handleSaveUserRole}>حفظ التغييرات</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SidebarButton({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "hover:bg-secondary text-muted-foreground hover:text-foreground"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}

function UsersTab({
  users,
  searchQuery,
  onSearchChange,
  onBan,
  onMute,
  onKick,
  onUnban,
  onEdit,
}: {
  users: AdminUser[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onBan: (id: string) => void;
  onMute: (id: string) => void;
  onKick: (id: string) => void;
  onUnban: (id: string) => void;
  onEdit: (user: AdminUser) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">إدارة المستخدمين</h1>
          <p className="text-muted-foreground">إدارة وتنظيم المستخدمين في المنصة</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="بحث عن مستخدم..."
            className="pr-9"
          />
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="text-right p-4 font-medium text-muted-foreground">المستخدم</th>
                <th className="text-right p-4 font-medium text-muted-foreground hidden sm:table-cell">البريد</th>
                <th className="text-right p-4 font-medium text-muted-foreground">الرتبة</th>
                <th className="text-right p-4 font-medium text-muted-foreground">الحالة</th>
                <th className="text-right p-4 font-medium text-muted-foreground">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border last:border-0 hover:bg-secondary/30">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${roleBgColors[user.role]}`}>
                        {roleIcons[user.role]}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground hidden sm:table-cell">{user.email}</td>
                  <td className="p-4">
                    <Badge variant="outline" className={roleBgColors[user.role]}>
                      {roleLabels[user.role]}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge
                      variant="outline"
                      className={
                        user.status === "active"
                          ? "bg-primary/10 text-primary border-primary/30"
                          : user.status === "muted"
                          ? "bg-role-admin/10 text-role-admin border-role-admin/30"
                          : "bg-destructive/10 text-destructive border-destructive/30"
                      }
                    >
                      {user.status === "active" ? "نشط" : user.status === "muted" ? "مكتوم" : "محظور"}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onEdit(user)} className="gap-2">
                          <Edit className="w-4 h-4" />
                          <span>تعديل الرتبة</span>
                        </DropdownMenuItem>
                        {user.status !== "muted" && (
                          <DropdownMenuItem onClick={() => onMute(user.id)} className="gap-2">
                            <VolumeX className="w-4 h-4" />
                            <span>كتم</span>
                          </DropdownMenuItem>
                        )}
                        {user.status === "banned" ? (
                          <DropdownMenuItem onClick={() => onUnban(user.id)} className="gap-2 text-primary">
                            <Shield className="w-4 h-4" />
                            <span>رفع الحظر</span>
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => onBan(user.id)} className="gap-2 text-destructive">
                            <Ban className="w-4 h-4" />
                            <span>حظر</span>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => onKick(user.id)} className="gap-2 text-destructive">
                          <LogOut className="w-4 h-4" />
                          <span>طرد</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RoomsTab({
  rooms,
  onToggle,
}: {
  rooms: Room[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">إدارة الغرف</h1>
          <p className="text-muted-foreground">إدارة غرف الدردشة في المنصة</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          <span>إضافة غرفة</span>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`p-5 rounded-2xl border transition-colors ${
              room.isActive
                ? "bg-card border-border"
                : "bg-secondary/50 border-border/50 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageCircle className="w-6 h-6" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="gap-2">
                    <Edit className="w-4 h-4" />
                    <span>تعديل</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onToggle(room.id)} className="gap-2">
                    <Settings className="w-4 h-4" />
                    <span>{room.isActive ? "تعطيل" : "تفعيل"}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 text-destructive">
                    <Trash2 className="w-4 h-4" />
                    <span>حذف</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{room.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <div className={`w-2 h-2 rounded-full ${room.isActive ? "bg-primary" : "bg-muted-foreground"}`} />
                <span className="text-muted-foreground">
                  {room.isActive ? `${room.onlineCount} متصل` : "معطلة"}
                </span>
              </div>
              <Badge variant="outline" className={room.isActive ? "bg-primary/10 text-primary" : "bg-muted"}>
                {room.isActive ? "نشطة" : "معطلة"}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterTab({
  bannedWords,
  newWord,
  onNewWordChange,
  onAddWord,
  onRemoveWord,
}: {
  bannedWords: string[];
  newWord: string;
  onNewWordChange: (word: string) => void;
  onAddWord: () => void;
  onRemoveWord: (word: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">فلتر الكلمات</h1>
        <p className="text-muted-foreground">إدارة الكلمات المحظورة في الدردشة</p>
      </div>

      <div className="bg-card rounded-2xl border border-border p-6">
        <div className="flex gap-3 mb-6">
          <Input
            value={newWord}
            onChange={(e) => onNewWordChange(e.target.value)}
            placeholder="أضف كلمة جديدة..."
            className="flex-1"
            onKeyDown={(e) => e.key === "Enter" && onAddWord()}
          />
          <Button onClick={onAddWord} className="gap-2">
            <Plus className="w-4 h-4" />
            <span>إضافة</span>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {bannedWords.map((word) => (
            <Badge
              key={word}
              variant="secondary"
              className="px-3 py-2 text-sm flex items-center gap-2"
            >
              <span>{word}</span>
              <button
                onClick={() => onRemoveWord(word)}
                className="hover:text-destructive transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>

        {bannedWords.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            لا توجد كلمات محظورة حالياً
          </p>
        )}
      </div>
    </div>
  );
}
