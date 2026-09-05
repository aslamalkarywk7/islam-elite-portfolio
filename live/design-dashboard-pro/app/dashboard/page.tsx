import { KpiCards } from "@/components/dashboard/kpi-cards"
import { PredictiveChart } from "@/components/dashboard/predictive-chart"
import { BidManagement } from "@/components/dashboard/bid-management"
import { InvestorInsights } from "@/components/dashboard/investor-insights"
import {
  PageHeader,
  MarketsPill,
  DashboardFooter,
} from "@/components/dashboard/page-header"

export default function OverviewPage() {
  return (
    <>
      <PageHeader
        eyebrow="Q2 · 2026 · Session 184"
        title={
          <>
            Good evening, Elena.
            <br />
            <span className="text-muted-foreground">
              The order book is trending above consensus.
            </span>
          </>
        }
        description={
          <>
            Atrium is tracking 14 live industrial bids across 6 segments. Predictive models
            indicate a <span className="text-foreground">+18.5% clearing volume</span> over the
            next five-week horizon.
          </>
        }
        actions={
          <>
            <MarketsPill />
            <button className="rounded-md border hairline bg-card/60 px-4 py-2 text-[12px] text-muted-foreground hover:text-foreground transition-colors">
              Export dossier
            </button>
            <button className="rounded-md bg-primary px-4 py-2 text-[12px] font-medium text-primary-foreground hover:brightness-105 transition">
              Launch auction
            </button>
          </>
        }
      />

      <section className="mt-10">
        <KpiCards />
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PredictiveChart />
        </div>
        <div>
          <InvestorInsights />
        </div>
      </section>

      <section className="mt-6">
        <BidManagement />
      </section>

      <DashboardFooter />
    </>
  )
}
