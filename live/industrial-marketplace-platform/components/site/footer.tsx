import { Facebook, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "./logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Logo className="h-12 w-12 shrink-0" />
              <div>
                <div className="font-display text-lg font-black text-foreground">أجماس</div>
                <div className="text-xs text-muted-foreground">منصة الاستثمار الصناعي الذكية</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              منصة رقمية متكاملة تربط المستثمرين بالخبراء والموردين لتأسيس وتشغيل المشاريع الصناعية في المملكة المغربية.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="المنصة"
            items={["الرئيسية", "القطاعات الصناعية", "المدن الصناعية", "الفرص الاستثمارية", "المنصة الذكية"]}
          />

          <FooterColumn
            title="الخدمات"
            items={["تسجيل كمستثمر", "انضم كخبير", "انضم كمورّد", "طلب تمويل", "الاستشارة الصناعية"]}
          />

          <div>
            <div className="mb-5 font-display text-base font-bold text-foreground">تواصل معنا</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>شارع محمد الخامس، الدار البيضاء، المملكة المغربية</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:contact@agmais.ma" className="hover:text-primary" dir="ltr">
                  contact@agmais.ma
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+212520000000" className="hover:text-primary" dir="ltr">
                  +212 5 20 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 أجماس. جميع الحقوق محفوظة — المملكة المغربية.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-primary">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-primary">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-primary">
              ملفات تعريف الارتباط
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="mb-5 font-display text-base font-bold text-foreground">{title}</div>
      <ul className="space-y-2.5 text-sm">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
