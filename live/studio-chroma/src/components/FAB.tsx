import React, { useState } from 'react';
import { MessageSquarePlus, Mail, Send, X, PhoneCall } from 'lucide-react';
import { M3Ripple } from './M3Ripple';

interface FABProps {
  onClick: () => void;
}

export const FAB: React.FC<FABProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onClick}
        aria-label="Contact Studio Chroma"
        className="group relative flex items-center gap-3 px-5 py-4 bg-[#EADDFF] text-[#6750A4] rounded-2xl border border-[#6750A4]/20 m3-elevation-3 hover:m3-elevation-4 hover:bg-[#DBCBEB] active:scale-95 transition-all duration-200 overflow-hidden font-medium"
      >
        <M3Ripple color="rgba(103, 80, 164, 0.2)" />
        <div className="w-6 h-6 flex items-center justify-center text-[#6750A4] group-hover:rotate-12 transition-transform">
          <MessageSquarePlus className="w-6 h-6" />
        </div>
        <span className="text-sm font-bold tracking-wide pr-1">
          Contact Us
        </span>
      </button>
    </div>
  );
};
