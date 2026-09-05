import { Sidebar } from "@/components/dashboard/sidebar"
import { Topbar } from "@/components/dashboard/topbar"
import type { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      {/* Ambient luxe lighting */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 500px at 85% -10%, oklch(0.78 0.11 86 / 0.10) 0%, transparent 60%), radial-gradient(700px 500px at -10% 110%, oklch(0.78 0.11 86 / 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          <main className="px-6 lg:px-10 py-8">{children}</main>
        </div>
      </div>
    </div>
  )
}
