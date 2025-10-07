import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VisionSection } from "@/components/vision-section"
import { SolutionsSection } from "@/components/solutions-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { FindUsSection } from "@/components/find-us-section"
import { SocialsSection } from "@/components/socials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <SolutionsSection />
        <TeamSection />
        <ContactSection />
        <FindUsSection />
        <SocialsSection />
      </main>
      <Footer />
    </div>
  )
}
