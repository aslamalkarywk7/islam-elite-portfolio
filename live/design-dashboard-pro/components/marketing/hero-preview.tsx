"use client"

import { Area, AreaChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from "recharts"
import { Sparkles, ArrowUpRight, Gavel } from "lucide-react"

const data = [
  { d: "W-8", a: 232, f: null },
  { d: "W-7", a: 248, f: null },
  { d: "W-6", a: 262, f: null },
  { d: "W-5", a: 279, f: null },
  { d: "W-4", a: 291, f: null },
  { d: "W-3", a: 310, f: null },
  { d: "W-2", a: 328, f: null },
  { d: "W-1", a: 342, f: 342 },
  { d: "Now", a: null, f: 356 },
  { d: "W+1", a: null, f: 368 },
  { d: "W+2", a: null, f: 381 },
  { d: "W+3", a: null, f: 392 },
  { d: "W+4", a: null, f: 408 },
  { d: "W+5", a: null, f: 422 },
]

export function HeroPreview() {
  return (
    <div className="relative rounded-2xl border hairline bg-card/70 p-4 shadow-[0_50px_120px_-40px_oklch(0_0_0/0.7)]">
      <div
        className="absolute inset-0 -z-10 rounded-2xl opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(500px 300px at 90% 0%, oklch(0.78 0.11 86 / 0.18) 0%, transparent 60%), radial-gradient(400px 300px at 0% 100%, oklch(0.78 0.11 86 / 0.1) 0%, transparent 60%)",
        }}
      />

      {/* faux window chrome */}
      <div className="flex items-center justify-between border-b hairline pb-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/20" />
          <span className="ml-3 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            atrium / overview
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_oklch(0.78_0.11_86)]" />
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
            Markets · Open
          </span>
        </div>
      </div>

      {/* KPI row */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { l: "Gross volume", v: "$428.6M", d: "+12.4%" },
          { l: "Active investors", v: "1,284", d: "+4.2%" },
          { l: "Win-rate (AI)", v: "68.2%", d: "+6.8%" },
        ].map((k) => (
          <div key={k.l} className="rounded-lg border hairline bg-background/40 p-3">
            <p className="text-[9px] font-medium tracking-[0.16em] uppercase text-muted-foreground">
              {k.l}
            </p>
            <div className="mt-2 flex items-end justify-between">
              <p className="font-display text-[20px] font-light tabular-nums">{k.v}</p>
              <span className="rounded-full border border-primary/25 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] tabular-nums text-primary">
                {k.d}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-4 rounded-lg border hairline bg-background/40 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-5 w-5 place-items-center rounded bg-primary/15 ring-1 ring-primary/30">
              <Sparkles className="h-2.5 w-2.5 text-primary" strokeWidth={2} />
            </div>
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-primary/90">
              Predictive model v4.2
            </p>
          </div>
          <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
            horizon · 5w
          </span>
        </div>
        <div className="mt-3 h-[170px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 4, right: 4, left: -12, bottom: 0 }}>
              <defs>
                <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.94 0.012 85)" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="oklch(0.94 0.012 85)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="oklch(0.3 0.008 60)" strokeDasharray="2 4" vertical={false} />
              <XAxis
                dataKey="d"
                stroke="oklch(0.66 0.012 80)"
                tick={{ fontSize: 9, fontFamily: "var(--font-mono)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="oklch(0.66 0.012 80)"
                tick={{ fontSize: 9, fontFamily: "var(--font-mono)" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `$${v}`}
                domain={[180, 460]}
              />
              <Area
                type="monotone"
                dataKey="a"
                stroke="oklch(0.94 0.012 85)"
                strokeWidth={1.5}
                fill="url(#heroFill)"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="f"
                stroke="oklch(0.82 0.12 86)"
                strokeWidth={1.75}
                strokeDasharray="4 4"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bid rows */}
      <div className="mt-4 rounded-lg border hairline bg-background/40">
        <div className="flex items-center justify-between px-3 py-2 border-b hairline">
          <div className="flex items-center gap-2">
            <Gavel className="h-3 w-3 text-muted-foreground" strokeWidth={1.5} />
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
              Live bids · 3 shown
            </p>
          </div>
          <ArrowUpRight className="h-3 w-3 text-muted-foreground" strokeWidth={1.5} />
        </div>
        <ul>
          {[
            { a: "Northcape Wind Array", v: "$182.4M", ai: 92 },
            { a: "Halden Rolling Mill A", v: "$48.6M", ai: 74 },
            { a: "Port Arlen Terminal 03", v: "$71.8M", ai: 41 },
          ].map((r, i) => (
            <li
              key={r.a}
              className={
                "flex items-center gap-3 px-3 py-2 text-[11px]" +
                (i < 2 ? " border-b hairline" : "")
              }
            >
              <span className="flex-1 truncate text-foreground/90">{r.a}</span>
              <span className="font-mono tabular-nums text-foreground">{r.v}</span>
              <div className="h-1 w-12 rounded-full bg-secondary overflow-hidden">
                <div
                  className={
                    r.ai >= 70
                      ? "h-full bg-primary"
                      : r.ai >= 40
                        ? "h-full bg-accent"
                        : "h-full bg-muted-foreground/60"
                  }
                  style={{ width: `${r.ai}%` }}
                />
              </div>
              <span className="w-6 text-right font-mono tabular-nums text-muted-foreground">
                {r.ai}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
