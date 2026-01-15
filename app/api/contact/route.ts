import { NextRequest, NextResponse } from 'next/server'

// Rate limiting (simple in-memory store - for production use Redis or similar)
const submissions = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_SUBMISSIONS = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const userSubmissions = submissions.get(ip) || []
  
  // Clean old submissions
  const recentSubmissions = userSubmissions.filter(time => now - time < RATE_LIMIT_WINDOW)
  submissions.set(ip, recentSubmissions)
  
  return recentSubmissions.length >= MAX_SUBMISSIONS
}

function recordSubmission(ip: string): void {
  const userSubmissions = submissions.get(ip) || []
  userSubmissions.push(Date.now())
  submissions.set(ip, userSubmissions)
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  focusAreas: string[]
  sessionPreference: string
  additionalNotes?: string
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Focus areas labels
    const focusAreaLabels: Record<string, string> = {
      'anxiety': 'Anxiety or low mood',
      'life-change': 'A major life change',
      'adhd-autism': 'Autism or ADHD',
      'trauma': 'Trauma',
      'bereavement': 'Bereavement or loss',
      'health': 'Living with a health condition',
      'relationships': 'Relationship or family difficulties',
      'other': 'Something else',
    }

    const sessionLabels: Record<string, string> = {
      'online': 'Online (Zoom or Google Meet)',
    }

    // If Resend is configured, send email
    const resendApiKey = process.env.RESEND_API_KEY
    
    if (resendApiKey) {
      const focusAreasText = data.focusAreas.length > 0
        ? data.focusAreas.map(id => focusAreaLabels[id] || id).join(', ')
        : 'Not specified'

      const emailContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

What's bringing them to counselling:
${data.message}

Focus areas: ${focusAreasText}

Session preference: ${sessionLabels[data.sessionPreference] || data.sessionPreference}

Additional notes:
${data.additionalNotes || 'None'}

---
Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
Source: NW Counselling Website
`

      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'noreply@nwcounselling.co.uk',
            to: process.env.RESEND_TO_EMAIL || 'nadia@nwcounselling.co.uk',
            subject: `New Contact Form Submission from ${data.name}`,
            text: emailContent,
          }),
        })

        if (!response.ok) {
          console.error('Resend API error:', await response.text())
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Don't fail the submission if email fails - log and continue
      }
    } else {
      // Log submission for development
      console.log('Contact form submission:', {
        ...data,
        timestamp: new Date().toISOString(),
      })
    }

    // Record successful submission for rate limiting
    recordSubmission(ip)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
