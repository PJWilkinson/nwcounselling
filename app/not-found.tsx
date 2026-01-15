import Button from '@/components/Button'
import GeometricIcon from '@/components/GeometricIcon'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-soft-cream">
      <div className="text-center px-6">
        <GeometricIcon type="journey" size={80} className="mx-auto mb-8 opacity-40" />
        <h1
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
        >
          Page not found
        </h1>
        <p className="text-lg text-muted-brown mb-8 max-w-md mx-auto">
          This page doesn&apos;t exist, but I&apos;m here to help. 
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">
            Go home
          </Button>
          <Button href="/contact" variant="ghost">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  )
}
