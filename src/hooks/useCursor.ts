'use client'

import { useState, useEffect, useRef } from 'react'

export function useCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 })
  const [isHover, setIsHover] = useState(false)

  const ringRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  // Track mouse position + lerp ring
  useEffect(() => {
    let dx = -100, dy = -100

    const onMove = (e: MouseEvent) => {
      dx = e.clientX
      dy = e.clientY
      setCursorPos({ x: dx, y: dy })
    }

    const lerp = () => {
      ringRef.current.x += (dx - ringRef.current.x) * 0.12
      ringRef.current.y += (dy - ringRef.current.y) * 0.12
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y })
      rafRef.current = requestAnimationFrame(lerp)
    }

    rafRef.current = requestAnimationFrame(lerp)
    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Detect hover on interactive elements
  useEffect(() => {
    const onEnter = () => setIsHover(true)
    const onLeave = () => setIsHover(false)
    const els = document.querySelectorAll('button, a, [data-hover]')

    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      els.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  })

  return { cursorPos, ringPos, isHover }
}
