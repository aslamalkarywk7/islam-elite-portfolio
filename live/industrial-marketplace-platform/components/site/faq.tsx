"use client"

import { useState } from "react"
import { Sparkles, Award, ArrowLeft, ChevronLeft, ChevronRight, Trash2 } from "lucide-react"
import { faqs } from "@/lib/industrial-data"
import { cn } from "@/lib/utils"

export function FaqSection() {
  const [active, setActive] = useState(0)
  const total = faqs.length
  const faq = faqs[active]

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 font-display text-sm font-semibold tracking-wider text-primary">
            الأسئلة الشائعة
          </div>
          <h2 className="font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            إجاباتك على <span className="text-primary">قلب الموضوع</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            الأسئلة الأكثر شيوعًا وإجابات متخصصة حول الاستثمار الصناعي في المغرب
          </p>
        </div>

        <article className="relative rounded-3xl border border-border bg-card/70 p-6 backdrop-blur md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr]">
            {/* Question + answer */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Award className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">المرخّص</span>
              </div>
              <h3 className="font-display text-2xl font-black text-foreground md:text-3xl">{faq.question}</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{faq.answer}</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-foreground/90">
                تواصل مع خبير
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="hidden w-px bg-border md:block" />

            {/* Benefits + steps */}
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">الفوائد الرئيسية</span>
                </div>
                <div className="space-y-2">
                  {faq.benefits.map((b, i) => (
                    <div
                      key={b}
                      className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-2.5 text-sm"
                    >
                      <span className="text-foreground">{b}</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-sm font-bold text-foreground">خطوات العملية</div>
                <div className="flex flex-wrap gap-2">
                  {faq.steps.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-secondary/60 px-3 py-1 text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-primary"
            aria-label="مسح"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setActive((p) => (p - 1 + total) % total)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-primary"
            aria-label="السابق"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {faqs.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`السؤال رقم ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40",
                )}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((p) => (p + 1) % total)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-primary"
            aria-label="التالي"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        {/* Counter */}
        <div className="mt-4 flex items-center justify-center gap-3 font-mono text-xs text-muted-foreground">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <span className="text-border">/</span>
          <span>{String(total).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  )
}
