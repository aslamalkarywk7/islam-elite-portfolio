import Link from "next/link"
import {
  ArrowUpRight,
  Gavel,
  LineChart,
  Factory,
  Users,
  FileText,
  Sparkles,
  ShieldCheck,
  Fingerprint,
  Satellite,
  ArrowRight,
} from "lucide-react"
import { SiteNav } from "@/components/marketing/site-nav"
import { HeroPreview } from "@/components/marketing/hero-preview"

const features = [
  {
    icon: Gavel,
    title: "Bid Management",
    body: "Every industrial lot, scored and sequenced by a Bayesian model. Reserve-to-leading deltas and time-to-clear surfaced in real time.",
  },
  {
    icon: LineChart,
    title: "Investor Insights",
    body: "Allocation drift across 1,284 desks, correlated with bid conviction. Signals reach your desk before the tape prints.",
  },
  {
    icon: Sparkles,
    title: "Predictive Forecasts",
    body: "Bayesian ensembles across 14 macro signals. Confidence bands widen honestly — no model dresses up its uncertainty.",
  },
  {
    icon: Factory,
    title: "Asset Registry",
    body: "184 assets under custody, each digitally twinned and continuously valued against on-site telemetry.",
  },
  {
    icon: FileText,
    title: "Contracts, on-ledger",
    body: "From handshake to escrow. Counsel-reviewed templates, countersigned under Lattice Cipher, posted to immutable ledger.",
  },
  {
    icon: Users,
    title: "Counterparties",
    body: "A curated network of sovereign, strategic and tier-I desks. Scored for conviction, latency and follow-through.",
  },
]

const stats = [
  { v: "$15.4B", l: "Assets under custody" },
  { v: "1,284", l: "Institutional desks" },
  { v: "$428.6M", l: "Gross bid volume (30d)" },
  { v: "28ms", l: "Order-book latency" },
]

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Lattice Cipher custody",
    body: "Hardware-bound signing, SOC 2 Type II, and ISO 27001. Every instrument posted to an immutable, auditable ledger.",
  },
  {
    icon: Fingerprint,
    title: "KYC, continuously",
    body: "1,264 counterparties continuously KYC-cleared against 34 jurisdictional watchlists. No stale attestations.",
  },
  {
    icon: Satellite,
    title: "On-site telemetry",
    body: "Assets under Atrium custody stream utilisation and health telemetry, cross-audited against declared valuations.",
  },
]

const clients = [
  "LATTICE CAPITAL",
  "ARCERA SOVEREIGN",
  "NORTHHAVEN",
  "PORTOLAN PARTNERS",
  "HELION",
  "KIRVANE",
]

