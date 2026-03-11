'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { HOW_STEPS } from '@/data'

export function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <SectionHeader
        label="✦ Process"
        title={<>Up and running in<br /><span className="grad-text">3 simple steps</span></>}
        subtitle="Getting your digital card ready takes less than 2 minutes."
      />

      <div className="how-inner">
        <div className="how-line" />
        <div className="how-line2" />

        {HOW_STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            className="how-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="step-num">{step.num}</div>
            <div className="step-icon-wrap">{step.icon}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
