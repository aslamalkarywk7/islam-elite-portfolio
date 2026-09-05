"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Filter, Plus } from "lucide-react"

type Bid = {
  id: string
  asset: string
  sector: string
  status: "Live" | "Settling" | "Closing" | "Review"
  reserve: number
  leading: number
  bidders: number
  ai: number // 0-100 win probability
  delta: number
  closes: string
}

const bids: Bid[] = [
  {
    id: "ATR-7841",
    asset: "Meridian Heavy Equipment Lot 12",
    sector: "Heavy Machinery",
    status: "Live",
    reserve: 18.4,
    leading: 21.2,
    bidders: 14,
    ai: 88,
    delta: 2.8,
    closes: "02h 41m",
  },
  {
    id: "ATR-7829",
    asset: "Halden Steel — Rolling Mill A",
    sector: "Metals & Mining",
    status: "Live",
    reserve: 42.0,
    leading: 48.6,
    bidders: 22,
    ai: 74,
    delta: 6.6,
    closes: "06h 12m",
  },
  {
    id: "ATR-7816",
    asset: "Port Arlen Logistics Terminal 03",
    sector: "Logistics",
    status: "Closing",
    reserve: 74.5,
    leading: 71.8,
    bidders: 9,
    ai: 41,
    delta: -2.7,
    closes: "14m",
  },
  {
    id: "ATR-7802",
    asset: "Northcape Wind Array — 220MW",
    sector: "Energy",
    status: "Live",
    reserve: 156.0,
    leading: 182.4,
    bidders: 31,
    ai: 92,
    delta: 26.4,
    closes: "1d 04h",
  },
  {
    id: "ATR-7794",
    asset: "Atlas Chem — Catalyst Line B",
    sector: "Industrial Chem.",
    status: "Settling",
    reserve: 28.9,
    leading: 30.1,
    bidders: 11,
    ai: 66,
    delta: 1.2,
    closes: "Cleared",
  },
  {
    id: "ATR-7781",
    asset: "Kerrich Rail — Class 66 Fleet (14u)",
    sector: "Rail & Transport",
    status: "Review",
    reserve: 52.3,
    leading: 52.3,
    bidders: 4,
    ai: 23,
    delta: 0,
    closes: "Pending",
  },
]

const statusStyles: Record<Bid["status"], string> = {
  Live: "bg-primary/10 text-primary border-primary/25",
  Settling: "bg-secondary/80 text-foreground/90 border-border/60",
  Closing: "bg-secondary/80 text-foreground/90 border-border/60",
  Review: "bg-muted/60 text-muted-foreground border-border/60",
}

function AIBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-1 w-16 rounded-full bg-secondary overflow-hidden">
        <div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full",
            value >= 70
              ? "bg-primary shadow-[0_0_8px_oklch(0.78_0.11_86/0.6)]"
              : value >= 40
                ? "bg-accent"
                : "bg-muted-foreground/60",
          )}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="font-mono text-[11px] tabular-nums text-foreground/90 w-7">{value}</span>
    </div>
  )
}

export function BidManagement() {
  return (
    <div className="overflow-hidden rounded-xl border hairline bg-card/70">
      {/* Header */}
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-display text-xl font-light tracking-tight">Bid Management</h2>
            <span className="flex items-center gap-1.5 rounded-full border hairline bg-background/60 px-2 py-0.5 text-[10px] tracking-widest uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              14 active
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            AI-scored order book across industrial segments
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-md border hairline bg-card/60 px-3 py-1.5 text-[12px] text-muted-foreground hover:text-foreground">
            <Filter className="h-3.5 w-3.5" strokeWidth={1.5} />
            Segment
          </button>
          <button className="flex items-center gap-1.5 rounded-md border hairline bg-card/60 px-3 py-1.5 text-[12px] text-muted-foreground hover:text-foreground">
            Sort: AI score
          </button>
          <button className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-[12px] font-medium text-primary-foreground hover:brightness-105 transition">
            <Plus className="h-3.5 w-3.5" strokeWidth={2} />
            New bid
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="thin-scroll overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr className="border-y hairline bg-background/30 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <th className="text-left font-medium px-6 py-3">Asset</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
              <th className="text-right font-medium px-4 py-3">Reserve</th>
              <th className="text-right font-medium px-4 py-3">Leading bid</th>
              <th className="text-right font-medium px-4 py-3">Δ</th>
              <th className="text-right font-medium px-4 py-3">Bidders</th>
              <th className="text-left font-medium px-4 py-3">AI win prob.</th>
              <th className="text-right font-medium px-4 py-3">Closes</th>
              <th className="w-8" />
            </tr>
          </thead>
          <tbody>
            {bids.map((b, idx) => {
              const up = b.delta >= 0
              return (
                <tr
                  key={b.id}
                  className={cn(
                    "group transition-colors hover:bg-background/40",
                    idx < bids.length - 1 && "border-b hairline",
                  )}
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-foreground tracking-tight">
                        {b.asset}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-mono tracking-wider">
                        {b.id} · {b.sector}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] tracking-widest uppercase",
                        statusStyles[b.status],
                      )}
                    >
                      {b.status === "Live" && (
                        <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                      )}
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-[12px] text-muted-foreground tabular-nums">
                    ${b.reserve.toFixed(1)}M
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-[13px] text-foreground tabular-nums">
                    ${b.leading.toFixed(1)}M
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span
                      className={cn(
                        "inline-flex items-center gap-0.5 font-mono text-[11px] tabular-nums",
                        b.delta === 0
                          ? "text-muted-foreground"
                          : up
                            ? "text-primary"
                            : "text-destructive/90",
                      )}
                    >
                      {b.delta !== 0 &&
                        (up ? (
                          <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" strokeWidth={2} />
                        ))}
                      {b.delta === 0 ? "—" : `${up ? "+" : ""}${b.delta.toFixed(1)}M`}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-[12px] text-muted-foreground tabular-nums">
                    {b.bidders}
                  </td>
                  <td className="px-4 py-4">
                    <AIBar value={b.ai} />
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-[11px] tracking-wider text-muted-foreground">
                    {b.closes}
                  </td>
                  <td className="pr-4">
                    <button
                      aria-label="More"
                      className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-background/60 hover:text-foreground"
                    >
                      <MoreHorizontal className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t hairline px-6 py-3 text-[11px] text-muted-foreground">
        <span>
          Showing <span className="text-foreground">6</span> of{" "}
          <span className="text-foreground">14</span> live bids
        </span>
        <div className="flex items-center gap-3">
          <span className="font-mono tracking-wider">Aggregate reserve</span>
          <span className="font-mono tabular-nums text-foreground">$372.1M</span>
          <span className="text-muted-foreground/50">·</span>
          <span className="font-mono tracking-wider">Leading total</span>
          <span className="font-mono tabular-nums text-primary">$406.4M</span>
        </div>
      </div>
    </div>
  )
}
