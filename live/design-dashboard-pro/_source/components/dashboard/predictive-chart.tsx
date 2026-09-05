"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts"
import { Sparkles, ChevronDown } from "lucide-react"

const data = [
  { d: "W-12", actual: 184, forecast: null, lo: null, hi: null },
  { d: "W-11", actual: 196, forecast: null, lo: null, hi: null },
  { d: "W-10", actual: 212, forecast: null, lo: null, hi: null },
  { d: "W-9", actual: 208, forecast: null, lo: null, hi: null },
  { d: "W-8", actual: 232, forecast: null, lo: null, hi: null },
  { d: "W-7", actual: 248, forecast: null, lo: null, hi: null },
  { d: "W-6", actual: 262, forecast: null, lo: null, hi: null },
  { d: "W-5", actual: 279, forecast: null, lo: null, hi: null },
  { d: "W-4", actual: 291, forecast: null, lo: null, hi: null },
  { d: "W-3", actual: 310, forecast: null, lo: null, hi: null },
  { d: "W-2", actual: 328, forecast: null, lo: null, hi: null },
  { d: "W-1", actual: 342, forecast: 342, lo: 342, hi: 342 },
  { d: "Now", actual: null, forecast: 356, lo: 338, hi: 374 },
  { d: "W+1", actual: null, forecast: 368, lo: 342, hi: 398 },
  { d: "W+2", actual: null, forecast: 381, lo: 348, hi: 418 },
  { d: "W+3", actual: null, forecast: 392, lo: 352, hi: 436 },
  { d: "W+4", actual: null, forecast: 408, lo: 358, hi: 460 },
  { d: "W+5", actual: null, forecast: 422, lo: 364, hi: 482 },
]

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null
  const actual = payload.find((p: any) => p.dataKey === "actual")?.value
  const fc = payload.find((p: any) => p.dataKey === "forecast")?.value
  const hi = payload.find((p: any) => p.dataKey === "hi")?.value
  const lo = payload.find((p: any) => p.dataKey === "lo")?.value
  return (
    <div className="rounded-lg border hairline bg-card/95 backdrop-blur-md px-3 py-2.5 shadow-[0_20px_40px_-12px_oklch(0_0_0/0.6)]">
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
        {label}
      </p>
      <div className="mt-1.5 flex flex-col gap-1">
        {actual != null && (
          <div className="flex items-center gap-2 text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
            <span className="text-muted-foreground">Realized</span>
            <span className="ml-auto font-mono tabular-nums text-foreground">${actual}M</span>
          </div>
        )}
        {fc != null && (
          <div className="flex items-center gap-2 text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">AI Forecast</span>
            <span className="ml-auto font-mono tabular-nums text-primary">${fc}M</span>
          </div>
        )}
        {hi != null && lo != null && (
          <div className="flex items-center gap-2 text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
            <span className="text-muted-foreground">95% band</span>
            <span className="ml-auto font-mono tabular-nums text-muted-foreground">
              ${lo}–${hi}M
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export function PredictiveChart() {
  return (
    <div className="relative overflow-hidden rounded-xl border hairline bg-card/70 p-6">
      <div className="luxe-glow absolute inset-0 pointer-events-none" aria-hidden />

      {/* Header */}
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary/15 ring-1 ring-primary/30 grid place-items-center">
              <Sparkles className="h-3 w-3 text-primary" strokeWidth={2} />
            </div>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary/90">
              Atrium Predictive Model v4.2
            </p>
          </div>
          <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-balance">
            Clearing volume — 5-week forecast horizon
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-xl text-pretty">
            Bayesian ensemble across 14 macro signals and order-book depth. Confidence band
            widens as uncertainty compounds.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-md border hairline bg-card/60 p-0.5">
            {["1W", "1M", "3M", "1Y"].map((r, i) => (
              <button
                key={r}
                className={
                  i === 1
                    ? "rounded px-3 py-1 text-[11px] font-medium tracking-wider bg-primary/15 text-primary ring-1 ring-primary/25"
                    : "rounded px-3 py-1 text-[11px] font-medium tracking-wider text-muted-foreground hover:text-foreground"
                }
              >
                {r}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1.5 rounded-md border hairline bg-card/60 px-3 py-1.5 text-[12px] text-muted-foreground hover:text-foreground">
            USD
            <ChevronDown className="h-3 w-3" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Key metrics */}
      <div className="relative mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 border-y hairline py-4">
        {[
          { k: "Now", v: "$356M", sub: "observed" },
          { k: "W+5 forecast", v: "$422M", sub: "+18.5% confidence 74%" },
          { k: "Expected drift", v: "+1.4σ", sub: "trending positive" },
          { k: "Model error", v: "3.2%", sub: "MAPE, last 30d" },
        ].map((m, i) => (
          <div
            key={m.k}
            className={i < 3 ? "border-r hairline sm:pr-4 pr-2 last:border-r-0" : ""}
          >
            <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-muted-foreground">
              {m.k}
            </p>
            <p className="mt-2 font-mono text-lg tabular-nums text-foreground">{m.v}</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative mt-6 h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 12, left: -8, bottom: 0 }}>
            <defs>
              <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.94 0.012 85)" stopOpacity={0.18} />
                <stop offset="100%" stopColor="oklch(0.94 0.012 85)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="bandFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.11 86)" stopOpacity={0.28} />
                <stop offset="100%" stopColor="oklch(0.78 0.11 86)" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="oklch(0.3 0.008 60)"
              strokeDasharray="2 4"
              vertical={false}
            />
            <XAxis
              dataKey="d"
              stroke="oklch(0.66 0.012 80)"
              tick={{ fontSize: 10, fontFamily: "var(--font-mono)" }}
              tickLine={false}
              axisLine={false}
              dy={6}
            />
            <YAxis
              stroke="oklch(0.66 0.012 80)"
              tick={{ fontSize: 10, fontFamily: "var(--font-mono)" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${v}`}
              domain={[150, 500]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "oklch(0.78 0.11 86 / 0.3)", strokeWidth: 1 }} />

            <ReferenceLine
              x="W-1"
              stroke="oklch(0.78 0.11 86 / 0.4)"
              strokeDasharray="3 3"
              label={{
                value: "FORECAST →",
                position: "insideTopRight",
                fill: "oklch(0.78 0.11 86)",
                fontSize: 9,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.18em",
                dy: -4,
              }}
            />

            {/* Confidence band (hi stack) */}
            <Area
              type="monotone"
              dataKey="hi"
              stroke="none"
              fill="url(#bandFill)"
              activeDot={false}
              isAnimationActive={false}
            />
            <Area
              type="monotone"
              dataKey="lo"
              stroke="none"
              fill="oklch(0.205 0.007 60)"
              activeDot={false}
              isAnimationActive={false}
            />

            {/* Realized */}
            <Area
              type="monotone"
              dataKey="actual"
              stroke="oklch(0.94 0.012 85)"
              strokeWidth={1.75}
              fill="url(#actualFill)"
              dot={false}
              activeDot={{ r: 3, fill: "oklch(0.94 0.012 85)", stroke: "oklch(0.16 0.006 60)", strokeWidth: 2 }}
            />

            {/* Forecast */}
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="oklch(0.82 0.12 86)"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
              activeDot={{ r: 3, fill: "oklch(0.82 0.12 86)", stroke: "oklch(0.16 0.006 60)", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="relative mt-2 flex flex-wrap items-center gap-5 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-5 bg-foreground/80" />
          <span className="text-muted-foreground">Realized volume</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="h-0.5 w-5 bg-primary"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, oklch(0.82 0.12 86) 0 4px, transparent 4px 8px)",
              background: "none",
              borderTop: "2px dashed oklch(0.82 0.12 86)",
            }}
          />
          <span className="text-muted-foreground">AI forecast (µ)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-5 rounded-sm bg-primary/25" />
          <span className="text-muted-foreground">95% confidence band</span>
        </div>
      </div>
    </div>
  )
}
