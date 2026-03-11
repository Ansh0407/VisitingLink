'use client'

import { useCardTilt } from '@/hooks/useCardTilt'
import { QR_PATTERN } from '@/data'

export function DigitalCard() {
  const { sceneRef, cardRef } = useCardTilt()

  return (
    <div className="card-scene" ref={sceneRef}>
      <div className="card-3d card-float" ref={cardRef}>
        <div className="digital-card">
          {/* Top row: chip + QR */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="card-chip">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="chip-cell" />
              ))}
            </div>
            <div className="card-qr">
              {QR_PATTERN.map((v, i) => (
                <div
                  key={i}
                  className="qr-cell"
                  style={{ background: v ? '#1a1a2e' : 'transparent' }}
                />
              ))}
            </div>
          </div>

          {/* Name row */}
          <div className="card-name-row">
            <div>
              <div className="card-name">Rahul Verma</div>
              <div className="card-title-text">UI/UX Designer · Bengaluru</div>
            </div>
          </div>

          {/* Bottom row: link + social icons */}
          <div className="card-bottom">
            <div className="card-link">visitinglink.io/rahul</div>
            <div className="card-icons">
              {['in', '𝕏', '@'].map(icon => (
                <div
                  key={icon}
                  className="card-icon-circle"
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.6rem', fontWeight: 700 }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
