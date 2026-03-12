'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ParallaxSection({ children }: { children: React.ReactNode }) {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [150, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center will-change-transform"
    >
      <motion.div
        style={{ y, opacity, scale }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}