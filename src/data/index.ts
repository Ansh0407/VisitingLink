import type {
  Feature,
  Testimonial,
  Plan,
  FooterColumn,
  HowStep,
  Benefit,
  ComparisonRow,
} from '@/types'

export const NAV_LINKS = ['Features', 'How It Works', 'Shop', 'Pricing'] as const

export const HERO_STATS = [
  { value: '50K+', label: 'Cards Created' },
  { value: '98%', label: 'Satisfaction' },
  { value: '2M+', label: 'Connections Made' },
]

export const QR_PATTERN = [1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0]

export const ANALYTICS_BARS = [30, 55, 45, 70, 40, 85, 65, 90, 50, 75, 60, 80]

export const FEATURES: Feature[] = [
  { icon: '📲', name: 'Share with QR Code', desc: 'Generate a smart QR code that links directly to your digital card. Works offline, no app needed.' },
  { icon: '💾', name: 'One Tap Contact Save', desc: 'Visitors save your contact in one tap — no typing, no manual entry, no friction.' },
  { icon: '🔗', name: 'Social Media Integration', desc: 'Connect all your social profiles in one place. LinkedIn, Twitter, Instagram and more.' },
  { icon: '🗂️', name: 'Portfolio Links', desc: 'Showcase your work, projects, and case studies right on your digital card.' },
  { icon: '📊', name: 'Analytics Dashboard', desc: 'See who viewed your card, when, and from where. Real-time insights on every connection.' },
  { icon: '⚡', name: 'Instant Updates', desc: 'Change your details anytime — your card updates everywhere instantly. No reprints, ever.' },
]

export const HOW_STEPS: HowStep[] = [
  { num: '01', icon: '👤', title: 'Create your profile', desc: 'Sign up and fill in your name, title, company, contact info, and a short bio. It takes under 2 minutes.' },
  { num: '02', icon: '🎨', title: 'Customize your card', desc: 'Choose a theme, upload your photo, add social links, portfolio URLs, and make it uniquely yours.' },
  { num: '03', icon: '🚀', title: 'Share instantly', desc: 'Share your link, QR code, or NFC tap with anyone, anywhere in the world — instantly.' },
]

export const DEMO_FEATURES = [
  { icon: '📱', title: 'Mobile-first design', desc: 'Looks perfect on every screen — phone, tablet, or desktop.' },
  { icon: '🌐', title: 'Shareable link', desc: 'Your unique URL like visitinglink.io/yourname works everywhere.' },
  { icon: '📈', title: 'Real-time analytics', desc: 'Track views, clicks, and saves with beautiful dashboards.' },
  { icon: '🔄', title: 'Live updates', desc: 'Change anything and it updates instantly everywhere.' },
]

export const BENEFITS: Benefit[] = [
  { icon: '♻️', title: 'Zero waste, infinite reach', desc: 'No paper, no printing costs — one card reaches the world.' },
  { icon: '⚡', title: 'Always up-to-date', desc: 'New number? New title? Update once, done everywhere.' },
  { icon: '🌍', title: 'Share across borders', desc: 'Email, WhatsApp, QR — sharing has no limits.' },
  { icon: '📊', title: 'Measurable networking', desc: 'See who opened your card and when. Paper cannot do that.' },
]

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feat: 'Instant sharing', paper: '✗', digital: '✓' },
  { feat: 'Real-time updates', paper: '✗', digital: '✓' },
  { feat: 'Analytics', paper: '✗', digital: '✓' },
  { feat: 'Eco-friendly', paper: '✗', digital: '✓' },
  { feat: 'Works globally', paper: '✗', digital: '✓' },
  { feat: 'Zero reprint cost', paper: '✗', digital: '✓' },
]

export const TESTIMONIALS: Testimonial[] = [
  { stars: 5, quote: 'VisitingLink completely changed how I network at conferences. People are genuinely impressed when I share my card with a QR code.', name: 'Arjun Mehta', role: 'Product Designer, Figma', color: '#7c6fff', initials: 'AM' },
  { stars: 5, quote: 'The analytics feature is insane. I can see exactly who viewed my card after a meeting — it helps me follow up at the right time.', name: 'Priya Sharma', role: 'Founder, NexaLabs', color: '#00e5c3', initials: 'PS' },
  { stars: 5, quote: 'I used to carry a box of paper cards everywhere. Now I just show my phone screen. Cleaner, smarter, way more effective.', name: 'James Okafor', role: 'Sales Director, Salesforce', color: '#ff6b9d', initials: 'JO' },
]

export const PLANS: Plan[] = [
  {
    plan: 'Free',
    amount: '₹0',
    per: 'Forever free',
    features: [
      { text: '1 Digital Card', ok: true },
      { text: 'QR Code Sharing', ok: true },
      { text: 'Social Links (3)', ok: true },
      { text: 'Analytics Dashboard', ok: false },
      { text: 'Custom Domain', ok: false },
      { text: 'Priority Support', ok: false },
    ],
    btn: 'Get Started Free',
    btnStyle: 'outline',
    featured: false,
  },
  {
    plan: 'Premium',
    amount: '₹299',
    per: 'per month',
    features: [
      { text: 'Unlimited Cards', ok: true },
      { text: 'QR Code + NFC Sharing', ok: true },
      { text: 'Unlimited Social Links', ok: true },
      { text: 'Analytics Dashboard', ok: true },
      { text: 'Custom Domain', ok: true },
      { text: 'Priority Support', ok: true },
    ],
    btn: 'Start Free Trial',
    btnStyle: 'filled',
    featured: true,
  },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: 'Product', links: ['Features', 'How It Works', 'Pricing', 'Changelog', 'Roadmap'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'] },
]

export const SOCIAL_ICONS = ['𝕏', 'in', '📷', '▶'] as const
