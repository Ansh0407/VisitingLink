'use client'

import { motion } from 'framer-motion'
import NPCCard from '@/components/ui/NPCCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DEMO_FEATURES } from '@/data'

export function DemoSection() {
  return (
    <section id="demo">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader
          label="✦ Live Preview"
          title={<>See it in <span className="grad-text">action</span></>}
        />

        <div
          className="demo-inner"
          style={{
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: '420px 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <NPCCard />
          </motion.div>

          {/* Feature list */}
          <motion.div
            className="demo-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              A beautifully designed card that works on every device, in every country, for every profession.
            </p>

            <div className="demo-feature-list">
              {DEMO_FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="demo-feat"
                  data-hover
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="demo-feat-icon">{feature.icon}</div>

                  <div>
                    <div className="demo-feat-title">{feature.title}</div>
                    <div className="demo-feat-desc">{feature.desc}</div>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}