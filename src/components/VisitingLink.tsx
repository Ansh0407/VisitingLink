'use client'

import { Cursor } from '@/components/ui/Cursor'
import { Loader } from '@/components/ui/Loader'
import { useLoader } from '@/hooks/useLoader'
import { ParallaxSection } from '@/components/ui/ParallaxSection'
import BuilderSection from '@/components/ui/BuilderSection'
import SmoothScroll from '@/components/ui/SmoothScroll'

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
    <SmoothScroll>
    <div className="min-h-screen bg-[#05060B] overflow-x-hidden">

      <Cursor />
      <Loader loaded={loaded} />
      <Navbar />

      <main className="relative">

        <HeroSection />

        <ParallaxSection>
          <CTASection />
        </ParallaxSection>

        <ParallaxSection>
          <BuilderSection />
        </ParallaxSection>

        {/* <ParallaxSection>
          <DemoSection />
        </ParallaxSection> */}

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
    </SmoothScroll>
  )
}