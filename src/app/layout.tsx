import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VisitingLink — Your Digital Visiting Card',
  description: 'Network smarter with a digital card that lives online, updates instantly, and makes a lasting impression.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
