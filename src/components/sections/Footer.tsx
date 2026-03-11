'use client'

import { FOOTER_COLUMNS, SOCIAL_ICONS } from '@/data'

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">VisitingLink</div>
          <div className="footer-tagline">
            The smartest way to share your professional identity in the digital age.
          </div>
          <div className="footer-socials">
            {SOCIAL_ICONS.map(icon => (
              <div key={icon} className="social-icon" data-hover>{icon}</div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map(col => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(link => (
                <li key={link}>
                  <a href="#" data-hover>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 VisitingLink. All rights reserved.</div>
        <div className="footer-legal">
          <a href="#" data-hover>Privacy</a>
          <a href="#" data-hover>Terms</a>
          <a href="#" data-hover>Cookies</a>
        </div>
      </div>
    </footer>
  )
}
