'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ 
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#F5F3EE',
        color: '#3D3632',
        margin: 0,
        padding: 0,
      }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}>
          <div style={{ textAlign: 'center', maxWidth: '500px' }}>
            <h1 style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              fontWeight: 300,
              marginBottom: '1rem',
            }}>
              Something went wrong
            </h1>
            <p style={{ 
              color: '#6B5E54',
              fontSize: '1.125rem',
              marginBottom: '2rem',
              lineHeight: 1.6,
            }}>
              I&apos;m sorry, something unexpected happened. 
              Please try again or email me directly at nadia@nwcounselling.co.uk
            </p>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: '#E8E4A8',
                color: '#3D3632',
                border: 'none',
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
