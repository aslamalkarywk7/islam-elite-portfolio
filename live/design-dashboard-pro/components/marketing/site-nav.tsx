import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Trust", href: "#trust" },
  { label: "Clients", href: "#clients" },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b hairline bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-10 px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_8px_24px_-8px_oklch(0.78_0.11_86/0.6)]">
            <span className="font-mono text-[10px] font-semibold tracking-widest text-primary-foreground">
              AT
            </span>
            <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-primary/40" />
          </div>
          <div className="leading-tight hidden sm:block">
            <p className="text-[14px] font-medium tracking-tight">Atrium</p>
            <p className="text-[10px] text-muted-foreground tracking-[0.14em] uppercase">
              Industrial OS
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/dashboard"
            className="hidden sm:inline-flex text-[13px] text-muted-foreground hover:text-foreground px-3 py-1.5"
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-1.5 text-[12px] font-medium text-primary-foreground hover:brightness-105 transition"
          >
            Request access
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </header>
  )
}
