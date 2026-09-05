import { NextRequest, NextResponse } from 'next/server';
import { ProjectData, runEngine } from '../../../../lib/mathEngine';
import { generateAnalysis, AnalysisMessage } from '../../../../lib/aiAnalysis';

/**
 * API Route: /api/v1/metrics
 * ─────────────────────────────────────────────────────────────────────
 * Identical logic to /api/metrics — versioned endpoint
 * ─────────────────────────────────────────────────────────────────────
 */

let currentProjectData: ProjectData | null = null;

export async function GET(req: NextRequest) {
  if (!currentProjectData) {
    return NextResponse.json({
      data: null,
      metrics: null,
      analysis: [],
      isEmpty: true,
    });
  }

  const result = runEngine(currentProjectData);
  const analysis: AnalysisMessage[] = result.success && result.metrics
    ? generateAnalysis(currentProjectData, result.metrics)
    : [];

  return NextResponse.json({
    data: result.data,
    metrics: result.metrics,
    analysis,
    isEmpty: false,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body: Partial<ProjectData> = await req.json();

    const submittedData: ProjectData = {
      totalBudget:       Number(body.totalBudget)       || 0,
      durationMonths:    Number(body.durationMonths)    || 0,
      plannedValue:      Number(body.plannedValue)      || 0,
      actualCost:        Number(body.actualCost)        || 0,
      earnedValue:       Number(body.earnedValue)       || 0,
      expectedMarketValue: Number(body.expectedMarketValue) || 0,
      marbleBoughtSqm:   Number(body.marbleBoughtSqm)   || 0,
      marbleWastedSqm:   Number(body.marbleWastedSqm)   || 0,
      marbleWastedCost:  Number(body.marbleWastedCost)  || 0,
      contingencyReserve: Number(body.contingencyReserve) || 0,
      itemName:          body.itemName || 'Italian Marble (Floor Marble)',
    };

    const result = runEngine(submittedData);

    if (!result.success) {
      return NextResponse.json({
        success: false,
        data: result.data,
        metrics: null,
        analysis: [],
        validationErrors: result.validationErrors,
        logicalErrors: result.logicalErrors,
      }, { status: 400 });
    }

    const analysis = result.metrics
      ? generateAnalysis(submittedData, result.metrics)
      : [];

    currentProjectData = submittedData;

    return NextResponse.json({
      success: true,
      data: result.data,
      metrics: result.metrics,
      analysis,
      validationErrors: [],
      logicalErrors: [],
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid data payload. Please review your inputs.' },
      { status: 400 }
    );
  }
}
