'use client'

import { motion } from "framer-motion"

export function CTASection() {

  const scrollToBuilder = () => {
    const section = document.getElementById("builder")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative bg-[#05060B] py-32 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl p-14 text-center shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
      >

        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent" />

        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300 mb-6">
          ✦ Get Started
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
          Ready to make your <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            first impression count?
          </span>
        </h2>

        <p className="mt-6 text-white/60 max-w-md mx-auto">
          Create your first digital visiting card in under 2 minutes.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {/* CREATE CARD BUTTON */}
          <button
            onClick={scrollToBuilder}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 font-semibold text-white transition hover:scale-[1.04]"
          >
            <span className="relative z-10">✦ Create Your Card</span>

            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 blur-xl transition group-hover:opacity-40" />
          </button>

          <button className="rounded-full border border-white/20 px-8 py-3 text-white/70 transition hover:border-white/40 hover:text-white">
            See Pricing →
          </button>

        </div>

      </motion.div>
    </section>
  )
}