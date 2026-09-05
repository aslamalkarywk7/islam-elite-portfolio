import {
  PageHeader,
  MarketsPill,
  DashboardFooter,
} from "@/components/dashboard/page-header"
import { Factory, Gauge, MapPin, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

type Asset = {
  id: string
  name: string
  sector: string
  location: string
  valuation: number
  utilization: number
  health: "Prime" | "Stable" | "Watch"
  yieldBps: number
}

const assets: Asset[] = [
  {
    id: "ATR-A-014",
    name: "Northcape Wind Array",
    sector: "Energy · Renewables",
    location: "Ørland, NO",
    valuation: 482,
    utilization: 92,
    health: "Prime",
    yieldBps: 612,
  },
  {
    id: "ATR-A-022",
    name: "Halden Rolling Mill A",
    sector: "Metals",
    location: "Halden, NO",
    valuation: 248,
    utilization: 78,
    health: "Stable",
    yieldBps: 438,
  },
  {
    id: "ATR-A-031",
    name: "Port Arlen Terminal 03",
    sector: "Logistics",
    location: "Rotterdam, NL",
    valuation: 196,
    utilization: 64,
    health: "Watch",
    yieldBps: 312,
  },
  {
    id: "ATR-A-046",
    name: "Atlas Catalyst Line B",
    sector: "Industrial Chem.",
    location: "Antwerp, BE",
    valuation: 154,
    utilization: 83,
    health: "Stable",
    yieldBps: 394,
  },
  {
    id: "ATR-A-052",
    name: "Meridian Heavy Fleet",
    sector: "Heavy Machinery",
    location: "Leipzig, DE",
    valuation: 128,
    utilization: 71,
    health: "Stable",
    yieldBps: 356,
  },
  {
    id: "ATR-A-061",
    name: "Kerrich Class 66 Fleet",
    sector: "Rail & Transport",
    location: "Felixstowe, UK",
    valuation: 92,
    utilization: 58,
    health: "Watch",
    yieldBps: 288,
  },
]

const healthStyles: Record<Asset["health"], string> = {
  Prime: "text-primary border-primary/25 bg-primary/10",
  Stable: "text-foreground/80 border-border/60 bg-secondary/60",
  Watch: "text-accent-foreground border-accent/30 bg-accent/10",
}

const segments = [
  { label: "Energy", value: "32%", v: 32 },
  { label: "Heavy Machinery", value: "24%", v: 24 },
  { label: "Logistics", value: "18%", v: 18 },
  { label: "Metals", value: "14%", v: 14 },
  { label: "Rail", value: "8%", v: 8 },
  { label: "Other", value: "4%", v: 4 },
]

export default function AssetsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Registry · 184 assets under custody"
        title={
          <>
            Asset Registry.
            <br />
            <span className="text-muted-foreground">
              Every lot, pedigreed and instrumented.
            </span>
          </>
        }
        description={
          <>
            Every industrial lot under Atrium custody is digitally twinned, continuously
            valued, and cross-audited with on-site telemetry. Aggregate book value{" "}
            <span className="text-foreground">$15.4B</span>.
          </>
        }
        actions={
          <>
            <MarketsPill />
            <button className="rounded-md border hairline bg-card/60 px-4 py-2 text-[12px] text-muted-foreground hover:text-foreground">
              Registry export
            </button>
            <button className="rounded-md bg-primary px-4 py-2 text-[12px] font-medium text-primary-foreground hover:brightness-105 transition">
              Onboard asset
            </button>
          </>
        }
      />

      {/* Summary bar */}
      <section className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border hairline bg-card/70 p-5">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/20">
              <Factory className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            </div>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-muted-foreground">
              Book value
            </p>
          </div>
          <p className="mt-5 font-display text-[34px] leading-none font-light tabular-nums">
            15.4<span className="ml-1 text-[16px] text-muted-foreground">B</span>
          </p>
          <p className="mt-2 text-[11px] text-muted-foreground">
            across 184 assets · 6 segments
          </p>
        </div>
        <div className="rounded-xl border hairline bg-card/70 p-5">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/20">
              <Gauge className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            </div>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-muted-foreground">
              Weighted utilization
            </p>
          </div>
          <p className="mt-5 font-display text-[34px] leading-none font-light tabular-nums">
            74.8<span className="ml-1 text-[16px] text-muted-foreground">%</span>
          </p>
          <div className="mt-3 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-primary shadow-[0_0_8px_oklch(0.78_0.11_86/0.6)]"
              style={{ width: "74.8%" }}
            />
          </div>
        </div>
        <div className="rounded-xl border hairline bg-card/70 p-5">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/20">
              <Zap className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            </div>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-muted-foreground">
              Segment mix
            </p>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
            {segments.map((s) => (
              <li key={s.label} className="flex items-center gap-2 text-[11px]">
                <span
                  className="h-1 flex-1 rounded-full bg-secondary overflow-hidden"
                  aria-hidden
                >
                  <span
                    className="block h-full bg-primary/70"
                    style={{ width: `${(s.v / 32) * 100}%` }}
                  />
                </span>
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-mono tabular-nums text-foreground/90">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Asset list */}
      <section className="mt-6 overflow-hidden rounded-xl border hairline bg-card/70">
        <div className="flex items-center justify-between px-6 py-5">
          <div>
            <h2 className="font-display text-xl font-light tracking-tight">Featured assets</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Top-tier lots ranked by AI conviction
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-md border hairline bg-card/60 px-3 py-1.5 text-[12px] text-muted-foreground hover:text-foreground">
              All sectors
            </button>
            <button className="rounded-md border hairline bg-card/60 px-3 py-1.5 text-[12px] text-muted-foreground hover:text-foreground">
              Sort: Valuation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border/50 sm:grid-cols-2 xl:grid-cols-3">
          {assets.map((a) => (
            <article key={a.id} className="bg-card p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {a.id}
                  </p>
                  <h3 className="mt-1 font-display text-[17px] font-light tracking-tight text-balance">
                    {a.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{a.sector}</p>
                </div>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[9px] tracking-widest uppercase shrink-0",
                    healthStyles[a.health],
                  )}
                >
                  {a.health}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <MapPin className="h-3 w-3" strokeWidth={1.5} />
                {a.location}
              </div>

              <div className="mt-1 grid grid-cols-3 gap-3 border-t hairline pt-4">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
                    Valuation
                  </p>
                  <p className="mt-1 font-mono text-[14px] tabular-nums text-foreground">
                    ${a.valuation}M
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
                    Util.
                  </p>
                  <p className="mt-1 font-mono text-[14px] tabular-nums text-foreground">
                    {a.utilization}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
                    Yield
                  </p>
                  <p className="mt-1 font-mono text-[14px] tabular-nums text-primary">
                    {a.yieldBps} bps
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <DashboardFooter />
    </>
  )
}
