'use client'

import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section id="cta">
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="orb"
          style={{
            width: 500, height: 500, top: -200,
            left: '50%', transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(124,111,255,0.18), transparent 65%)',
            position: 'absolute',
          }}
        />

        <div className="section-label" style={{ margin: '0 auto 20px' }}>
          ✦ Get Started
        </div>

        <h2 className="cta-h2">
          Ready to make your<br />
          <span className="grad-text">first impression count?</span>
        </h2>

        <p className="cta-sub">
          Create your free digital visiting card in under 2 minutes. No credit card required.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary" data-hover>✦ Create Your Card Free</button>
          <button className="btn-secondary" data-hover>See Pricing →</button>
        </div>
      </motion.div>
    </section>
  )
}
