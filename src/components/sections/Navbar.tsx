'use client'

import { useScrolled } from '@/hooks/useScrolled'
import { NAV_LINKS } from '@/data'

export function Navbar() {
  const scrolled = useScrolled()

  return (
    <nav className={`main-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">VisitingLink</div>

      <ul className="nav-links">
        {NAV_LINKS.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} data-hover>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-cta" data-hover>
        Create Your Card
      </button>
    </nav>
  )
}
