'use client'

import { useCursor } from '@/hooks/useCursor'

export function Cursor() {
  const { cursorPos, ringPos, isHover } = useCursor()

  return (
    <>
      <div
        id="cursor-dot"
        style={{
          position: 'fixed',
          left: cursorPos.x,
          top: cursorPos.y,
          width: isHover ? 14 : 8,
          height: isHover ? 14 : 8,
          background: isHover ? '#7c6fff' : '#00e5c3',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%,-50%)',
          transition: 'width 0.2s, height 0.2s, background 0.2s',
          mixBlendMode: 'screen',
        }}
      />
      <div
        id="cursor-ring"
        style={{
          position: 'fixed',
          left: ringPos.x,
          top: ringPos.y,
          width: isHover ? 52 : 36,
          height: isHover ? 52 : 36,
          border: `1.5px solid ${isHover ? 'rgba(124,111,255,0.9)' : 'rgba(124,111,255,0.6)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%,-50%)',
          transition: 'width 0.25s, height 0.25s, border-color 0.2s',
        }}
      />
    </>
  )
}
