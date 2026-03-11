'use client'

import { useEffect, useRef } from 'react'

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max)
}

export function useCardTilt() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    const card = cardRef.current
    if (!scene || !card) return

    const onMove = (e: MouseEvent) => {
      const rect = scene.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      const rx = clamp(dy * -18, -18, 18)
      const ry = clamp(dx * 18, -18, 18)
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
    }

    const onLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }

    scene.addEventListener('mousemove', onMove)
    scene.addEventListener('mouseleave', onLeave)

    return () => {
      scene.removeEventListener('mousemove', onMove)
      scene.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return { sceneRef, cardRef }
}
