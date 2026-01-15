'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import Button from './Button'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return false // Don't show active state for home
    return pathname === href || pathname.startsWith(href + '/')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-soft-cream/95 backdrop-blur-sm shadow-[var(--shadow-soft)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-terracotta-clay transition-colors font-medium relative group ${
                  isActive(link.href) ? 'text-terracotta-clay' : 'text-warm-charcoal'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-terracotta-clay transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Button href="/contact" variant="secondary" size="sm">
              GET IN TOUCH
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-warm-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-soft-cream shadow-lg">
            <div className="flex flex-col py-6 px-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg py-3 border-b border-sage-mist/50 hover:text-terracotta-clay transition-colors ${
                    isActive(link.href) ? 'text-terracotta-clay' : 'text-warm-charcoal'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/contact"
                variant="secondary"
                className="mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                GET IN TOUCH
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
