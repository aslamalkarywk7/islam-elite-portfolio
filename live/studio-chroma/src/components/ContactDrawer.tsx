import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Mail, User, Building, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';
import { M3Button } from './M3Button';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Mobile App Design',
    budget: '$10k - $25k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // auto close after success feedback
    }, 4000);
  };

  const projectTypes = ['Mobile App Design', 'Brand Identity', 'Web System', 'Spatial UI / AR', 'Design System'];
  const budgets = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FDFBFF] min-h-full p-6 sm:p-8 shadow-2xl flex flex-col justify-between border-l border-[#E1E2EC] overflow-y-auto animate-in slide-in-from-right duration-300">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E1E2EC] pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#6750A4] text-white flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-extrabold text-[#1A1C1E]">Studio Chroma Inquiry</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#44474E] hover:text-[#1A1C1E] hover:bg-[#E1E2EC]/50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#D8E2FF] text-[#001D33] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#005CBB]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1A1C1E]">Inquiry Received!</h3>
              <p className="text-sm text-[#44474E] max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to Studio Chroma. Our lead design director will review your project brief and reply within 24 hours.
              </p>
              <div className="pt-4">
                <M3Button
                  variant="filled"
                  size="md"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                >
                  Return to Portfolio
                </M3Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#44474E]">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#757780]" />
                  <input
                    required
                    type="text"
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white rounded-xl border border-[#E1E2EC] focus:border-[#005CBB] focus:ring-2 focus:ring-[#005CBB]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#44474E]">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#757780]" />
                  <input
                    required
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white rounded-xl border border-[#E1E2EC] focus:border-[#005CBB] focus:ring-2 focus:ring-[#005CBB]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#44474E]">Project Scope</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        formData.projectType === type
                          ? 'bg-[#005CBB] text-white shadow-xs'
                          : 'bg-white text-[#44474E] border border-[#E1E2EC] hover:border-[#005CBB]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#44474E]">Estimated Budget</label>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                        formData.budget === b
                          ? 'bg-[#EADDFF] text-[#6750A4] border border-[#6750A4]/20'
                          : 'bg-white text-[#44474E] border border-[#E1E2EC]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#44474E]">Project Goals & Timeline</label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 text-[#757780]" />
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your brand goals, target timeline, and specific design deliverables required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white rounded-xl border border-[#E1E2EC] focus:border-[#005CBB] focus:ring-2 focus:ring-[#005CBB]/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <M3Button
                  type="submit"
                  variant="fab"
                  size="md"
                  fullWidth
                  icon={<Send className="w-4 h-4" />}
                >
                  Submit Studio Brief
                </M3Button>
              </div>

            </form>
          )}
        </div>

        <div className="pt-6 border-t border-[#E1E2EC] mt-6 text-center text-xs text-[#757780]">
          Studio Chroma • Material Design 3 Portfolio
        </div>

      </div>
    </div>
  );
};
