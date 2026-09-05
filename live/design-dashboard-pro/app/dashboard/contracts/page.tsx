import {
  PageHeader,
  MarketsPill,
  DashboardFooter,
} from "@/components/dashboard/page-header"
import { cn } from "@/lib/utils"
import { FileText, ShieldCheck, Timer, Check, Dot } from "lucide-react"

type Contract = {
  id: string
  title: string
  counterparty: string
  notional: number
  stage: "Draft" | "Negotiation" | "Counsel" | "Signed" | "Escrow"
  progress: number
  updated: string
}

const contracts: Contract[] = [
  {
    id: "ATR-C-0184",
    title: "Northcape Wind Array · Auction SPA",
    counterparty: "Arcera Sovereign",
    notional: 482,
    stage: "Counsel",
    progress: 76,
    updated: "12m ago",
  },
  {
    id: "ATR-C-0183",
    title: "Halden Mill A · Tranche 2 Transfer",
    counterparty: "Northhaven Mineral",
    notional: 248,
    stage: "Negotiation",
    progress: 48,
    updated: "44m ago",
  },
  {
    id: "ATR-C-0181",
    title: "Port Arlen Terminal 03 · Concession",
    counterparty: "Portolan Partners",
    notional: 196,
    stage: "Draft",
    progress: 22,
    updated: "2h ago",
  },
  {
    id: "ATR-C-0178",
    title: "Atlas Catalyst Line B · Offtake",
    counterparty: "Helion Industrial",
    notional: 154,
    stage: "Signed",
    progress: 100,
    updated: "Yesterday",
  },
  {
    id: "ATR-C-0174",
    title: "Kerrich Fleet · Master Lease",
    counterparty: "Lattice Capital",
    notional: 92,
    stage: "Escrow",
    progress: 92,
    updated: "3d ago",
  },
]

const stageStyles: Record<Contract["stage"], string> = {
  Draft: "text-muted-foreground border-border/60 bg-secondary/60",
  Negotiation: "text-accent-foreground border-accent/30 bg-accent/10",
  Counsel: "text-accent-foreground border-accent/30 bg-accent/10",
  Signed: "text-primary border-primary/25 bg-primary/10",
  Escrow: "text-primary border-primary/25 bg-primary/10",
}

const pipeline = ["Draft", "Negotiation", "Counsel", "Signed", "Escrow"]

export default function ContractsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal · 28 live instruments"
        title={
          <>
            Contracts.
            <br />
            <span className="text-muted-foreground">From handshake to escrow, on-ledger.</span>
          </>
        }
        description={
          <>
            Every Atrium contract is drafted from a negotiated template, countersigned under
            Lattice Cipher, and posted to immutable ledger custody. Aggregate in-flight
            notional <span className="text-foreground">$1.17B</span>.
          </>
        }
        actions={
          <>
            <MarketsPill />
            <button className="rounded-md border hairline bg-card/60 px-4 py-2 text-[12px] text-muted-foreground hover:text-foreground">
              Template library
            </button>
            <button className="rounded-md bg-primary px-4 py-2 text-[12px] font-medium text-primary-foreground hover:brightness-105 transition">
              New contract
            </button>
          </>
        }
      />

      {/* Stats */}
      <section className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "In-flight notional", value: "$1.17B", icon: FileText, hint: "28 instruments" },
          { label: "Countersigned (30d)", value: "41", icon: Check, hint: "+8 vs prior" },
          { label: "Avg. cycle-time", value: "6.4d", icon: Timer, hint: "draft → signed" },
          { label: "Counsel review SLA", value: "98.1%", icon: ShieldCheck, hint: "within 24h" },
        ].map((s) => (
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

      {/* Pipeline + list */}
      <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Pipeline */}
        <div className="rounded-xl border hairline bg-card/70 p-6 xl:col-span-1">
          <h2 className="font-display text-xl font-light tracking-tight">Pipeline</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Stage distribution · 28 instruments
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {pipeline.map((stage, i) => {
              const counts = [6, 9, 7, 4, 2]
              const c = counts[i]
              return (
                <li key={stage} className="flex items-center gap-3">
                  <span className="font-mono text-[10px] w-6 tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] tracking-tight">{stage}</span>
                      <span className="font-mono text-[11px] tabular-nums text-foreground/90">
                        {c}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          i >= 3
                            ? "bg-primary shadow-[0_0_8px_oklch(0.78_0.11_86/0.6)]"
                            : "bg-accent/70",
                        )}
                        style={{ width: `${(c / 9) * 100}%` }}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* List */}
        <div className="rounded-xl border hairline bg-card/70 xl:col-span-2 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <h2 className="font-display text-xl font-light tracking-tight">
                Active instruments
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Sorted by last activity
              </p>
            </div>
            <button className="rounded-md border hairline bg-card/60 px-3 py-1.5 text-[12px] text-muted-foreground hover:text-foreground">
              All stages
            </button>
          </div>
          <ul>
            {contracts.map((c, i) => (
              <li
                key={c.id}
                className={cn(
                  "flex flex-col gap-3 px-6 py-5 transition-colors hover:bg-background/40 sm:flex-row sm:items-center sm:gap-6",
                  i < contracts.length - 1 && "border-b hairline",
                )}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                      {c.id}
                    </p>
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 text-[9px] tracking-widest uppercase",
                        stageStyles[c.stage],
                      )}
                    >
                      {c.stage}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[14px] font-medium tracking-tight text-balance">
                    {c.title}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground">
                    {c.counterparty}
                    <Dot className="h-3 w-3" />
                    updated {c.updated}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-36">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                        Progress
                      </span>
                      <span className="font-mono text-[10px] tabular-nums text-foreground/90">
                        {c.progress}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right w-24">
                    <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
                      Notional
                    </p>
                    <p className="mt-1 font-mono text-[14px] tabular-nums text-foreground">
                      ${c.notional}M
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DashboardFooter />
    </>
  )
}
