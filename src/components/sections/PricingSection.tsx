'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeUp, stagger, VIEWPORT } from '@/lib/animations'
import { PLANS } from '@/data'
import type { Plan } from '@/types'

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      className={`price-card${plan.featured ? ' featured' : ''}`}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      data-hover
    >
      {plan.featured && <div className="popular-badge">Most Popular</div>}

      <div className="price-plan">{plan.plan}</div>
      <div
        className="price-amount"
        style={plan.featured ? {
          background: 'linear-gradient(135deg,var(--accent1),var(--accent2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        } : {}}
      >
        {plan.amount}
      </div>
      <div className="price-per">{plan.per}</div>
      <div className="price-divider" />

      <ul className="price-features">
        {plan.features.map(feature => (
          <li key={feature.text} className="price-feat-item">
            <span className={feature.ok ? 'pf-check' : 'pf-no'}>
              {feature.ok ? '✓' : '✗'}
            </span>
            <span style={{ color: feature.ok ? 'var(--text)' : 'var(--muted)' }}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button className={`price-btn ${plan.btnStyle}`} data-hover>
        {plan.btn}
      </button>
    </motion.div>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" style={{ textAlign: 'center' }}>
      <SectionHeader
        label="✦ Pricing"
        title={<>Simple, <span className="grad-text">transparent pricing</span></>}
        subtitle="Start free. Upgrade when you are ready to unlock the full power of digital networking."
        centered
      />

      <motion.div
        className="pricing-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {PLANS.map(plan => (
          <PricingCard key={plan.plan} plan={plan} />
        ))}
      </motion.div>
    </section>
  )
}
