import React, { useState } from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ShadowConfig } from '../types';
import { X, CheckCircle2, Shield, Lock, ArrowRight, Sparkles } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  shadowConfig: ShadowConfig;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  shadowConfig,
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    portfolioSize: '$1M - $5M',
    primaryGoal: 'Wealth Growth & Preservation',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <NeumorphicBox
        variant="raised-lg"
        className="w-full max-w-lg p-8 rounded-3xl relative border border-white/60 shadow-2xl overflow-hidden"
        shadowConfig={shadowConfig}
      >
        <NeumorphicBox
          variant="raised-sm"
          clickable
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#636a75] hover:text-[#2c3038]"
        >
          <X className="w-4 h-4" />
        </NeumorphicBox>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <NeumorphicBox variant="convex" pill className="p-2 text-blue-600">
                <Shield className="w-4 h-4" />
              </NeumorphicBox>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                EXECUTIVE ONBOARDING
              </span>
            </div>

            <h3 className="text-2xl font-black text-[#2c3038] tracking-tight mb-2">
              Begin Your Zenith Experience
            </h3>
            <p className="text-xs text-[#636a75] font-medium mb-6">
              Exclusive 14-day trial with full access to Premier features and hardware vault sync.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#383d46] uppercase">Full Name</label>
                <NeumorphicBox variant="inset" className="px-4 py-3 rounded-2xl">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexandra Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-[#2c3038] focus:outline-none"
                  />
                </NeumorphicBox>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#383d46] uppercase">Work / Executive Email</label>
                <NeumorphicBox variant="inset" className="px-4 py-3 rounded-2xl">
                  <input
                    type="email"
                    required
                    placeholder="alexandra@vancecapital.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-[#2c3038] focus:outline-none"
                  />
                </NeumorphicBox>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#383d46] uppercase">Target Portfolio Scale</label>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {['$250k - $1M', '$1M - $5M', '$5M - $25M', '$25M+ Family Vault'].map((scale) => (
                    <button
                      type="button"
                      key={scale}
                      onClick={() => setFormData({ ...formData, portfolioSize: scale })}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                        formData.portfolioSize === scale
                          ? 'neu-inset-deep text-blue-600 font-extrabold border border-blue-400/50'
                          : 'neu-raised-sm text-[#525964]'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <NeumorphicBox
                  variant="glowing"
                  clickable
                  onClick={handleSubmit}
                  className="w-full py-4 text-center text-xs font-bold uppercase tracking-widest text-blue-600 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Grant Instant Private Access</span>
                  <ArrowRight className="w-4 h-4" />
                </NeumorphicBox>
              </div>

              <div className="text-[10px] text-center text-[#717885] font-semibold flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>256-Bit SSL Encrypted. No credit card required.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <NeumorphicBox variant="convex" pill className="w-16 h-16 mx-auto flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </NeumorphicBox>

            <h3 className="text-2xl font-black text-[#2c3038]">Welcome to Zenith, {formData.fullName || 'Partner'}</h3>
            <p className="text-xs text-[#636a75] font-medium max-w-sm mx-auto leading-relaxed">
              Your private wealth key has been created. Check your inbox ({formData.email || 'your email'}) to complete biometric passkey initialization.
            </p>

            <NeumorphicBox
              variant="glowing"
              clickable
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-blue-600 cursor-pointer mt-4"
            >
              Return to Landing Page
            </NeumorphicBox>
          </div>
        )}
      </NeumorphicBox>
    </div>
  );
};
