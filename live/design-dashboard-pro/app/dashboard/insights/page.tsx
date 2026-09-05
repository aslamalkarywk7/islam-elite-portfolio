import { PredictiveChart } from "@/components/dashboard/predictive-chart"
import { InvestorInsights } from "@/components/dashboard/investor-insights"
import {
  PageHeader,
  MarketsPill,
  DashboardFooter,
} from "@/components/dashboard/page-header"
import { Sparkles, ArrowUpRight } from "lucide-react"

const signals = [
  {
    tag: "Sector rotation",
    title: "Energy rotation accelerating",
    body: "Tier-I investors rotating +14% into Energy over the next cycle. Northcape Wind Array and 2 adjacent lots flagged for outreach.",
    confidence: 81,
  },
  {
    tag: "Liquidity",
    title: "Metals order-book thinning",
    body: "Clearing spread widened 32 bps in Metals over 7 days. Model flags reduced bidder density on lots > $40M.",
    confidence: 68,
  },
  {
    tag: "Macro drift",
    title: "Rail demand sustained",
    body: "Cross-border freight volume +8.4% QoQ. Model upgrades Rail & Transport win-rate forecast from 62% to 71%.",
    confidence: 74,
  },
]

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Intelligence · AI advisor"
        title={
          <>
            Investor Insights.
            <br />
            <span className="text-muted-foreground">
              Where capital is moving, before it moves.
            </span>
          </>
        }
        description={
          <>
            Atrium tracks <span className="text-foreground">1,284 investors</span> across
            sovereign, strategic and tier-I desks. The engine correlates allocation drift with
            on-platform bid conviction to surface actionable signals.
          </>
        }
        actions={
          <>
            <MarketsPill />
            <button className="rounded-md border hairline bg-card/60 px-4 py-2 text-[12px] text-muted-foreground hover:text-foreground">
              Download research
            </button>
            <button className="rounded-md bg-primary px-4 py-2 text-[12px] font-medium text-primary-foreground hover:brightness-105 transition">
              Schedule IR brief
            </button>
          </>
        }
      />

      <section className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PredictiveChart />
        </div>
        <div>
          <InvestorInsights />
        </div>
      </section>

      {/* Signals feed */}
      <section className="mt-6 rounded-xl border hairline bg-card/70 p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                <Sparkles className="h-3 w-3 text-primary" strokeWidth={2} />
              </div>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary/90">
                AI signal stream
              </p>
            </div>
            <h2 className="mt-3 font-display text-xl font-light tracking-tight">
              Research notes · last 24h
            </h2>
          </div>
          <button className="flex items-center gap-1 text-[11px] text-primary hover:underline underline-offset-4">
            Full archive <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
          </button>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-px bg-border/50 md:grid-cols-3 rounded-lg overflow-hidden">
          {signals.map((s) => (
            <li key={s.title} className="bg-card p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="rounded-full border hairline bg-background/40 px-2 py-0.5 text-[9px] tracking-widest uppercase text-muted-foreground">
                  {s.tag}
                </span>
                <span className="font-mono text-[10px] tabular-nums text-primary/90">
                  {s.confidence}%
                </span>
              </div>
              <h3 className="font-display text-[17px] font-light tracking-tight text-balance">
                {s.title}
              </h3>
              <p className="text-[12px] leading-relaxed text-muted-foreground text-pretty">
                {s.body}
              </p>
              <div className="mt-auto pt-3 flex items-center gap-2">
                <button className="rounded-md border hairline bg-background/40 px-2.5 py-1.5 text-[11px] text-muted-foreground hover:text-foreground">
                  Open note
                </button>
                <button className="rounded-md border hairline bg-background/40 px-2.5 py-1.5 text-[11px] text-muted-foreground hover:text-foreground">
                  Brief desk
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <DashboardFooter />
    </>
  )
}
