import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Get in Touch',
  description:
    'Reach out to discuss online counselling. A free 20-minute conversation to see if we\'re a good fit. Sessions available across the UK.',
  openGraph: {
    title: 'Get in Touch | NW Counselling',
    description:
      'Reach out to discuss online counselling. A free 20-minute conversation to see if we\'re a good fit.',
    images: ['/images/og-contact.jpg'],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-soft-cream">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  )
}
