import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'NW Counselling | Online Therapy for Adults in the UK',
    template: '%s | NW Counselling',
  },
  description:
    'Warm, personal online counselling for adults across the UK. I help with anxiety, ADHD, autism, grief, and life\'s difficult transitions. Book a free consultation.',
  metadataBase: new URL('https://www.nwcounselling.co.uk'),
  openGraph: {
    title: 'NW Counselling | Online Therapy for Adults in the UK',
    description:
      'Warm, personal online counselling for adults across the UK. I help with anxiety, ADHD, autism, grief, and life\'s difficult transitions.',
    url: 'https://www.nwcounselling.co.uk',
    siteName: 'NW Counselling',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'NW Counselling - Online therapy for adults',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NW Counselling | Online Therapy for Adults in the UK',
    description:
      'Warm, personal online counselling for adults across the UK. I help with anxiety, ADHD, autism, grief, and life\'s difficult transitions.',
    images: ['/images/og-homepage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-soft-cream text-warm-charcoal min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
