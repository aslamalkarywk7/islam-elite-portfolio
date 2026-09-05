"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, Sparkles } from "lucide-react"
import { useActions, type RegisterRole } from "./actions-context"
import { cn } from "@/lib/utils"

const roleLabels: Record<RegisterRole, { title: string; subtitle: string }> = {
  investor: { title: "تسجيل كمستثمر صناعي", subtitle: "ابدأ مشروعك الصناعي في المغرب" },
  expert: { title: "تسجيل كخبير", subtitle: "قدم استشاراتك الفنية للمصانع" },
  supplier: { title: "تسجيل كمورّد", subtitle: "انضم لشبكة الموردين المعتمدين" },
  supervisor: { title: "تسجيل كمشرف صناعي", subtitle: "أطّر وتابع المشاريع التصنيعية" },
  service: { title: "تسجيل كمقدم خدمات", subtitle: "اعرض خدماتك الصناعية لآلاف المستثمرين" },
  distributor: { title: "تسجيل كموزع دولي", subtitle: "اربط المنتج المغربي بالأسواق العالمية" },
  general: { title: "انضم إلى منصة أجماس", subtitle: "سجل معلوماتك للانضمام إلى المنصة" },
}

const moroccanCities = [
  "الدار البيضاء",
  "الرباط",
  "طنجة",
  "فاس",
  "مراكش",
  "أكادير",
  "مكناس",
  "وجدة",
  "القنيطرة",
  "تطوان",
  "الجديدة",
  "المحمدية",
  "آسفي",
  "بني ملال",
  "الناظور",
  "العيون",
  "أخرى",
]

export function RegisterDialog() {
  const { registerOpen, closeRegister, registerRole } = useActions()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<{ referenceId: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const meta = roleLabels[registerRole]

  const handleClose = () => {
    closeRegister()
    setTimeout(() => {
      setSuccess(null)
      setError(null)
    }, 300)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const payload = {
      role: registerRole,
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      projectDescription: formData.get("projectDescription"),
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!data.success) {
        setError(data.error || "حدث خطأ")
      } else {
        setSuccess({ referenceId: data.referenceId })
      }
    } catch {
      setError("تعذر الاتصال بالخادم")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={registerOpen} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto bg-card" dir="rtl">
        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <DialogTitle className="font-display text-2xl font-black text-foreground">
              تم التسجيل بنجاح
            </DialogTitle>
            <p className="mt-3 text-sm text-muted-foreground">
              شكرًا لانضمامك إلى أجماس. سيتواصل معك فريقنا خلال 24 ساعة.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs text-primary">
              رقم المرجع: {success.referenceId}
            </div>
            <div className="mt-6">
              <Button onClick={handleClose} className="bg-primary text-primary-foreground hover:bg-primary/90">
                إغلاق
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3 w-3" />
                تسجيل سريع ومجاني
              </div>
              <DialogTitle className="font-display text-2xl font-black text-foreground">
                {meta.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">{meta.subtitle}</DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">الاسم الكامل *</Label>
                <Input id="fullName" name="fullName" required placeholder="محمد العلوي" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني *</Label>
                  <Input id="email" name="email" type="email" required placeholder="name@example.com" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+212 6 00 00 00 00" dir="ltr" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">المدينة</Label>
                <select
                  id="city"
                  name="city"
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="">اختر المدينة</option>
                  {moroccanCities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription">
                  {registerRole === "investor" ? "وصف مختصر لمشروعك" : "ملاحظات إضافية"}
                </Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={3}
                  placeholder={
                    registerRole === "investor"
                      ? "نوع الصناعة، حجم الاستثمار المقدّر، الموقع المفضل..."
                      : "أي تفاصيل تودّ مشاركتها"
                  }
                />
              </div>

              {error && (
                <div className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button type="button" variant="outline" onClick={handleClose} disabled={submitting}>
                  إلغاء
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className={cn("bg-primary text-primary-foreground hover:bg-primary/90")}
                >
                  {submitting && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                  {submitting ? "جاري الإرسال..." : "إرسال التسجيل"}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
