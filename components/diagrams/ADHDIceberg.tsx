'use client'

/**
 * ADHD Iceberg Diagram
 * 
 * Visual representation of visible vs hidden ADHD symptoms.
 * The "iceberg" concept shows how little of ADHD is externally visible,
 * validating the user's hidden struggles.
 * 
 * Uses sophisticated geometric abstraction per brand guidelines.
 */

export default function ADHDIceberg() {
  return (
    <figure className="my-12 mx-auto max-w-2xl" role="img" aria-label="The ADHD Iceberg: diagram showing visible symptoms above the surface and hidden struggles below">
      <div className="bg-white/60 rounded-2xl p-6 sm:p-8 border border-sage-mist/30">
        {/* Title */}
        <p 
          className="text-center text-xs tracking-[0.15em] uppercase text-muted-brown mb-6"
          style={{ fontFamily: 'DM Mono, monospace' }}
        >
          The ADHD Iceberg
        </p>
        
        <svg 
          viewBox="0 0 600 480" 
          className="w-full h-auto"
          aria-hidden="true"
        >
          <defs>
            {/* Above water gradient - visible part */}
            <linearGradient id="above-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5F3EE" />
              <stop offset="100%" stopColor="#C5C9B8" stopOpacity="0.6" />
            </linearGradient>
            
            {/* Below water gradient - hidden part */}
            <linearGradient id="below-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C5C9B8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5C4033" stopOpacity="0.3" />
            </linearGradient>

            {/* Water surface gradient */}
            <linearGradient id="water-surface" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B6355" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B6355" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B6355" stopOpacity="0" />
            </linearGradient>

            {/* Clip path for the iceberg shape */}
            <clipPath id="iceberg-clip">
              <polygon points="300,35 380,125 460,450 140,450 220,125" />
            </clipPath>
          </defs>

          {/* === WATER SURFACE LINE === */}
          <rect x="0" y="120" width="600" height="4" fill="url(#water-surface)" />
          
          {/* Surface label */}
          <text 
            x="40" 
            y="117" 
            className="fill-muted-brown"
            style={{ fontSize: '10px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.1em' }}
          >
            WHAT PEOPLE SEE
          </text>
          
          <text 
            x="40" 
            y="140" 
            className="fill-muted-brown"
            style={{ fontSize: '10px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.1em' }}
          >
            WHAT YOU FEEL
          </text>

          {/* === ICEBERG SHAPE === */}
          
          {/* Above water portion - visible tip */}
          <polygon 
            points="300,35 360,125 240,125" 
            fill="url(#above-water)"
            stroke="#C5C9B8"
            strokeWidth="2"
          />
          
          {/* Below water portion - larger hidden mass */}
          <polygon 
            points="360,125 460,430 140,430 240,125" 
            fill="url(#below-water)"
            stroke="#C5C9B8"
            strokeWidth="2"
            strokeDasharray="6 3"
            className="opacity-80"
          />

          {/* === ABOVE WATER CONTENT (Visible symptoms) === */}
          <g className="above-water-content">
            {/* Small geometric markers */}
            <circle cx="300" cy="65" r="4" fill="#E8E4A8" />
            <circle cx="285" cy="85" r="3" fill="#7D8B6A" className="opacity-70" />
            <circle cx="315" cy="90" r="3" fill="#7D8B6A" className="opacity-70" />
          </g>

          {/* === VISIBLE SYMPTOMS (Above water) === */}
          <g className="visible-labels" transform="translate(420, 50)">
            <text 
              x="0" 
              y="0" 
              className="fill-warm-charcoal"
              style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              Running late
            </text>
            <text 
              x="0" 
              y="22" 
              className="fill-warm-charcoal"
              style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              Losing things
            </text>
            <text 
              x="0" 
              y="44" 
              className="fill-warm-charcoal"
              style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              Interrupting
            </text>
            <text 
              x="0" 
              y="66" 
              className="fill-warm-charcoal"
              style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              Unfinished tasks
            </text>
            
            {/* Connector lines */}
            <line x1="-40" y1="-5" x2="-5" y2="-5" stroke="#8B6355" strokeWidth="1" opacity="0.5" />
            <line x1="-50" y1="17" x2="-5" y2="17" stroke="#8B6355" strokeWidth="1" opacity="0.5" />
            <line x1="-55" y1="39" x2="-5" y2="39" stroke="#8B6355" strokeWidth="1" opacity="0.5" />
            <line x1="-60" y1="61" x2="-5" y2="61" stroke="#8B6355" strokeWidth="1" opacity="0.5" />
          </g>

          {/* === HIDDEN CONTENT (Below water) === */}
          
          {/* Geometric elements representing depth and complexity */}
          <g className="below-water-elements" opacity="0.6">
            {/* Concentric rings showing layers of hidden experience */}
            <circle cx="300" cy="260" r="60" fill="none" stroke="#5C4033" strokeWidth="1" opacity="0.3" />
            <circle cx="300" cy="260" r="45" fill="none" stroke="#5C4033" strokeWidth="1" opacity="0.4" />
            <circle cx="300" cy="260" r="30" fill="none" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
            
            {/* Scattered elements showing the weight of hidden struggles */}
            <circle cx="230" cy="200" r="5" fill="#8B6355" opacity="0.4" />
            <circle cx="370" cy="220" r="6" fill="#8B6355" opacity="0.3" />
            <circle cx="260" cy="320" r="7" fill="#8B6355" opacity="0.35" />
            <circle cx="340" cy="350" r="5" fill="#8B6355" opacity="0.4" />
            <circle cx="200" cy="280" r="4" fill="#8B6355" opacity="0.3" />
            <circle cx="400" cy="300" r="5" fill="#8B6355" opacity="0.35" />
            <circle cx="280" cy="380" r="6" fill="#8B6355" opacity="0.3" />
            <circle cx="320" cy="395" r="4" fill="#8B6355" opacity="0.4" />
          </g>

          {/* === HIDDEN SYMPTOMS (Below water - left side) === */}
          <g className="hidden-labels-left" transform="translate(30, 175)">
            <text 
              x="0" 
              y="0" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Exhaustion from masking
            </text>
            <text 
              x="0" 
              y="30" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Chronic shame
            </text>
            <text 
              x="0" 
              y="60" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Sensory overwhelm
            </text>
            <text 
              x="0" 
              y="90" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Emotional dysregulation
            </text>
            <text 
              x="0" 
              y="120" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Rejection sensitivity
            </text>
            <text 
              x="0" 
              y="150" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Analysis paralysis
            </text>
            
            {/* Connector lines */}
            <line x1="135" y1="-5" x2="175" y2="-5" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="90" y1="25" x2="185" y2="25" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="115" y1="55" x2="195" y2="55" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="145" y1="85" x2="200" y2="85" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="120" y1="115" x2="195" y2="115" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="105" y1="145" x2="195" y2="145" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
          </g>

          {/* === HIDDEN SYMPTOMS (Below water - right side) === */}
          <g className="hidden-labels-right" transform="translate(425, 175)">
            <text 
              x="0" 
              y="0" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Time blindness
            </text>
            <text 
              x="0" 
              y="30" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Working memory gaps
            </text>
            <text 
              x="0" 
              y="60" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Decision fatigue
            </text>
            <text 
              x="0" 
              y="90" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Sleep struggles
            </text>
            <text 
              x="0" 
              y="120" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Interest-based motivation
            </text>
            <text 
              x="0" 
              y="150" 
              className="fill-muted-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif' }}
            >
              Self-doubt spirals
            </text>
            
            {/* Connector lines */}
            <line x1="-25" y1="-5" x2="-5" y2="-5" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="-35" y1="25" x2="-5" y2="25" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="-40" y1="55" x2="-5" y2="55" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="-45" y1="85" x2="-5" y2="85" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="-40" y1="115" x2="-5" y2="115" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
            <line x1="-30" y1="145" x2="-5" y2="145" stroke="#8B6355" strokeWidth="1" opacity="0.4" />
          </g>

          {/* === BOTTOM EMPHASIS === */}
          <g transform="translate(300, 455)">
            <text 
              x="0" 
              y="0" 
              textAnchor="middle"
              className="fill-forest-brown"
              style={{ fontSize: '11px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.05em' }}
            >
              The hidden weight is real—even when no one else can see it
            </text>
          </g>
        </svg>
      </div>
      
      <figcaption className="mt-4 text-center text-sm text-muted-brown/70 italic">
        What others notice is often just the surface. The internal experience of ADHD runs much deeper.
      </figcaption>
    </figure>
  )
}
