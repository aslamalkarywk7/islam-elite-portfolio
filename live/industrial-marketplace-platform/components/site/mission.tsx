import { Rocket, Truck, Globe2, Link2, TrendingUp, ArrowLeft, Building2, Shield, Zap, MapPinned } from "lucide-react"
import { Logo } from "./logo"

const pillars = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "المدن الصناعية",
    description: "تطوير مدن صناعية متكاملة بالكامل لتلبية كافة متطلبات الإنتاج.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "الدعم السيادي",
    description: "بيئة تشريعية وحوافز مالية وتسهيلات مؤسسية متكاملة للمستثمرين.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "الطاقة والخدمات",
    description: "توفير بنية تحتية وطاقة بكلفة تنافسية عالمية للصناعات الثقيلة.",
  },
  {
    icon: <MapPinned className="h-5 w-5" />,
    title: "الموقع الجغرافي",
    description: "استثمار الموقع الفريد للمملكة كجسر عالمي يربط ثلاث قارات.",
  },
]

const features = [
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "تسهيل البدء والتشغيل",
    description: "دعم إداري وفني متكامل لبناء وتشغيل المصانع.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "تحسين سلاسل الإمداد",
    description: "خلق منظومة توريد وطنية ذات جودة عالمية.",
  },
  {
    icon: <Link2 className="h-5 w-5" />,
    title: "ربط الخبرات والتمويل",
    description: "فتح قنوات مباشرة مع المستثمرين والخبراء العالميين.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "التوسع العالمي",
    description: "دعم التصدير والانتشار تحت شعار صنع في المغرب.",
  },
]

export function MissionSection() {
  return (
    <>
      {/* Top pillars band */}
      <section className="border-t border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm text-muted-foreground md:text-base">
              مقومات وطنية تجعل من المملكة المغربية الأكثر أمانًا وقوة في المنطقة.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-border bg-background/70 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-black text-foreground">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AGS Role band */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr]">
            {/* Logo card */}
            <div className="relative mx-auto lg:mx-0">
              <div className="flex h-64 w-64 flex-col items-center justify-center gap-5 rounded-3xl border border-border bg-card shadow-lg">
                <Logo className="h-28 w-28" />
                <div className="text-center">
                  <div className="font-display text-2xl font-black tracking-wide text-foreground">
                    AG<span className="text-primary">MA</span>IS
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                    SMART · INDUSTRIAL
                  </div>
                </div>
              </div>

              {/* Floating growth card */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary p-4 text-primary-foreground shadow-lg">
                <TrendingUp className="mb-2 h-5 w-5" />
                <div className="font-mono text-xs font-bold">+15%</div>
                <div className="text-[10px] opacity-80 leading-tight">
                  النمو السنوي
                  <br />
                  المستهدف
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-3 py-1 text-[11px] font-semibold text-foreground">
                دور أجماس في تحقيق الرؤية
              </div>

              <h2 className="font-display text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
                نحوّل الرؤية الطموحة إلى <span className="text-primary">واقع صناعي تشغيلي</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                نعمل في أجماس كجسر استراتيجي يربط بين الممكّنات الوطنية والحلول التنفيذية لضمان نجاح كل مشروع صناعي.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-3 rounded-xl border border-border/60 bg-card/60 p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{f.title}</div>
                      <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                        {f.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="group flex items-center gap-2 rounded-xl bg-foreground px-5 py-3.5 text-sm font-bold text-background transition-colors hover:bg-foreground/90">
                  <span>ابدأ مشروعك الصناعي الآن</span>
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                  انضم كخبير أو مورد
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
