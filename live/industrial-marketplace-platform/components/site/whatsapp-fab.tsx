import { MessageCircle } from "lucide-react"

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/212520000000"
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  )
}
