export interface Feature {
  icon: string
  name: string
  desc: string
}

export interface Testimonial {
  stars: number
  quote: string
  name: string
  role: string
  color: string
  initials: string
}

export interface PlanFeature {
  text: string
  ok: boolean
}

export interface Plan {
  plan: string
  amount: string
  per: string
  features: PlanFeature[]
  btn: string
  btnStyle: 'outline' | 'filled'
  featured: boolean
}

export interface FooterColumn {
  title: string
  links: string[]
}

export interface HowStep {
  num: string
  icon: string
  title: string
  desc: string
}

export interface Benefit {
  icon: string
  title: string
  desc: string
}

export interface ComparisonRow {
  feat: string
  paper: string
  digital: string
}
