'use client';

/**
 * Dashboard.tsx
 * ─────────────────────────────────────────────────────────────────────
 * Quiet Luxury KPI Dashboard — Oman Luxury Dash
 *
 * Design rules:
 *  • Rich Dark Grey (#121212) background, cards at #1A1A1A.
 *  • Champagne Gold (#C9A96E) for titles, accents, separators.
 *  • Deep Burgundy (#800020) luxury alert — smooth CSS transition.
 *  • AI Analysis messages with Arabic text and color-coded indicators.
 *  • Extensive white-space; architectural silence between elements.
 *  • Zero page-reloads — pure React state.
 *  • Micro-animations for live counting values.
 *  • Montserrat Black for KPI numbers — gravitas & authority.
 *  • Minimalist gold icons per KPI type.
 * ─────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { CalculatedMetrics, ProjectData } from '@/lib/mathEngine';
import { AnalysisMessage } from '@/lib/aiAnalysis';
import { TrendingUp, Wallet, AlertTriangle, BarChart2, Activity } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────

interface DashboardProps {
  data: ProjectData;
  metrics: CalculatedMetrics;
  analysis: AnalysisMessage[];
  triggerLuxuryAlert?: boolean;
}

// ── Helpers ───────────────────────────────────────────────────────────

function fmt(n: number, decimals = 0) {
  return n.toLocaleString('en-OM', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function sign(n: number) {
  return n > 0 ? '+' : '';
}

/**
 * Smart formatter: abbreviates numbers with 7+ digits.
 * e.g. -164860544 → "-164.9M",  589287657 → "589.3M"
 *      1234567890 → "1.2B",     999999 → "999,999" (unchanged)
 */
function fmtSmart(n: number, decimals = 0): string {
  const abs = Math.abs(n);
  const negative = n < 0;
  const prefix = negative ? '-' : '';

  // Only abbreviate if 7+ digits (≥ 1,000,000)
  if (abs >= 1_000_000_000) {
    return `${prefix}${(abs / 1_000_000_000).toFixed(1)}B`;
  }
  if (abs >= 1_000_000) {
    return `${prefix}${(abs / 1_000_000).toFixed(1)}M`;
  }
  if (abs >= 100_000) {
    return `${prefix}${(abs / 1_000).toFixed(1)}K`;
  }
  return fmt(n, decimals);
}

// ── KPI Icon Map ──────────────────────────────────────────────────────

type KpiIconType = 'cpi' | 'spi' | 'wastage' | 'eac' | 'roi';

function KpiIcon({ type, alert }: { type: KpiIconType; alert: boolean }) {
  const color = alert ? 'rgba(184,92,115,0.8)' : 'rgba(201,169,110,0.7)';
  const size = 14;
  const props = { size, strokeWidth: 1.5, style: { color } };

  switch (type) {
    case 'cpi':    return <BarChart2 {...props} />;
    case 'spi':    return <Activity {...props} />;
    case 'wastage':return <AlertTriangle {...props} />;
    case 'eac':   return <Wallet {...props} />;
    case 'roi':    return <TrendingUp {...props} />;
    default:       return null;
  }
}

// ── Sub-components ────────────────────────────────────────────────────

interface KpiCardProps {
  label: string;
  rawValue: number;
  formatType?: 'default' | 'smart' | 'sign-default';
  decimals?: number;
  suffix?: string;
  sublabel?: string;
  alert?: boolean;
  featured?: boolean;
  delay?: number;
  iconType?: KpiIconType;
}

