'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, VIEWPORT } from '@/lib/animations'

interface SectionHeaderProps {
  label: string
  title: React.ReactNode
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      style={centered ? { textAlign: 'center' } : {}}
    >
      <motion.div className="section-label" variants={fadeUp}>
        {label}
      </motion.div>
      <motion.h2 className="section-title" variants={fadeUp}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="section-sub"
          variants={fadeUp}
          style={centered ? { margin: '0 auto' } : {}}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
