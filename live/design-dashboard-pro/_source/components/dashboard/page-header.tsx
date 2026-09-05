import type { ReactNode } from "react"

type Props = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
}

export function PageHeader({ eyebrow, title, description, actions }: Props) {
  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary/90">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[42px] leading-[1.05] font-light tracking-tight text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-sm text-muted-foreground max-w-xl text-pretty">
            {description}
          </p>
        )}
      </div>

      {actions && (
        <div className="flex flex-wrap items-center gap-3">{actions}</div>
      )}
    </section>
  )
}

export function MarketsPill() {
  return (
    <div className="flex items-center gap-2 rounded-md border hairline bg-card/60 px-3 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_oklch(0.78_0.11_86)]" />
      <span className="font-mono text-[11px] tracking-wider text-muted-foreground">
        Markets · Open
      </span>
      <span className="mx-1 h-3 w-px bg-border/70" />
      <span className="font-mono text-[11px] tracking-wider text-foreground">NY 18:42</span>
    </div>
  )
}

export function DashboardFooter() {
  return (
    <footer className="mt-10 flex flex-col items-start justify-between gap-3 border-t hairline pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center">
      <p className="font-mono tracking-widest uppercase">Atrium Industrial OS · v4.2.1</p>
      <p className="tracking-wide">
        Data latency <span className="text-foreground font-mono">28ms</span> · Secured by{" "}
        <span className="text-foreground">Lattice Cipher</span>
      </p>
    </footer>
  )
}
