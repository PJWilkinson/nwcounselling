import Link from 'next/link'
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: never
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-pale-butter !text-warm-charcoal hover:bg-[#ddd9a0] border-transparent',
  secondary:
    'bg-warm-charcoal !text-white hover:!text-white hover:bg-forest-brown border-transparent',
  ghost:
    'bg-transparent !text-warm-charcoal hover:bg-sage-mist/30 border-warm-charcoal/20',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2 text-[15px]',
  lg: 'px-8 py-2.5 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-[var(--font-dm-sans)] font-bold uppercase tracking-wide
    rounded-lg border
    transition-all duration-200 ease-out
    hover:-translate-y-0.5
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-clay focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
  `

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink
    return (
      <Link href={href} className={combinedStyles} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedStyles} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
