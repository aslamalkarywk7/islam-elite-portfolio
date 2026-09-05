import { Factory, Handshake, GraduationCap, Users, Link2, Globe, ArrowLeft } from "lucide-react"
import { partners } from "@/lib/industrial-data"
import { cn } from "@/lib/utils"

const iconMap = {
  factory: <Factory className="h-6 w-6" />,
  handshake: <Handshake className="h-6 w-6" />,
  graduation: <GraduationCap className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  link: <Link2 className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
}

export function PartnersSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            انضم لشبكتنا
          </div>
          <h2 className="font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            مع من <span className="text-primary">نعمل؟</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            نربط جميع الأطراف في المنظومة الصناعية لبناء شراكات ناجحة ومستدامة
          </p>
        </div>

        {/* Featured investors card (full width) */}
        <div className="mb-4">
          <PartnerCard partner={partners[0]} featured />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {partners.slice(1).map((p) => (
            <PartnerCard key={p.id} partner={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnerCard({
  partner,
  featured = false,
}: {
  partner: (typeof partners)[number]
  featured?: boolean
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10",
        featured && "md:p-8",
      )}
    >
      {/* Diagonal accent bar */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/0 via-primary to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-lg font-black text-primary md:text-xl">{partner.count}</div>
          <div className="text-[11px] text-muted-foreground">{partner.countLabel}</div>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
          {iconMap[partner.icon]}
        </div>
      </div>

      <div className={cn("mt-8", featured && "md:mt-12")}>
        <h3 className={cn("font-display text-xl font-black text-foreground", featured && "md:text-3xl")}>
          {partner.title}
        </h3>
        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{partner.subtitle}</p>
        <p className={cn("mt-3 text-xs leading-relaxed text-muted-foreground", featured && "md:text-sm md:max-w-xl")}>
          {partner.description}
        </p>
        <button className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80">
          سجل الآن
          <ArrowLeft className="h-3 w-3" />
        </button>
      </div>
    </article>
  )
}
