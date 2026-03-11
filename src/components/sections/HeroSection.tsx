'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { HERO_STATS } from '@/data'
import Spline from '@splinetool/react-spline'

export function HeroSection() {

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section
      id="hero"
      className="relative pt-5 pb-10 overflow-hidden"
    >

      {/* Background orbs */}
      <div
        className="absolute blur-3xl opacity-60"
        style={{
          width: 600,
          height: 600,
          top: -200,
          left: -150,
          background:
            'radial-gradient(circle, rgba(124,111,255,0.18), transparent 65%)',
        }}
      />

      <div
        className="absolute blur-3xl opacity-50"
        style={{
          width: 400,
          height: 400,
          top: 100,
          right: -100,
          background:
            'radial-gradient(circle, rgba(0,229,195,0.12), transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div
          className="text-center lg:text-left"
          style={{ y: heroY }}
        >

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            Now with NFC Card Sharing
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            Your Digital <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Visiting Card.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Network smarter with a digital card that lives online, updates
            instantly, and makes a lasting impression — no paper, no limits.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:opacity-90 transition">
              ✦ Create Your Card
            </button>

            <button className="px-7 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
              ▶ Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            {HERO_STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="w-full max-w-[520px] h-[360px] sm:h-[400px] lg:h-[520px] relative overflow-hidden rounded-xl">

            {/* Move scene up so watermark goes outside frame */}
            <div className="absolute inset-0 w-full h-[120%] -top-16">
              <Spline
                scene="https://prod.spline.design/nUe920k0Pqdc4tr2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Soft fade instead of hard block */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-black" />

          </div>

        </motion.div>

      </div>

    </section>
  )
}