import Image from "next/image"
import { Globe2, TrendingUp, Users, Factory, ArrowLeft } from "lucide-react"

type Stat = {
  icon: React.ReactNode
  value: string
  unit: string
  label: string
  description: string
  image: string
  accent?: boolean
}

const stats: Stat[] = [
  {
    icon: <Globe2 className="h-5 w-5" />,
    value: "36",
    unit: "+",
    label: "مدينة صناعية",
    description: "مدينة صناعية مندمجة في جميع جهات المملكة",
    image: "/cities/tanger-med.jpg",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    value: "1.2",
    unit: "T",
    label: "درهم",
    description: "إجمالي الاستثمارات الصناعية المستهدفة",
    image: "/cities/casablanca.jpg",
  },
  {
    icon: <Users className="h-5 w-5" />,
    value: "1.2",
    unit: "M",
    label: "عامل",
    description: "فرص عمل مباشرة في القطاع الصناعي",
    image: "/cities/kenitra.jpg",
  },
  {
    icon: <Factory className="h-5 w-5" />,
    value: "12,500",
    unit: "+",
    label: "مصنع",
    description: "مصنع ناشط في جميع القطاعات الصناعية",
    image: "/cities/jorf-lasfar.jpg",
    accent: true,
  },
]

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-card/20 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            إنجازاتنا في أرقام
          </div>
          <h2 className="font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            قوة الصناعة <span className="text-primary">المغربية</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            اكتشف حجم القطاع الصناعي في المملكة من خلال الأرقام والإحصائيات
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-2xl border bg-card/70 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                s.accent ? "border-primary/60 ring-1 ring-primary/40" : "border-border hover:border-primary/30"
              }`}
            >
              {/* Background image */}
              <div className="absolute inset-0 -z-10">
                <Image src={s.image || "/placeholder.svg"} alt="" fill className="object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/60" />
              </div>

              <div className="relative flex flex-col gap-6 p-6">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      s.accent
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary ring-1 ring-primary/30"
                    }`}
                  >
                    {s.icon}
                  </div>
                  {s.accent && (
                    <button className="flex items-center gap-1 text-xs font-semibold text-primary">
                      اكتشف التفاصيل
                      <ArrowLeft className="h-3 w-3" />
                    </button>
                  )}
                </div>

                {/* Value */}
                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-black text-foreground md:text-6xl">
                    {s.value}
                  </span>
                  <span className="mb-2 font-display text-xl font-bold text-primary">{s.unit}</span>
                </div>

                {/* Label */}
                <div>
                  <div className="text-lg font-bold text-foreground">{s.label}</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.description}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          * الإحصائيات وفقًا لأحدث البيانات الصادرة عن وزارة الصناعة والتجارة المغربية
        </p>
      </div>
    </section>
  )
}
