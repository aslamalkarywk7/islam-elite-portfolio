import Image from "next/image"
import { Sparkles, ArrowLeft } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image src="/sectors/automotive.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-24 text-center lg:px-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
          <Sparkles className="h-7 w-7" />
        </div>

        <h2 className="font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
          ابدأ مشروعك الصناعي <span className="text-primary">اليوم</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          انضم إلى آلاف المستثمرين الذين يثقون بأجماس لتحويل أفكارهم إلى مصانع ناجحة في المملكة المغربية
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="group flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40">
            <span>سجل كمستثمر صناعي</span>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </button>
          <button className="rounded-xl border border-border bg-card/60 px-7 py-4 font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary">
            تواصل معنا
          </button>
        </div>
      </div>
    </section>
  )
}
