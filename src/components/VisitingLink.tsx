'use client'

import { Cursor } from '@/components/ui/Cursor'
import { Loader } from '@/components/ui/Loader'
import { useLoader } from '@/hooks/useLoader'
import {
  Navbar,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  DemoSection,
  BenefitsSection,
  TestimonialsSection,
  PricingSection,
  CTASection,
  Footer,
} from '@/components/sections'

export default function VisitingLink() {
  const loaded = useLoader()

  return (
    <div style={{ minHeight: '100vh' }}>
      <Cursor />
      <Loader loaded={loaded} />
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