export default function LandingPage() {
  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      {/* Ambient luxe lighting */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 85% -10%, oklch(0.78 0.11 86 / 0.12) 0%, transparent 60%), radial-gradient(700px 500px at -10% 110%, oklch(0.78 0.11 86 / 0.06) 0%, transparent 60%)",
        }}
      />

      <SiteNav />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-start">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border hairline bg-card/60 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                  Atrium · Predictive model v4.2
                </span>
              </div>

              <h1 className="mt-6 font-display text-[52px] leading-[1.02] font-light tracking-tight text-balance lg:text-[68px]">
                The operating system for{" "}
                <span className="text-primary">industrial capital.</span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground text-pretty">
                Atrium runs the order book, the registry and the ledger for the
                institutions moving industrial assets. Predictive models, curated
                counterparties, on-ledger settlement — in one quiet, luxurious interface.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-[13px] font-medium text-primary-foreground hover:brightness-105 transition"
                >
                  Enter the platform
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-md border hairline bg-card/60 px-5 py-3 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  See the platform
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
              </div>

              {/* Mini stats */}
              <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t hairline pt-6">
                {stats.map((s) => (
                  <div key={s.l}>
                    <dt className="text-[10px] font-medium tracking-[0.16em] uppercase text-muted-foreground">
                      {s.l}
                    </dt>
                    <dd className="mt-1.5 font-display text-xl font-light tabular-nums">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6">
              <HeroPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Client marquee */}
      <section id="clients" className="border-y hairline bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
            Trusted by principal desks
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {clients.map((c) => (
              <li
                key={c}
                className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground/80"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Platform / features */}
      <section id="platform" className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary/90">
                The platform
              </p>
              <h2 className="mt-3 font-display text-[40px] leading-[1.05] font-light tracking-tight text-balance">
                Six surfaces. One tape.
                <br />
                <span className="text-muted-foreground">
                  Engineered for the way principals actually trade.
                </span>
              </h2>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-[12px] text-primary hover:underline underline-offset-4"
            >
              Explore the dashboard
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border/50 rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="group bg-card p-6 transition-colors hover:bg-card/60">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/20">
                    <f.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[18px] font-light tracking-tight">
                    {f.title}
                  </h3>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground text-pretty">
                  {f.body}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-[11px] text-muted-foreground/80 group-hover:text-primary transition-colors">
                  <span className="font-mono tracking-widest uppercase">Learn more</span>
                  <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence / pull quote */}
      <section id="intelligence" className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary/90">
                The intelligence
              </p>
              <h2 className="mt-3 font-display text-[36px] leading-[1.08] font-light tracking-tight text-balance">
                A model that concedes what it doesn&apos;t know.
              </h2>
              <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground text-pretty">
                Atrium runs a Bayesian ensemble across 14 macro signals and order-book
                depth, refreshed every 28&nbsp;ms. The confidence band widens as
                uncertainty compounds — an honest forecast beats a confident guess.
              </p>
              <ul className="mt-8 flex flex-col gap-3 text-[13px]">
                {[
                  "14 macro signals · refreshed in 28 ms",
                  "3.2% MAPE on 30-day clearing volume",
                  "Per-lot win-probability surfaced in the order book",
                  "Allocation-drift detection across 1,284 desks",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="h-1 w-6 bg-primary" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="lg:col-span-7 glass relative overflow-hidden rounded-2xl p-10">
              <div className="luxe-glow absolute inset-0 pointer-events-none" />
              <div className="relative">
                <Sparkles className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <blockquote className="mt-6 font-display text-[28px] leading-[1.2] font-light tracking-tight text-balance lg:text-[32px]">
                  &ldquo;Atrium is the first interface that treats industrial assets with the
                  restraint of a sovereign fund and the velocity of an electronic venue.&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t hairline pt-6">
                  <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary/80 to-accent/70 ring-1 ring-primary/30 grid place-items-center">
                    <span className="font-mono text-[10px] tracking-widest text-primary-foreground">
                      EM
                    </span>
                  </div>
                  <div className="leading-tight">
                    <p className="text-[13px] font-medium">Elena Marchetti</p>
                    <p className="text-[11px] text-muted-foreground tracking-wider">
                      Principal · Lattice Capital
                    </p>
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="relative border-t hairline">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary/90">
              The trust fabric
            </p>
            <h2 className="mt-3 font-display text-[36px] leading-[1.08] font-light tracking-tight text-balance">
              Infrastructure worthy of a balance sheet.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground text-pretty">
              Atrium is built for desks whose compliance teams read footnotes. Every
              signature, telemetry stream and attestation is continuously audited.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {trustPoints.map((t) => (
              <div key={t.title} className="rounded-xl border hairline bg-card/70 p-6">
                <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 ring-1 ring-primary/20">
                  <t.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-[18px] font-light tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground text-pretty">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
          <div className="glass relative overflow-hidden rounded-2xl p-10 lg:p-14">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{
                background:
                  "radial-gradient(600px 300px at 100% 0%, oklch(0.78 0.11 86 / 0.18) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary/90">
                  Onboarding · Session 184
                </p>
                <h2 className="mt-3 font-display text-[40px] leading-[1.06] font-light tracking-tight text-balance lg:text-[48px]">
                  Trade industrial assets the way a principal should.
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground text-pretty max-w-lg">
                  Atrium is currently accepting a small cohort of institutional desks for
                  the Q3 allocation cycle. Three conversations, one onboarding dossier, and
                  you&apos;re on the tape.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-[13px] font-medium text-primary-foreground hover:brightness-105 transition"
                >
                  Request access
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-md border hairline bg-background/40 px-5 py-3 text-[13px] text-muted-foreground hover:text-foreground"
                >
                  Preview the dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent grid place-items-center">
                <span className="font-mono text-[10px] font-semibold tracking-widest text-primary-foreground">
                  AT
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-medium tracking-tight">Atrium</p>
                <p className="text-[10px] text-muted-foreground tracking-[0.14em] uppercase">
                  Industrial OS
                </p>
              </div>
            </div>
            <p className="mt-5 text-[12px] text-muted-foreground leading-relaxed max-w-xs">
              Atrium operates the infrastructure for industrial capital. Regulated,
              continuously audited, quietly excellent.
            </p>
          </div>

          {[
            {
              title: "Platform",
              items: ["Bid Management", "Investor Insights", "Asset Registry", "Contracts"],
            },
            {
              title: "Intelligence",
              items: ["Predictive Model", "Market Pulse", "Research Archive", "API"],
            },
            {
              title: "Firm",
              items: ["Trust & Security", "Regulatory", "Careers", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {col.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[12px] text-foreground/80 hover:text-primary transition-colors"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t hairline">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col gap-3 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono tracking-widest uppercase">
              Atrium Industrial OS · v4.2.1 · © 2026
            </p>
            <p className="tracking-wide">
              Data latency <span className="text-foreground font-mono">28ms</span> · Secured
              by <span className="text-foreground">Lattice Cipher</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
