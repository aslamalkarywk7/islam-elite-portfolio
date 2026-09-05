"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Minimize2, Maximize2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale";

type Role = "owner" | "admin" | "vip" | "member" | "guest";

interface User {
  id: string;
  name: string;
  role: Role;
  avatar?: string;
  isOnline: boolean;
}

interface PrivateMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

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

interface PrivateMessagePopupProps {
  user: User;
  currentUser: User;
  onClose: () => void;
}

const mockPrivateMessages: PrivateMessage[] = [
  { id: "1", senderId: "other", content: "مرحباً!", timestamp: new Date(Date.now() - 300000) },
  { id: "2", senderId: "current", content: "أهلاً وسهلاً، كيف حالك؟", timestamp: new Date(Date.now() - 250000) },
  { id: "3", senderId: "other", content: "الحمد لله بخير، وأنت؟", timestamp: new Date(Date.now() - 200000) },
];

export function PrivateMessagePopup({
  user,
  currentUser,
  onClose,
}: PrivateMessagePopupProps) {
  const [messages, setMessages] = useState<PrivateMessage[]>(mockPrivateMessages);
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: PrivateMessage = {
      id: Date.now().toString(),
      senderId: "current",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      className={`fixed bottom-4 left-4 w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50 transition-all ${
        isMinimized ? "h-14" : "h-[28rem]"
      }`}
    >
      {/* Header */}
      <div
        className="h-14 flex items-center justify-between px-4 border-b border-border bg-secondary/50 cursor-pointer"
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${roleBgColors[user.role]}`}
          >
            <span className="text-xs font-bold">{user.name.charAt(0)}</span>
          </div>
          <div>
            <span className={`font-semibold text-sm ${roleColors[user.role]}`}>
              {user.name}
            </span>
            <div className="flex items-center gap-1">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  user.isOnline ? "bg-primary" : "bg-muted-foreground"
                }`}
              />
              <span className="text-xs text-muted-foreground">
                {user.isOnline ? "متصل" : "غير متصل"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }}
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4" />
            ) : (
              <Minimize2 className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <ScrollArea className="h-[calc(100%-7.5rem)]">
            <div className="p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === "current" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.senderId === "current"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-secondary-foreground rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {formatDistanceToNow(message.timestamp, {
                        addSuffix: true,
                        locale: ar,
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="h-16 border-t border-border p-2">
            <div className="flex items-center gap-2 bg-secondary rounded-xl p-1">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="اكتب رسالة..."
                className="flex-1 border-0 bg-transparent h-9 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="icon"
                className="h-9 w-9 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
