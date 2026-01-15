'use client'

import Link from 'next/link'

interface LogoProps {
  variant?: 'full' | 'mark' | 'wordmark'
  className?: string
  inverted?: boolean
}

export default function Logo({ variant = 'full', className = '', inverted = false }: LogoProps) {
  const primaryColor = inverted ? '#F5F3EE' : '#3D3632'
  const accentColor = inverted ? 'rgba(245, 243, 238, 0.3)' : 'rgba(197, 201, 184, 0.5)'

  const mark = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Two overlapping circles representing connection */}
      <circle cx="15" cy="20" r="12" stroke={primaryColor} strokeWidth="1.5" fill="none" />
      <circle cx="25" cy="20" r="12" stroke={primaryColor} strokeWidth="1.5" fill="none" />
      {/* Intersection fill */}
      <path
        d="M20 10.5C17.5 13.5 16 16.5 16 20C16 23.5 17.5 26.5 20 29.5C22.5 26.5 24 23.5 24 20C24 16.5 22.5 13.5 20 10.5Z"
        fill={accentColor}
      />
    </svg>
  )

  const wordmark = (
    <span
      className={`font-[var(--font-cormorant)] text-xl tracking-wide ${
        inverted ? 'text-soft-cream' : 'text-warm-charcoal'
      }`}
      style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400 }}
    >
      NW Counselling
    </span>
  )

  const content = () => {
    switch (variant) {
      case 'mark':
        return mark
      case 'wordmark':
        return wordmark
      default:
        return (
          <div className="flex items-center gap-3">
            {mark}
            {wordmark}
          </div>
        )
    }
  }

  return (
    <Link href="/" className={`inline-flex items-center hover:opacity-80 transition-opacity ${className}`}>
      {content()}
    </Link>
  )
}
