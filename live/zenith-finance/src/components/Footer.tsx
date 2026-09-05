import React, { useState } from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ShadowConfig } from '../types';
import { ArrowRight, ShieldCheck, Twitter, Linkedin, Github, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  shadowConfig: ShadowConfig;
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ shadowConfig, onNavClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="mt-20 pt-16 pb-12 px-4 sm:px-8 border-t border-[#d4cfc7]/80 bg-[#e5e2dd]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP SPLIT: LOGO & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-[#d4cfc7]/60">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <NeumorphicBox variant="convex" pill className="w-10 h-10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 shadow-inner flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                </div>
              </NeumorphicBox>
              <span className="font-extrabold tracking-widest text-xl neu-recessed-text uppercase">
                ZENITH<span className="text-blue-600 font-light">FINANCE</span>
              </span>
            </div>
            <p className="text-xs text-[#636a75] font-medium max-w-md leading-relaxed">
              Tactile, high-precision wealth management. Sculpted with extreme softness, seamless depth, and real-time portfolio intelligence.
            </p>
          </div>

          {/* NEWSLETTER FORM WITH INSET INPUT */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="text-xs font-bold text-[#2c3038] uppercase tracking-wider mb-1">
                Private Wealth Letter
              </div>
              <div className="flex items-center gap-2">
                <NeumorphicBox variant="inset" className="flex-1 px-4 py-3 rounded-2xl">
                  <input
                    type="email"
                    placeholder="Enter your executive email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent text-xs font-semibold text-[#2c3038] placeholder-[#78808d] focus:outline-none"
                  />
                </NeumorphicBox>

                <NeumorphicBox
                  variant="glowing"
                  clickable
                  className="px-6 py-3 rounded-2xl text-xs font-bold uppercase text-blue-600 flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>{subscribed ? 'Subscribed' : 'Join'}</span>
                  {subscribed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Send className="w-3.5 h-3.5" />}
                </NeumorphicBox>
              </div>
            </form>
          </div>

        </div>

        {/* MIDDLE LINKS & SOCIALS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-semibold text-[#636a75]">
          <div>
            <div className="text-[#2c3038] font-bold uppercase tracking-wider mb-4">Platform</div>
            <ul className="space-y-2.5">
              <li><button onClick={() => onNavClick('home')} className="hover:text-blue-600">Home Console</button></li>
              <li><button onClick={() => onNavClick('features')} className="hover:text-blue-600">Features Deep Dive</button></li>
              <li><button onClick={() => onNavClick('pricing')} className="hover:text-blue-600">Pricing Membership</button></li>
              <li><button onClick={() => onNavClick('about')} className="hover:text-blue-600">Trust & Security</button></li>
            </ul>
          </div>

          <div>
            <div className="text-[#2c3038] font-bold uppercase tracking-wider mb-4">Capabilities</div>
            <ul className="space-y-2.5">
              <li><span className="hover:text-blue-600 cursor-pointer">Autonomous Budgeting</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer">Tax-Loss Harvesting</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer">Multi-Vault Aggregation</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer">Family Office Access</span></li>
            </ul>
          </div>

          <div>
            <div className="text-[#2c3038] font-bold uppercase tracking-wider mb-4">Governance</div>
            <ul className="space-y-2.5">
              <li><span className="hover:text-blue-600 cursor-pointer">SOC2 Type II Audit</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer">Hardware Token Sync</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer">Privacy Charter</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer">256-Bit Vault Spec</span></li>
            </ul>
          </div>

          <div>
            <div className="text-[#2c3038] font-bold uppercase tracking-wider mb-4">Social Presence</div>
            <div className="flex items-center gap-3 pt-1">
              <NeumorphicBox variant="raised-sm" clickable className="p-2 text-[#4b525d] hover:text-blue-600">
                <Twitter className="w-4 h-4" />
              </NeumorphicBox>
              <NeumorphicBox variant="raised-sm" clickable className="p-2 text-[#4b525d] hover:text-blue-600">
                <Linkedin className="w-4 h-4" />
              </NeumorphicBox>
              <NeumorphicBox variant="raised-sm" clickable className="p-2 text-[#4b525d] hover:text-blue-600">
                <Github className="w-4 h-4" />
              </NeumorphicBox>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-[#d4cfc7]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#717885] font-semibold gap-4">
          <div>
            © 2026 Zenith Finance Inc. All rights reserved. Neumorphism 2.0 Soft UI Architecture.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Security Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
