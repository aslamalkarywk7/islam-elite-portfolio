import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Zap, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MemphisContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('$10k - $25k');
  const [service, setService] = useState('Brand Identity');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FF007A', '#FFE600', '#0047FF', '#39FF14', '#FF5C00']
    });
  };

  return (
    <section id="contact" className="w-full bg-[#0047FF] text-white py-20 px-4 sm:px-8 border-b-4 border-black relative select-none">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFE600] text-black font-space font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#000] mb-4">
            <Zap className="w-4 h-4 fill-black" />
            <span>Ready To Make Noise?</span>
          </div>
          <h2 className="font-lexend font-black text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            Start A <span className="bg-[#FF007A] text-white px-2 py-0.5 border-3 border-black shadow-[4px_4px_0px_0px_#FFE600]">Project</span>
          </h2>
          <p className="font-space font-extrabold text-base sm:text-xl text-yellow-300 max-w-xl mx-auto">
            Tell us about your visual vision and let’s construct something radical together.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white text-black p-8 sm:p-12 border-4 border-black shadow-[12px_12px_0px_0px_#FFE600] text-center font-space">
            <div className="w-16 h-16 bg-[#39FF14] border-3 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_#000]">
              <CheckCircle2 className="w-10 h-10 text-black" />
            </div>
            <h3 className="font-lexend font-black text-3xl uppercase mb-2">
              Inquiry Received!
            </h3>
            <p className="font-bold text-base text-slate-800 max-w-md mx-auto mb-6">
              Thank you {name || 'Creative Champion'}! Our design directors will review your brief and send over a Memphis style deck within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#FF007A] text-white font-black text-sm uppercase px-6 py-3 border-3 border-black shadow-[4px_4px_0px_0px_#000]"
            >
              Submit Another Brief
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white text-black p-6 sm:p-10 border-4 border-black shadow-[12px_12px_0px_0px_#FFE600] space-y-6 font-space">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-extrabold text-xs uppercase text-black block mb-2">
                  Your Name / Studio
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-slate-100 border-2 border-black p-3 font-bold text-sm shadow-[2px_2px_0px_0px_#000]"
                />
              </div>

              <div>
                <label className="font-extrabold text-xs uppercase text-black block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="e.g. alex@retrowave.studio"
                  className="w-full bg-slate-100 border-2 border-black p-3 font-bold text-sm shadow-[2px_2px_0px_0px_#000]"
                />
              </div>
            </div>

            {/* Budget Toggle Pills */}
            <div>
              <label className="font-extrabold text-xs uppercase text-black block mb-2">
                Project Budget Range
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['$5k - $10k', '$10k - $25k', '$25k+'].map(b => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`py-3 px-2 border-2 border-black font-extrabold text-xs uppercase transition-all ${
                      budget === b
                        ? 'bg-[#FF007A] text-white shadow-[3px_3px_0px_0px_#000]'
                        : 'bg-slate-100 text-black hover:bg-yellow-200'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Brief */}
            <div>
              <label className="font-extrabold text-xs uppercase text-black block mb-2">
                Project Brief & Details
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Tell us what you want to build, brand guidelines, or creative goals..."
                className="w-full bg-slate-100 border-2 border-black p-3 font-bold text-sm shadow-[2px_2px_0px_0px_#000]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF007A] hover:bg-[#FFE600] hover:text-black text-white font-lexend font-black text-lg uppercase py-4 border-3 border-black shadow-[6px_6px_0px_0px_#000] transition-all flex items-center justify-center gap-3"
            >
              <span>Send Project Brief</span>
              <Send className="w-5 h-5" />
            </button>

          </form>
        )}

      </div>
    </section>
  );
};
