import Link from 'next/link'
import Logo from './Logo'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-warm-charcoal text-soft-cream pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-soft-cream/20">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Logo inverted />
            <p className="text-soft-cream/70 text-sm leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[var(--font-dm-mono)] text-xs uppercase tracking-[0.15em] text-soft-cream/50 mb-4">
              Navigation
            </h3>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-soft-cream/80 hover:text-soft-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block text-soft-cream/80 hover:text-soft-cream transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="block text-soft-cream/80 hover:text-soft-cream transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact & Credentials */}
          <div>
            <h3 className="font-[var(--font-dm-mono)] text-xs uppercase tracking-[0.15em] text-soft-cream/50 mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="block text-soft-cream/80 hover:text-soft-cream transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
              <p className="text-soft-cream/60 text-sm">{SITE_CONFIG.credentials}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-soft-cream/50 text-sm">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
