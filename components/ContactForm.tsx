'use client'

import { useState, useCallback, KeyboardEvent } from 'react'
import Button from './Button'
import { SPECIALISMS } from '@/lib/constants'

interface FormData {
  name: string
  message: string
  focusAreas: string[]
  sessionPreference: string
  email: string
  phone: string
  additionalNotes: string
}

const initialFormData: FormData = {
  name: '',
  message: '',
  focusAreas: [],
  sessionPreference: 'online', // Default to online since that's the only option
  email: '',
  phone: '',
  additionalNotes: '',
}

const TOTAL_STEPS = 7

export default function ContactForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = useCallback(<K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const toggleFocusArea = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(id)
        ? prev.focusAreas.filter((a) => a !== id)
        : [...prev.focusAreas, id],
    }))
  }

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return true
      case 1:
        return formData.name.trim().length > 0
      case 2:
        return formData.message.trim().length > 0
      case 3:
        return true // Focus areas are optional
      case 4:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      case 5:
        return true // Additional notes are optional
      default:
        return false
    }
  }

  const nextStep = () => {
    if (canProceed() && step < TOTAL_STEPS - 1) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && step > 0 && step < 6) {
      e.preventDefault()
      if (canProceed()) {
        nextStep()
      }
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      setStep(6)
    } catch {
      setError('Something went wrong. Please try again or email directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const progressPercentage = ((step + 1) / TOTAL_STEPS) * 100

  return (
    <div className="min-h-[60vh] flex flex-col" onKeyDown={handleKeyDown}>
      {/* Progress Bar */}
      {step > 0 && step < 6 && (
        <div className="w-full h-1 bg-sage-mist/30 mb-8">
          <div
            className="h-full bg-terracotta-clay transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      )}

      {/* Form Steps */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
        {/* Step 0: Welcome */}
        {step === 0 && (
          <div className="text-center animate-fade-in">
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              Thank you for getting in touch.
            </h2>
            <p className="text-lg text-muted-brown mb-10 max-w-lg mx-auto">
              I&apos;ll ask a few questions to understand what&apos;s bringing you here. 
              This takes about 2 minutes.
            </p>
            <Button onClick={nextStep} size="lg">
              Begin →
            </Button>
          </div>
        )}

        {/* Step 1: Name */}
        {step === 1 && (
          <div className="animate-fade-in">
            <label
              htmlFor="name"
              className="block text-2xl md:text-3xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              What&apos;s your first name?
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="w-full text-2xl py-4 px-0 border-0 border-b-2 border-sage-mist bg-transparent focus:border-terracotta-clay focus:outline-none transition-colors placeholder:text-muted-brown/40"
              placeholder="Your first name"
              autoFocus
            />
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={prevStep}
                className="text-muted-brown hover:text-warm-charcoal transition-colors"
              >
                ← Back
              </button>
              <Button onClick={nextStep} disabled={!canProceed()}>
                Continue →
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: What's on your mind */}
        {step === 2 && (
          <div className="animate-fade-in">
            <label
              htmlFor="message"
              className="block text-2xl md:text-3xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              In a few sentences, what&apos;s bringing you to counselling?
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => updateField('message', e.target.value)}
              rows={4}
              className="w-full text-lg py-4 px-4 border-2 border-sage-mist bg-white/50 rounded-lg focus:border-terracotta-clay focus:outline-none transition-colors placeholder:text-muted-brown/40 resize-none"
              placeholder="Take your time..."
              autoFocus
            />
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={prevStep}
                className="text-muted-brown hover:text-warm-charcoal transition-colors"
              >
                ← Back
              </button>
              <Button onClick={nextStep} disabled={!canProceed()}>
                Continue →
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Focus Areas */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              Is there a particular area you&apos;d like to explore?
            </h2>
            <p className="text-muted-brown mb-6">Select all that apply, or skip this step.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {SPECIALISMS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => toggleFocusArea(area.id)}
                  className={`p-4 text-left rounded-lg border-2 transition-all ${
                    formData.focusAreas.includes(area.id)
                      ? 'border-terracotta-clay bg-terracotta-clay/10'
                      : 'border-sage-mist hover:border-terracotta-clay/50'
                  }`}
                >
                  {area.label}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={prevStep}
                className="text-muted-brown hover:text-warm-charcoal transition-colors"
              >
                ← Back
              </button>
              <Button onClick={nextStep}>
                Continue →
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <div className="animate-fade-in">
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              What&apos;s the best email to reach you?
            </h2>
            <div className="space-y-6">
              <div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full text-xl py-4 px-0 border-0 border-b-2 border-sage-mist bg-transparent focus:border-terracotta-clay focus:outline-none transition-colors placeholder:text-muted-brown/40"
                  placeholder="your@email.com"
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-muted-brown mb-2">
                  Phone number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full text-xl py-4 px-0 border-0 border-b-2 border-sage-mist bg-transparent focus:border-terracotta-clay focus:outline-none transition-colors placeholder:text-muted-brown/40"
                  placeholder="07xxx xxxxxx"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={prevStep}
                className="text-muted-brown hover:text-warm-charcoal transition-colors"
              >
                ← Back
              </button>
              <Button onClick={nextStep} disabled={!canProceed()}>
                Continue →
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Additional Notes */}
        {step === 5 && (
          <div className="animate-fade-in">
            <label
              htmlFor="notes"
              className="block text-2xl md:text-3xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              Is there anything else you&apos;d like me to know?
            </label>
            <textarea
              id="notes"
              value={formData.additionalNotes}
              onChange={(e) => updateField('additionalNotes', e.target.value)}
              rows={4}
              className="w-full text-lg py-4 px-4 border-2 border-sage-mist bg-white/50 rounded-lg focus:border-terracotta-clay focus:outline-none transition-colors placeholder:text-muted-brown/40 resize-none"
              placeholder="Optional..."
              autoFocus
            />
            {error && (
              <p className="mt-4 text-red-600">{error}</p>
            )}
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={prevStep}
                className="text-muted-brown hover:text-warm-charcoal transition-colors"
              >
                ← Back
              </button>
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Confirmation */}
        {step === 6 && isSubmitted && (
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-soft-olive/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-soft-olive"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300 }}
            >
              Thank you, {formData.name}.
            </h2>
            <p className="text-lg text-muted-brown mb-4 max-w-lg mx-auto">
              I&apos;ll be in touch within 2-3 working days to arrange a free 20-minute conversation.
            </p>
            <p className="text-xl text-warm-charcoal" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
              — Nadia
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
