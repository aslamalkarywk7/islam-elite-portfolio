import { BidManagement } from "@/components/dashboard/bid-management"
import {
  PageHeader,
  MarketsPill,
  DashboardFooter,
} from "@/components/dashboard/page-header"
import { Gavel, Flame, Timer, ShieldCheck } from "lucide-react"

const stats = [
  { label: "Active bids", value: "14", hint: "6 segments", icon: Gavel },
  { label: "Hot lots", value: "3", hint: "closing < 24h", icon: Flame },
  { label: "Avg. time-to-clear", value: "3h 42m", hint: "−12% vs prior", icon: Timer },
  { label: "KYC cleared", value: "98.4%", hint: "1,264 / 1,284", icon: ShieldCheck },
]

export default function BidsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live order book · Session 184"
        title={
          <>
            Bid Management.
            <br />
            <span className="text-muted-foreground">Every lot, priced by the model.</span>
          </>
        }
        description={
          <>
            AI-scored order book across 14 industrial lots. Each position is weighted by
            counterparty conviction, order-book depth and macro drift — refreshed every{" "}
            <span className="text-foreground">28 ms</span>.
          </>
        }
        actions={
          <>
            <MarketsPill />
            <button className="rounded-md border hairline bg-card/60 px-4 py-2 text-[12px] text-muted-foreground hover:text-foreground">
              Export order book
            </button>
            <button className="rounded-md bg-primary px-4 py-2 text-[12px] font-medium text-primary-foreground hover:brightness-105 transition">
              Launch auction
            </button>
          </>
        }
      />

      {/* Sub-stats */}
      <section className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border hairline bg-card/70 p-5 flex items-center gap-4"
          >
            <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/20 shrink-0">
              <s.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-1 font-display text-2xl font-light tabular-nums">{s.value}</p>
              <p className="text-[11px] text-muted-foreground tracking-wide">{s.hint}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <BidManagement />
      </section>

      <DashboardFooter />
    </>
  )
}
