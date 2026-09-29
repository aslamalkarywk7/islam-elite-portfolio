/**
 * _engine.js — EVM Math Engine + analysis messages for the Oman Luxury Dash demo.
 *
 * Faithful plain-JS port of:
 *   live/dashboard-website/_source/src/lib/mathEngine.ts
 *   live/dashboard-website/_source/src/lib/aiAnalysis.ts
 *
 * Shared by the Express gallery server (server.js) and the Vercel
 * serverless endpoints (api/metrics.js, api/v1/metrics.js) so the exported
 * static demo regains its backend on every host. No dependencies.
 */
"use strict";

// ── Phase 1: Input Validation ─────────────────────────────────────────────

const REQUIRED = [
  ["totalBudget", "Total Budget (BAC)"],
  ["plannedValue", "Planned Value (PV)"],
  ["actualCost", "Actual Cost (AC)"],
  ["earnedValue", "Earned Value (EV)"],
  ["expectedMarketValue", "Market Value"],
  ["marbleBoughtSqm", "Marble Bought"],
  ["marbleWastedSqm", "Marble Wasted"],
  ["marbleWastedCost", "Wasted Cost"],
  ["contingencyReserve", "Contingency Reserve"],
  ["durationMonths", "Duration (Months)"],
];

function validateInputs(data) {
  const errors = [];
  for (const [key, label] of REQUIRED) {
    const val = data[key];
    if (val === undefined || val === null || Number.isNaN(Number(val))) {
      errors.push({ field: key, message: `Please enter a valid value for ${label}.` });
      continue;
    }
    if (Number(val) < 0) {
      errors.push({ field: key, message: `${label} cannot be negative.` });
    }
  }
  return errors;
}

// ── Phase 2: Logical Impossibility Checks ─────────────────────────────────

function checkLogicalErrors(d) {
  const errors = [];
  if (d.totalBudget <= 0) {
    errors.push({ field: "totalBudget", message: "Logical error: Total Budget (BAC) must be greater than zero. Please enter logical calculation data in Live Data Entry." });
  }
  if (d.marbleWastedSqm > d.marbleBoughtSqm) {
    errors.push({ field: "marbleWastedSqm", message: `Logical error: Wasted quantity (${d.marbleWastedSqm} sqm) cannot exceed bought quantity (${d.marbleBoughtSqm} sqm). Please review your input data.` });
  }
  if (d.actualCost === 0 && d.earnedValue > 0) {
    errors.push({ field: "actualCost", message: "Logical error: Actual Cost (AC) cannot be zero when Earned Value (EV) is greater than zero." });
  }
  if (d.plannedValue === 0 && d.earnedValue > 0) {
    errors.push({ field: "plannedValue", message: "Logical error: Planned Value (PV) cannot be zero when Earned Value (EV) is greater than zero." });
  }
  if (d.marbleWastedCost > d.actualCost) {
    errors.push({ field: "marbleWastedCost", message: `Logical error: Wasted Cost (${d.marbleWastedCost} OMR) cannot exceed Total Actual Cost (${d.actualCost} OMR).` });
  }
  if (d.marbleWastedCost > 0 && d.marbleWastedSqm === 0) {
    errors.push({ field: "marbleWastedSqm", message: `Logical error: Declared a Wasted Cost (${d.marbleWastedCost} OMR) but zero Wasted Area. Financial wastage necessitates physical wastage.` });
  }
  if (d.marbleWastedSqm > 0 && d.marbleWastedCost === 0) {
    errors.push({ field: "marbleWastedCost", message: `Logical error: Declared a Wasted Area (${d.marbleWastedSqm} sqm) but zero Wasted Cost. Please account for the financial loss.` });
  }
  if (d.earnedValue > d.totalBudget) {
    errors.push({ field: "earnedValue", message: `Logical error: Earned Value (EV) (${d.earnedValue} OMR) cannot exceed Total Budget (BAC) (${d.totalBudget} OMR).` });
  }
  if (d.plannedValue > d.totalBudget) {
    errors.push({ field: "plannedValue", message: `Logical error: Planned Value (PV) (${d.plannedValue} OMR) cannot exceed Total Budget (BAC) (${d.totalBudget} OMR).` });
  }
  if (d.contingencyReserve > d.totalBudget) {
    errors.push({ field: "contingencyReserve", message: `Logical error: Contingency Reserve (${d.contingencyReserve} OMR) cannot exceed Total Budget (BAC) (${d.totalBudget} OMR).` });
  }
  if (d.durationMonths <= 0) {
    errors.push({ field: "durationMonths", message: "Logical error: Project duration must be greater than zero." });
  }
  return errors;
}

