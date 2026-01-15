interface GeometricIconProps {
  type: 'reach-out' | 'conversation' | 'begin' | 'connection' | 'journey' | 'openness'
  size?: number
  className?: string
  inverted?: boolean
}

export default function GeometricIcon({
  type,
  size = 64,
  className = '',
  inverted = false,
}: GeometricIconProps) {
  const strokeColor = inverted ? '#F5F3EE' : '#3D3632'
  const fillColor = inverted ? 'rgba(245, 243, 238, 0.15)' : 'rgba(197, 201, 184, 0.4)'

  const icons = {
    'reach-out': (
      // Hand reaching out - abstract gesture
      <>
        <circle cx="32" cy="32" r="20" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <path
          d="M22 32h20"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M38 26l6 6-6 6"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
    conversation: (
      // Two overlapping speech elements
      <>
        <circle cx="26" cy="28" r="14" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <circle cx="38" cy="36" r="14" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <path
          d="M32 24c-2 4-2 12 0 16"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill={fillColor}
        />
      </>
    ),
    begin: (
      // Door/opening
      <>
        <rect x="18" y="12" width="28" height="40" rx="2" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <circle cx="40" cy="32" r="2" fill={strokeColor} />
        <path d="M22 16v32" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    connection: (
      // Two circles with intersection
      <>
        <circle cx="24" cy="32" r="16" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <circle cx="40" cy="32" r="16" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <ellipse cx="32" cy="32" rx="8" ry="14" fill={fillColor} />
      </>
    ),
    journey: (
      // Arc with progression
      <>
        <path
          d="M8 48 Q32 8 56 48"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="16" cy="40" r="3" fill={strokeColor} />
        <circle cx="32" cy="20" r="3" fill={strokeColor} />
        <circle cx="48" cy="40" r="3" fill={strokeColor} />
      </>
    ),
    openness: (
      // Expanding rings
      <>
        <circle cx="32" cy="32" r="8" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="32" r="16" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.7" />
        <circle cx="32" cy="32" r="24" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.4" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {icons[type]}
    </svg>
  )
}
