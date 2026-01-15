'use client'

import { useEffect } from 'react'
import Button from '@/components/Button'
import GeometricIcon from '@/components/GeometricIcon'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-soft-cream">
      <div className="text-center px-6">
        <GeometricIcon type="openness" size={80} className="mx-auto mb-8 opacity-40" />
        <h1
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
        >
          Something went wrong
        </h1>
        <p className="text-lg text-muted-brown mb-8 max-w-md mx-auto">
          I&apos;m sorry, something unexpected happened. 
          Please try again or get in touch directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => reset()}>
            Try again
          </Button>
          <Button href="/" variant="ghost">
            Go home
          </Button>
        </div>
      </div>
    </div>
  )
}
