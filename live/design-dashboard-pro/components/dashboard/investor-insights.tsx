"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const allocation = [
  { name: "Energy", value: 32, color: "oklch(0.82 0.12 86)" },
  { name: "Heavy Machinery", value: 24, color: "oklch(0.66 0.1 78)" },
  { name: "Logistics", value: 18, color: "oklch(0.5 0.07 70)" },
  { name: "Metals", value: 14, color: "oklch(0.4 0.04 70)" },
  { name: "Other", value: 12, color: "oklch(0.32 0.012 70)" },
]

type Investor = {
  id: string
  name: string
  tag: string
  aum: string
  focus: string
  trend: number
  tier: "Tier I" | "Tier II" | "Strategic"
}

const investors: Investor[] = [
  {
    id: "LTC",
    name: "Lattice Capital",
    tag: "LTC",
    aum: "$4.2B",
    focus: "Energy, Rail",
    trend: 12.8,
    tier: "Tier I",
  },
  {
    id: "NHM",
    name: "Northhaven Mineral",
    tag: "NHM",
    aum: "$2.8B",
    focus: "Metals, Chem.",
    trend: 8.4,
    tier: "Strategic",
  },
  {
    id: "PRT",
    name: "Portolan Partners",
    tag: "PRT",
    aum: "$1.9B",
    focus: "Logistics",
    trend: -2.1,
    tier: "Tier I",
  },
  {
    id: "ACR",
    name: "Arcera Sovereign",
    tag: "ACR",
    aum: "$6.5B",
    focus: "Cross-sector",
    trend: 4.6,
    tier: "Tier I",
  },
]

const tierStyles: Record<Investor["tier"], string> = {
  "Tier I": "text-primary border-primary/25 bg-primary/10",
  Strategic: "text-accent-foreground border-accent/30 bg-accent/10",
  "Tier II": "text-muted-foreground border-border/60 bg-secondary/60",
}

export function InvestorInsights() {
  const total = allocation.reduce((s, a) => s + a.value, 0)
  return (
    <div className="flex flex-col gap-4">
      {/* Allocation card */}
      <div className="rounded-xl border hairline bg-card/70 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted-foreground">
              Investor Insights
            </p>
            <h3 className="mt-2 font-display text-xl font-light tracking-tight">
              Capital allocation
            </h3>
          </div>
          <button className="flex items-center gap-1 text-[11px] text-primary hover:underline underline-offset-4">
            Full report
            <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-[140px_1fr] gap-5 items-center">
          {/* Donut */}
          <div className="relative h-[140px] w-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocation}
                  dataKey="value"
                  innerRadius={48}
                  outerRadius={66}
                  paddingAngle={2}
                  stroke="oklch(0.205 0.007 60)"
                  strokeWidth={2}
                  startAngle={90}
                  endAngle={-270}
                >
                  {allocation.map((a) => (
                    <Cell key={a.name} fill={a.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 grid place-items-center text-center pointer-events-none">
              <div>
                <p className="font-display text-2xl font-light tabular-nums">$15.4B</p>
                <p className="mt-0.5 font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
                  AUM routed
                </p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <ul className="flex flex-col gap-2.5">
            {allocation.map((a) => (
              <li key={a.name} className="flex items-center gap-3 text-[12px]">
                <span
                  className="h-2 w-2 rounded-sm shrink-0"
                  style={{ backgroundColor: a.color }}
                />
                <span className="text-muted-foreground">{a.name}</span>
                <span className="ml-auto font-mono tabular-nums text-foreground/90">
                  {((a.value / total) * 100).toFixed(0)}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top investors */}
      <div className="rounded-xl border hairline bg-card/70 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-base font-light tracking-tight">
              Top counterparties
            </h3>
            <p className="mt-0.5 text-[11px] text-muted-foreground tracking-wide">
              Ranked by 30-day bid conviction
            </p>
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            30d
          </span>
        </div>

        <ul className="mt-4 divide-y divide-border/70">
          {investors.map((inv) => {
            const positive = inv.trend >= 0
            return (
              <li key={inv.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-secondary to-background ring-1 ring-border/70">
                  <span className="font-mono text-[10px] tracking-widest text-foreground/90">
                    {inv.tag}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] font-medium tracking-tight truncate">
                      {inv.name}
                    </p>
                    <span
                      className={cn(
                        "rounded-full border px-1.5 py-0.5 text-[9px] tracking-widest uppercase",
                        tierStyles[inv.tier],
                      )}
                    >
                      {inv.tier}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {inv.focus} · AUM {inv.aum}
                  </p>
                </div>
                <span
                  className={cn(
                    "font-mono text-[11px] tabular-nums",
                    positive ? "text-primary" : "text-destructive/90",
                  )}
                >
                  {positive ? "+" : ""}
                  {inv.trend.toFixed(1)}%
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* AI insight */}
      <div className="glass relative overflow-hidden rounded-xl p-5">
        <div className="luxe-glow absolute inset-0 pointer-events-none" />
        <div className="relative flex items-start gap-3">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30 shrink-0">
            <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-primary/90">
              AI Signal · confidence 81%
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-foreground/90 text-pretty">
              Arcera Sovereign is rotating{" "}
              <span className="text-primary">+14% allocation into Energy</span> over the next
              cycle. Consider surfacing Northcape Wind Array and 2 adjacent lots to their desk.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button className="rounded-md bg-primary px-3 py-1.5 text-[11px] font-medium text-primary-foreground hover:brightness-105 transition">
                Draft outreach
              </button>
              <button className="rounded-md border hairline bg-background/30 px-3 py-1.5 text-[11px] text-muted-foreground hover:text-foreground">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
