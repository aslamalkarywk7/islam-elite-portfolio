"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react"
import { useActions } from "./actions-context"

export function ContactDialog() {
  const { contactOpen, closeContact, contactSubject } = useActions()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<{ ticketId: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => {
    closeContact()
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
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!data.success) {
        setError(data.error || "حدث خطأ")
      } else {
        setSuccess({ ticketId: data.ticketId })
      }
    } catch {
      setError("تعذر الاتصال بالخادم")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={contactOpen} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto bg-card" dir="rtl">
        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <DialogTitle className="font-display text-2xl font-black text-foreground">
              تم إرسال رسالتك
            </DialogTitle>
            <p className="mt-3 text-sm text-muted-foreground">
              سنرد عليك في أقرب وقت ممكن على البريد المسجّل.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs text-primary">
              رقم التذكرة: {success.ticketId}
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
                <MessageCircle className="h-3 w-3" />
                تواصل مع فريقنا
              </div>
              <DialogTitle className="font-display text-2xl font-black text-foreground">
                لدينا إجابة على سؤالك
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                املأ النموذج وسيتواصل معك خبير متخصّص في أقرب وقت.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="c-name">الاسم الكامل *</Label>
                <Input id="c-name" name="fullName" required placeholder="محمد العلوي" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="c-email">البريد الإلكتروني *</Label>
                  <Input id="c-email" name="email" type="email" required placeholder="name@example.com" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-phone">رقم الهاتف</Label>
                  <Input id="c-phone" name="phone" type="tel" placeholder="+212 6 00 00 00 00" dir="ltr" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="c-subject">الموضوع</Label>
                <Input id="c-subject" name="subject" defaultValue={contactSubject} placeholder="موضوع الرسالة" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="c-message">الرسالة *</Label>
                <Textarea id="c-message" name="message" required rows={4} placeholder="اكتب رسالتك هنا..." />
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
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {submitting && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                  {submitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
