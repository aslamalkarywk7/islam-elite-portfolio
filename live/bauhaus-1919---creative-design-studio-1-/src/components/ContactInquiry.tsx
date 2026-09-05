import React, { useState } from 'react';
import { Send, CheckCircle2, Calculator, Sparkles } from 'lucide-react';

interface ContactInquiryProps {
  showGridLines: boolean;
}

export const ContactInquiry: React.FC<ContactInquiryProps> = ({ showGridLines }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    discipline: 'Systemic Branding',
    budget: '$25,000 — $50,000',
    timeline: '4 — 8 Weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#121212] text-[#F6F5F0] py-16 md:py-24 border-b-2 border-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 items-end mb-12 pb-6 border-b-2 border-white/20">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[#FFE600] uppercase mb-2">
              <span className="w-3 h-3 bg-[#FF2A1F]"></span>
              <span>COMMISSION AN ARCHITECTURAL & BRANDING SYSTEM</span>
            </div>
            <h2 className="font-heavy text-4xl sm:text-6xl text-white tracking-tighter uppercase leading-none">
              START A PROJECT
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right font-mono-code text-xs text-gray-400">
            <span>CLIENT INQUIRY MATRIX</span>
            <span className="block text-[#FFE600] font-bold mt-1">RESPONSE WITHIN 24 HOURS</span>
          </div>
        </div>

        {/* Form Grid Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-[#1E1E1E] border-2 border-white/30 p-6 sm:p-8 font-mono-code text-xs shadow-[12px_12px_0px_0px_#FF2A1F]">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 font-body animate-in zoom-in-95">
                <div className="w-16 h-16 bg-[#FFE600] text-[#121212] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heavy text-3xl text-white uppercase">INQUIRY RECEIVED</h3>
                <p className="font-mono-code text-xs text-gray-300 max-w-md mx-auto">
                  Thank you, <span className="text-[#FFE600] font-bold">{formData.name}</span>. Our Master of Form will review your brief and send structured proposal options.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-[#FF2A1F] text-white font-heavy text-xs uppercase border-2 border-white cursor-pointer hover:bg-white hover:text-[#121212] transition-colors"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#FFE600] font-bold block mb-1">01 // YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Walter Gropius"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-white/30 p-3 text-white text-xs uppercase focus:outline-none focus:border-[#FF2A1F]"
                    />
                  </div>

                  <div>
                    <label className="text-[#FFE600] font-bold block mb-1">02 // EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="w.gropius@bauhaus.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-white/30 p-3 text-white text-xs uppercase focus:outline-none focus:border-[#0055FF]"
                    />
                  </div>
                </div>

                {/* Row 2: Organization & Discipline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 font-bold block mb-1">03 // ORGANIZATION / CLIENT</label>
                    <input
                      type="text"
                      placeholder="e.g. Dessau Municipal Trust"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-black border border-white/30 p-3 text-white text-xs uppercase focus:outline-none focus:border-[#FFE600]"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 font-bold block mb-1">04 // DISCIPLINE</label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full bg-black border border-white/30 p-3 text-white text-xs uppercase focus:outline-none focus:border-[#FF2A1F]"
                    >
                      <option>Systemic Branding & Identity</option>
                      <option>Algorithmic UI/UX Engineering</option>
                      <option>Spatial Architecture & Exhibition</option>
                      <option>Editorial & Graphic Art Direction</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Budget Tier */}
                <div>
                  <label className="text-gray-300 font-bold block mb-2">05 // ESTIMATED BUDGET RANGE:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['$15k — $25k', '$25k — $50k', '$50k — $100k+'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`p-2.5 border font-bold uppercase text-[10px] text-center cursor-pointer ${
                          formData.budget === b
                            ? 'bg-[#FF2A1F] text-white border-white'
                            : 'bg-black text-gray-400 border-white/20 hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 4: Project Scope Description */}
                <div>
                  <label className="text-gray-300 font-bold block mb-1">06 // PROJECT BRIEF DETAILS:</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your design objectives, spatial requirements, or digital application scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-white/30 p-3 text-white text-xs uppercase focus:outline-none focus:border-[#FFE600]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FFE600] text-[#121212] font-heavy text-sm uppercase tracking-widest border-2 border-white cursor-pointer hover:bg-[#FF2A1F] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT PROJECT BRIEF</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="border-2 border-white/30 bg-[#1A1A1A] p-6 space-y-4 font-mono-code text-xs">
              <div className="flex items-center gap-2 text-[#FFE600] font-bold border-b border-white/20 pb-2">
                <Calculator className="w-4 h-4" />
                <span>STUDIO HEADQUARTERS</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400 block">DESSAU STUDIO:</span>
                  <span className="font-bold text-white">Gropiusallee 38, 06846 Dessau-Roßlau, Germany</span>
                </div>

                <div>
                  <span className="text-gray-400 block">BERLIN DIGITAL LAB:</span>
                  <span className="font-bold text-white">Auguststraße 12, 10117 Berlin, Germany</span>
                </div>

                <div>
                  <span className="text-gray-400 block">DIRECT ELECTRONIC MAIL:</span>
                  <span className="font-bold text-[#FF2A1F]">form@bauhaus1919-agency.de</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-[#FFE600] bg-[#FFE600] text-[#121212] p-6 space-y-2">
              <div className="flex items-center gap-2 font-heavy text-sm uppercase">
                <Sparkles className="w-5 h-5 text-[#FF2A1F]" />
                <span>INSTANT COMMISSION DISPATCH</span>
              </div>
              <p className="font-body text-xs font-medium leading-relaxed">
                Direct client commissions are processed through our Dessau Form Master. All work carries our mathematical grid guarantee.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
