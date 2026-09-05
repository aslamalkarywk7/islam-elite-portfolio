/**
 * mathEngine.ts
 * ─────────────────────────────────────────────────────────────────────
 * EVM AI Math Engine — Oman Luxury Dash
 *
 * Pipeline:  Input Validation → Math Engine → AI Logical Analysis
 *
 * All computation is performed exclusively on the backend.
 * No client-side math is executed.
 * ─────────────────────────────────────────────────────────────────────
 */

// ── Input Interface ───────────────────────────────────────────────────

export interface ProjectData {
  totalBudget: number;       // BAC — Budget at Completion
  durationMonths: number;    // Project duration
  plannedValue: number;      // PV — Planned Value
  actualCost: number;        // AC — Actual Cost
  earnedValue: number;       // EV — Earned Value
  expectedMarketValue: number; // Market Value
  marbleBoughtSqm: number;  // Marble purchased (sqm)
  marbleWastedSqm: number;  // Marble wasted (sqm)
  marbleWastedCost: number;  // Marble wasted cost (OMR)
  contingencyReserve: number; // Budget reserved for unexpected changes (OMR)
  itemName?: string;         // Selected item/material
}

// ── Output Interface ──────────────────────────────────────────────────

export interface CalculatedMetrics {
  cpi: number;                    // Cost Performance Index  = EV / AC
  spi: number;                    // Schedule Performance Index = EV / PV
  costVariance: number;           // CV = EV - AC
  scheduleVariance: number;       // SV = EV - PV
  realWastagePercentage: number;  // (Wasted / Bought) × 100
  estimateAtCompletion: number;   // EAC = BAC / CPI
  expectedRoiPercentage: number;  // ((Market - EAC) / EAC) × 100
}

// ── Validation Interface ──────────────────────────────────────────────

export interface ValidationError {
  field: string;
  message: string;
}

export interface EngineResult {
  success: boolean;
  data: ProjectData;
  metrics: CalculatedMetrics | null;
  validationErrors: ValidationError[];
  logicalErrors: ValidationError[];
}

// ── Phase 1: Input Validation ─────────────────────────────────────────

function validateInputs(data: ProjectData): ValidationError[] {
  const errors: ValidationError[] = [];

  const requiredFields: { key: keyof ProjectData; label: string }[] = [
    { key: 'totalBudget',       label: 'Total Budget (BAC)' },
    { key: 'plannedValue',      label: 'Planned Value (PV)' },
    { key: 'actualCost',        label: 'Actual Cost (AC)' },
    { key: 'earnedValue',       label: 'Earned Value (EV)' },
    { key: 'expectedMarketValue', label: 'Market Value' },
    { key: 'marbleBoughtSqm',   label: 'Marble Bought' },
    { key: 'marbleWastedSqm',   label: 'Marble Wasted' },
    { key: 'marbleWastedCost',  label: 'Wasted Cost' },
    { key: 'contingencyReserve',label: 'Contingency Reserve' },
    { key: 'durationMonths',    label: 'Duration (Months)' },
  ];

  for (const field of requiredFields) {
    const val = data[field.key];

    if (val === undefined || val === null || isNaN(Number(val))) {
      errors.push({
        field: field.key,
        message: `Please enter a valid value for ${field.label}.`,
      });
      continue;
    }

    if (Number(val) < 0) {
      errors.push({
        field: field.key,
        message: `${field.label} cannot be negative.`,
      });
    }
  }

  return errors;
}

// ── Phase 2: Logical Impossibility Checks (Pre-Calculation) ───────────

