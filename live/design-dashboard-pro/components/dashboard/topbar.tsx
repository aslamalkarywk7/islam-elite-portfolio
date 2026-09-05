"use client"

import { Search, Command, Bell, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

const titles: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/bids": "Bid Management",
  "/dashboard/insights": "Investor Insights",
  "/dashboard/assets": "Asset Registry",
  "/dashboard/counterparties": "Counterparties",
  "/dashboard/contracts": "Contracts",
}

export function Topbar() {
  const pathname = usePathname() || "/dashboard"
  const title = titles[pathname] ?? "Workspace"

  return (
    <header className="sticky top-0 z-20 border-b hairline bg-background/70 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-6 px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Workspace</span>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-muted-foreground">Intelligence</span>
          <span className="text-muted-foreground/40">/</span>
          <span className="font-medium text-foreground">{title}</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex ml-auto items-center gap-2 rounded-md border hairline bg-card/60 pl-3 pr-1.5 py-1.5 w-[360px]">
          <Search className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Search assets, counterparties, bids…"
            className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground/70 outline-none"
          />
          <kbd className="flex items-center gap-1 rounded border hairline bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            <Command className="h-2.5 w-2.5" strokeWidth={2} />K
          </kbd>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:ml-0 ml-auto">
          <button
            aria-label="Notifications"
            className="relative grid place-items-center h-9 w-9 rounded-md border hairline bg-card/60 hover:bg-card transition-colors"
          >
            <Bell className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
            <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_oklch(0.78_0.11_86)]" />
          </button>

          <div className="h-6 w-px bg-border/70" />

          {/* User */}
          <button className="flex items-center gap-3 rounded-md border hairline bg-card/60 pl-1 pr-3 py-1 hover:bg-card transition-colors">
            <div className="h-7 w-7 rounded-[6px] bg-gradient-to-br from-primary/80 to-accent/70 ring-1 ring-primary/30 flex items-center justify-center">
              <span className="text-[10px] font-medium tracking-widest text-primary-foreground">
                EM
              </span>
            </div>
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-[12px] font-medium">Elena Marchetti</span>
              <span className="text-[10px] text-muted-foreground tracking-wider">
                Principal · Lattice Capital
              </span>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  )
}
