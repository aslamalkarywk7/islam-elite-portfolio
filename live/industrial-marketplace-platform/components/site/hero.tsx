"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowLeft,
  Sparkles,
  Users,
  Factory,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cities } from "@/lib/industrial-data"
import { cn } from "@/lib/utils"

export function Hero() {
  const [active, setActive] = useState(0)
  const total = cities.length
  const current = cities[active]

  const next = () => setActive((p) => (p + 1) % total)
  const prev = () => setActive((p) => (p - 1 + total) % total)

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-32">
      {/* Background hero image with dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero-morocco.jpg"
          alt="منظر صناعي للمغرب"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_auto] lg:gap-14 lg:px-8">
        {/* LEFT: Big card */}
        <div className="relative">
          {/* Main showcase card */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/60 p-2 shadow-2xl shadow-primary/10 backdrop-blur-md">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
              <Image
                src={current.image || "/placeholder.svg"}
                alt={current.name}
                fill
                className="object-cover transition-all duration-700"
                key={current.id}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/40" />

              {/* Step indicator */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background/70 font-mono text-sm font-bold text-primary backdrop-blur">
                {String(active + 1).padStart(2, "0")}
              </div>

              {/* CTA pill */}
              <div className="absolute right-1/2 top-6 translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>استكشف المشهد الصناعي</span>
                </div>
              </div>

              {/* Tag chip */}
              <div className="absolute bottom-24 right-6 lg:bottom-28">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur">
                  {current.tag}
                </span>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-8 right-6 left-6 lg:bottom-10">
                <div className="mb-1 text-xs text-muted-foreground">{current.region}</div>
                <h1 className="font-display text-4xl font-black leading-tight text-foreground md:text-5xl lg:text-6xl">
                  {current.name}
                </h1>
                <div className="mt-1 text-sm text-muted-foreground">
                  {current.subtitle} • <span className="text-primary">{current.investment} مليار درهم</span>
                </div>
              </div>

              {/* Mini stats row */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-primary/15 bg-background/60 px-4 py-2.5 backdrop-blur">
                <Stat icon={<TrendingUp className="h-3.5 w-3.5 text-primary" />} value={current.growth + "%"} label="نمو" />
                <Stat icon={<Users className="h-3.5 w-3.5 text-primary" />} value={current.employees} label="موظف" />
                <Stat icon={<Factory className="h-3.5 w-3.5 text-primary" />} value={current.factories} label="مصنع" />
              </div>
            </div>

            {/* Action buttons under card */}
            <div className="flex items-center justify-between gap-3 p-3">
              <button className="group flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30">
                <span>ابدأ الاستثمار</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                <span>عرض التفاصيل</span>
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Dots pagination */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {cities.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`الانتقال إلى الشريحة ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground",
                )}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Vertical cities list */}
        <aside className="hidden lg:block">
          <div className="relative flex flex-col gap-1 pl-6">
            <div className="absolute right-0 top-0 bottom-0 w-px bg-border" />
            {cities.map((c, i) => {
              const isActive = i === active
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className="group relative flex items-start justify-between gap-6 py-3 pr-6 text-right transition-colors"
                >
                  <div
                    className={cn(
                      "absolute right-[-1px] top-1/2 -translate-y-1/2 h-8 w-0.5 rounded-full transition-all",
                      isActive ? "bg-primary" : "bg-transparent group-hover:bg-primary/30",
                    )}
                  />
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "font-bold transition-colors",
                        isActive ? "text-primary" : "text-foreground group-hover:text-primary/80",
                      )}
                    >
                      {c.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{c.subtitle}</span>
                  </div>
                  <span
                    className={cn(
                      "font-mono text-xs tabular-nums transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {String(c.factories).replace(/K|B/g, "").slice(0, 3)}
                  </span>
                </button>
              )
            })}
          </div>
        </aside>
      </div>

      {/* Bottom carousel strip */}
      <div className="mx-auto mt-14 max-w-7xl px-4 lg:px-8">
        {/* Summary stats */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-center md:gap-10">
          <SummaryStat value={current.employees} label="موظف" />
          <div className="h-10 w-px bg-border" />
          <SummaryStat value={current.investment + " مليار"} label="درهم" />
          <div className="h-10 w-px bg-border" />
          <SummaryStat value={current.factories} label="مصنع" accent />
        </div>

        {/* Scrollable cities pill nav */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            aria-label="السابق"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 overflow-x-auto py-2">
            {cities.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  i === active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            aria-label="التالي"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        {/* Page indicator */}
        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <div className="h-px w-32 bg-border">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${((active + 1) / total) * 100}%` }}
            />
          </div>
          <span>{String(total).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  )
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
      {icon}
      <span className="font-bold text-foreground">{value}</span>
      <span>{label}</span>
    </div>
  )
}

function SummaryStat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "font-display text-3xl font-black md:text-4xl",
          accent ? "text-primary" : "text-foreground",
        )}
      >
        {value}
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