// ── Phase 3: Math Engine — Pure EVM Formulas ──────────────────────────────

function computeMetrics(d) {
  const cpi = d.actualCost > 0 ? d.earnedValue / d.actualCost : 1;
  const spi = d.plannedValue > 0 ? d.earnedValue / d.plannedValue : 1;
  const costVariance = d.earnedValue - d.actualCost;
  const scheduleVariance = d.earnedValue - d.plannedValue;
  const realWastagePercentage = d.marbleBoughtSqm > 0
    ? (d.marbleWastedSqm / d.marbleBoughtSqm) * 100
    : 0;
  const estimateAtCompletion = cpi > 0
    ? d.totalBudget / cpi
    : d.totalBudget + d.actualCost;
  const expectedRoiPercentage = estimateAtCompletion > 0
    ? ((d.expectedMarketValue - estimateAtCompletion) / estimateAtCompletion) * 100
    : 0;
  return { cpi, spi, costVariance, scheduleVariance, realWastagePercentage, estimateAtCompletion, expectedRoiPercentage };
}

function runEngine(data) {
  const validationErrors = validateInputs(data);
  if (validationErrors.length > 0) {
    return { success: false, data, metrics: null, validationErrors, logicalErrors: [] };
  }
  const logicalErrors = checkLogicalErrors(data);
  if (logicalErrors.length > 0) {
    return { success: false, data, metrics: null, validationErrors: [], logicalErrors };
  }
  return { success: true, data, metrics: computeMetrics(data), validationErrors: [], logicalErrors: [] };
}

// ── Analysis messages ─────────────────────────────────────────────────────

