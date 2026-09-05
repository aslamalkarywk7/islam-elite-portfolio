'use client';

/**
 * DataInputForm.tsx
 * ─────────────────────────────────────────────────────────────────────
 * Admin Data Input Interface — Oman Luxury Dash
 *
 * Strict rules:
 *  • All calculation happens on the back-end — this form only POSTS data.
 *  • All inputs start EMPTY — no hardcoded values.
 *  • Validation errors (Arabic) displayed from backend response.
 *  • Uses fetch to `/api/v1/metrics` (with fallback to `/api/metrics`).
 *  • Zero page-reloads — parent state updated via onUpdate callback.
 *  • Quiet Luxury aesthetics consistent with design system.
 * ─────────────────────────────────────────────────────────────────────
 */

import React, { useEffect, useState } from 'react';
import { ProjectData, CalculatedMetrics, ValidationError } from '@/lib/mathEngine';
import { AnalysisMessage } from '@/lib/aiAnalysis';

// ── Types ─────────────────────────────────────────────────────────────

interface DataInputFormProps {
  initialData: ProjectData;
  onUpdate: (updated: ProjectData, metrics: CalculatedMetrics, alert: boolean, analysis: AnalysisMessage[]) => void;
}

type FormState = 'idle' | 'syncing' | 'success' | 'error';

// ── Field Config ──────────────────────────────────────────────────────

interface FieldConfig {
  name: keyof ProjectData;
  label: string;
  unit: string;
  description: string;
}

const FIELDS: FieldConfig[] = [
  { name: 'totalBudget', label: 'Total Budget', unit: 'OMR', description: 'Approved project budget (BAC)' },
  { name: 'plannedValue', label: 'Planned Value', unit: 'OMR', description: 'Planned value of work scheduled (PV)' },
  { name: 'actualCost', label: 'Actual Cost', unit: 'OMR', description: 'Total expenditure to date (AC)' },
  { name: 'earnedValue', label: 'Earned Value', unit: 'OMR', description: 'Budgeted cost of work performed (EV)' },
  { name: 'expectedMarketValue', label: 'Market Value', unit: 'OMR', description: 'Expected sale / appraisal value' },
  { name: 'marbleBoughtSqm', label: 'Marble Bought', unit: 'sqm', description: 'Total marble area bought' },
  { name: 'marbleWastedSqm', label: 'Marble Wasted', unit: 'sqm', description: 'Unused / wasted marble area' },
  { name: 'marbleWastedCost', label: 'Wasted Cost', unit: 'OMR', description: 'Financial loss from wastage' },
  { name: 'contingencyReserve', label: 'Contingency', unit: 'OMR', description: 'Budget for unexpected changes' },
  { name: 'durationMonths', label: 'Duration', unit: 'Months', description: 'Project timeline' },
];

// ── Sub-components ────────────────────────────────────────────────────

interface InputRowProps extends FieldConfig {
  value: number;
  onChange: (name: keyof ProjectData, value: number) => void;
  error?: string;
}

