'use client'

import { useState, useEffect } from 'react'

export function useLoader(delay = 1800) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return loaded
}
