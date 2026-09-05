"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Crown, Shield, Star, User, UserX } from "lucide-react";

type Role = "owner" | "admin" | "vip" | "member" | "guest";

interface User {
  id: string;
  name: string;
  role: Role;
  avatar?: string;
  isOnline: boolean;
}

const roleIcons: Record<Role, React.ReactNode> = {
  owner: <Crown className="w-4 h-4" />,
  admin: <Shield className="w-4 h-4" />,
  vip: <Star className="w-4 h-4" />,
  member: <User className="w-4 h-4" />,
  guest: <UserX className="w-4 h-4" />,
};

const roleColors: Record<Role, string> = {
  owner: "text-role-owner",
  admin: "text-role-admin",
  vip: "text-role-vip",
  member: "text-role-member",
  guest: "text-role-guest",
};

const roleBgColors: Record<Role, string> = {
  owner: "bg-role-owner/10",
  admin: "bg-role-admin/10",
  vip: "bg-role-vip/10",
  member: "bg-role-member/10",
  guest: "bg-role-guest/10",
};

const roleOrder: Record<Role, number> = {
  owner: 0,
  admin: 1,
  vip: 2,
  member: 3,
  guest: 4,
};

interface UserListSidebarProps {
  onlineUsers: User[];
  offlineUsers: User[];
  onUserClick: (user: User) => void;
}

export function UserListSidebar({
  onlineUsers,
  offlineUsers,
  onUserClick,
}: UserListSidebarProps) {
  const sortedOnlineUsers = [...onlineUsers].sort(
    (a, b) => roleOrder[a.role] - roleOrder[b.role]
  );
  const sortedOfflineUsers = [...offlineUsers].sort(
    (a, b) => roleOrder[a.role] - roleOrder[b.role]
  );

  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="p-4 space-y-6">
        {/* Online Users */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            متصل ({sortedOnlineUsers.length})
          </h3>
          <div className="space-y-1">
            {sortedOnlineUsers.map((user) => (
              <UserItem
                key={user.id}
                user={user}
                onClick={() => onUserClick(user)}
              />
            ))}
          </div>
        </div>

        {/* Offline Users */}
        {sortedOfflineUsers.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              غير متصل ({sortedOfflineUsers.length})
            </h3>
            <div className="space-y-1 opacity-60">
              {sortedOfflineUsers.map((user) => (
                <UserItem
                  key={user.id}
                  user={user}
                  onClick={() => onUserClick(user)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}

function UserItem({ user, onClick }: { user: User; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-secondary transition-colors text-right"
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${roleBgColors[user.role]} ${roleColors[user.role]}`}
      >
        {roleIcons[user.role]}
      </div>
      <div className="flex-1 min-w-0">
        <span className={`font-medium truncate block ${roleColors[user.role]}`}>
          {user.name}
        </span>
      </div>
      {user.isOnline && (
        <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
      )}
    </button>
  );
}
