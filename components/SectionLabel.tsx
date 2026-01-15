interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  inverted?: boolean
}

export default function SectionLabel({ children, className = '', inverted = false }: SectionLabelProps) {
  return (
    <span
      className={`
        font-[var(--font-dm-mono)] text-xs tracking-[0.15em] uppercase
        ${inverted ? 'text-soft-cream/60' : 'text-muted-brown'}
        ${className}
      `}
      style={{ fontFamily: 'DM Mono, monospace' }}
    >
      {children}
    </span>
  )
}
