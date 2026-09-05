import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: prefilledService || 'Web Design & Dev',
    budget: '$5k - $10k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#F8F9FA] py-16 sm:py-20 border-b-2 border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#2D3436] px-3.5 py-1.5 rounded-md mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0984E3]"></span>
            <span className="text-xs font-black uppercase text-[#2D3436] tracking-wider">
              START A PROJECT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#2D3436] uppercase tracking-tight font-sans">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-base font-bold text-gray-700 mt-2">
            Have an exciting idea or need a website redesign? Fill out the form below and our lead creative strategist will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Block (2 cols) */}
          <div className="lg:col-span-2 bg-white border-3 border-[#2D3436] rounded-2xl p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#2ECC71] text-white rounded-full flex items-center justify-center mx-auto text-3xl font-black">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-[#2D3436] uppercase font-sans">
                  MESSAGE RECEIVED!
                </h3>
                <p className="text-sm font-bold text-gray-700 max-w-md mx-auto">
                  Thank you <span className="text-[#0984E3]">{formData.name}</span>. We received your project details for <span className="text-[#FF7675]">{formData.service}</span> and will reach out shortly!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      service: 'Web Design & Dev',
                      budget: '$5k - $10k',
                      message: '',
                    });
                  }}
                  className="mt-4 bg-[#0984E3] text-white font-black text-xs px-6 py-3 rounded-xl uppercase tracking-wider cursor-pointer"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-2">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl px-4 py-3.5 text-sm font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl px-4 py-3.5 text-sm font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-2">
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Innovations"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl px-4 py-3.5 text-sm font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-2">
                      PRIMARY SERVICE NEEDED
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl px-4 py-3.5 text-sm font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                    >
                      <option>Web Design & Dev</option>
                      <option>Content Creation</option>
                      <option>Social Media Strategy</option>
                      <option>Brand Identity</option>
                      <option>Full Digital Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Budget Selection Chips */}
                <div>
                  <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-2">
                    ESTIMATED BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['$3k - $5k', '$5k - $10k', '$10k - $25k', '$25k+'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition-colors cursor-pointer border-2 ${
                          formData.budget === b
                            ? 'bg-[#0984E3] text-white border-[#0984E3]'
                            : 'bg-[#F8F9FA] text-[#2D3436] border-[#2D3436]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-2">
                    PROJECT GOALS & TIMELINE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand goals, target launch dates, or current pain points..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl p-4 text-sm font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                  ></textarea>
                </div>

                {/* SOLID BLUE CTA BUTTON WITH ROUNDED CORNERS READS 'LET'S WORK TOGETHER' */}
                <button
                  type="submit"
                  className="w-full bg-[#0984E3] hover:bg-[#0773C5] text-white font-extrabold text-base py-4 rounded-xl uppercase tracking-wider flex items-center justify-center space-x-2 transition-transform active:scale-95 cursor-pointer shadow-none"
                >
                  <span>LET'S WORK TOGETHER</span>
                  <Send className="w-5 h-5" />
                </button>

              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="bg-[#2D3436] text-white p-6 sm:p-8 rounded-2xl border-3 border-black flex flex-col justify-between">
            <div>
              <div className="bg-[#FF7675] text-white font-extrabold text-xs px-3 py-1 rounded uppercase tracking-wider inline-block mb-4">
                DIRECT CONTACT
              </div>

              <h3 className="text-2xl font-black uppercase font-sans mb-6">
                CONNECT WITH US DIRECTLY
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-[#0984E3] rounded-lg flex items-center justify-center text-white font-black flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase">EMAIL US</div>
                    <div className="text-sm font-extrabold text-white">hello@connective.agency</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-[#2ECC71] rounded-lg flex items-center justify-center text-white font-black flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase">CALL STUDIO</div>
                    <div className="text-sm font-extrabold text-white">+1 (800) 555-FLAT</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-[#FF7675] rounded-lg flex items-center justify-center text-white font-black flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase">STUDIO LOCATION</div>
                    <div className="text-sm font-extrabold text-white">
                      450 Creative Plaza, Suite 800<br />San Francisco, CA 94107
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flat Vector Mini Map Representation */}
            <div className="mt-8 bg-[#1E272C] border-2 border-black rounded-xl p-4 text-center">
              <div className="text-[10px] font-mono text-[#2ECC71] uppercase font-bold mb-1">
                ● STUDIO STATUS: OPEN & ACCEPTING PROJECTS
              </div>
              <div className="text-xs text-gray-300 font-semibold">
                Mon - Fri: 9:00 AM - 6:00 PM PST
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
