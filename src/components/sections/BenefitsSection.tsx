'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BENEFITS, COMPARISON_ROWS } from '@/data'

export function BenefitsSection() {
  return (
    <section id="benefits">
      <div className="benefits-inner" style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Left: benefit list */}
        <motion.div
          className="benefits-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader
            label="✦ Why Digital"
            title={<>Paper cards are <span className="grad-text">so last decade</span></>}
            subtitle="The world moved digital. Your business card should too."
          />

          <div className="benefits-list">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="benefit-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="benefit-icon-sm">{benefit.icon}</div>
                <div>
                  <div className="benefit-text-s">{benefit.title}</div>
                  <div className="benefit-sub-s">{benefit.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: comparison table */}
        <motion.div
          className="benefits-visual"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="comp-table">
            <div className="comp-row header">
              <span>Feature</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>Paper</span>
              <span style={{ color: 'var(--accent2)' }}>VisitingLink</span>
            </div>
            {COMPARISON_ROWS.map(({ feat, paper, digital }) => (
              <div
                key={feat}
                className="comp-row"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <span style={{ fontSize: '0.82rem' }}>{feat}</span>
                <span className="cross">{paper}</span>
                <span className="check highlight-col">{digital}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
