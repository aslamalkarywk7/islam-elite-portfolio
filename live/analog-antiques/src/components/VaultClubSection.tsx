import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, ShieldCheck, Sparkles, Check } from 'lucide-react';

export const VaultClubSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-[#D8C7B0] border-4 border-[#1A1A1A] p-6 sm:p-8 shadow-retro-lg film-grain grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Physical Store Info */}
        <div className="lg:col-span-6 space-y-4 font-mono-retro">
          <div className="inline-flex items-center gap-1.5 bg-[#5F6F52] text-[#E8D9C5] px-3 py-1 font-sans-retro text-xs font-bold uppercase border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
            <MapPin className="w-3.5 h-3.5" />
            VISIT OUR PHYSICAL WORKSHOP
          </div>

          <h3 className="slab text-2xl sm:text-4xl text-[#1A1A1A] uppercase tracking-tight">
            Analog Antiques Haight St. Shop
          </h3>

          <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed bg-[#E8D9C5] p-3 border-2 border-[#1A1A1A]">
            Located in the historic Haight-Ashbury district of San Francisco. Drop by to listen to rare cassette master tapes on calibrated Nakamichi decks or test vintage film cameras.
          </p>

          <div className="space-y-2 text-xs font-sans-retro pt-2">
            <div className="flex items-center space-x-2 text-[#1A1A1A]">
              <MapPin className="w-4 h-4 text-[#BF5B30]" />
              <span>1968 Haight Street, San Francisco, CA 94117</span>
            </div>
            <div className="flex items-center space-x-2 text-[#1A1A1A]">
              <Clock className="w-4 h-4 text-[#5F6F52]" />
              <span>Tue - Sun: 11:00 AM - 7:00 PM PST</span>
            </div>
            <div className="flex items-center space-x-2 text-[#1A1A1A]">
              <Phone className="w-4 h-4 text-[#D4A017]" />
              <span>(415) 555-TAPE • analog-antiques-haight.org</span>
            </div>
          </div>
        </div>

        {/* Right: Vault Newsletter Subscription */}
        <div className="lg:col-span-6 bg-[#1A1A1A] text-[#E8D9C5] p-6 border-4 border-[#1A1A1A] shadow-retro space-y-4">
          <div className="flex items-center space-x-2 text-[#D4A017] font-sans-retro text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>JOIN THE ANALOG VAULT CLUB</span>
          </div>

          <h4 className="slab text-xl sm:text-2xl text-[#E8D9C5] uppercase">
            Receive Rare Tape Drops & Restored Gear Alerts
          </h4>

          <p className="text-xs font-mono-retro text-[#D8C7B0] leading-relaxed">
            We release small batches of restored 1970s tape decks and limited tape pressings monthly. Join 12,000+ analog audio enthusiasts.
          </p>

          {subscribed ? (
            <div className="bg-[#5F6F52] text-[#E8D9C5] p-4 border-2 border-[#E8D9C5] font-sans-retro text-xs flex items-center gap-2 font-bold">
              <Check className="w-5 h-5 text-[#D4A017]" />
              <span>YOU ARE SUBSCRIBED TO THE VAULT CLUB DISPATCH!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 bg-[#E8D9C5] text-[#1A1A1A] border-2 border-[#E8D9C5] px-3 py-2 text-xs font-mono-retro placeholder-[#6D5E50] focus:outline-none"
                />
                <button
                  type="submit"
                  className="retro-btn bg-[#BF5B30] hover:bg-[#D4A017] hover:text-[#1A1A1A] text-[#E8D9C5] font-sans-retro text-xs font-bold px-5 py-2 border-2 border-[#E8D9C5] uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-[10px] text-[#A09384] font-mono-retro">
                Zero spam. Only authentic analog dispatches & technical restoration guides.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
