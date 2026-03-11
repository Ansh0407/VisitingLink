'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeUp, stagger, VIEWPORT } from '@/lib/animations'
import { FEATURES } from '@/data'

export function FeaturesSection() {
  return (
    <section id="features">
      <SectionHeader
        label="✦ Features"
        title={<>Everything you need to<br /><span className="grad-text">network brilliantly</span></>}
        subtitle="A complete toolkit for modern professionals to share, connect, and grow their network digitally."
        centered
      />

      <motion.div
        className="features-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {FEATURES.map(feature => (
          <motion.div
            key={feature.name}
            className="feat-card"
            variants={fadeUp}
            data-hover
          >
            <div className="feat-icon">{feature.icon}</div>
            <div className="feat-name">{feature.name}</div>
            <div className="feat-desc">{feature.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
