export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  focusAreas: string[]
  sessionPreference: string
  additionalNotes?: string
}

export interface Guide {
  slug: string
  title: string
  description: string
  readingTime: string
  content?: string
  lastUpdated?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface NavLink {
  href: string
  label: string
}
