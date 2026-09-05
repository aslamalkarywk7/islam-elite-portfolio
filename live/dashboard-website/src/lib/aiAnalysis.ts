/**
 * aiAnalysis.ts
 * ─────────────────────────────────────────────────────────────────────
 * AI Variance Analysis System — English Message Engine
 *
 * Reviews every computed metric and generates professional
 * analysis messages based on the sign and magnitude of each result.
 *
 * Color coding (applied by frontend):
 *   • Warning:  #800020 (Deep Burgundy)
 *   • Success:  Dark Green
 * ─────────────────────────────────────────────────────────────────────
 */

import { CalculatedMetrics, ProjectData } from './mathEngine';

// ── Analysis Message Interface ────────────────────────────────────────

export interface AnalysisMessage {
  type: 'warning' | 'success';
  indicator: string;   // e.g. 'CV', 'SV', 'ROI', 'Wastage', 'EAC'
  title: string;
  body: string;
  value: string;       // Formatted value for display
}

// ── Helpers ───────────────────────────────────────────────────────────

function fmtNum(n: number, decimals = 0): string {
  return n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// ── Analysis Generator ────────────────────────────────────────────────

export function generateAnalysis(
  data: ProjectData,
  metrics: CalculatedMetrics
): AnalysisMessage[] {
  const messages: AnalysisMessage[] = [];

  // ─── 1. Cost Variance (CV) ──────────────────────────────────────
  if (metrics.costVariance < 0) {
    messages.push({
      type: 'warning',
      indicator: 'CV',
      title: 'Warning: Budget Overrun — Critical Cost Variance',
      body: `Cost Variance is currently negative (${fmtNum(metrics.costVariance)} OMR). The actual cost of completed work exceeds its earned value. This may be due to underestimated material costs, reduced labor efficiency, or unaccounted scope changes.`,
      value: `${fmtNum(metrics.costVariance)} OMR`,
    });
  } else {
    messages.push({
      type: 'success',
      indicator: 'CV',
      title: 'Positive Financial Performance — Budget Savings',
      body: `Cost Variance is positive (+${fmtNum(metrics.costVariance)} OMR). The project is proceeding within the approved budget. Actual cost is less than earned value, reflecting efficient financial resource management.`,
      value: `+${fmtNum(metrics.costVariance)} OMR`,
    });
  }

  // ─── 2. Schedule Variance (SV) ──────────────────────────────────
  if (metrics.scheduleVariance < 0) {
    messages.push({
      type: 'warning',
      indicator: 'SV',
      title: 'Alert: Schedule Delay Detected',
      body: `Schedule Variance is negative (${fmtNum(metrics.scheduleVariance)} OMR). Actual progress is behind plan. This may be due to supply delays, workforce shortages, or unexpected external factors.`,
      value: `${fmtNum(metrics.scheduleVariance)} OMR`,
    });
  } else {
    messages.push({
      type: 'success',
      indicator: 'SV',
      title: 'Schedule On Track',
      body: `Schedule Variance is positive (+${fmtNum(metrics.scheduleVariance)} OMR). The project is ahead of the approved timeline. Actual progress exceeds the planned value, indicating efficient execution.`,
      value: `+${fmtNum(metrics.scheduleVariance)} OMR`,
    });
  }

  // ─── 3. Wastage % ──────────────────────────────────────────────
  const WASTAGE_THRESHOLD = 10;
  if (metrics.realWastagePercentage > WASTAGE_THRESHOLD) {
    messages.push({
      type: 'warning',
      indicator: 'Wastage',
      title: 'Material Management Deviation',
      body: `Marble wastage rate (${fmtNum(metrics.realWastagePercentage, 2)}%) is elevated and exceeds normal thresholds (estimated at ${WASTAGE_THRESHOLD}%). This may indicate poor material storage, inefficient cutting and installation operations, or rework due to execution errors.`,
      value: `${fmtNum(metrics.realWastagePercentage, 2)}%`,
    });
  } else {
    messages.push({
      type: 'success',
      indicator: 'Wastage',
      title: 'Material Management Within Normal Range',
      body: `Marble wastage rate (${fmtNum(metrics.realWastagePercentage, 2)}%) is within acceptable limits (below ${WASTAGE_THRESHOLD}%). This reflects efficiency in storage, cutting, and installation operations.`,
      value: `${fmtNum(metrics.realWastagePercentage, 2)}%`,
    });
  }

  // ─── 4. ROI ─────────────────────────────────────────────────────
  if (metrics.expectedRoiPercentage < 0) {
    messages.push({
      type: 'warning',
      indicator: 'ROI',
      title: 'Alert: Return on Investment Threatened',
      body: `Expected ROI is negative (${fmtNum(metrics.expectedRoiPercentage, 2)}%) due to a sharp increase in actual cost (AC). Continuing the current financial performance will decrease the ROI and threaten overall project profitability. A review of pricing strategy or immediate cost control measures is recommended.`,
      value: `${fmtNum(metrics.expectedRoiPercentage, 2)}%`,
    });
  } else {
    messages.push({
      type: 'success',
      indicator: 'ROI',
      title: 'Positive Return on Investment',
      body: `Expected ROI (+${fmtNum(metrics.expectedRoiPercentage, 2)}%) indicates healthy project profitability. The expected market value exceeds the Estimate at Completion (EAC), reinforcing the project's investment attractiveness.`,
      value: `+${fmtNum(metrics.expectedRoiPercentage, 2)}%`,
    });
  }

  // ─── 5. EAC vs BAC ─────────────────────────────────────────────
  if (metrics.estimateAtCompletion > data.totalBudget) {
    const overrun = metrics.estimateAtCompletion - data.totalBudget;
    messages.push({
      type: 'warning',
      indicator: 'EAC',
      title: 'Alert: Estimated Cost Exceeds Budget',
      body: `Estimate at Completion (${fmtNum(metrics.estimateAtCompletion)} OMR) exceeds the approved budget (${fmtNum(data.totalBudget)} OMR) by ${fmtNum(overrun)} OMR. This reflects a Cost Performance Index (CPI = ${fmtNum(metrics.cpi, 2)}) below 1.0, requiring urgent corrective action.`,
      value: `${fmtNum(metrics.estimateAtCompletion)} OMR`,
    });
  }

  // ─── 6. AC exceeds BAC ─────────────────────────────────────────
  if (data.actualCost > data.totalBudget) {
    messages.push({
      type: 'warning',
      indicator: 'AC',
      title: 'Critical Warning: Actual Cost Exceeds Total Budget',
      body: `Actual Cost (${fmtNum(data.actualCost)} OMR) has exceeded the approved total budget (${fmtNum(data.totalBudget)} OMR). This indicates a significant departure from the cost plan and requires an immediate comprehensive review of the project strategy.`,
      value: `${fmtNum(data.actualCost)} OMR`,
    });
  }

  // ─── 7. Contingency Reserve (CR) ────────────────────────────────
  if (data.contingencyReserve > 0) {
    if (metrics.costVariance < 0) {
      const deficit = Math.abs(metrics.costVariance);
      if (deficit <= data.contingencyReserve) {
        messages.push({
          type: 'success',
          indicator: 'Contingency',
          title: 'Resilient Financial Buffer — Deficit Absorbed',
          body: `The current budget deficit (${fmtNum(deficit)} OMR) is fully covered by your established Contingency Reserve (${fmtNum(data.contingencyReserve)} OMR). Prudent financial planning has insulated the baseline budget from this overrun.`,
          value: `Buffer: ${fmtNum(data.contingencyReserve - deficit)} OMR`,
        });
      } else {
        messages.push({
          type: 'warning',
          indicator: 'Contingency',
          title: 'Critical Alert: Contingency Exhausted',
          body: `The budget deficit (${fmtNum(deficit)} OMR) has completely exhausted the Contingency Reserve (${fmtNum(data.contingencyReserve)} OMR), leaving an unmitigated shortfall of ${fmtNum(deficit - data.contingencyReserve)} OMR. Immediate budget recalibration is required.`,
          value: `Shortfall: ${fmtNum(deficit - data.contingencyReserve)} OMR`,
        });
      }
    } else {
       messages.push({
          type: 'success',
          indicator: 'Contingency',
          title: 'Contingency Intact — Healthy Buffer',
          body: `Capital reserves remain untouched. Your total Contingency Reserve of ${fmtNum(data.contingencyReserve)} OMR is fully available to act as a financial buffer against any future luxury material price fluctuations or architectural adjustments.`,
          value: `${fmtNum(data.contingencyReserve)} OMR Intact`,
       });
    }
  }

  // ─── 8. Wasted Cost Impact ──────────────────────────────────────
  if (data.marbleWastedCost > 0) {
    const wastedPercentOfBudget = data.totalBudget > 0 ? (data.marbleWastedCost / data.totalBudget) * 100 : 0;
    if (wastedPercentOfBudget > 5) {
      messages.push({
        type: 'warning',
        indicator: 'Wasted Cost',
        title: 'High Financial Exposure — Material Spoilage',
        body: `The financial loss due to material wastage (${fmtNum(data.marbleWastedCost)} OMR) now represents ${fmtNum(wastedPercentOfBudget, 1)}% of the total project budget. This indicates severe inefficiency in high-value marble handling and installation.`,
        value: `${fmtNum(data.marbleWastedCost)} OMR Loss`,
      });
    } else {
      messages.push({
        type: 'success',
        indicator: 'Wasted Cost',
        title: 'Controlled Spoilage Finances',
        body: `The financial impact of material wastage (${fmtNum(data.marbleWastedCost)} OMR) is contained to ${fmtNum(wastedPercentOfBudget, 1)}% of the overall budget, suggesting that luxury finishing is proceeding within acceptable premium risk margins.`,
        value: `${fmtNum(data.marbleWastedCost)} OMR Loss`,
      });
    }
  }

  return messages;
}
