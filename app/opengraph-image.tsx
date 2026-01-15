import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'NW Counselling - Online therapy for adults in the UK'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5F3EE',
          position: 'relative',
        }}
      >
        {/* Decorative circles in background */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            style={{ opacity: 0.15 }}
          >
            <circle cx="150" cy="200" r="120" stroke="#3D3632" strokeWidth="2" fill="none" />
            <circle cx="250" cy="200" r="120" stroke="#3D3632" strokeWidth="2" fill="none" />
            <path
              d="M200 100C175 130 160 165 160 200C160 235 175 270 200 300C225 270 240 235 240 200C240 165 225 130 200 100Z"
              fill="#C5C9B8"
            />
          </svg>
        </div>

        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
            <circle cx="15" cy="20" r="12" stroke="#3D3632" strokeWidth="1.5" fill="none" />
            <circle cx="25" cy="20" r="12" stroke="#3D3632" strokeWidth="1.5" fill="none" />
            <path
              d="M20 10.5C17.5 13.5 16 16.5 16 20C16 23.5 17.5 26.5 20 29.5C22.5 26.5 24 23.5 24 20C24 16.5 22.5 13.5 20 10.5Z"
              fill="rgba(197, 201, 184, 0.5)"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            color: '#3D3632',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          NW Counselling
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontFamily: 'system-ui, sans-serif',
            color: '#6B5E54',
            letterSpacing: '0.05em',
          }}
        >
          Online therapy for adults across the UK
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div style={{ width: 60, height: 1, backgroundColor: '#C5C9B8' }} />
          <div
            style={{
              fontSize: 14,
              fontFamily: 'monospace',
              color: '#6B5E54',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            nwcounselling.co.uk
          </div>
          <div style={{ width: 60, height: 1, backgroundColor: '#C5C9B8' }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
