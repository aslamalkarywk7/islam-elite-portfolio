import { SiteHeader } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { StatsSection } from "@/components/site/stats"
import { JourneySection } from "@/components/site/journey"
import { VisionSection } from "@/components/site/vision"
import { MissionSection } from "@/components/site/mission"
import { SectorsSection } from "@/components/site/sectors"
import { PartnersSection } from "@/components/site/partners"
import { FaqSection } from "@/components/site/faq"
import { CtaSection } from "@/components/site/cta"
import { SiteFooter } from "@/components/site/footer"
import { WhatsappFab } from "@/components/site/whatsapp-fab"

export default function IndustrialPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <StatsSection />
      <JourneySection />
      <VisionSection />
      <MissionSection />
      <SectorsSection />
      <PartnersSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
      <WhatsappFab />
    </main>
  )
}
