"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

const emojiCategories = [
  {
    name: "الوجوه",
    emojis: ["😀", "😃", "😄", "😁", "😅", "😂", "🤣", "😊", "😇", "🙂", "😉", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧"],
  },
  {
    name: "الإيماءات",
    emojis: ["👋", "🤚", "🖐", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏"],
  },
  {
    name: "القلوب",
    emojis: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟"],
  },
  {
    name: "الرموز",
    emojis: ["⭐", "🌟", "✨", "💫", "🔥", "💯", "✅", "❌", "⚡", "💪", "🎉", "🎊", "🎁", "🏆", "🥇", "🥈", "🥉", "🎯", "🎮", "🎵", "🎶", "💬", "💭", "🗯", "💤"],
  },
];

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  onClose: () => void;
}

export function EmojiPicker({ onSelect, onClose }: EmojiPickerProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="w-80 bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-border">
        <span className="font-medium text-foreground">اختر رمز تعبيري</span>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-1 p-2 border-b border-border overflow-x-auto">
        {emojiCategories.map((category, index) => (
          <Button
            key={category.name}
            variant={activeCategory === index ? "secondary" : "ghost"}
            size="sm"
            className="flex-shrink-0 text-xs"
            onClick={() => setActiveCategory(index)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Emoji Grid */}
      <ScrollArea className="h-48">
        <div className="p-3">
          <div className="grid grid-cols-8 gap-1">
            {emojiCategories[activeCategory].emojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => onSelect(emoji)}
                className="w-8 h-8 flex items-center justify-center text-xl hover:bg-secondary rounded-lg transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
