import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/Button'
import SectionLabel from '@/components/SectionLabel'
import GuideContent from '@/components/GuideContent'
import { getGuideBySlug, getAllGuideSlugs, parseMarkdown } from '@/lib/guides'
import { GUIDES } from '@/lib/constants'

interface GuidePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    return {
      title: 'Guide Not Found',
    }
  }

  return {
    title: `${guide.title} | A Comprehensive Guide`,
    description: guide.description,
    openGraph: {
      title: `${guide.title} | A Comprehensive Guide | NW Counselling`,
      description: guide.description,
      images: [`/images/og-guides-${slug}.jpg`],
    },
  }
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide || !guide.content) {
    notFound()
  }

  const htmlContent = parseMarkdown(guide.content)

  // Get related guides (excluding current one)
  const relatedGuides = GUIDES.filter((g) => g.slug !== slug).slice(0, 2)

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="pt-32 pb-6 bg-soft-cream">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-brown">
              <li>
                <Link href="/" className="hover:text-terracotta-clay transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-muted-brown/50">/</li>
              <li>
                <Link href="/guides" className="hover:text-terracotta-clay transition-colors">
                  Guides
                </Link>
              </li>
              <li className="text-muted-brown/50">/</li>
              <li className="text-warm-charcoal">{guide.title}</li>
            </ol>
          </nav>

          <SectionLabel className="mb-4 block">Guide</SectionLabel>
          <h1
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            {guide.title}
          </h1>
          <p className="text-lg text-muted-brown leading-relaxed mb-6">
            {guide.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-brown/70">
            <span>{guide.readingTime}</span>
            <span>•</span>
            <span>Last updated: {guide.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-soft-cream">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <GuideContent htmlContent={htmlContent} slug={slug} />
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 lg:py-20 bg-sage-mist/30">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl mb-8"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            Related guides
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {relatedGuides.map((related) => (
              <Link
                key={related.slug}
                href={`/guides/${related.slug}`}
                className="group bg-white/60 rounded-xl p-6 border border-sage-mist/30 hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <h3
                  className="text-xl mb-2 group-hover:text-terracotta-clay transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}
                >
                  {related.title}
                </h3>
                <p className="text-muted-brown text-sm leading-relaxed line-clamp-2">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-sage-mist">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            Want to talk about this?
          </h2>
          <p className="text-lg text-muted-brown mb-10 max-w-xl mx-auto">
            If anything in this guide resonated with you, I&apos;d be glad to hear 
            from you. Counselling can help you explore these topics with support.
          </p>
          <Button href="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  )
}
