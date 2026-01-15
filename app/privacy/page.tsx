import { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for NW Counselling. How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="animate-fade-in">
      <section className="pt-32 pb-20 lg:pb-28 bg-soft-cream">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4 block">Legal</SectionLabel>
          <h1
            className="text-4xl md:text-5xl mb-8"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
          >
            Privacy Policy
          </h1>

          <div className="space-y-8 text-muted-brown leading-relaxed">
            <p className="text-sm">Last updated: January 2026</p>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                Introduction
              </h2>
              <p>
                NW Counselling (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;) is committed to protecting your privacy. 
                This policy explains how I collect, use, and safeguard your personal information 
                when you use this website or contact me for counselling services.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                What information I collect
              </h2>
              <h3 className="text-lg font-bold mb-2 text-warm-charcoal">Through the contact form</h3>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>The message you write about what&apos;s bringing you to counselling</li>
                <li>Your preferences for session type and focus areas</li>
              </ul>

              <h3 className="text-lg font-bold mb-2 text-warm-charcoal">Through website analytics</h3>
              <p>
                I use privacy-respecting analytics to understand how people use this website. 
                This collects anonymised data about page views and doesn&apos;t track individual 
                users or use cookies.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                How I use your information
              </h2>
              <p className="mb-4">Your contact form information is used solely to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Respond to your enquiry</li>
                <li>Arrange an initial conversation about counselling</li>
                <li>Understand what support you might be looking for</li>
              </ul>
              <p className="mt-4">
                I will never sell, share, or use your information for marketing purposes.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                How I protect your information
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>This website uses HTTPS encryption for all communications</li>
                <li>Contact form submissions are sent via secure email</li>
                <li>I don&apos;t store your contact form data on the website</li>
                <li>I keep your information confidential, as required by my BACP registration</li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                How long I keep your information
              </h2>
              <p>
                If you enquire but don&apos;t become a client, I&apos;ll delete your contact information 
                within 6 months unless you ask me to keep it on file.
              </p>
              <p className="mt-4">
                If you become a client, record-keeping for counselling is covered separately 
                in the counselling agreement we&apos;ll discuss before we begin.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                Your rights
              </h2>
              <p className="mb-4">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access the personal information I hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please email me at{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-terracotta-clay hover:text-forest-brown">
                  {SITE_CONFIG.email}
                </a>
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                Cookies
              </h2>
              <p>
                This website uses minimal or no cookies. I use privacy-respecting analytics 
                that don&apos;t require cookies or track individual users.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                Third-party services
              </h2>
              <p className="mb-4">This website uses the following third-party services:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Vercel:</strong> Website hosting (privacy policy: vercel.com/legal/privacy-policy)</li>
                <li><strong>Resend:</strong> Email delivery for contact form (privacy policy: resend.com/legal/privacy-policy)</li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                Changes to this policy
              </h2>
              <p>
                I may update this privacy policy from time to time. The date at the top of 
                this page shows when it was last updated.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4 text-warm-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
              >
                Contact
              </h2>
              <p>
                If you have any questions about this privacy policy or how I handle your 
                information, please contact me at{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-terracotta-clay hover:text-forest-brown">
                  {SITE_CONFIG.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