function checkLogicalErrors(data: ProjectData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (data.totalBudget <= 0) {
    errors.push({
      field: 'totalBudget',
      message: 'Logical error: Total Budget (BAC) must be greater than zero. Please enter logical calculation data in Live Data Entry.',
    });
  }

  if (data.marbleWastedSqm > data.marbleBoughtSqm) {
    errors.push({
      field: 'marbleWastedSqm',
      message: `Logical error: Wasted quantity (${data.marbleWastedSqm} sqm) cannot exceed bought quantity (${data.marbleBoughtSqm} sqm). Please review your input data.`,
    });
  }

  if (data.actualCost === 0 && data.earnedValue > 0) {
    errors.push({
      field: 'actualCost',
      message: 'Logical error: Actual Cost (AC) cannot be zero when Earned Value (EV) is greater than zero.',
    });
  }

  if (data.plannedValue === 0 && data.earnedValue > 0) {
    errors.push({
      field: 'plannedValue',
      message: 'Logical error: Planned Value (PV) cannot be zero when Earned Value (EV) is greater than zero.',
    });
  }

  if (data.marbleWastedCost > data.actualCost) {
    errors.push({
      field: 'marbleWastedCost',
      message: `Logical error: Wasted Cost (${data.marbleWastedCost} OMR) cannot exceed Total Actual Cost (${data.actualCost} OMR).`,
    });
  }

  if (data.marbleWastedCost > 0 && data.marbleWastedSqm === 0) {
    errors.push({
      field: 'marbleWastedSqm',
      message: `Logical error: Declared a Wasted Cost (${data.marbleWastedCost} OMR) but zero Wasted Area. Financial wastage necessitates physical wastage.`,
    });
  }

  if (data.marbleWastedSqm > 0 && data.marbleWastedCost === 0) {
    errors.push({
      field: 'marbleWastedCost',
      message: `Logical error: Declared a Wasted Area (${data.marbleWastedSqm} sqm) but zero Wasted Cost. Please account for the financial loss.`,
    });
  }

  if (data.earnedValue > data.totalBudget) {
    errors.push({
      field: 'earnedValue',
      message: `Logical error: Earned Value (EV) (${data.earnedValue} OMR) cannot exceed Total Budget (BAC) (${data.totalBudget} OMR).`,
    });
  }

  if (data.plannedValue > data.totalBudget) {
    errors.push({
      field: 'plannedValue',
      message: `Logical error: Planned Value (PV) (${data.plannedValue} OMR) cannot exceed Total Budget (BAC) (${data.totalBudget} OMR).`,
    });
  }

  if (data.contingencyReserve > data.totalBudget) {
    errors.push({
      field: 'contingencyReserve',
      message: `Logical error: Contingency Reserve (${data.contingencyReserve} OMR) cannot exceed Total Budget (BAC) (${data.totalBudget} OMR).`,
    });
  }

  if (data.durationMonths <= 0) {
    errors.push({
      field: 'durationMonths',
      message: 'Logical error: Project duration must be greater than zero.',
    });
  }

  return errors;
}

// ── Phase 3: Math Engine — Pure EVM Formulas ──────────────────────────

function computeMetrics(data: ProjectData): CalculatedMetrics {
  const cpi = data.actualCost > 0 ? data.earnedValue / data.actualCost : 1;
  const spi = data.plannedValue > 0 ? data.earnedValue / data.plannedValue : 1;
  const costVariance = data.earnedValue - data.actualCost;
  const scheduleVariance = data.earnedValue - data.plannedValue;
  const realWastagePercentage = data.marbleBoughtSqm > 0
    ? (data.marbleWastedSqm / data.marbleBoughtSqm) * 100
    : 0;
  
  // If CPI is 0 (cost incurred, but no value earned), project completion linearly scales to infinity.
  // Instead, conservatively use the Budget + Actual Cost as a baseline fallback to prevent breaking metrics.
  const estimateAtCompletion = cpi > 0 
    ? data.totalBudget / cpi 
    : data.totalBudget + data.actualCost;
    
  const expectedRoiPercentage = estimateAtCompletion > 0
    ? ((data.expectedMarketValue - estimateAtCompletion) / estimateAtCompletion) * 100
    : 0;

  return {
    cpi,
    spi,
    costVariance,
    scheduleVariance,
    realWastagePercentage,
    estimateAtCompletion,
    expectedRoiPercentage,
  };
}

// ── Master Pipeline ───────────────────────────────────────────────────

export function runEngine(data: ProjectData): EngineResult {
  const validationErrors = validateInputs(data);
  if (validationErrors.length > 0) {
    return {
      success: false,
      data,
      metrics: null,
      validationErrors,
      logicalErrors: [],
    };
  }

  const logicalErrors = checkLogicalErrors(data);
  if (logicalErrors.length > 0) {
    return {
      success: false,
      data,
      metrics: null,
      validationErrors: [],
      logicalErrors,
    };
  }

  const metrics = computeMetrics(data);

  return {
    success: true,
    data,
    metrics,
    validationErrors: [],
    logicalErrors: [],
  };
}

export function calculateMetrics(data: ProjectData): CalculatedMetrics {
  return computeMetrics(data);
}
