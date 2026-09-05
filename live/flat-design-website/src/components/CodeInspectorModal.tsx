import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, FileCode2 } from 'lucide-react';

interface CodeInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeInspectorModal: React.FC<CodeInspectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');

  if (!isOpen) return null;

  const htmlSnippet = `<!-- Connective Digital Agency - Flat Design Landing Page HTML Structure -->
<header class="navbar border-b-2 border-gray-200 sticky top-0 bg-white">
  <div class="logo">
    <span class="icon-geometric-nodes"></span>
    <span class="brand-title">CONNECTIVE</span>
  </div>
  <nav class="nav-links">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
  </nav>
  <button class="btn-solid-blue">LET'S WORK TOGETHER</button>
</header>

<section class="hero-section bg-white">
  <h1 class="heading-heavy">WE CONNECT IDEAS WITH CREATIVE DIGITAL EXPERIENCES</h1>
  <p class="subtitle">Web Design • Content Creation • Social Media Strategy</p>
  
  <div class="cta-group">
    <button class="btn-solid-blue rounded-xl">LET'S WORK TOGETHER</button>
    <button class="btn-solid-border">EXPLORE OUR WORK</button>
  </div>

  <!-- Illustrated Flat Banner Scene -->
  <div class="banner-vector-flat border-4 border-charcoal bg-flat-gray">
    <div class="service-pillar bg-sky-blue">01. WEB DESIGN</div>
    <div class="service-pillar bg-bright-orange">02. CONTENT CREATION</div>
    <div class="service-pillar bg-lime-green">03. SOCIAL MEDIA</div>
  </div>
</section>`;

  const cssSnippet = `/* Connective Flat Design CSS - Pure Solid Colors, Zero Shadows, Zero Gradients */
:root {
  --sky-blue: #0984E3;
  --bright-orange: #FF7675;
  --lime-green: #2ECC71;
  --charcoal: #2D3436;
  --flat-white: #FFFFFF;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--flat-white);
  color: var(--charcoal);
  box-shadow: none !important;
}

/* Solid Blue CTA Button */
.btn-solid-blue {
  background-color: var(--sky-blue);
  color: #FFFFFF;
  font-weight: 800;
  border-radius: 0.75rem; /* 12px rounded corners */
  padding: 0.875rem 2rem;
  border: none;
  box-shadow: none;
  text-transform: uppercase;
}

/* Crisp Flat Card Structure */
.flat-card {
  background: #FFFFFF;
  border: 3px solid var(--charcoal);
  border-radius: 1rem;
  box-shadow: none;
}`;

  const currentSnippet = activeTab === 'html' ? htmlSnippet : cssSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-none">
      <div className="bg-[#2D3436] text-white border-4 border-black rounded-2xl max-w-3xl w-full p-6 relative max-h-[85vh] flex flex-col justify-between">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-gray-700 mb-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-[#0984E3]" />
              <span className="font-extrabold uppercase tracking-wider text-sm">
                CLEAN HTML & ORGANIZED CSS LAYOUT INSPECTOR
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white font-black text-lg cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center space-x-2 mb-4">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-4 py-1.5 rounded font-extrabold text-xs uppercase cursor-pointer ${
                activeTab === 'html' ? 'bg-[#0984E3] text-white' : 'bg-gray-800 text-gray-400'
              }`}
            >
              HTML Architecture
            </button>

            <button
              onClick={() => setActiveTab('css')}
              className={`px-4 py-1.5 rounded font-extrabold text-xs uppercase cursor-pointer ${
                activeTab === 'css' ? 'bg-[#FF7675] text-white' : 'bg-gray-800 text-gray-400'
              }`}
            >
              Flat CSS Utility Rules
            </button>
          </div>

          {/* Code Box */}
          <div className="bg-black/80 rounded-xl p-4 font-mono text-xs text-green-400 border border-gray-800 overflow-x-auto max-h-[45vh]">
            <pre className="whitespace-pre-wrap">{currentSnippet}</pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-gray-700 flex items-center justify-between">
          <span className="text-[11px] text-gray-400 font-semibold">
            ✓ 100% W3C Validated Markup • Zero Drop Shadows • Solid Color Palette
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="bg-[#2ECC71] hover:bg-[#10AC84] text-white font-extrabold text-xs px-4 py-2 rounded uppercase flex items-center space-x-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'COPIED!' : 'COPY CODE'}</span>
            </button>

            <button
              onClick={onClose}
              className="bg-gray-800 hover:bg-gray-700 text-white font-extrabold text-xs px-4 py-2 rounded uppercase cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
