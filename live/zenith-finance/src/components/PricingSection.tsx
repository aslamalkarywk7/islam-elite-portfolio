import React, { useState } from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ShadowConfig } from '../types';
import { PRICING_PLANS } from '../data/mockData';
import { Check, Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface PricingSectionProps {
  shadowConfig: ShadowConfig;
  onGetStartedClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  shadowConfig,
  onGetStartedClick,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <NeumorphicBox variant="convex" pill className="px-4 py-1.5 inline-flex items-center gap-2 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-xs font-bold tracking-wider text-[#383d46] uppercase">
            TRANSPARENT WEALTH TIERS
          </span>
        </NeumorphicBox>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2c3038] tracking-tight mb-4">
          Invest in Uncompromising Precision
        </h2>
        <p className="text-[#636a75] font-medium text-base sm:text-lg">
          No hidden custodian fees, zero asset-under-management (AUM) commissions. Simple, predictable membership.
        </p>

        {/* BILLING CYCLE TOGGLE */}
        <div className="inline-flex items-center gap-3 mt-8 p-1.5 rounded-full neu-inset">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              billingCycle === 'monthly'
                ? 'neu-inset-deep text-blue-600 shadow-inner'
                : 'text-[#636a75] hover:text-[#2c3038]'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'neu-inset-deep text-blue-600 shadow-inner'
                : 'text-[#636a75] hover:text-[#2c3038]'
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-extrabold neu-raised-sm">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* PRICING CARDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.popular;
          const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

          return (
            <NeumorphicBox
              key={plan.id}
              variant={isPopular ? 'convex' : 'raised-lg'}
              className={`p-8 rounded-3xl flex flex-col justify-between relative transition-all duration-300 ${
                isPopular ? 'border-2 border-blue-500/50 shadow-2xl' : 'border border-white/50'
              }`}
              shadowConfig={shadowConfig}
              id={`pricing-card-${plan.id}`}
            >
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular Choice
                </div>
              )}

              <div>
                {/* PLAN HEADER */}
                <h3 className="text-2xl font-extrabold text-[#2c3038] tracking-tight mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#636a75] leading-relaxed mb-6 h-12">
                  {plan.description}
                </p>

                {/* PRICE DISPLAY */}
                <div className="p-4 rounded-2xl neu-inset mb-6 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#2c3038] neu-recessed-text">
                    ${price}
                  </span>
                  <span className="text-xs font-bold text-[#636a75] uppercase">
                    / month {billingCycle === 'annual' ? '(billed yearly)' : ''}
                  </span>
                </div>

                {/* FEATURES LIST */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold text-[#383d46] uppercase tracking-wider mb-2">
                    Included Privileges:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4b525d] font-medium">
                      <div className="p-1 rounded-full bg-blue-500/10 text-blue-600 mt-0.5 neu-raised-sm shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PLAN CTA BUTTON */}
              <NeumorphicBox
                variant={isPopular ? 'glowing' : 'raised-sm'}
                clickable
                hoverable
                onClick={onGetStartedClick}
                className={`w-full py-4 text-center text-xs font-bold uppercase tracking-wider cursor-pointer ${
                  isPopular ? 'text-blue-600 font-extrabold' : 'text-[#2c3038]'
                }`}
              >
                {plan.ctaText}
              </NeumorphicBox>
            </NeumorphicBox>
          );
        })}
      </div>
    </section>
  );
};
