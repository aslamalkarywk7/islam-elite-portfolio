import React, { useState } from 'react';
import { MockupFrameHeader } from './components/MockupFrameHeader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BlogSection } from './components/BlogSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CodeInspectorModal } from './components/CodeInspectorModal';
import { NavSection, DisplayFrameMode } from './types';
import { ArrowUpRight, Check, X, Send } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [displayMode, setDisplayMode] = useState<DisplayFrameMode['type']>('full');
  const [isCodeInspectorOpen, setIsCodeInspectorOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  
  // Quick Contact Modal Form state
  const [modalFormData, setModalFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design & Dev',
    message: '',
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContactWithService = (serviceName: string) => {
    setPrefilledService(serviceName);
    setModalFormData((prev) => ({ ...prev, service: serviceName }));
    setIsContactModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalFormData.name || !modalFormData.email) return;
    setModalSubmitted(true);
  };

  // Determine container styling based on selected display frame mode
  const getContainerStyle = () => {
    switch (displayMode) {
      case 'mockup':
        // Photorealistic screen display mockup on clean white background
        return 'max-w-[1280px] mx-auto my-8 border-8 border-[#2D3436] rounded-3xl overflow-hidden shadow-none bg-white relative';
      case 'tablet':
        return 'max-w-[768px] mx-auto my-8 border-8 border-[#2D3436] rounded-2xl overflow-hidden shadow-none bg-white relative';
      case 'mobile':
        return 'max-w-[390px] mx-auto my-8 border-8 border-[#2D3436] rounded-3xl overflow-hidden shadow-none bg-white relative';
      case 'full':
      default:
        return 'w-full bg-white';
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2D3436] antialiased selection:bg-[#0984E3] selection:text-white">
      
      {/* Top Controls Bar: Display Modes & Code Inspector */}
      <MockupFrameHeader
        currentMode={displayMode}
        onModeChange={(mode) => setDisplayMode(mode)}
        onOpenCodeInspector={() => setIsCodeInspectorOpen(true)}
      />

      {/* Screen Frame Outer Wrapper for Mockup View */}
      <div className={displayMode !== 'full' ? 'bg-[#F8F9FA] p-4 sm:p-8 min-h-[calc(100vh-50px)] flex justify-center' : ''}>
        
        {/* Main Landing Page Canvas */}
        <main className={getContainerStyle()}>
          
          {/* Photorealistic Screen Bezel Bar (for mockup/tablet/mobile mode) */}
          {displayMode !== 'full' && (
            <div className="bg-[#2D3436] text-white px-4 py-2 flex items-center justify-between border-b-2 border-black text-xs font-mono">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7675]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0984E3]"></span>
              </div>
              <div className="bg-black px-3 py-0.5 rounded text-[10px] text-gray-300 font-bold">
                https://connective.agency
              </div>
              <div className="text-[10px] font-black uppercase text-[#2ECC71]">
                FLAT DISPLAY MOCKUP
              </div>
            </div>
          )}

          {/* Navigation Bar */}
          <Navbar
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onOpenContactModal={() => {
              setPrefilledService('Web Design & Dev');
              setIsContactModalOpen(true);
            }}
          />

          {/* Hero Section with Custom Vector Illustration */}
          <HeroSection
            onOpenContactModal={() => {
              setPrefilledService('Web Design & Dev');
              setIsContactModalOpen(true);
            }}
            onNavigateSection={handleNavigate}
          />

          {/* Services Section & Interactive Scope Estimator */}
          <ServicesSection
            onOpenContactWithService={handleOpenContactWithService}
          />

          {/* Portfolio & Case Studies */}
          <PortfolioSection
            onOpenContactWithProject={handleOpenContactWithService}
          />

          {/* About Manifesto & Team */}
          <AboutSection />

          {/* Blog & Thought Leadership */}
          <BlogSection />

          {/* Contact Section */}
          <ContactSection
            prefilledService={prefilledService}
          />

          {/* Footer */}
          <Footer
            onNavigate={handleNavigate}
            onOpenContactModal={() => {
              setPrefilledService('Web Design & Dev');
              setIsContactModalOpen(true);
            }}
          />

        </main>
      </div>

      {/* QUICK CONTACT MODAL OVERLAY ("LET'S WORK TOGETHER") */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-none">
          <div className="bg-white border-4 border-[#2D3436] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative">
            
            <button
              onClick={() => {
                setIsContactModalOpen(false);
                setModalSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-black text-xl bg-gray-100 hover:bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>

            {modalSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#2ECC71] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-[#2D3436] uppercase font-sans">
                  PROPOSAL SENT!
                </h3>
                <p className="text-xs font-bold text-gray-700">
                  We have received your request for <span className="text-[#0984E3]">{modalFormData.service}</span>. An agency director will email you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsContactModalOpen(false);
                    setModalSubmitted(false);
                  }}
                  className="bg-[#0984E3] text-white font-extrabold text-xs px-6 py-3 rounded-xl uppercase tracking-wider cursor-pointer"
                >
                  RETURN TO SITE
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div>
                  <span className="bg-[#0984E3] text-white font-black text-[10px] px-2.5 py-1 rounded uppercase tracking-wider inline-block mb-1">
                    CONNECTIVE DIRECT CTA
                  </span>
                  <h3 className="text-2xl font-black text-[#2D3436] uppercase font-sans">
                    LET'S WORK TOGETHER
                  </h3>
                  <p className="text-xs font-bold text-gray-600">
                    Tell us about your brand or web project.
                  </p>
                </div>

                <div>
                  <label className="text-[11px] font-black uppercase text-[#2D3436] block mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Smith"
                    value={modalFormData.name}
                    onChange={(e) => setModalFormData({ ...modalFormData, name: e.target.value })}
                    className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black uppercase text-[#2D3436] block mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@company.com"
                    value={modalFormData.email}
                    onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                    className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black uppercase text-[#2D3436] block mb-1">
                    SERVICE INTEREST
                  </label>
                  <select
                    value={modalFormData.service}
                    onChange={(e) => setModalFormData({ ...modalFormData, service: e.target.value })}
                    className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                  >
                    <option>Web Design & Dev</option>
                    <option>Content Creation</option>
                    <option>Social Media Strategy</option>
                    <option>Brand Identity</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-black uppercase text-[#2D3436] block mb-1">
                    PROJECT SUMMARY
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Key requirements or questions..."
                    value={modalFormData.message}
                    onChange={(e) => setModalFormData({ ...modalFormData, message: e.target.value })}
                    className="w-full bg-[#F8F9FA] border-2 border-[#2D3436] rounded-xl p-3 text-xs font-bold text-[#2D3436] focus:outline-none focus:border-[#0984E3]"
                  ></textarea>
                </div>

                {/* SOLID BLUE CTA BUTTON WITH ROUNDED CORNERS READS 'LET'S WORK TOGETHER' */}
                <button
                  type="submit"
                  className="w-full bg-[#0984E3] hover:bg-[#0773C5] text-white font-extrabold text-sm py-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center space-x-2 transition-transform active:scale-95 cursor-pointer"
                >
                  <span>LET'S WORK TOGETHER</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* HTML & CSS CODE INSPECTOR MODAL */}
      <CodeInspectorModal
        isOpen={isCodeInspectorOpen}
        onClose={() => setIsCodeInspectorOpen(false)}
      />

    </div>
  );
}
