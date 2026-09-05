import React, { useState } from 'react';
import { FileText, X, Terminal, BookOpen, Shield, HelpCircle, Code, Check } from 'lucide-react';

interface DocsViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsViewerModal: React.FC<DocsViewerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'readme' | 'contributing' | 'license' | 'troubleshooting'>('readme');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#E8D9C5] border-4 border-[#1A1A1A] max-w-4xl w-full h-[85vh] shadow-retro-lg film-grain flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1A1A1A] text-[#E8D9C5] p-4 flex justify-between items-center border-b-2 border-[#D4A017]">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-[#D4A017]" />
            <h3 className="slab text-lg uppercase tracking-wider text-[#E8D9C5]">
              PROJECT DOCUMENTATION & TECHNICAL MANUAL
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#E8D9C5] hover:text-[#BF5B30] font-mono-retro font-bold text-xs bg-[#2A2A2A] px-2 py-1 border border-[#E8D9C5] cursor-pointer"
          >
            [CLOSE ESC]
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="bg-[#D8C7B0] border-b-2 border-[#1A1A1A] p-2 flex flex-wrap gap-2 font-sans-retro text-xs font-bold">
          <button
            onClick={() => setActiveTab('readme')}
            className={`px-3 py-1.5 border-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'readme' ? 'bg-[#BF5B30] text-[#E8D9C5] border-[#1A1A1A] shadow-retro' : 'bg-[#E8D9C5] text-[#1A1A1A] border-[#1A1A1A]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            README.md
          </button>

          <button
            onClick={() => setActiveTab('contributing')}
            className={`px-3 py-1.5 border-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'contributing' ? 'bg-[#5F6F52] text-[#E8D9C5] border-[#1A1A1A] shadow-retro' : 'bg-[#E8D9C5] text-[#1A1A1A] border-[#1A1A1A]'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            CONTRIBUTING.md
          </button>

          <button
            onClick={() => setActiveTab('troubleshooting')}
            className={`px-3 py-1.5 border-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'troubleshooting' ? 'bg-[#D4A017] text-[#1A1A1A] border-[#1A1A1A] shadow-retro' : 'bg-[#E8D9C5] text-[#1A1A1A] border-[#1A1A1A]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            TROUBLESHOOTING.md
          </button>

          <button
            onClick={() => setActiveTab('license')}
            className={`px-3 py-1.5 border-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'license' ? 'bg-[#6D8299] text-[#E8D9C5] border-[#1A1A1A] shadow-retro' : 'bg-[#E8D9C5] text-[#1A1A1A] border-[#1A1A1A]'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            LICENSE (MIT)
          </button>
        </div>

        {/* Manual Content Viewport */}
        <div className="p-6 overflow-y-auto flex-1 font-mono-retro text-xs text-[#1A1A1A] space-y-4 bg-[#FFFDF7]">
          
          {activeTab === 'readme' && (
            <div className="space-y-4">
              <div className="border-b-2 border-[#1A1A1A] pb-3">
                <h1 className="slab text-2xl text-[#BF5B30]">ANALOG ANTIQUES — README</h1>
                <p className="text-xs text-[#6D5E50] mt-1 font-sans-retro font-bold">Retro Cassette Tape Archive & Hi-Fi Audio Shop Application</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans-retro text-sm font-bold text-[#5F6F52]">1. Project Overview</h3>
                <p>
                  Analog Antiques is a full-featured retro desktop application showcasing an authentic 1960s-1970s vintage cassette tape archive, interactive tape deck player, and restored analog equipment catalog. Built with React 19, TypeScript, Vite, Tailwind CSS v4, Motion, and the Web Audio API.
                </p>

                <h3 className="font-sans-retro text-sm font-bold text-[#5F6F52]">2. Key Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Authentic Retro Aesthetics:</strong> Warm muted color palette (burled beige, olive green, burnt orange, mustard yellow, dusty blue) on aged parchment and wood grain textures.</li>
                  <li><strong>Web Audio Tape Deck Synthesizer:</strong> Interactive cassette player with real-time bouncing analog VU meter needles, tape wobble (wow & flutter), warm saturation, tape noise toggle, and pitch speed controls.</li>
                  <li><strong>Vault Product Catalog:</strong> Grid of 8+ restored items (Sony cassette decks, JVC boomboxes, Marantz turntables, Canon rangefinder cameras, vacuum tube radios) with condition ratings, provenance notes, and specs.</li>
                  <li><strong>Interactive Shopping Cart:</strong> Dot-matrix printable paper receipt simulation upon checkout.</li>
                </ul>

                <h3 className="font-sans-retro text-sm font-bold text-[#5F6F52]">3. Installation & Run Instructions</h3>
                <pre className="bg-[#1A1A1A] text-[#E8D9C5] p-3 rounded-none font-mono-retro text-[11px] overflow-x-auto border border-[#1A1A1A]">
{`# 1. Install dependencies
npm install

# 2. Start the development server on port 3000
npm run dev

# 3. Build for production compilation
npm run build`}
                </pre>

                <h3 className="font-sans-retro text-sm font-bold text-[#5F6F52]">4. Technologies & Languages</h3>
                <p>
                  Language: <strong>TypeScript</strong> | Framework: <strong>React 19 & Vite</strong> | Styling: <strong>Tailwind CSS v4</strong> | Audio: <strong>Web Audio API</strong>
                </p>
              </div>
            </div>
          )}

          {activeTab === 'contributing' && (
            <div className="space-y-4">
              <div className="border-b-2 border-[#1A1A1A] pb-3">
                <h1 className="slab text-2xl text-[#5F6F52]">CONTRIBUTING GUIDELINES</h1>
                <p className="text-xs text-[#6D5E50] mt-1 font-sans-retro font-bold">How to contribute to the Analog Antiques project</p>
              </div>

              <div className="space-y-3">
                <p>We welcome open-source contributions to expand the tape archive catalog or improve Web Audio synth emulations!</p>
                <h3 className="font-sans-retro text-sm font-bold text-[#1A1A1A]">Workflow Steps:</h3>
                <ol className="list-decimal pl-5 space-y-1.5">
                  <li>Fork the repository on GitHub.</li>
                  <li>Create a feature branch: <code className="bg-[#D8C7B0] px-1 font-bold">git checkout -b feature/new-tape-preset</code></li>
                  <li>Maintain TypeScript strict type checks and lint compliance (<code className="bg-[#D8C7B0] px-1 font-bold">npm run lint</code>).</li>
                  <li>Commit changes with descriptive messages: <code className="bg-[#D8C7B0] px-1 font-bold">git commit -m "feat: add Nakamichi Dragon deck item"</code></li>
                  <li>Push to branch and open a Pull Request against `main`.</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'troubleshooting' && (
            <div className="space-y-4">
              <div className="border-b-2 border-[#1A1A1A] pb-3">
                <h1 className="slab text-2xl text-[#D4A017]">TROUBLESHOOTING GUIDE</h1>
                <p className="text-xs text-[#6D5E50] mt-1 font-sans-retro font-bold">Solutions for common build, runtime, and Web Audio issues</p>
              </div>

              <div className="space-y-3">
                <div className="bg-[#D8C7B0] p-3 border-2 border-[#1A1A1A]">
                  <h4 className="font-bold text-[#BF5B30]">Issue #1: Web Audio context locked / no sound on Play</h4>
                  <p className="mt-1">
                    <strong>Cause:</strong> Modern browsers require user interaction before playing audio. <br />
                    <strong>Solution:</strong> Click anywhere on the tape deck controls or press Play once to unlock the browser AudioContext.
                  </p>
                </div>

                <div className="bg-[#D8C7B0] p-3 border-2 border-[#1A1A1A]">
                  <h4 className="font-bold text-[#BF5B30]">Issue #2: Port 3000 conflicts during `npm run dev`</h4>
                  <p className="mt-1">
                    <strong>Cause:</strong> Infrastructure ingress expects port 3000. <br />
                    <strong>Solution:</strong> Ensure no background process is running on port 3000. Use `killall node` or restart dev server.
                  </p>
                </div>

                <div className="bg-[#D8C7B0] p-3 border-2 border-[#1A1A1A]">
                  <h4 className="font-bold text-[#BF5B30]">Issue #3: TypeScript build errors (`tsc --noEmit`)</h4>
                  <p className="mt-1">
                    <strong>Solution:</strong> Run `npm run lint` or `npm run build` to verify all imports match exact file paths.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'license' && (
            <div className="space-y-4">
              <div className="border-b-2 border-[#1A1A1A] pb-3">
                <h1 className="slab text-2xl text-[#6D8299]">MIT OPEN SOURCE LICENSE</h1>
                <p className="text-xs text-[#6D5E50] mt-1 font-sans-retro font-bold">Copyright (c) 2026 Analog Antiques Archive</p>
              </div>

              <pre className="bg-[#D8C7B0] p-4 border-2 border-[#1A1A1A] font-mono-retro text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`MIT License

Copyright (c) 2026 Analog Antiques

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
              </pre>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
