import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { NavSection } from '../types';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContactModal }) => {
  return (
    <footer className="w-full bg-[#2D3436] text-white border-t-4 border-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="bg-[#0984E3] rounded-2xl p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border-3 border-black">
          <div>
            <span className="bg-white text-[#0984E3] font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider">
              READY TO SCALE?
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase mt-2 font-sans">
              LET'S BUILD SOMETHING EXTRAORDINARY
            </h3>
            <p className="text-sm font-extrabold text-blue-100 mt-1">
              Elevate your digital presence with clean geometry and bright flat design.
            </p>
          </div>

          <button
            onClick={onOpenContactModal}
            className="bg-white hover:bg-[#F8F9FA] text-[#0984E3] font-extrabold text-base px-8 py-4 rounded-xl uppercase tracking-wider flex items-center space-x-2 transition-transform active:scale-95 cursor-pointer flex-shrink-0"
          >
            <span>LET'S WORK TOGETHER</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Footer Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1 bg-white p-1.5 rounded-lg">
                <span className="w-3 h-3 rounded-full bg-[#0984E3]"></span>
                <span className="w-3 h-3 rounded-sm bg-[#FF7675]"></span>
                <span className="w-3 h-3 bg-[#2ECC71]"></span>
              </div>
              <span className="text-2xl font-black tracking-tight uppercase">CONNECTIVE</span>
            </div>
            <p className="text-xs text-gray-300 font-medium leading-relaxed mb-4">
              A modern Flat Design digital agency specializing in Web Design, Content Creation, and Social Media Strategy.
            </p>
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#0984E3]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FF7675]"></span>
              <span className="w-3 h-3 rounded-full bg-[#2ECC71]"></span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-black uppercase text-[#FF7675] tracking-wider mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-gray-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services (Web, Content, Social)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-colors cursor-pointer">
                  Selected Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog & Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-xs font-black uppercase text-[#2ECC71] tracking-wider mb-4">
              CREATIVE SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-gray-300">
              <li>Web Design & Frontend Development</li>
              <li>Content Creation & Copywriting</li>
              <li>Social Media Campaign Strategy</li>
              <li>Brand Identity & Vector Systems</li>
              <li>100 FPS Web Speed Audits</li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="text-xs font-black uppercase text-[#0984E3] tracking-wider mb-4">
              STAY INSPIRED
            </h4>
            <p className="text-xs text-gray-300 font-medium mb-3">
              Subscribe to our monthly Flat Design UI & agency case study digest.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-[#1E272C] border-2 border-gray-600 rounded-lg px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-[#0984E3]"
              />
              <button
                type="submit"
                className="w-full bg-[#FF7675] hover:bg-[#E17055] text-white font-extrabold text-xs py-2.5 rounded-lg uppercase tracking-wider cursor-pointer transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-bold gap-4">
          <div>
            © {new Date().getFullYear()} CONNECTIVE DIGITAL AGENCY. ALL RIGHTS RESERVED.
          </div>

          <div className="flex space-x-3">
            <a href="#" className="bg-gray-800 hover:bg-[#0984E3] text-white p-2 rounded-lg transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-[#FF7675] text-white p-2 rounded-lg transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-[#0984E3] text-white p-2 rounded-lg transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-[#2ECC71] text-white p-2 rounded-lg transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
