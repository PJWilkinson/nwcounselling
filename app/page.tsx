import Button from '@/components/Button'
import SectionLabel from '@/components/SectionLabel'
import GeometricIcon from '@/components/GeometricIcon'
import SchemaScript from '@/components/SchemaScript'
import { SITE_CONFIG, FAQ_ITEMS, GUIDES } from '@/lib/constants'
import { getLocalBusinessSchema, getServiceSchema, getFAQSchema } from '@/lib/schema'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const schemas = [getLocalBusinessSchema(), getServiceSchema(), getFAQSchema()]

  return (
    <div className="animate-fade-in">
      <SchemaScript schema={schemas} />
      {/* Hero Section */}
      <section className="pt-32 pb-8 lg:pb-12 bg-soft-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <SectionLabel className="mb-4 block">
                Nadia Wilkinson · MBACP Registered
              </SectionLabel>
              <h1
                className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                A quiet space to figure things out
              </h1>
              <p className="text-lg text-muted-brown leading-relaxed mb-8 max-w-lg">
                Sometimes life feels overwhelming, confusing, or stuck. Counselling offers a 
                place to slow down, make sense of things, and find your way forward—at your own pace.
              </p>
              <Button href="/contact" size="lg">
                Get in touch
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                <div className="aspect-[4/5] bg-sage-mist rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/Nadia-Profile.jpg"
                    alt="Nadia Wilkinson, MBACP registered counsellor"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pale-butter/30 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Brings People Here */}
      <section className="py-20 lg:py-28 bg-soft-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4 block">What brings people here</SectionLabel>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              You might be here because...
            </h2>
            <div className="space-y-6 text-lg text-muted-brown leading-relaxed">
              <p>
                You&apos;re feeling overwhelmed by anxious thoughts that won&apos;t quiet down. 
                Or perhaps you&apos;re struggling to process a loss—whether recent or from long ago.
              </p>
              <p>
                Maybe you&apos;re navigating something specific, like understanding a late 
                ADHD or autism diagnosis. Or you&apos;re facing a health challenge and need 
                space to work through what it means for your life.
              </p>
              <p>
                It could be that your relationships feel difficult, or a major life change 
                has left you feeling unmoored. Whatever brought you here, you don&apos;t need to 
                have it all figured out.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 text-terracotta-clay font-medium hover:text-forest-brown transition-colors group"
              >
                Explore guides on these topics
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Nadia (Condensed) */}
      <section className="py-20 lg:py-28 bg-sage-mist/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <GeometricIcon type="openness" size={100} className="mb-8 opacity-60" />
              <SectionLabel className="mb-4 block">About me</SectionLabel>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                Hello, I&apos;m Nadia
              </h2>
              <div className="space-y-5 text-muted-brown leading-relaxed">
                <p>
                  I&apos;m a registered counsellor (MBACP) offering online sessions to 
                  adults (18+) across the UK. I work with a wide range of issues, with 
                  particular experience in anxiety, neurodivergence, trauma, and grief.
                </p>
                <p>
                  My approach is person-centred, which means I believe you&apos;re the expert 
                  on your own life. My role is to provide a safe, non-judgmental space 
                  where you can explore what&apos;s going on and find your own answers.
                </p>
                <p>
                  I work with a small number of clients at any time, which allows me to 
                  give each person the attention they deserve.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-terracotta-clay font-medium hover:text-forest-brown transition-colors group"
                >
                  More about me and my approach
                  <svg
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
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
                </Link>
              </div>
            </div>
            <div className="lg:order-first">
              {/* Decorative geometric pattern */}
              <div className="relative aspect-square max-w-md mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="150" stroke="#3D3632" strokeWidth="1" fill="none" opacity="0.2" />
                  <circle cx="200" cy="200" r="100" stroke="#3D3632" strokeWidth="1" fill="none" opacity="0.3" />
                  <circle cx="200" cy="200" r="50" stroke="#3D3632" strokeWidth="1" fill="none" opacity="0.4" />
                  <circle cx="150" cy="150" r="80" stroke="#8B6355" strokeWidth="1.5" fill="none" opacity="0.5" />
                  <circle cx="250" cy="250" r="80" stroke="#8B6355" strokeWidth="1.5" fill="none" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Dark Section */}
      <section className="py-20 lg:py-28 bg-warm-charcoal text-soft-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel inverted className="mb-4 block">How it works</SectionLabel>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              Getting started is simple
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: 'reach-out' as const,
                title: '1. Reach out',
                description:
                  'Send me a message through the contact form. Tell me a little about what\'s bringing you to counselling.',
              },
              {
                icon: 'conversation' as const,
                title: '2. Free conversation',
                description:
                  'We\'ll have a brief, 20 minute no-obligation video call online to see if we\'re a good fit and answer any questions you have.',
              },
              {
                icon: 'begin' as const,
                title: '3. Begin when ready',
                description:
                  'If it feels right, we\'ll arrange our first session. There\'s no pressure—take the time you need.',
              },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <GeometricIcon type={step.icon} size={64} className="mx-auto mb-6" inverted />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-soft-cream/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/contact" size="lg">
              Contact me
            </Button>
          </div>
        </div>
      </section>

      {/* Practical Details */}
      <section className="py-20 lg:py-28 bg-soft-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionLabel className="mb-4 block text-center">Practical details</SectionLabel>
            <h2
              className="text-3xl md:text-4xl text-center mb-12"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              What to expect
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: 'Session length', value: SITE_CONFIG.sessionLength },
                { label: 'Fee', value: `${SITE_CONFIG.sessionFee} per session` },
                { label: 'Location', value: 'Online (Zoom or Google Meet)' },
                { label: 'Frequency', value: 'Weekly or fortnightly' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/60 rounded-xl p-6 border border-sage-mist/30"
                >
                  <p className="text-sm text-muted-brown mb-1">{item.label}</p>
                  <p className="text-lg font-medium text-warm-charcoal">{item.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-brown">
              I work with a small number of clients, which means there&apos;s sometimes a short 
              wait for an appointment. This allows me to give each person genuine attention.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-sage-mist/30">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
          <blockquote>
            <p
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 text-warm-charcoal"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              &ldquo;For the first time, I felt truly heard. Nadia created a space where 
              I could be completely honest with myself. It&apos;s changed how I 
              understand my own mind.&rdquo;
            </p>
            <footer className="text-muted-brown">
              <cite className="not-italic">— Client, 2025</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 lg:py-28 bg-soft-cream">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Common questions</SectionLabel>
          <h2
            className="text-3xl md:text-4xl mb-12"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            You might be wondering...
          </h2>

          <div className="space-y-10">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {faq.question}
                </h3>
                <p className="text-muted-brown leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/about#faq"
              className="inline-flex items-center gap-2 text-terracotta-clay font-medium hover:text-forest-brown transition-colors group"
            >
              More questions answered
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
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
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides Preview */}
      <section className="py-20 lg:py-28 bg-white/40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="mb-4 block">Resources</SectionLabel>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              Helpful guides
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.slice(0, 3).map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group bg-soft-cream rounded-xl p-6 border border-sage-mist/30 hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <h3
                  className="text-xl mb-2 group-hover:text-terracotta-clay transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}
                >
                  {guide.title}
                </h3>
                <p className="text-muted-brown text-sm mb-4 leading-relaxed line-clamp-2">
                  {guide.description}
                </p>
                <span className="text-xs text-muted-brown/70">{guide.readingTime}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/guides" variant="ghost">
              View all guides
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-sage-mist">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            Ready to take the first step?
          </h2>
          <p className="text-lg text-muted-brown mb-10 max-w-xl mx-auto">
            Getting in touch doesn&apos;t commit you to anything. I&apos;d love to hear 
            from you and learn a little about what&apos;s bringing you here.
          </p>
          <Button href="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  )
}
