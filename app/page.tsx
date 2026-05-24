"use client"

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import { CompactModeProvider } from "@/components/providers/compact-mode-provider"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { PublicationSection } from "@/components/sections/publication-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { AwardsSection } from "@/components/sections/awards-section"
import { EducationSection } from "@/components/sections/education-section"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <CompactModeProvider>
    <SmoothScrollProvider>
      <AnimatedBackground />
      <Navigation />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationSection />
        <SkillsSection />
        <CertificationsSection />
        <AwardsSection />
        <EducationSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      <Footer />
    </SmoothScrollProvider>
    </CompactModeProvider>
  )
}
