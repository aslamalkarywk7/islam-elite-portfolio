import {
  PageHeader,
  MarketsPill,
  DashboardFooter,
} from "@/components/dashboard/page-header"
import { cn } from "@/lib/utils"
import { ArrowUpRight, ArrowDownRight, Search } from "lucide-react"

type Party = {
  tag: string
  name: string
  region: string
  tier: "Tier I" | "Tier II" | "Strategic" | "Sovereign"
  aum: string
  focus: string
  conviction: number
  trend30: number
  lastBid: string
}

const parties: Party[] = [
  {
    tag: "ACR",
    name: "Arcera Sovereign",
    region: "GCC · Abu Dhabi",
    tier: "Sovereign",
    aum: "$6.5B",
    focus: "Cross-sector",
    conviction: 94,
    trend30: 4.6,
    lastBid: "2h ago",
  },
  {
    tag: "LTC",
    name: "Lattice Capital",
    region: "New York, USA",
    tier: "Tier I",
    aum: "$4.2B",
    focus: "Energy, Rail",
    conviction: 88,
    trend30: 12.8,
    lastBid: "14m ago",
  },
  {
    tag: "NHM",
    name: "Northhaven Mineral",
    region: "Oslo, NO",
    tier: "Strategic",
    aum: "$2.8B",
    focus: "Metals, Chem.",
    conviction: 81,
    trend30: 8.4,
    lastBid: "1h ago",
  },
  {
    tag: "PRT",
    name: "Portolan Partners",
    region: "Singapore",
    tier: "Tier I",
    aum: "$1.9B",
    focus: "Logistics",
    conviction: 64,
    trend30: -2.1,
    lastBid: "6h ago",
  },
  {
    tag: "HEL",
    name: "Helion Industrial",
    region: "Frankfurt, DE",
    tier: "Tier II",
    aum: "$1.1B",
    focus: "Heavy Mach.",
    conviction: 58,
    trend30: 3.2,
    lastBid: "3h ago",
  },
  {
    tag: "KRV",
    name: "Kirvane Asset Mgmt.",
    region: "London, UK",
    tier: "Tier II",
    aum: "$980M",
    focus: "Multi-asset",
    conviction: 46,
    trend30: -1.4,
    lastBid: "Yesterday",
  },
]

const tierStyles: Record<Party["tier"], string> = {
  Sovereign: "text-primary border-primary/30 bg-primary/10",
  "Tier I": "text-primary border-primary/25 bg-primary/10",
  Strategic: "text-accent-foreground border-accent/30 bg-accent/10",
  "Tier II": "text-muted-foreground border-border/60 bg-secondary/60",
}

export default function CounterpartiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Network · 1,284 investors"
        title={
          <>
            Counterparties.
            <br />
            <span className="text-muted-foreground">
              The institutions moving the industrial tape.
            </span>
          </>
        }
        description={
          <>
            A curated directory of sovereign, strategic and tier-I desks. Each profile is
            continuously scored against bid conviction, allocation drift and cross-platform
            response latency.
          </>
        }
        actions={
          <>
            <MarketsPill />
            <button className="rounded-md border hairline bg-card/60 px-4 py-2 text-[12px] text-muted-foreground hover:text-foreground">
              Directory export
            </button>
            <button className="rounded-md bg-primary px-4 py-2 text-[12px] font-medium text-primary-foreground hover:brightness-105 transition">
              Invite desk
            </button>
          </>
        }
      />

      {/* Search / filters */}
      <section className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 rounded-md border hairline bg-card/60 pl-3 pr-2 py-2 w-full sm:w-[360px]">
          <Search className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Filter counterparties by name, region, sector…"
            className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground/70 outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          {["All", "Sovereign", "Tier I", "Strategic", "Tier II"].map((f, i) => (
            <button
              key={f}
              className={cn(
                "rounded-md border hairline px-3 py-1.5 text-[11px] tracking-wider",
                i === 0
                  ? "bg-primary/10 border-primary/25 text-primary"
                  : "bg-card/60 text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Table */}
      <section className="mt-6 overflow-hidden rounded-xl border hairline bg-card/70">
        <div className="thin-scroll overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="border-b hairline bg-background/30 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <th className="text-left font-medium px-6 py-3">Counterparty</th>
                <th className="text-left font-medium px-4 py-3">Tier</th>
                <th className="text-right font-medium px-4 py-3">AUM</th>
                <th className="text-left font-medium px-4 py-3">Focus</th>
                <th className="text-left font-medium px-4 py-3">Conviction</th>
                <th className="text-right font-medium px-4 py-3">30d trend</th>
                <th className="text-right font-medium px-4 py-3">Last bid</th>
              </tr>
            </thead>
            <tbody>
              {parties.map((p, idx) => {
                const up = p.trend30 >= 0
                return (
                  <tr
                    key={p.tag}
                    className={cn(
                      "transition-colors hover:bg-background/40",
                      idx < parties.length - 1 && "border-b hairline",
                    )}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-secondary to-background ring-1 ring-border/70">
                          <span className="font-mono text-[10px] tracking-widest text-foreground/90">
                            {p.tag}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13px] font-medium tracking-tight">{p.name}</p>
                          <p className="text-[11px] text-muted-foreground">{p.region}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={cn(
                          "rounded-full border px-2 py-0.5 text-[9px] tracking-widest uppercase",
                          tierStyles[p.tier],
                        )}
                      >
                        {p.tier}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right font-mono text-[12px] tabular-nums text-foreground">
                      {p.aum}
                    </td>
                    <td className="px-4 py-4 text-[12px] text-muted-foreground">{p.focus}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="relative h-1 w-20 rounded-full bg-secondary overflow-hidden">
                          <div
                            className={cn(
                              "absolute inset-y-0 left-0 rounded-full",
                              p.conviction >= 80
                                ? "bg-primary shadow-[0_0_8px_oklch(0.78_0.11_86/0.6)]"
                                : p.conviction >= 60
                                  ? "bg-accent"
                                  : "bg-muted-foreground/60",
                            )}
                            style={{ width: `${p.conviction}%` }}
                          />
                        </div>
                        <span className="font-mono text-[11px] tabular-nums text-foreground/90 w-7">
                          {p.conviction}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span
                        className={cn(
                          "inline-flex items-center gap-0.5 font-mono text-[11px] tabular-nums",
                          up ? "text-primary" : "text-destructive/90",
                        )}
                      >
                        {up ? (
                          <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" strokeWidth={2} />
                        )}
                        {up ? "+" : ""}
                        {p.trend30.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right font-mono text-[11px] tracking-wider text-muted-foreground">
                      {p.lastBid}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <DashboardFooter />
    </>
  )
}
