import React, { useState } from 'react';
import { PROPOSAL_ITEMS } from '../data/portfolioData';
import { ProposalItem } from '../types';
import { Terminal, Calculator, Send, CheckCircle, Copy, Sparkles, ShieldCheck } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface ContactTerminalProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ContactTerminal: React.FC<ContactTerminalProps> = ({ isOpenModal, onCloseModal }) => {
  const [proposalItems, setProposalItems] = useState<ProposalItem[]>(PROPOSAL_ITEMS);
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [projectBrief, setProjectBrief] = useState<string>('');
  const [submittedReceipt, setSubmittedReceipt] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    audioSynth.playClick();
    setProposalItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  const totalPrice = proposalItems
    .filter((i) => i.selected)
    .reduce((acc, curr) => acc + curr.basePrice, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioSynth.playHeavyPop();

    const selectedNames = proposalItems
      .filter((i) => i.selected)
      .map((i) => i.name)
      .join('\n - ');

    const receipt = `=======================================================
RAW STUDIO // OFFICIAL PROJECT COMMISSION RECEIPT
=======================================================
TIMESTAMP: ${new Date().toISOString()}
CLIENT NAME: ${clientName || 'ANONYMOUS'}
CLIENT EMAIL: ${clientEmail || 'NOT_PROVIDED'}

COMMISSIONED SCOPE:
 - ${selectedNames || 'CUSTOM AD-HOC CONSULTING'}

ESTIMATED INVESTMENT: $${totalPrice.toLocaleString()} USD
ESTIMATED TIMELINE: 10 - 21 BUSINESS DAYS
STATUS: COMMISSION QUEUED // AWAITING STUDIO CONFIRMATION

STATEMENT:
"${projectBrief || 'Strict 5px hard strokes and zero gradient mandate.'}"
=======================================================`;

    setSubmittedReceipt(receipt);
  };

  return (
    <section id="contact" className="py-16 bg-zinc-950 text-white border-b-[5px] border-black relative">
      <div className="max-w-[1800px] mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12 border-b-4 border-white pb-6">
          <div className="bg-[#CCFF00] text-black font-mono font-black text-xs px-3 py-1 border-2 border-black inline-block uppercase mb-3">
            COMMISSION TERMINAL
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter">
            LAUNCH <span className="text-[#CCFF00]">PROJECT</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 font-bold mt-1">
            CALCULATE PROPOSAL & COMMISSION A CUSTOM NEO-BRUTALIST WEB PLATFORM
          </p>
        </div>

        {/* Grid: Left - Interactive Calculator // Right - Form Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Deliverables & Cost Calculator - Col 6 */}
          <div className="lg:col-span-6 bg-black border-4 border-white p-6 shadow-[10px_10px_0px_#000] space-y-6">
            <div className="flex justify-between items-center border-b-2 border-zinc-800 pb-3">
              <span className="font-display font-black text-xl text-[#CCFF00] uppercase flex items-center space-x-2">
                <Calculator className="w-5 h-5" />
                <span>01. SELECT DELIVERABLES</span>
              </span>
              <span className="bg-[#CCFF00] text-black font-mono text-xs font-black px-2 py-0.5 border border-black uppercase">
                REAL-TIME ESTIMATOR
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {proposalItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-4 border-4 border-black cursor-pointer transition-all ${
                    item.selected
                      ? 'bg-[#CCFF00] text-black shadow-[6px_6px_0px_#ffffff]'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-[4px_4px_0px_#000]'
                  }`}
                >
                  <div className="flex justify-between items-start font-black text-sm uppercase">
                    <span>{item.name}</span>
                    <span className="bg-black text-white px-2 py-0.5 border border-black font-mono">
                      +${item.basePrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold mt-2 opacity-80">
                    TURNAROUND: {item.turnaround}
                  </div>
                </div>
              ))}
            </div>

            {/* Total Calculator Summary Box */}
            <div className="bg-zinc-900 border-4 border-[#CCFF00] p-4 text-center shadow-[6px_6px_0px_#000] font-mono">
              <div className="text-zinc-400 font-bold text-xs uppercase">ESTIMATED INVESTMENT:</div>
              <div className="font-display font-black text-3xl sm:text-4xl text-[#CCFF00] my-1">
                ${totalPrice.toLocaleString()} USD
              </div>
              <div className="text-[10px] text-zinc-300 font-bold">
                INCLUDES 100% 5PX HARD STROKE GUARANTEE & SOURCE CODE EXPORT
              </div>
            </div>
          </div>

          {/* Right: Terminal Form / Receipt - Col 6 */}
          <div className="lg:col-span-6 bg-black border-4 border-white p-6 shadow-[10px_10px_0px_#000] font-mono text-xs">
            <div className="flex justify-between items-center border-b-2 border-zinc-800 pb-3 mb-6">
              <span className="font-display font-black text-xl text-white uppercase flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-[#CCFF00]" />
                <span>02. COMMISSION TERMINAL</span>
              </span>
              <span className="text-zinc-500 font-bold">MODE: INTERACTIVE</span>
            </div>

            {!submittedReceipt ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-zinc-300 font-bold block uppercase mb-1">YOUR NAME / BRAND:</label>
                  <input
                    type="text"
                    required
                    placeholder="E.G., KENJI TAKAHASHI / NEO-TOKYO"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-zinc-900 text-white p-3 border-4 border-black font-bold uppercase focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div>
                  <label className="text-zinc-300 font-bold block uppercase mb-1">DIRECT EMAIL ADDRESS:</label>
                  <input
                    type="email"
                    required
                    placeholder="NAME@DOMAIN.COM"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-zinc-900 text-white p-3 border-4 border-black font-bold uppercase focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div>
                  <label className="text-zinc-300 font-bold block uppercase mb-1">PROJECT BRIEF & STATEMENT:</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="DESCRIBE YOUR VISION, LAUNCH TIMELINE, AND BRAND IDENTITY GOALS..."
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    className="w-full bg-zinc-900 text-white p-3 border-4 border-black font-bold uppercase focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-brutal-lime py-4 font-black text-sm uppercase flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT COMMISSION PROPOSAL (${totalPrice.toLocaleString()})</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-[#CCFF00] text-black font-black p-3 text-center uppercase border-2 border-black flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>COMMISSION TRANSMITTED SUCCESSFULLY!</span>
                </div>

                <pre className="bg-zinc-900 text-[#CCFF00] p-4 border-4 border-black font-mono text-[10px] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {submittedReceipt}
                </pre>

                <button
                  onClick={() => {
                    audioSynth.playClick();
                    setSubmittedReceipt(null);
                  }}
                  className="w-full btn-brutal py-3 bg-white text-black font-black text-xs uppercase"
                >
                  START ANOTHER COMMISSION
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
