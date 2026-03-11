'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeUp, stagger, VIEWPORT } from '@/lib/animations'
import { TESTIMONIALS } from '@/data'

export function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ textAlign: 'center' }}>
      <SectionHeader
        label="✦ Testimonials"
        title={<>Loved by <span className="grad-text">professionals</span></>}
        subtitle="Join thousands of smart networkers who made the switch."
        centered
      />

      <motion.div
        className="testi-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {TESTIMONIALS.map(testimonial => (
          <motion.div
            key={testimonial.name}
            className="testi-card"
            variants={fadeUp}
            data-hover
          >
            <div className="testi-stars">{'★'.repeat(testimonial.stars)}</div>
            <p className="testi-quote">"{testimonial.quote}"</p>
            <div className="testi-author">
              <div
                className="testi-avatar"
                style={{ background: `${testimonial.color}33`, color: testimonial.color }}
              >
                {testimonial.initials}
              </div>
              <div>
                <div className="testi-name">{testimonial.name}</div>
                <div className="testi-role">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
