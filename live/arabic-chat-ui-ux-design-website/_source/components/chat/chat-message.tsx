"use client";

import { formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale";

type Role = "owner" | "admin" | "vip" | "member" | "guest";

interface Message {
  id: string;
  userId: string;
  userName: string;
  userRole: Role;
  content: string;
  timestamp: Date;
  isPrivate?: boolean;
}

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
  owner: "bg-role-owner/10 text-role-owner",
  admin: "bg-role-admin/10 text-role-admin",
  vip: "bg-role-vip/10 text-role-vip",
  member: "bg-role-member/10 text-role-member",
  guest: "bg-role-guest/10 text-role-guest",
};

export function ChatMessage({ message }: { message: Message }) {
  const timeAgo = formatDistanceToNow(message.timestamp, {
    addSuffix: true,
    locale: ar,
  });

  return (
    <div className="flex gap-3 group hover:bg-card/50 p-3 rounded-xl transition-colors">
      {/* Avatar */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${roleBgColors[message.userRole]}`}>
        <span className="text-sm font-bold">
          {message.userName.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className={`font-semibold ${roleColors[message.userRole]}`}>
            {message.userName}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${roleBgColors[message.userRole]}`}>
            {roleLabels[message.userRole]}
          </span>
          <span className="text-xs text-muted-foreground">
            {timeAgo}
          </span>
        </div>
        <p className="text-foreground leading-relaxed break-words">
          {message.content}
        </p>
      </div>
    </div>
  );
}
