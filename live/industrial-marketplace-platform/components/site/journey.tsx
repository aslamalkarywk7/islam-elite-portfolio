"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  Lightbulb,
  FileCheck,
  Hammer,
  Link2,
  Pause,
  Play,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Step = {
  num: string
  title: string
  description: string
  icon: React.ReactNode
  bullets: string[]
  center: string
  centerLabel: string
}

const steps: Step[] = [
  {
    num: "01",
    title: "الفكرة والدراسة",
    description: "ندرس فكرة مشروعك الصناعي بعمق ونقدم لك تقريرًا شاملًا يحدد الفرص والتحديات.",
    icon: <Lightbulb className="h-7 w-7" />,
    bullets: ["تحليل السوق", "دراسة الجدوى", "اختيار القطاع"],
    center: "+36",
    centerLabel: "مدينة صناعية",
  },
  {
    num: "02",
    title: "الترخيص والاعتماد",
    description: "نتكفل بجميع إجراءات الترخيص مع المركز الجهوي للاستثمار والجهات المعنية.",
    icon: <FileCheck className="h-7 w-7" />,
    bullets: ["الوثائق الرسمية", "المركز الجهوي", "الاعتماد النهائي"],
    center: "+2,500",
    centerLabel: "ترخيص سنوي",
  },
  {
    num: "03",
    title: "البناء والتجهيز",
    description: "نربطك بأفضل شركات البناء والتجهيز لتأسيس مصنعك وفق أعلى المعايير العالمية.",
    icon: <Hammer className="h-7 w-7" />,
    bullets: ["مقاولون معتمدون", "معدات حديثة", "جودة عالمية"],
    center: "+1,000",
    centerLabel: "مصنع ناجح",
  },
  {
    num: "04",
    title: "الربط الذكي",
    description: "يتم ربطه بمزودي خدمات متخصصين ومعتمدين حسب المشروع بتقنيات الذكاء الاصطناعي.",
    icon: <Link2 className="h-7 w-7" />,
    bullets: ["مقارنة العروض", "اختيار المزود المناسب", "التعاقد المباشر"],
    center: "+500",
    centerLabel: "مزود خدمة",
  },
]

export function JourneySection() {
  const [active, setActive] = useState(3)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setActive((p) => (p + 1) % steps.length), 4500)
    return () => clearInterval(t)
  }, [isPlaying])

  const step = steps[active]

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3 w-3" />
            كيف تعمل المنصة
          </div>
          <h2 className="font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            من الفكرة إلى <span className="text-primary">الإنتاج</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            رحلة استثمارية متكاملة في أربع خطوات بسيطة
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-6">
          {/* Left: Step Card */}
          <div className="relative rounded-3xl border border-primary/20 bg-card/70 p-8 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                {step.icon}
              </div>
              <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary">
                الخطوة {step.num}
              </div>
            </div>

            <h3 className="mb-3 font-display text-3xl font-black text-foreground">{step.title}</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{step.description}</p>

            <div className="space-y-2">
              {step.bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-center justify-between rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm"
                >
                  <span className="text-foreground">{b}</span>
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
              ))}
            </div>

            {/* Playback controls */}
            <div className="mt-6 flex items-center gap-2">
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                aria-label={isPlaying ? "إيقاف" : "تشغيل"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setActive((p) => (p - 1 + steps.length) % steps.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary"
                aria-label="السابق"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                onClick={() => setActive((p) => (p + 1) % steps.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary"
                aria-label="التالي"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="ml-auto flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`الانتقال إلى الخطوة ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === active ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Orbit visualization */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md">
              {/* Rotating orbit ring */}
              <div className="absolute inset-0 animate-slow-spin">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />
              </div>

              {/* Static outer ring */}
              <div className="absolute inset-6 rounded-full border border-primary/20" />

              {/* Center */}
              <div className="absolute inset-1/4 flex flex-col items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 backdrop-blur">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {step.icon}
                </div>
                <div className="mt-3 font-display text-3xl font-black text-primary">{step.center}</div>
                <div className="text-xs text-muted-foreground">{step.centerLabel}</div>
              </div>

              {/* Step dots around */}
              {steps.map((s, i) => {
                // Place at 12, 3, 6, 9 o'clock positions (-90deg, 0deg, 90deg, 180deg) in CSS transforms
                const positions = [
                  { top: "0%", left: "50%", x: "-50%", y: "-50%" },
                  { top: "50%", left: "100%", x: "-50%", y: "-50%" },
                  { top: "100%", left: "50%", x: "-50%", y: "-50%" },
                  { top: "50%", left: "0%", x: "-50%", y: "-50%" },
                ][i]
                const isActive = i === active
                return (
                  <button
                    key={s.num}
                    onClick={() => setActive(i)}
                    className="absolute"
                    style={{
                      top: positions.top,
                      left: positions.left,
                      transform: `translate(${positions.x}, ${positions.y})`,
                    }}
                    aria-label={s.title}
                  >
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full border-2 font-mono text-xs font-bold transition-all",
                        isActive
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/40 scale-110"
                          : "border-primary/30 bg-card text-muted-foreground hover:border-primary hover:text-primary",
                      )}
                    >
                      {s.num}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Summary stats */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { v: "99%", l: "نسبة النجاح" },
            { v: "+36", l: "مدينة صناعية" },
            { v: "+500", l: "شريك" },
            { v: "+1,000", l: "مصنع ناجح" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-card/50 p-4 text-center transition-colors hover:border-primary/40"
            >
              <div className="font-display text-2xl font-black text-primary md:text-3xl">{s.v}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40">
            <span>ابدأ مشروعك الصناعي الآن</span>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            {["تسجيل مجاني", "بدون التزام", "دعم فني 24/7"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 text-muted-foreground"
              >
                <CheckCircle2 className="h-3 w-3 text-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
