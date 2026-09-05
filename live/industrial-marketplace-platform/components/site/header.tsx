"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"ar" | "fr" | "en">("ar")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    const html = document.documentElement
    if (!isDark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleLanguageChange = (lang: "ar" | "fr" | "en") => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    const html = document.documentElement
    html.setAttribute("lang", lang)
    html.dir = lang === "ar" ? "rtl" : "ltr"
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 md:px-8">
      {/* Logo pill */}
      <div
        className={cn(
          "flex items-center gap-3 rounded-full border border-primary/30 bg-card/80 px-4 py-2.5 backdrop-blur-xl transition-all",
          scrolled && "bg-card/95 shadow-lg shadow-primary/5",
        )}
      >
        <Logo className="h-10 w-10 shrink-0" />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-foreground">أجماس &mdash; الاستثمار الذكي</span>
          <span className="text-[11px] text-muted-foreground">منصة ذكية لرحلتك الصناعية في المملكة المغربية</span>
        </div>
      </div>

      {/* Controls pill */}
      <div
        className={cn(
          "flex items-center gap-1 rounded-full border border-primary/30 bg-card/80 px-2 py-2 backdrop-blur-xl transition-all",
          scrolled && "bg-card/95 shadow-lg shadow-primary/5",
        )}
      >
        <button
          onClick={toggleDarkMode}
          aria-label="تبديل الوضع"
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          title={isDark ? "تبديل إلى الوضع الفاتح" : "تبديل إلى الوضع الغامق"}
        >
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
        <div className="flex items-center overflow-hidden rounded-full bg-secondary/60 text-xs">
          <button
            onClick={() => handleLanguageChange("fr")}
            className={cn(
              "px-2.5 py-1 transition-colors",
              language === "fr"
                ? "bg-primary font-semibold text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Fr
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className={cn(
              "px-2.5 py-1 transition-colors",
              language === "en"
                ? "bg-primary font-semibold text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            En
          </button>
          <button
            onClick={() => handleLanguageChange("ar")}
            className={cn(
              "px-2.5 py-1 transition-colors",
              language === "ar"
                ? "bg-primary font-semibold text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            ع
          </button>
        </div>
        <button
          onClick={() => {
            const menu = document.getElementById("mobile-menu")
            if (menu) menu.classList.toggle("hidden")
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label="القائمة"
          title="فتح القائمة"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