function InputRow({ name, label, unit, description, value, onChange, error }: InputRowProps) {
  const [inputValue, setInputValue] = useState(() => {
    return value === 0 ? '' : value.toLocaleString('en-US');
  });

  // Sync with external data updates (like initial load)
  useEffect(() => {
    const numericInput = parseFloat(inputValue.replace(/,/g, ''));
    if (value !== numericInput && !isNaN(value)) {
      setInputValue(value === 0 ? '' : value.toLocaleString('en-US'));
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove anything that isn't a digit or dot
    const raw = e.target.value.replace(/[^0-9.]/g, '');

    // Prevent multiple dots
    const parts = raw.split('.');
    const cleanRaw = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : raw;

    // Apply thousands separators to the integer part
    let formatted = cleanRaw;
    if (cleanRaw !== '') {
      const split = cleanRaw.split('.');
      const intPart = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      const decPart = split.length > 1 ? '.' + split[1] : '';
      formatted = intPart + decPart;
    }

    setInputValue(formatted);
    onChange(name, parseFloat(cleanRaw) || 0);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={`field-${name}`}
        className="text-[10px] uppercase tracking-[0.22em] text-dim font-medium"
      >
        {label}
        <span className="ml-2 text-gold/50 normal-case tracking-normal text-[10px]">
          ({unit})
        </span>
      </label>

      <div className="relative group">
        <input
          id={`field-${name}`}
          type="text"
          inputMode="decimal"
          name={name}
          value={inputValue}
          onChange={handleChange}
          placeholder="0"
          className={[
            'w-full bg-black border text-white font-mono font-light',
            'text-base px-4 py-3.5 rounded-lg',
            error
              ? 'border-[#800020] ring-1 ring-[#800020]/30'
              : 'border-[rgba(255,255,255,0.08)]',
            'focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20',
            'hover:border-[rgba(212,175,55,0.25)]',
            'transition-all duration-300',
            'placeholder:text-dim',
          ].join(' ')}
          aria-describedby={`desc-${name}`}
          aria-invalid={!!error}
        />
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-dim uppercase tracking-widest pointer-events-none"
        >
          {unit}
        </span>
      </div>

      {error ? (
        <p className="text-[10px] text-[#800020] leading-relaxed" dir="rtl">
          {error}
        </p>
      ) : (
        <p id={`desc-${name}`} className="text-[10px] text-dim leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────

export default function DataInputForm({ initialData, onUpdate }: DataInputFormProps) {
  const [formData, setFormData] = useState<ProjectData>(initialData);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [logicalErrors, setLogicalErrors] = useState<ValidationError[]>([]);

  // Sync external data changes (e.g. initial fetch) into form
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (name: keyof ProjectData, value: number | string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-level error when user types
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('syncing');
    setErrorMsg('');
    setFieldErrors({});
    setLogicalErrors([]);

    try {
      /* Try the v1 route first, fall back to /api/metrics */
      let res = await fetch('/api/v1/metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.status === 404) {
        res = await fetch('/api/metrics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      const json = await res.json();

      // Handle validation errors (400 response)
      if (!res.ok) {
        if (json.validationErrors && json.validationErrors.length > 0) {
          const errors: Record<string, string> = {};
          json.validationErrors.forEach((err: ValidationError) => {
            errors[err.field] = err.message;
          });
          setFieldErrors(errors);
        }
        if (json.logicalErrors && json.logicalErrors.length > 0) {
          setLogicalErrors(json.logicalErrors);
        }
        setFormState('error');
        setErrorMsg(json.validationErrors?.[0]?.message || json.logicalErrors?.[0]?.message || json.error || 'Data Error');
        setTimeout(() => setFormState('idle'), 5000);
        return;
      }

      // Success — propagate to parent
      const luxuryAlert: boolean = json.metrics?.costVariance < 0;
      onUpdate(json.data, json.metrics, luxuryAlert, json.analysis || []);
      setFormState('success');

      setTimeout(() => setFormState('idle'), 2500);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setErrorMsg(message);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 4000);
    }
  };

  const StatusBadge = () => {
    if (formState === 'syncing') {
      return (
        <span className="flex items-center gap-2 text-[11px] text-gold/70 uppercase tracking-widest">
          <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="15" strokeLinecap="round" />
          </svg>
          Syncing to engine…
        </span>
      );
    }
    if (formState === 'success') {
      return (
        <span className="flex items-center gap-2 text-[11px] text-emerald-400/80 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          Engine updated
        </span>
      );
    }
    if (formState === 'error') {
      return (
        <span className="flex items-center gap-2 text-[11px] text-burg uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#800020] inline-block" />
          Data Error
        </span>
      );
    }
    return null;
  };

  return (
    <div className="card p-10 xl:p-12 relative overflow-hidden">

      {/* Left accent rail */}
      <div
        className="absolute top-0 left-0 w-[2px] h-full"
        style={{
          background: formState === 'error'
            ? 'linear-gradient(180deg, transparent, #800020, transparent)'
            : 'linear-gradient(180deg, transparent, rgba(212,175,55,0.6), transparent)',
          transition: 'background 0.5s ease',
        }}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="font-serif-luxury text-3xl text-gold font-light tracking-wider">
            Live Data Entry
          </h2>
          <p className="text-[11px] text-dim uppercase tracking-[0.2em] mt-1">
            Parameters · Al-Mouj Villa Development
          </p>
        </div>
        <StatusBadge />
      </div>

      <div className="sep-gold mb-10" />

      {/* ── Logical Errors Banner ──────────────────────────────── */}
      {logicalErrors.length > 0 && (
        <div className="mb-8 rounded-xl bg-[rgba(128,0,32,0.08)] border border-[#800020]/30 px-6 py-5" dir="rtl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#800020] mb-2 font-medium" dir="ltr">
            Attention Required
          </p>
          {logicalErrors.map((err, i) => (
            <p key={i} className="text-sm text-[#b85c73] leading-relaxed mb-1">
              {err.message}
            </p>
          ))}
        </div>
      )}

      {/* ── System Error Banner ──────────────────────────────── */}
      {formState === 'error' && logicalErrors.length === 0 && Object.keys(fieldErrors).length === 0 && errorMsg && (
        <div className="mb-8 rounded-xl bg-[rgba(128,0,32,0.08)] border border-[#800020]/30 px-6 py-5" dir="rtl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#800020] mb-2 font-medium" dir="ltr">
            System Error
          </p>
          <p className="text-sm text-[#b85c73] leading-relaxed mb-1" dir="ltr">
            {errorMsg}
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate>
        {/* Item Selector */}
        <div className="mb-8 max-w-sm">
          <label htmlFor="itemName" className="block text-[10px] uppercase tracking-[0.22em] text-dim font-medium mb-1.5">
            Item <span className="text-gold/50 normal-case tracking-normal text-[10px]">(Material)</span>
          </label>
          <div className="relative group">
            <select
              id="itemName"
              name="itemName"
              value={formData.itemName || 'Floor Marble'}
              onChange={(e) => handleChange('itemName', e.target.value)}
              className={[
                'w-full bg-black border text-white font-mono font-light appearance-none',
                'text-base px-4 py-3.5 rounded-lg',
                'border-[rgba(255,255,255,0.08)]',
                'focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20',
                'hover:border-[rgba(212,175,55,0.25)]',
                'transition-all duration-300'
              ].join(' ')}
            >
              <option value="Italian Marble (Floor Marble)">Italian Marble (Floor Marble)</option>
              <option value="Spanish Marble (Wall Marble)">Spanish Marble (Wall Marble)</option>
              <option value="Local Marble">Local Marble</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-dim">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          <p className="text-[10px] text-dim leading-relaxed mt-1.5">
            Select the material category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-10">
          {FIELDS.map(f => (
            <InputRow
              key={f.name}
              {...f}
              value={formData[f.name] as number}
              onChange={handleChange}
              error={fieldErrors[f.name]}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-[10px] text-dim leading-relaxed max-w-sm">
            All calculations are performed exclusively on the secure backend engine.
            No client-side math is executed.
          </p>

          <button
            type="submit"
            disabled={formState === 'syncing'}
            className={[
              'relative px-10 py-3.5 overflow-hidden',
              'text-[11px] uppercase tracking-[0.25em] font-medium',
              'border transition-all duration-300',
              formState === 'syncing'
                ? 'bg-transparent text-gold/40 border-gold/20 cursor-not-allowed'
                : 'bg-transparent text-gold border-gold/50 hover:bg-gold hover:text-black cursor-pointer',
              'group',
            ].join(' ')}
          >
            {/* Sliding fill on hover */}
            <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10">
              {formState === 'syncing' ? 'Syncing…' : 'Sync to Engine'}
            </span>
          </button>
        </div>
      </form>

    </div>
  );
}
