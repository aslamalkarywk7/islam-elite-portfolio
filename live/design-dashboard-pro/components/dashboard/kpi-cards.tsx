"use client"

import { ArrowUpRight, ArrowDownRight, TrendingUp, Gavel, Landmark, Activity } from "lucide-react"
import { cn } from "@/lib/utils"
import { Area, AreaChart, ResponsiveContainer } from "recharts"

type Kpi = {
  label: string
  value: string
  unit?: string
  delta: number
  icon: typeof TrendingUp
  hint: string
  series: { v: number }[]
}

const kpis: Kpi[] = [
  {
    label: "Gross Bid Volume",
    value: "428.6",
    unit: "M",
    delta: 12.4,
    icon: Gavel,
    hint: "vs. prior 30d",
    series: [
      { v: 12 },
      { v: 18 },
      { v: 16 },
      { v: 22 },
      { v: 28 },
      { v: 26 },
      { v: 34 },
      { v: 38 },
      { v: 44 },
      { v: 42 },
      { v: 52 },
      { v: 61 },
    ],
  },
  {
    label: "Active Investors",
    value: "1,284",
    delta: 4.2,
    icon: Landmark,
    hint: "weighted by AUM",
    series: [
      { v: 30 },
      { v: 32 },
      { v: 29 },
      { v: 35 },
      { v: 34 },
      { v: 38 },
      { v: 41 },
      { v: 39 },
      { v: 44 },
      { v: 46 },
      { v: 48 },
      { v: 52 },
    ],
  },
  {
    label: "Avg. Clearing Spread",
    value: "184",
    unit: "bps",
    delta: -2.1,
    icon: Activity,
    hint: "tightening trend",
    series: [
      { v: 60 },
      { v: 58 },
      { v: 55 },
      { v: 52 },
      { v: 49 },
      { v: 50 },
      { v: 46 },
      { v: 44 },
      { v: 42 },
      { v: 40 },
      { v: 38 },
      { v: 36 },
    ],
  },
  {
    label: "Forecast Win-Rate",
    value: "68.2",
    unit: "%",
    delta: 6.8,
    icon: TrendingUp,
    hint: "AI 7-day outlook",
    series: [
      { v: 40 },
      { v: 42 },
      { v: 44 },
      { v: 43 },
      { v: 48 },
      { v: 52 },
      { v: 55 },
      { v: 58 },
      { v: 60 },
      { v: 62 },
      { v: 65 },
      { v: 68 },
    ],
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((k) => {
        const positive = k.delta >= 0
        return (
          <div
            key={k.label}
            className="group relative overflow-hidden rounded-xl border hairline bg-card/70 p-5 transition-colors hover:border-primary/30"
          >
            {/* top row */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/20">
                  <k.icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
                </div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-muted-foreground">
                  {k.label}
                </p>
              </div>
              <div
                className={cn(
                  "flex items-center gap-0.5 rounded-full border px-1.5 py-0.5 text-[10px] font-medium tabular-nums",
                  positive
                    ? "border-primary/25 bg-primary/10 text-primary"
                    : "border-border/60 bg-secondary/60 text-muted-foreground",
                )}
              >
                {positive ? (
                  <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                ) : (
                  <ArrowDownRight className="h-3 w-3" strokeWidth={2} />
                )}
                {Math.abs(k.delta).toFixed(1)}%
              </div>
            </div>

            {/* value */}
            <div className="mt-5 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="font-display text-[34px] leading-none font-light tracking-tight text-foreground tabular-nums">
                  {k.value}
                  {k.unit && (
                    <span className="ml-1 text-[16px] text-muted-foreground font-normal tracking-tight">
                      {k.unit}
                    </span>
                  )}
                </p>
                <p className="mt-2 text-[11px] text-muted-foreground tracking-wide">{k.hint}</p>
              </div>

              {/* sparkline */}
              <div className="h-12 w-24 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={k.series} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id={`sp-${k.label}`} x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="oklch(0.78 0.11 86)"
                          stopOpacity={0.55}
                        />
                        <stop
                          offset="100%"
                          stopColor="oklch(0.78 0.11 86)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="oklch(0.82 0.12 86)"
                      strokeWidth={1.5}
                      fill={`url(#sp-${k.label})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
