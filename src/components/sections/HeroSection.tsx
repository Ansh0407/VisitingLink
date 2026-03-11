'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { DigitalCard } from '@/components/ui/DigitalCard'
import { fadeUp } from '@/lib/animations'
import { HERO_STATS } from '@/data'
import Spline from '@splinetool/react-spline'

export function HeroSection() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section id="hero">
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: 600, height: 600, top: -200, left: -150,
          background: 'radial-gradient(circle, rgba(124,111,255,0.18), transparent 65%)',
        }}
      />
      <div
        className="orb"
        style={{
          width: 400, height: 400, top: 100, right: -100,
          background: 'radial-gradient(circle, rgba(0,229,195,0.12), transparent 65%)',
        }}
      />

      {/* Left: text content */}
      <motion.div className="hero-left" style={{ y: heroY }}>
        <motion.div className="hero-badge" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="badge-dot" />
          Now with NFC Card Sharing
        </motion.div>

        <motion.h1 className="hero-h1" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
          Your Digital<br />
          <span className="grad-text">Visiting Card.</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
          Network smarter with a digital card that lives online, updates instantly,
          and makes a lasting impression — no paper, no limits.
        </motion.p>

        <motion.div className="hero-buttons" variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
          <button className="btn-primary" data-hover>✦ Create Your Card</button>
          <button className="btn-secondary" data-hover>▶ Watch Demo</button>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="visible" custom={0.4}>
          {HERO_STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="stat-val grad-text">{value}</div>
              <div className="stat-lbl">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: 3D card */}
      {<motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
>
  <div
    style={{
      width: "100%",
      height: "520px",
      position: "relative",
      overflow: "hidden",
      borderRadius: "20px"
    }}
  >
    <Spline
      scene="https://prod.spline.design/nUe920k0Pqdc4tr2/scene.splinecode"
      style={{
        width: "100%",
        height: "100%"
      }}
    />
  </div>
</motion.div> }
    </section>
  )
}
