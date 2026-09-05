import Image from "next/image"

type VisionCard = {
  title: string
  role: string
  image: string
  quote: string
}

const cards: VisionCard[] = [
  {
    title: "جلالة الملك محمد السادس نصره الله",
    role: "ملك المملكة المغربية",
    image: "/vision/morocco-2035.jpg",
    quote:
      "الصناعة الوطنية هي رافعة أساسية لتنمية اقتصادنا وخلق فرص الشغل لشبابنا، وسنعمل على جعل المغرب منصة صناعية تنافسية ذات إشعاع قاري ودولي.",
  },
  {
    title: "ولي العهد الأمير مولاي الحسن",
    role: "ولي عهد المملكة المغربية",
    image: "/vision/new-development.jpg",
    quote:
      "طموحنا أن نجعل من المغرب نموذجًا رياديًا في الصناعة القارية، بتنافسية عالمية وإنتاج مستدام يعكس كفاءة أبناء شعبنا.",
  },
]

export function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-transparent px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="font-mono">MOROCCO 2035</span>
          </div>
          <h2 className="font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            السيادة الصناعية ورؤية{" "}
            <span className="text-primary">المملكة المغربية</span> الطموحة
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-1 text-xs font-semibold text-primary">{c.role}</div>
                <h3 className="font-display text-xl font-black text-foreground md:text-2xl">
                  {c.title}
                </h3>
                <div className="my-4 h-px bg-border" />
                <blockquote className="relative border-r-2 border-primary pr-4 text-sm italic leading-relaxed text-muted-foreground">
                  {c.quote}
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
