'use client'

import { useState } from 'react'
import { useScrolled } from '@/hooks/useScrolled'
import { NAV_LINKS } from '@/data'

export function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/50 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-lg font-semibold tracking-tight">
          VisitingLink
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">

          {NAV_LINKS.map(link => (
            <li key={link} className="relative group">

              <a
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="opacity-80 hover:opacity-100 transition"
              >
                {link}
              </a>

              {/* Apple-style underline */}
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />

            </li>
          ))}

        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
          Create Your Card
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
        >

          <span
            className={`block h-[2px] w-full bg-white transition-all ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />

          <span
            className={`block h-[2px] w-full bg-white transition-all ${
              open ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`block h-[2px] w-full bg-white transition-all ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />

        </button>

      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute left-0 w-full transition-all duration-300 ${
          open
            ? 'top-[72px] opacity-100'
            : 'top-[60px] opacity-0 pointer-events-none'
        }`}
      >

        <div className="mx-4 rounded-2xl backdrop-blur-2xl bg-black/70 border border-white/10 p-6 flex flex-col gap-6">

          <ul className="flex flex-col gap-6 text-lg font-medium">

            {NAV_LINKS.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  onClick={closeMenu}
                  className="opacity-80 hover:opacity-100 transition"
                >
                  {link}
                </a>
              </li>
            ))}

          </ul>

          <button
            onClick={closeMenu}
            className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold"
          >
            Create Your Card
          </button>

        </div>

      </div>

    </nav>
  )
}