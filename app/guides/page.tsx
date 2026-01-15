import { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/Button'
import SectionLabel from '@/components/SectionLabel'
import { GUIDES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Counselling Guides | ADHD, Autism, Trauma & More',
  description:
    'Comprehensive guides on ADHD, autism, trauma, grief, and living with illness. Written by an MBACP-registered counsellor to help you understand and navigate these experiences.',
  openGraph: {
    title: 'Counselling Guides | ADHD, Autism, Trauma & More | NW Counselling',
    description:
      'Comprehensive guides on ADHD, autism, trauma, grief, and living with illness. Written by an MBACP-registered counsellor.',
    images: ['/images/og-guides.jpg'],
  },
}

export default function GuidesPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="pt-32 pb-16 bg-soft-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Resources</SectionLabel>
          <h1
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            Guides & Resources
          </h1>
          <p className="text-lg text-muted-brown max-w-2xl leading-relaxed">
            These guides offer a starting point for understanding some of the issues 
            I work with most often. They&apos;re written to be accessible and practical—
            whether you&apos;re considering counselling or just want to learn more.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group bg-white/60 rounded-xl p-8 border border-sage-mist/30 hover:shadow-[var(--shadow-hover)] transition-all duration-300 flex flex-col"
              >
                <div className="flex-1">
                  <h2
                    className="text-2xl mb-3 group-hover:text-terracotta-clay transition-colors"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
                  >
                    {guide.title}
                  </h2>
                  <p className="text-muted-brown leading-relaxed mb-6">
                    {guide.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-brown/70">{guide.readingTime}</span>
                  <span className="text-terracotta-clay group-hover:translate-x-1 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-sage-mist/30">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            Want to explore this further?
          </h2>
          <p className="text-lg text-muted-brown mb-10 max-w-xl mx-auto">
            Reading can only take you so far. If you&apos;d like to talk through 
            any of these topics with support, I&apos;m here to help.
          </p>
          <Button href="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  )
}
