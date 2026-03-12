'use client'

import { ANALYTICS_BARS } from '@/data'

export function PhoneMockup() {
  return (
    <div className="demo-phone">
      <div className="phone-screen">
        {/* Notch */}
        <div className="phone-topbar">
          <div className="phone-notch" />
        </div>

        {/* Card preview */}
        <div className="phone-card-preview">
          <div className="phone-avatar">R</div>
          <div className="phone-name">Ansh Bhandari</div>
          <div className="phone-role">UI/UX Designer · Figma</div>
          <div className="phone-actions">
            <div className="phone-action-btn primary-btn">💾 Save Contact</div>
            <div className="phone-action-btn">📧 Email</div>
          </div>
        </div>

        {/* Social links */}
        <div className="phone-social-row">
          {[['in', 'LinkedIn'], ['𝕏', 'Twitter'], ['📷', 'Instagram']].map(([icon, label]) => (
            <div key={label} className="social-pill">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Analytics bars */}
        <div className="phone-analytics">
          <div className="analytics-label">Card Views — Last 12 days</div>
          <div className="analytics-bars">
            {ANALYTICS_BARS.map((h, i) => (
              <div
                key={i}
                className="a-bar"
                style={{ height: `${h}%`, opacity: 0.5 + h / 200 }}
              />
            ))}
          </div>
        </div>

        {/* Share row */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 14 }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: 8 }}>Share your card</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '7px 10px', fontSize: '0.62rem', color: 'var(--muted)' }}>
              visitinglink.io/ansh
            </div>
            <div style={{ background: 'linear-gradient(135deg,var(--accent1),#5b52e8)', borderRadius: 8, padding: '7px 12px', fontSize: '0.65rem', fontWeight: 600, color: '#fff' }}>
              Copy
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
