'use client'

/**
 * ADHD Chemistry Diagram
 * 
 * Visual explanation of dopamine and norepinephrine regulation in ADHD.
 * Shows the difference between typical and ADHD neurotransmitter patterns
 * using sophisticated geometric abstraction per brand guidelines.
 */

export default function ADHDChemistry() {
  return (
    <figure className="my-12 mx-auto max-w-2xl" role="img" aria-label="Diagram showing how dopamine and norepinephrine work differently in ADHD brains">
      <div className="bg-white/60 rounded-2xl p-6 sm:p-8 border border-sage-mist/30">
        {/* Title */}
        <p 
          className="text-center text-xs tracking-[0.15em] uppercase text-muted-brown mb-6"
          style={{ fontFamily: 'DM Mono, monospace' }}
        >
          The Neuroscience
        </p>
        
        <svg 
          viewBox="0 0 600 320" 
          className="w-full h-auto"
          aria-hidden="true"
        >
          {/* Definitions for gradients and effects */}
          <defs>
            {/* Dopamine gradient */}
            <linearGradient id="dopamine-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8E4A8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E8E4A8" stopOpacity="0.5" />
            </linearGradient>
            
            {/* Norepinephrine gradient */}
            <linearGradient id="norepi-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7D8B6A" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7D8B6A" stopOpacity="0.5" />
            </linearGradient>

            {/* Signal path gradient */}
            <linearGradient id="signal-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B6355" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B6355" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* === LEFT SIDE: Typical Regulation === */}
          <g className="typical-side">
            {/* Label */}
            <text 
              x="150" 
              y="28" 
              textAnchor="middle" 
              className="fill-warm-charcoal text-xs"
              style={{ fontFamily: 'DM Mono, monospace', letterSpacing: '0.1em' }}
            >
              TYPICAL REGULATION
            </text>

            {/* Source region (abstract circle) */}
            <circle 
              cx="80" 
              cy="160" 
              r="40" 
              fill="none" 
              stroke="#C5C9B8" 
              strokeWidth="2"
              className="opacity-80"
            />
            <circle 
              cx="80" 
              cy="160" 
              r="30" 
              fill="#C5C9B8" 
              className="opacity-20"
            />

            {/* Target region */}
            <circle 
              cx="220" 
              cy="160" 
              r="50" 
              fill="none" 
              stroke="#C5C9B8" 
              strokeWidth="2"
              className="opacity-80"
            />
            <circle 
              cx="220" 
              cy="160" 
              r="40" 
              fill="#C5C9B8" 
              className="opacity-20"
            />

            {/* Signal paths - curved lines showing steady flow */}
            <path 
              d="M 120 150 Q 150 130 180 150" 
              fill="none" 
              stroke="url(#signal-gradient)" 
              strokeWidth="1.5"
              strokeDasharray="none"
            />
            <path 
              d="M 120 160 Q 150 160 180 160" 
              fill="none" 
              stroke="url(#signal-gradient)" 
              strokeWidth="1.5"
            />
            <path 
              d="M 120 170 Q 150 190 180 170" 
              fill="none" 
              stroke="url(#signal-gradient)" 
              strokeWidth="1.5"
            />

            {/* Neurotransmitter particles - dopamine */}
            <circle cx="135" cy="140" r="6" fill="url(#dopamine-gradient)" />
            <circle cx="155" cy="160" r="6" fill="url(#dopamine-gradient)" />
            <circle cx="140" cy="178" r="6" fill="url(#dopamine-gradient)" />

            {/* Neurotransmitter particles - norepinephrine */}
            <circle cx="160" cy="145" r="5" fill="url(#norepi-gradient)" />
            <circle cx="145" cy="165" r="5" fill="url(#norepi-gradient)" />
            <circle cx="165" cy="175" r="5" fill="url(#norepi-gradient)" />

            {/* Steady state indicator */}
            <g transform="translate(220, 245)">
              <line x1="-30" y1="0" x2="30" y2="0" stroke="#3D3632" strokeWidth="1.5" />
              <text 
                x="0" 
                y="20" 
                textAnchor="middle" 
                className="fill-muted-brown"
                style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
              >
                Steady signal flow
              </text>
            </g>
          </g>

          {/* === CENTER DIVIDER === */}
          <line 
            x1="300" 
            y1="50" 
            x2="300" 
            y2="290" 
            stroke="#C5C9B8" 
            strokeWidth="1" 
            strokeDasharray="4 4"
            className="opacity-60"
          />

          {/* === RIGHT SIDE: ADHD Regulation === */}
          <g className="adhd-side">
            {/* Label */}
            <text 
              x="450" 
              y="28" 
              textAnchor="middle" 
              className="fill-warm-charcoal text-xs"
              style={{ fontFamily: 'DM Mono, monospace', letterSpacing: '0.1em' }}
            >
              ADHD REGULATION
            </text>

            {/* Source region */}
            <circle 
              cx="380" 
              cy="160" 
              r="40" 
              fill="none" 
              stroke="#C5C9B8" 
              strokeWidth="2"
              className="opacity-80"
            />
            <circle 
              cx="380" 
              cy="160" 
              r="30" 
              fill="#C5C9B8" 
              className="opacity-20"
            />

            {/* Target region - slightly muted to show reduced reception */}
            <circle 
              cx="520" 
              cy="160" 
              r="50" 
              fill="none" 
              stroke="#C5C9B8" 
              strokeWidth="2"
              strokeDasharray="6 3"
              className="opacity-50"
            />
            <circle 
              cx="520" 
              cy="160" 
              r="40" 
              fill="#C5C9B8" 
              className="opacity-10"
            />

            {/* Signal paths - interrupted/scattered to show dysregulation */}
            <path 
              d="M 420 145 Q 440 120 460 140" 
              fill="none" 
              stroke="#8B6355" 
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="opacity-60"
            />
            <path 
              d="M 420 160 Q 445 175 470 155" 
              fill="none" 
              stroke="#8B6355" 
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="opacity-60"
            />
            <path 
              d="M 420 175 Q 450 200 470 180" 
              fill="none" 
              stroke="#8B6355" 
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="opacity-60"
            />

            {/* Scattered neurotransmitter particles - showing reuptake/dispersion */}
            <circle cx="430" cy="130" r="5" fill="url(#dopamine-gradient)" className="opacity-70" />
            <circle cx="450" cy="195" r="6" fill="url(#dopamine-gradient)" className="opacity-50" />
            <circle cx="435" cy="170" r="4" fill="url(#dopamine-gradient)" className="opacity-60" />
            <circle cx="465" cy="145" r="5" fill="url(#dopamine-gradient)" className="opacity-40" />

            <circle cx="440" cy="150" r="4" fill="url(#norepi-gradient)" className="opacity-60" />
            <circle cx="455" cy="175" r="4" fill="url(#norepi-gradient)" className="opacity-40" />
            <circle cx="425" cy="185" r="4" fill="url(#norepi-gradient)" className="opacity-50" />

            {/* Irregular state indicator */}
            <g transform="translate(520, 245)">
              <path 
                d="M -30 0 Q -20 -8 -10 0 Q 0 8 10 0 Q 20 -8 30 0" 
                fill="none" 
                stroke="#3D3632" 
                strokeWidth="1.5"
              />
              <text 
                x="0" 
                y="20" 
                textAnchor="middle" 
                className="fill-muted-brown"
                style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
              >
                Irregular signal flow
              </text>
            </g>
          </g>

          {/* === LEGEND === */}
          <g transform="translate(300, 300)">
            {/* Dopamine */}
            <circle cx="-80" cy="0" r="5" fill="url(#dopamine-gradient)" />
            <text 
              x="-65" 
              y="4" 
              className="fill-muted-brown"
              style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Dopamine
            </text>

            {/* Norepinephrine */}
            <circle cx="30" cy="0" r="5" fill="url(#norepi-gradient)" />
            <text 
              x="45" 
              y="4" 
              className="fill-muted-brown"
              style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Norepinephrine
            </text>
          </g>
        </svg>
      </div>
      
      <figcaption className="mt-4 text-center text-sm text-muted-brown/70 italic">
        ADHD involves differences in how dopamine and norepinephrine—the chemicals that regulate attention and motivation—are processed. This is neurology, not character.
      </figcaption>
    </figure>
  )
}
