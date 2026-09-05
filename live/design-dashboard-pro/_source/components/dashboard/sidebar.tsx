"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Gavel,
  LineChart,
  Factory,
  Users,
  FileText,
  Settings,
  Sparkles,
  ChevronRight,
  Boxes,
} from "lucide-react"
import { cn } from "@/lib/utils"

const primaryNav = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Bid Management", icon: Gavel, href: "/dashboard/bids", badge: "14" },
  { label: "Investor Insights", icon: LineChart, href: "/dashboard/insights" },
  { label: "Asset Registry", icon: Factory, href: "/dashboard/assets" },
  { label: "Counterparties", icon: Users, href: "/dashboard/counterparties" },
  { label: "Contracts", icon: FileText, href: "/dashboard/contracts" },
]

const secondaryNav = [
  { label: "Portfolio", icon: Boxes, href: "/dashboard/assets", tag: "03" },
  { label: "Market Pulse", icon: Sparkles, href: "/dashboard/insights", tag: "Live" },
]

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard"
    return pathname?.startsWith(href)
  }

  return (
    <aside className="hidden lg:flex w-[260px] shrink-0 flex-col border-r hairline bg-sidebar/80 backdrop-blur-xl sticky top-0 h-dvh">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3 px-6 pt-6 pb-8">
        <div className="relative h-9 w-9 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_8px_24px_-8px_oklch(0.78_0.11_86/0.6)]">
          <span className="font-mono text-[11px] font-semibold tracking-widest text-primary-foreground">
            AT
          </span>
          <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-primary/40" />
        </div>
        <div className="leading-tight">
          <p className="text-[15px] font-medium tracking-tight">Atrium</p>
          <p className="text-[11px] text-muted-foreground tracking-[0.14em] uppercase">
            Industrial OS
          </p>
        </div>
      </Link>

      {/* Primary nav */}
      <div className="px-3">
        <p className="px-3 pb-2 text-[10px] font-medium tracking-[0.18em] text-muted-foreground/80 uppercase">
          Workspace
        </p>
        <nav className="flex flex-col gap-0.5">
          {primaryNav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-sidebar-accent text-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
                )}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_oklch(0.78_0.11_86/0.6)]" />
                )}
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    active ? "text-primary" : "text-muted-foreground/80",
                  )}
                  strokeWidth={1.5}
                />
                <span className="tracking-tight">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto font-mono text-[10px] tracking-wider text-primary/90 tabular-nums">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Secondary nav */}
      <div className="mt-8 px-3">
        <p className="px-3 pb-2 text-[10px] font-medium tracking-[0.18em] text-muted-foreground/80 uppercase">
          Intelligence
        </p>
        <nav className="flex flex-col gap-0.5">
          {secondaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground transition-colors"
            >
              <item.icon className="h-4 w-4 text-muted-foreground/80" strokeWidth={1.5} />
              <span className="tracking-tight">{item.label}</span>
              <span className="ml-auto flex items-center gap-1.5">
                {item.tag === "Live" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_oklch(0.78_0.11_86)]" />
                )}
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground/70">
                  {item.tag}
                </span>
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* AI Advisor card */}
      <div className="mt-auto p-4">
        <div className="glass rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-primary" strokeWidth={2} />
            </div>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-muted-foreground">
              Atrium AI
            </p>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-foreground/90 text-pretty">
            3 bids forecast to close{" "}
            <span className="text-primary">above market</span> within 48h.
          </p>
          <Link
            href="/dashboard/insights"
            className="mt-3 flex w-full items-center justify-between rounded-md border hairline bg-background/40 px-3 py-2 text-[12px] font-medium text-foreground/90 hover:border-primary/40 hover:text-primary transition-colors"
          >
            <span>Open advisor</span>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </div>

        {/* Settings */}
        <Link
          href="/dashboard"
          className="mt-3 flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Settings className="h-4 w-4" strokeWidth={1.5} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  )
}
