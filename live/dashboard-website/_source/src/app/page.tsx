'use client';

/**
 * page.tsx — App Root
 * ──────────────────────────────────────────────────────
 * Orchestrates the Oman Luxury Dash SPA.
 *
 * Data flows:
 *   mount → GET /api/metrics → empty state (no hardcoded data)
 *   form  → POST /api/metrics → engine pipeline → analysis messages
 *   state → Dashboard + PortfolioVisuals (zero reloads)
 * ──────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import DataInputForm from '@/components/DataInputForm';
import PortfolioVisuals from '@/components/PortfolioVisuals';
import { ProjectData, CalculatedMetrics } from '@/lib/mathEngine';
import { AnalysisMessage } from '@/lib/aiAnalysis';
import { injectWatermark, getZWCPayload } from '@/lib/WatermarkSecurity';

export default function Home() {
  const [data,    setData]    = useState<ProjectData    | null>(null);
  const [metrics, setMetrics] = useState<CalculatedMetrics | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisMessage[]>([]);
  const [luxuryAlert, setLuxuryAlert] = useState(false);
  const [isLoading,   setIsLoading]   = useState(true);
  const [isEmpty,     setIsEmpty]     = useState(true);
  const watermarkApplied = useRef(false);

  // ── Boot ──────────────────────────────────────────────
  useEffect(() => {
    if (!watermarkApplied.current) {
      injectWatermark();
      watermarkApplied.current = true;
    }

    fetch('/api/metrics')
      .then(r => r.json())
      .then(json => {
        if (json.isEmpty) {
          setIsEmpty(true);
        } else {
          setData(json.data);
          setMetrics(json.metrics);
          setAnalysis(json.analysis || []);
          setLuxuryAlert(json.metrics?.costVariance < 0);
          setIsEmpty(false);
        }
      })
      .catch(() => {
        console.error('Engine init — starting in empty state');
        setIsEmpty(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // ── On form submit ────────────────────────────────────
  const handleUpdate = (
    updated: ProjectData,
    updatedMetrics: CalculatedMetrics,
    alert: boolean,
    analysisMessages: AnalysisMessage[]
  ) => {
    setData(updated);
    setMetrics(updatedMetrics);
    setAnalysis(analysisMessages);
    setLuxuryAlert(alert);
    setIsEmpty(false);
  };

  // ── Loading screen ────────────────────────────────────
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-5">
        <svg className="animate-spin w-8 h-8 text-gold opacity-60" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"
            strokeDasharray="40" strokeDashoffset="15" strokeLinecap="round"/>
        </svg>
        <span className="text-[10px] uppercase tracking-[0.35em] text-dim">
          Initializing Engine
        </span>
      </div>
    );
  }

  const zwcPayload = getZWCPayload();

  // ── Default empty ProjectData for the form ────────────
  const defaultData: ProjectData = {
    totalBudget: 0,
    durationMonths: 0,
    plannedValue: 0,
    actualCost: 0,
    earnedValue: 0,
    expectedMarketValue: 0,
    marbleBoughtSqm: 0,
    marbleWastedSqm: 0,
    marbleWastedCost: 0,
    contingencyReserve: 0,
  };

  return (
    <main className="min-h-screen text-white antialiased" style={{ background: 'var(--black)' }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 py-12 lg:py-20 space-y-20">

        {/* ── Header ──────────────────────────────────── */}
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-6 sm:gap-8">
            {/* ── Animated Logo ── */}
            <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 title-reveal relative">
              <img src="/logo.svg" alt="Oman Luxury Dash Logo" className="w-full h-full object-contain" />
              {/* Optional subtle background reflection */}
              <div className="absolute inset-0 bg-[#C9A96E] opacity-[0.03] blur-xl rounded-full pointer-events-none" />
            </div>

            {/* ── Titles ── */}
            <div>
              <h1
              className="title-reveal font-serif-luxury font-light text-5xl sm:text-6xl text-white tracking-wide"
              title="Oman Luxury Dash"
              data-session={zwcPayload}
            >
              Oman{' '}
              <span className="gold-shimmer-text font-medium">
                Luxury
              </span>{' '}
              Dash
              <span aria-hidden="true" style={{ userSelect: 'none', fontSize: 0 }}>
                {zwcPayload}
              </span>
            </h1>
            <p className="title-reveal-delay mt-3 text-[11px] uppercase tracking-[0.3em] text-dim">
              Al-Mouj Villa Development
            </p>
          </div>
          </div>
        </header>

        {/* ── Dashboard ───────────────────────────────── */}
        {!isEmpty && data && metrics ? (
          <>
            <Dashboard
              data={data}
              metrics={metrics}
              analysis={analysis}
              triggerLuxuryAlert={luxuryAlert}
            />
            <div className="sep-gold" />
          </>
        ) : (
          /* ── Empty State ─────────────────────────────── */
          <div className="card p-16 text-center fade-up">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="font-serif-luxury text-2xl text-gold tracking-wider mb-3">
                  Engine Awaiting Data
                </h2>
                <p className="text-dim text-sm max-w-md mx-auto leading-relaxed">
                  Enter the project data in the input form below, then press &quot;Sync to Engine&quot; to run the calculation engine and display intelligent analysis.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Input Form ──────────────────────────────── */}
        <DataInputForm
          initialData={data || defaultData}
          onUpdate={handleUpdate}
        />

        {/* ── Separator ───────────────────────────────── */}
        <div className="sep-gold" />

        {/* ── Portfolio Arabic Visuals ────────────────── */}
        {!isEmpty && data && metrics && (
          <PortfolioVisuals data={data} metrics={metrics} />
        )}

        {/* ── Footer ──────────────────────────────────── */}
        <footer className="pt-16 pb-4 border-t border-[rgba(255,255,255,0.03)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[9px] uppercase tracking-[0.35em] text-dim font-mono">
            Confidential · Oman Luxury Real Estate
          </p>
          <p className="text-[9px] uppercase tracking-[0.25em] text-dim font-mono">
            Architecture by Nashar Studio
          </p>
        </footer>

      </div>
    </main>
  );
}
