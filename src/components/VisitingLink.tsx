'use client'

import { Cursor } from '@/components/ui/Cursor'
import { Loader } from '@/components/ui/Loader'
import { useLoader } from '@/hooks/useLoader'
import { ParallaxSection } from '@/components/ui/ParallaxSection'

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
    <div className="min-h-screen">

      <Cursor />
      <Loader loaded={loaded} />
      <Navbar />

      <main>

        <HeroSection />

        <ParallaxSection>
          <CTASection />
        </ParallaxSection>

        <ParallaxSection>
          <DemoSection />
        </ParallaxSection>

        <ParallaxSection>
          <FeaturesSection />
        </ParallaxSection>

        <ParallaxSection>
          <HowItWorksSection />
        </ParallaxSection>

        <ParallaxSection>
          <BenefitsSection />
        </ParallaxSection>

        <ParallaxSection>
          <TestimonialsSection />
        </ParallaxSection>

        <ParallaxSection>
          <PricingSection />
        </ParallaxSection>

      </main>

      <Footer />

    </div>
  )
}