function fmtNum(n, decimals = 0) {
  return Number(n).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function generateAnalysis(data, metrics) {
  const messages = [];
  if (metrics.costVariance < 0) {
    messages.push({ type: "warning", indicator: "CV", title: "Warning: Budget Overrun — Critical Cost Variance", body: `Cost Variance is currently negative (${fmtNum(metrics.costVariance)} OMR). The actual cost of completed work exceeds its earned value. This may be due to underestimated material costs, reduced labor efficiency, or unaccounted scope changes.`, value: `${fmtNum(metrics.costVariance)} OMR` });
  } else {
    messages.push({ type: "success", indicator: "CV", title: "Positive Financial Performance — Budget Savings", body: `Cost Variance is positive (+${fmtNum(metrics.costVariance)} OMR). The project is proceeding within the approved budget. Actual cost is less than earned value, reflecting efficient financial resource management.`, value: `+${fmtNum(metrics.costVariance)} OMR` });
  }
  if (metrics.scheduleVariance < 0) {
    messages.push({ type: "warning", indicator: "SV", title: "Alert: Schedule Delay Detected", body: `Schedule Variance is negative (${fmtNum(metrics.scheduleVariance)} OMR). Actual progress is behind plan. This may be due to supply delays, workforce shortages, or unexpected external factors.`, value: `${fmtNum(metrics.scheduleVariance)} OMR` });
  } else {
    messages.push({ type: "success", indicator: "SV", title: "Schedule On Track", body: `Schedule Variance is positive (+${fmtNum(metrics.scheduleVariance)} OMR). The project is ahead of the approved timeline. Actual progress exceeds the planned value, indicating efficient execution.`, value: `+${fmtNum(metrics.scheduleVariance)} OMR` });
  }
  const WASTAGE_THRESHOLD = 10;
  if (metrics.realWastagePercentage > WASTAGE_THRESHOLD) {
    messages.push({ type: "warning", indicator: "Wastage", title: "Material Management Deviation", body: `Marble wastage rate (${fmtNum(metrics.realWastagePercentage, 2)}%) is elevated and exceeds normal thresholds (estimated at ${WASTAGE_THRESHOLD}%). This may indicate poor material storage, inefficient cutting and installation operations, or rework due to execution errors.`, value: `${fmtNum(metrics.realWastagePercentage, 2)}%` });
  } else {
    messages.push({ type: "success", indicator: "Wastage", title: "Material Management Within Normal Range", body: `Marble wastage rate (${fmtNum(metrics.realWastagePercentage, 2)}%) is within acceptable limits (below ${WASTAGE_THRESHOLD}%). This reflects efficiency in storage, cutting, and installation operations.`, value: `${fmtNum(metrics.realWastagePercentage, 2)}%` });
  }
  if (metrics.expectedRoiPercentage < 0) {
    messages.push({ type: "warning", indicator: "ROI", title: "Alert: Return on Investment Threatened", body: `Expected ROI is negative (${fmtNum(metrics.expectedRoiPercentage, 2)}%) due to a sharp increase in actual cost (AC). Continuing the current financial performance will decrease the ROI and threaten overall project profitability. A review of pricing strategy or immediate cost control measures is recommended.`, value: `${fmtNum(metrics.expectedRoiPercentage, 2)}%` });
  } else {
    messages.push({ type: "success", indicator: "ROI", title: "Positive Return on Investment", body: `Expected ROI (+${fmtNum(metrics.expectedRoiPercentage, 2)}%) indicates healthy project profitability. The expected market value exceeds the Estimate at Completion (EAC), reinforcing the project's investment attractiveness.`, value: `+${fmtNum(metrics.expectedRoiPercentage, 2)}%` });
  }
  if (metrics.estimateAtCompletion > data.totalBudget) {
    const overrun = metrics.estimateAtCompletion - data.totalBudget;
    messages.push({ type: "warning", indicator: "EAC", title: "Alert: Estimated Cost Exceeds Budget", body: `Estimate at Completion (${fmtNum(metrics.estimateAtCompletion)} OMR) exceeds the approved budget (${fmtNum(data.totalBudget)} OMR) by ${fmtNum(overrun)} OMR. This reflects a Cost Performance Index (CPI = ${fmtNum(metrics.cpi, 2)}) below 1.0, requiring urgent corrective action.`, value: `${fmtNum(metrics.estimateAtCompletion)} OMR` });
  }
  if (data.actualCost > data.totalBudget) {
    messages.push({ type: "warning", indicator: "AC", title: "Critical Warning: Actual Cost Exceeds Total Budget", body: `Actual Cost (${fmtNum(data.actualCost)} OMR) has exceeded the approved total budget (${fmtNum(data.totalBudget)} OMR). This indicates a significant departure from the cost plan and requires an immediate comprehensive review of the project strategy.`, value: `${fmtNum(data.actualCost)} OMR` });
  }
  if (data.contingencyReserve > 0) {
    if (metrics.costVariance < 0) {
      const deficit = Math.abs(metrics.costVariance);
      if (deficit <= data.contingencyReserve) {
        messages.push({ type: "success", indicator: "Contingency", title: "Resilient Financial Buffer — Deficit Absorbed", body: `The current budget deficit (${fmtNum(deficit)} OMR) is fully covered by your established Contingency Reserve (${fmtNum(data.contingencyReserve)} OMR). Prudent financial planning has insulated the baseline budget from this overrun.`, value: `Buffer: ${fmtNum(data.contingencyReserve - deficit)} OMR` });
      } else {
        messages.push({ type: "warning", indicator: "Contingency", title: "Critical Alert: Contingency Exhausted", body: `The budget deficit (${fmtNum(deficit)} OMR) has completely exhausted the Contingency Reserve (${fmtNum(data.contingencyReserve)} OMR), leaving an unmitigated shortfall of ${fmtNum(deficit - data.contingencyReserve)} OMR. Immediate budget recalibration is required.`, value: `Shortfall: ${fmtNum(deficit - data.contingencyReserve)} OMR` });
      }
    } else {
      messages.push({ type: "success", indicator: "Contingency", title: "Contingency Intact — Healthy Buffer", body: `Capital reserves remain untouched. Your total Contingency Reserve of ${fmtNum(data.contingencyReserve)} OMR is fully available to act as a financial buffer against any future luxury material price fluctuations or architectural adjustments.`, value: `${fmtNum(data.contingencyReserve)} OMR Intact` });
    }
  }
  if (data.marbleWastedCost > 0) {
    const wastedPercentOfBudget = data.totalBudget > 0 ? (data.marbleWastedCost / data.totalBudget) * 100 : 0;
    if (wastedPercentOfBudget > 5) {
      messages.push({ type: "warning", indicator: "Wasted Cost", title: "High Financial Exposure — Material Spoilage", body: `The financial loss due to material wastage (${fmtNum(data.marbleWastedCost)} OMR) now represents ${fmtNum(wastedPercentOfBudget, 1)}% of the total project budget. This indicates severe inefficiency in high-value marble handling and installation.`, value: `${fmtNum(data.marbleWastedCost)} OMR Loss` });
    } else {
      messages.push({ type: "success", indicator: "Wasted Cost", title: "Controlled Spoilage Finances", body: `The financial impact of material wastage (${fmtNum(data.marbleWastedCost)} OMR) is contained to ${fmtNum(wastedPercentOfBudget, 1)}% of the overall budget, suggesting that luxury finishing is proceeding within acceptable premium risk margins.`, value: `${fmtNum(data.marbleWastedCost)} OMR Loss` });
    }
  }
  return messages;
}

// ── HTTP contract (mirrors route.ts GET/POST) ─────────────────────────────

function coerce(body) {
  const b = body ?? {};
  return {
    totalBudget: Number(b.totalBudget) || 0,
    durationMonths: Number(b.durationMonths) || 0,
    plannedValue: Number(b.plannedValue) || 0,
    actualCost: Number(b.actualCost) || 0,
    earnedValue: Number(b.earnedValue) || 0,
    expectedMarketValue: Number(b.expectedMarketValue) || 0,
    marbleBoughtSqm: Number(b.marbleBoughtSqm) || 0,
    marbleWastedSqm: Number(b.marbleWastedSqm) || 0,
    marbleWastedCost: Number(b.marbleWastedCost) || 0,
    contingencyReserve: Number(b.contingencyReserve) || 0,
    itemName: b.itemName || "Italian Marble (Floor Marble)",
  };
}

function createStore() {
  let current = null; // in-memory state — starts EMPTY
  return {
    get() {
      if (!current) return { status: 200, body: { data: null, metrics: null, analysis: [], isEmpty: true } };
      const result = runEngine(current);
      const analysis = result.success && result.metrics ? generateAnalysis(current, result.metrics) : [];
      return { status: 200, body: { data: result.data, metrics: result.metrics, analysis, isEmpty: false } };
    },
    post(payload) {
      let data;
      try {
        data = coerce(typeof payload === "string" ? JSON.parse(payload) : payload);
      } catch {
        return { status: 400, body: { error: "Invalid data payload. Please review your inputs." } };
      }
      const result = runEngine(data);
      if (!result.success) {
        return { status: 400, body: { success: false, data: result.data, metrics: null, analysis: [], validationErrors: result.validationErrors, logicalErrors: result.logicalErrors } };
      }
      const analysis = result.metrics ? generateAnalysis(data, result.metrics) : [];
      current = data;
      return { status: 200, body: { success: true, data: result.data, metrics: result.metrics, analysis, validationErrors: [], logicalErrors: [] } };
    },
  };
}

export { runEngine, generateAnalysis, coerce, createStore };