function KpiCard({ label, rawValue, formatType = 'default', decimals = 0, suffix, sublabel, alert = false, featured = false, delay = 0, iconType }: KpiCardProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  // Number animation
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1200 + Math.random() * 800; // random duration between 1.2s and 2.0s
    let animationFrame: number;

    const tick = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(easing * rawValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [rawValue]);

  const autoFit = useCallback(() => {
    const el = valueRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const BASE_FONT_SIZE = 44;
    const MIN_FONT_SIZE = 18;

    el.style.fontSize = `${BASE_FONT_SIZE}px`;
    const containerWidth = container.clientWidth;
    const textWidth = el.scrollWidth;

    if (textWidth > containerWidth) {
      // Scale down proportionally, but never below MIN
      const scale = containerWidth / textWidth;
      const newSize = Math.max(MIN_FONT_SIZE, Math.floor(BASE_FONT_SIZE * scale * 0.95));
      setFontSize(newSize);
    } else {
      setFontSize(null);
    }
  }, [displayValue]);

  useEffect(() => {
    autoFit();
    window.addEventListener('resize', autoFit);
    return () => window.removeEventListener('resize', autoFit);
  }, [autoFit]);

  let formattedValue = '';
  if (formatType === 'smart') {
    formattedValue = fmtSmart(displayValue, decimals);
  } else if (formatType === 'sign-default') {
    formattedValue = `${sign(displayValue)}${fmt(displayValue, decimals)}`;
  } else {
    formattedValue = fmt(displayValue, decimals);
  }

  return (
    <div
      className={[
        'kpi-card card fade-up p-10 flex flex-col justify-between min-h-[200px]',
        alert ? 'card-alert' : '',
        featured ? 'card-active' : '',
      ].join(' ')}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Label row with icon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {iconType && <KpiIcon type={iconType} alert={alert} />}
          <span className="text-[10px] uppercase tracking-[0.22em] text-dim font-medium">
            {label}
          </span>
        </div>
        {alert && (
          <span className="pulse-burg inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-burg border border-burg/40 rounded-full px-2.5 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#800020] inline-block" />
            Luxury Alert
          </span>
        )}
      </div>

      {/* Value — auto-fit container */}
      <div ref={containerRef} className="kpi-value-container mt-5">
        <span
          ref={valueRef}
          className={[
            'kpi-value tracking-tight leading-none',
            alert ? 'text-[#b85c73]' : 'text-white',
          ].join(' ')}
          style={fontSize ? { fontSize: `${fontSize}px` } : undefined}
        >
          {formattedValue}
        </span>
        {suffix && (
          <span
            className={[
              'kpi-suffix ml-1 font-sans font-extralight',
              alert ? 'text-burg' : 'text-gold',
            ].join(' ')}
            style={fontSize ? { fontSize: `${Math.max(14, Math.floor(fontSize * 0.55))}px` } : undefined}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* Sub-label */}
      {sublabel && (
        <span className="mt-3 text-[11px] text-dim font-mono tracking-wider">
          {sublabel}
        </span>
      )}

      {/* Bottom accent bar */}
      <div
        className="mt-6 h-px w-full"
        style={{
          background: alert
            ? 'linear-gradient(90deg, transparent, rgba(128,0,32,0.6), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)',
          transition: 'background 0.7s ease',
        }}
      />
    </div>
  );
}

interface FinancialRowProps {
  label: string;
  value: string;
}

function FinancialRow({ label, value }: FinancialRowProps) {
  return (
    <div className="flex flex-col gap-1.5 py-5 border-b border-[rgba(255,255,255,0.05)] last:border-0">
      <span className="text-[10px] uppercase tracking-[0.2em] text-dim">{label}</span>
      <span className="text-base font-mono text-white font-light">{value}</span>
    </div>
  );
}

// ── Analysis Message Card ─────────────────────────────────────────────

function AnalysisCard({ msg, delay }: { msg: AnalysisMessage; delay: number }) {
  const isWarning = msg.type === 'warning';

  return (
    <div
      className="analysis-card fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={[
          'rounded-xl px-7 py-6 border transition-all duration-500',
          isWarning
            ? 'bg-[rgba(128,0,32,0.08)] border-[#800020]/30'
            : 'bg-[rgba(34,139,34,0.06)] border-[#2d6a2d]/30',
        ].join(' ')}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className={[
                'w-2 h-2 rounded-full inline-block',
                isWarning ? 'bg-[#800020]' : 'bg-[#2d6a2d]',
              ].join(' ')}
            />
            <span
              className={[
                'text-[10px] uppercase tracking-[0.2em] font-medium font-mono',
                isWarning ? 'text-[#b85c73]' : 'text-[#4a9e4a]',
              ].join(' ')}
            >
              {msg.indicator}
            </span>
          </div>
          <span
            className={[
              'font-mono text-sm tracking-wider',
              isWarning ? 'text-[#b85c73]' : 'text-[#4a9e4a]',
            ].join(' ')}
          >
            {msg.value}
          </span>
        </div>

        {/* Title */}
        <h4
          className={[
            'text-sm font-medium mb-2 leading-relaxed',
            isWarning ? 'text-[#800020]' : 'text-[#2d6a2d]',
          ].join(' ')}
        >
          {msg.title}
        </h4>

        {/* Body */}
        <p className="text-[12px] leading-[1.8] text-white/60">
          {msg.body}
        </p>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────

export default function Dashboard({ data, metrics, analysis, triggerLuxuryAlert }: DashboardProps) {
  const cvAlert = triggerLuxuryAlert ?? metrics.costVariance < 0;
  const warnings = analysis.filter(m => m.type === 'warning');
  const successes = analysis.filter(m => m.type === 'success');

  const [simulatedCost, setSimulatedCost] = useState(0);

  // Animate the main luxury alert variance
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500;
    let animationFrame: number;

    const tick = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setSimulatedCost(easing * metrics.costVariance);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [metrics.costVariance]);


  return (
    <section aria-label="KPI Dashboard" className="flex flex-col gap-12">

      {/* ── Luxury Alert Banner ─────────────────────────────────── */}
      <div
        style={{
          maxHeight: cvAlert ? '120px' : '0',
          opacity: cvAlert ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.7s cubic-bezier(.4,0,.2,1), opacity 0.5s ease',
        }}
        aria-live="assertive"
      >
        <div className={cvAlert ? 'alert-entry' : ''}>
          <div className="bg-burg-dim border border-[#800020] rounded-xl px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pulse-burg">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-burg mb-1">
                Luxury Alert — Budget Variance
              </p>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                Cost variance is negative. Actual expenditure exceeds earned value.
                Corrective action is advised.
              </p>
            </div>
            <div className="shrink-0 mt-3 sm:mt-0 sm:text-right">
              <span className="font-mono text-[1.6rem] sm:text-2xl text-[#b85c73]">
                {fmt(simulatedCost)} OMR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── KPI Cards Grid ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        <KpiCard
          label="CPI"
          rawValue={metrics.cpi}
          decimals={2}
          sublabel="Cost Performance Index"
          alert={metrics.cpi < 1}
          iconType="cpi"
          delay={0}
        />
        <KpiCard
          label="SPI"
          rawValue={metrics.spi}
          decimals={2}
          sublabel="Schedule Performance Index"
          alert={metrics.spi < 1}
          iconType="spi"
          delay={75}
        />
        <KpiCard
          label="Real Wastage"
          rawValue={metrics.realWastagePercentage}
          decimals={2}
          suffix="%"
          sublabel={`${fmt(data.marbleWastedSqm)} sqm of ${fmt(data.marbleBoughtSqm)} sqm`}
          alert={metrics.realWastagePercentage > 10}
          iconType="wastage"
          delay={150}
        />
        <KpiCard
          label="Estimate at Completion"
          rawValue={metrics.estimateAtCompletion}
          formatType="smart"
          suffix="OMR"
          sublabel="BAC ÷ CPI"
          alert={metrics.estimateAtCompletion > data.totalBudget}
          iconType="eac"
          delay={225}
        />
        <KpiCard
          label="Expected ROI"
          rawValue={metrics.expectedRoiPercentage}
          decimals={2}
          formatType="sign-default"
          suffix="%"
          sublabel={`Market ${fmtSmart(data.expectedMarketValue)} OMR`}
          alert={metrics.expectedRoiPercentage < 0}
          featured={true}
          iconType="roi"
          delay={300}
        />
      </div>

      {/* ── AI Analysis Messages ───────────────────────────────── */}
      {analysis.length > 0 && (
        <div className="fade-up" style={{ animationDelay: '350ms' }}>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="font-serif-luxury text-2xl text-gold tracking-wider font-light">
              Intelligent Analysis
            </h3>
            <span className="text-[9px] uppercase tracking-[0.2em] text-dim border border-gold/15 rounded-full px-2.5 py-0.5">
              AI Engine
            </span>
          </div>

          {/* Warnings first */}
          {warnings.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              {warnings.map((msg, i) => (
                <AnalysisCard key={`w-${msg.indicator}-${i}`} msg={msg} delay={400 + i * 80} />
              ))}
            </div>
          )}

          {/* Then successes */}
          {successes.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {successes.map((msg, i) => (
                <AnalysisCard key={`s-${msg.indicator}-${i}`} msg={msg} delay={400 + warnings.length * 80 + i * 80} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Financial Detail Panel ──────────────────────────────── */}
      <div className="card p-12 xl:p-16 fade-up" style={{ animationDelay: '500ms' }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h2 className="font-serif-luxury text-3xl font-light text-gold tracking-wider">
            Raw Financials
          </h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-dim">
            Al-Mouj Villa Development
          </span>
        </div>

        <div className="sep-gold mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-2">
          <FinancialRow label="Item (Material)" value={data.itemName || 'N/A'} />
          <FinancialRow label="Total Budget (BAC)" value={`${fmt(data.totalBudget)} OMR`} />
          <FinancialRow label="Planned Value (PV)" value={`${fmt(data.plannedValue)} OMR`} />
          <FinancialRow label="Actual Cost (AC)" value={`${fmt(data.actualCost)} OMR`} />
          <FinancialRow label="Earned Value (EV)" value={`${fmt(data.earnedValue)} OMR`} />
          <FinancialRow label="Market Value" value={`${fmt(data.expectedMarketValue)} OMR`} />
          <FinancialRow label="Marble Purchased" value={`${fmt(data.marbleBoughtSqm)} sqm`} />
          <FinancialRow label="Marble Wasted" value={`${fmt(data.marbleWastedSqm)} sqm`} />
          <FinancialRow label="Wasted Cost" value={`${fmt(data.marbleWastedCost)} OMR`} />
          <FinancialRow label="Contingency" value={`${fmt(data.contingencyReserve)} OMR`} />
          <FinancialRow label="Duration" value={`${data.durationMonths} Months`} />
        </div>
      </div>

    </section>
  );
}
