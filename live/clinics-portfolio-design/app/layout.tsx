import type { Metadata, Viewport } from "next"
import { Tajawal, Playfair_Display } from "next/font/google"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "عيادات النخبة الطبية | Elite Medical Clinics",
  description:
    "رعاية صحية متميزة بأعلى معايير الجودة والفخامة. نقدم خدمات طبية شاملة مع فريق من أمهر الأطباء والمتخصصين.",
  keywords: "عيادة طبية, رعاية صحية, أطباء متخصصين, خدمات طبية, عيادة فاخرة",
}

export const viewport: Viewport = {
  themeColor: "#0A5F7A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${playfair.variable} bg-background`}>
      <body>{children}</body>
    </html>
  )
}
