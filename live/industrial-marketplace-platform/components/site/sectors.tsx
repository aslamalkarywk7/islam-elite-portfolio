"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, BookmarkCheck, ArrowLeft, ChevronRight } from "lucide-react"
import { sectors } from "@/lib/industrial-data"
import { cn } from "@/lib/utils"

export function SectorsSection() {
  const [active, setActive] = useState(0)
  const sector = sectors[active]

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 font-display text-sm font-semibold tracking-wider text-primary">
            القطاعات الصناعية
          </div>
          <h2 className="font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            استكشف <span className="text-primary">القطاعات الصناعية</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            +6 قطاعات صناعية رائدة في المملكة تقدم فرصًا استثمارية متنوعة وواعدة
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {sectors.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
                i === active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Active sector */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Image with floating stats */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src={sector.image || "/placeholder.svg"}
                alt={sector.title}
                fill
                className="object-cover"
                key={sector.id}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur">
              <div className="grid grid-cols-4 gap-4 text-center">
                <Metric value={sector.growth} label="نمو" accent />
                <Metric value={sector.investment} label="استثمار" />
                <Metric value={sector.employees} label="عامل" />
                <Metric value={sector.factories} label="مصنع" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <BookmarkCheck className="h-3 w-3" />
              القطاع الصناعي
            </div>

            <h3 className="font-display text-4xl font-black text-foreground md:text-5xl">
              {sector.title}
            </h3>
            <p className="mt-2 font-mono text-sm text-muted-foreground">{sector.titleEn}</p>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {sector.description}
            </p>

            <div className="mt-8">
              <div className="mb-3 text-sm font-bold text-foreground">الصناعات الرائدة</div>
              <div className="flex flex-wrap gap-2">
                {sector.subSectors.map((ss) => (
                  <span
                    key={ss}
                    className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs text-foreground"
                  >
                    {ss}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background transition-all hover:bg-foreground/90">
                <span>تفاصيل القطاع</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                استثمر الآن
              </button>
            </div>
          </div>
        </div>

        {/* Nav arrows */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <button
            onClick={() => setActive((p) => (p - 1 + sectors.length) % sectors.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-primary"
            aria-label="السابق"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => setActive((p) => (p + 1) % sectors.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-primary"
            aria-label="التالي"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

function Metric({
  value,
  label,
  accent,
}: {
  value: string
  label: string
  accent?: boolean
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={cn("font-display text-xl font-black md:text-2xl", accent ? "text-accent" : "text-foreground")}>
        {value}
      </div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
    </div>
  )
}
