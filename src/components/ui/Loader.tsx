'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  loaded: boolean
}

export function Loader({ loaded }: LoaderProps) {
  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 8888,
            background: '#04040a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div className="loader-logo">VisitingLink</div>
          <div className="loader-bar">
            <div className="loader-bar-fill" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
