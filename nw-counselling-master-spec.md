# NW Counselling — Complete Site Specification

**Master Document for AI-Assisted Design & Development**

*Version 1.0 — January 2026*

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Brand & Visual System](#2-brand--visual-system)
3. [Site Structure & Navigation](#3-site-structure--navigation)
4. [Page Specifications](#4-page-specifications)
5. [Content Guidelines](#5-content-guidelines)
6. [SEO Strategy](#6-seo-strategy)
7. [AEO & Semantic Markup](#7-aeo--semantic-markup)
8. [Technical Requirements](#8-technical-requirements)
   - 8.1 Platform & Hosting
   - 8.2 Tech Stack & Development Setup
   - 8.3 Forms & Data Handling
   - 8.4 Performance Targets
   - 8.5 Accessibility Requirements
   - 8.6 Browser Support
   - 8.7 Security
   - 8.8 Analytics
   - 8.9 Font Loading Strategy
   - 8.10 Social Media & Open Graph
   - 8.11 Environment Variables & Configuration
   - 8.12 Error Handling & Monitoring
   - 8.13 CI/CD & Deployment
   - 8.14 Email Service Integration
   - 8.15 Cookie Consent & GDPR
   - 8.16 Code Quality & Development Tools
   - 8.17 Image Optimization
   - 8.18 Content Management
   - 8.19 Domain & DNS
   - 8.20 Testing Strategy
   - 8.21 Version Control Workflow

---

## 1. Project Overview

### About the Practice

**NW Counselling** is a private counselling practice run by **Nadia Wilkinson**, a registered MBACP counsellor based in Southwest London. The practice offers online (Zoom) and in-person sessions for adults (18+).

**Specialisms:**
- Anxiety and low mood
- Autism and ADHD (particularly late diagnosis)
- Trauma (past and recent)
- Bereavement and loss
- Living with illness or chronic health conditions
- Relationship and family difficulties
- Major life transitions

**Positioning:** Boutique, personal, limited client roster. This is a one-person practice offering genuine attention—not a clinic or service factory.

### Project Goals

1. Create a modern, warm, sophisticated website that feels personal rather than corporate
2. Establish credibility and expertise through comprehensive specialist guides
3. Optimise for both traditional search (SEO) and AI answer engines (AEO)
4. Lower the barrier to reaching out through a conversational contact flow
5. Ensure the site works as well for someone who only sees the homepage as for someone who explores deeply

### Target Audience

Adults (typically 25-55) in or near London who are:
- Considering therapy, possibly for the first time
- Researching specific topics (ADHD, autism, grief, etc.)
- Looking for someone who "gets" their situation
- Valuing warmth and personal connection over clinical efficiency

---

## 2. Brand & Visual System

### 2.1 Brand Personality

| Attribute | Expression |
|-----------|------------|
| **Warm** | Like a quiet room with good light and comfortable furniture |
| **Safe** | Private, unhurried, no pressure—a space to exhale |
| **Personal** | One person, not a clinic; authentic, not corporate |
| **Grounded** | Earthy, natural, rooted—not airy-fairy or clinical |
| **Confident** | Professional expertise worn lightly, not defensively |

**The feeling:** Walking into a calm, well-designed space where someone is genuinely glad to see you and has time to listen.

### 2.2 Colour Palette

#### Primary Colours

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Soft Cream** | `#F5F3EE` | 245, 243, 238 | Primary background |
| **Sage Mist** | `#C5C9B8` | 197, 201, 184 | Secondary background, cards |
| **Warm Charcoal** | `#3D3632` | 61, 54, 50 | Primary text, dark sections |
| **Muted Brown** | `#6B5E54` | 107, 94, 84 | Secondary text, captions |
| **Terracotta Clay** | `#8B6355` | 139, 99, 85 | Accents, links, dividers |
| **Forest Brown** | `#5C4033` | 92, 64, 51 | Deep accent, emphasis |

#### Accent Colours

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Pale Butter** | `#E8E4A8` | 232, 228, 168 | Primary buttons, highlights |
| **Soft Olive** | `#7D8B6A` | 125, 139, 106 | Secondary buttons, success states |

#### Colour Rules

- No pure white (`#FFFFFF`) backgrounds—always use Soft Cream or warmer
- No pure black (`#000000`) text—always use Warm Charcoal
- Buttons use Pale Butter (primary) or Warm Charcoal (secondary)
- Links use Terracotta Clay
- Dark sections use Warm Charcoal background with Soft Cream text

### 2.3 Typography

#### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Display/Headlines** | Cormorant Garamond | 300 (Light) | Georgia, serif |
| **Section Labels** | DM Mono | 400 (Regular) | monospace |
| **Body/UI** | DM Sans | 400, 500, 700 | system-ui, sans-serif |

#### Type Scale

```
Section label:    12px / letter-spacing: 0.15em / uppercase / DM Mono
Hero headline:    48-56px / line-height: 1.1 / Cormorant Garamond Light
Page headline:    40-44px / line-height: 1.15 / Cormorant Garamond Light  
Section heading:  28-32px / line-height: 1.2 / Cormorant Garamond Light
Subheading:       20-24px / line-height: 1.3 / DM Sans Bold
Body large:       18px / line-height: 1.6 / DM Sans Regular
Body:             16-17px / line-height: 1.6 / DM Sans Regular
Small/caption:    14px / line-height: 1.5 / DM Sans Regular
Button:           14-15px / DM Sans Bold
```

#### Typography Rules

- Headlines left-aligned (centered text feels generic)
- Body text max-width ~65-75 characters for readability
- Generous line-height on body text (1.6)
- Section labels always uppercase with letter-spacing
- No all-caps except for small section labels

### 2.4 Photography

**Usage:** Hero section only—a warm, personal photo of Nadia.

**Style requirements:**
- Natural light, soft and diffused
- Candid/relaxed rather than corporate headshot
- Warm colour grading (not cool/clinical)
- Eye contact with camera
- Setting suggests comfort (home office, warm interior)

**What to avoid:**
- Stock photography anywhere on the site
- Corporate headshot style
- Cool/blue colour grading
- Overly posed or stiff

### 2.5 Illustration Style

**Approach:** Sophisticated geometric abstraction—precise, intentional, gallery-quality.

**Themes:**
- **Connection** — Overlapping circles, tangent points, converging lines
- **Journey** — Arcs, trajectories, graduated progressions, horizon lines
- **Openness** — Expanding rings, incomplete circles, aperture forms

**Technical execution:**
- Clean vector forms, precise geometry
- Single-weight strokes (1.5-2px)
- Palette limited to brand colours
- Subtle transparency/opacity for depth
- No hand-drawn or sketchy aesthetic
- No figurative elements (faces, hands, literal objects)

**Usage:**
- Section accents and dividers
- Background elements (subtle, not overwhelming)
- Icon system for services/features
- Logo mark

**What to avoid:**
- Wobbly/hand-drawn lines
- Figurative illustrations
- Literal visual metaphors (stepping stones, paths with footprints)
- Botanical/nature imagery (too expected for therapy sites)
- Anything that could read as childish or whimsical

### 2.6 Logo

**Mark:** Two overlapping circles with subtle intersection fill—representing connection and shared space.

**Wordmark:** "NW Counselling" in Cormorant Garamond, regular weight.

**Versions:**
- Full logo (mark + wordmark, horizontal)
- Mark only (for favicon, small applications)
- Wordmark only (where space is limited)

**Colour variations:**
- Primary: Warm Charcoal mark on Soft Cream
- Reversed: Soft Cream/Sage on Warm Charcoal
- Single colour for special applications

### 2.7 Spacing & Layout

**Grid:** 12-column grid, max-width 1200px, generous gutters (24-32px).

**Spacing scale:**
```
4px   — Tight (icon padding, inline spacing)
8px   — Compact (form elements, small gaps)
16px  — Standard (paragraph spacing)
24px  — Comfortable (card padding, section gaps)
32px  — Generous (between components)
48px  — Spacious (between page sections)
64px  — Expansive (major section breaks)
80-100px — Dramatic (hero padding, CTA sections)
```

**Border radius:**
- Small elements (buttons, inputs): 6-8px
- Cards and containers: 12-16px
- Large sections: 20-24px

**Shadows:**
- Subtle and warm-toned, not grey
- Example: `0 4px 12px rgba(93, 77, 66, 0.08)`
- Hover state: `0 8px 24px rgba(93, 77, 66, 0.12)`

### 2.8 Motion & Interaction

**Principles:**
- Subtle over showy
- Purposeful, not decorative
- Ease-out curves, slightly slower than default

**Timing:**
- Micro-interactions: 150-200ms
- Component transitions: 250-300ms
- Page transitions: 400-500ms

**Specific interactions:**

| Element | Behaviour |
|---------|-----------|
| Buttons | Subtle lift on hover (translateY -2px), colour shift |
| Links | Underline grows from left on hover |
| Cards | Gentle shadow increase on hover |
| Page load | Fade-in, content reveals top-to-bottom |
| Form steps | Smooth slide transition between screens |

**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for most transitions.

---

## 3. Site Structure & Navigation

### 3.1 Information Architecture

```
├── Homepage
│   └── (comprehensive landing experience)
│
├── About
│   └── (background + approach + practicalities)
│
├── Guides (content hub)
│   ├── Understanding ADHD
│   ├── Understanding Autism  
│   ├── Working Through Trauma
│   ├── Grief & Bereavement
│   └── Living with Illness
│
└── Contact
    └── (Typeform-style multi-step flow)
```

### 3.2 URL Structure

```
/                           Homepage
/about                      About page
/guides                     Guides hub
/guides/adhd                Individual guide
/guides/autism              Individual guide
/guides/trauma              Individual guide
/guides/bereavement         Individual guide
/guides/living-with-illness Individual guide
/contact                    Contact flow
/privacy                    Privacy policy
```

### 3.3 Primary Navigation

**Desktop:**
```
[Logo]                                    About    Guides    Get in touch
```

- Logo links to homepage
- "Guides" can be a dropdown or link to hub
- "Get in touch" styled as button (Warm Charcoal background)

**Mobile:**
- Hamburger menu
- Full-screen overlay with large touch targets
- Same items as desktop

### 3.4 Footer

**Content:**
- Logo (smaller)
- Tagline: "Online and in-person counselling in Southwest London"
- Navigation links: About, Guides, Contact, Privacy Policy
- Credentials: BACP Member #394901
- Email address
- © 2026 NW Counselling

**Layout:** Simple, not cluttered. Two or three columns on desktop, stacked on mobile.

---

## 4. Page Specifications

### 4.1 Homepage

**Purpose:** Convey everything essential. Most visitors will only see this page.

**Sections:**

#### Hero
- Nadia's photo (right side on desktop, full-width on mobile)
- Section label: "Nadia Wilkinson · MBACP Registered"
- Headline: "A quiet space to figure things out" (or similar)
- Intro paragraph: 2-3 sentences
- CTA button: "Get in touch"

#### Who This Is For
- Section label: "What brings people here"
- Reflective framing, not a clinical list
- Example: "You might be feeling overwhelmed by anxious thoughts... struggling to process a loss... navigating something specific like ADHD or autism..."
- Link to Guides

#### About Nadia (condensed)
- Geometric illustration as accent
- Section label: "About me"
- Headline: "Hello, I'm Nadia"
- 2-3 paragraphs
- Credentials mentioned naturally
- Link to full About page

#### How It Works
- Dark section (Warm Charcoal background)
- Section label: "How it works"
- Headline: "Getting started is simple"
- Three steps with geometric icons:
  1. Reach out
  2. Free conversation  
  3. Begin when ready

#### Practical Details
- Session length, location options, fee
- Availability/waitlist positioning
- Integrated naturally, not a price table

#### Testimonial
- Single powerful quote
- Large, confident typography
- Attribution

#### Common Questions
- 3-4 key questions, answered directly
- Not an accordion—visible Q&A pairs
- Questions as subheadings, answers as paragraphs

#### Contact CTA
- Sage background section
- Warm invitation copy
- Prominent button

### 4.2 About Page

**URL:** `/about`

**Purpose:** Deeper information for those who want it before reaching out.

**Sections:**

#### Opening
- Photo of Nadia (can be different from homepage)
- Extended personal introduction
- What led her to this work

#### Training & Credentials
- Written in prose, not a CV
- MBACP, relevant training, experience
- Framed as "what this means for you"

#### My Approach
- How sessions work
- Philosophy (client-led, person-centred)
- What to expect early on vs. ongoing

#### Practicalities
Simple table format:
- Sessions: 50 minutes
- Frequency: Weekly or fortnightly
- Location: Online (Zoom) or in-person (SW11, Mondays)
- Fee: £XX per session
- Availability: Current status

#### More Questions
- Fuller set of Q&As
- Same format as homepage (not accordion)

#### Contact CTA

### 4.3 Guides Hub

**URL:** `/guides`

**Purpose:** Entry point to specialist content.

**Content:**
- Brief introduction
- Cards linking to each guide (title, one-sentence description, reading time)

**Layout:** Grid of cards, clean and scannable.

### 4.4 Individual Guide Template

**URLs:** `/guides/[slug]`

**Purpose:** Comprehensive, readable resource on each specialism.

**Structure:**

1. **Header**
   - Breadcrumb: Home > Guides > [Title]
   - Title (H1)
   - Brief intro paragraph
   - Reading time estimate
   - Last updated date

2. **Table of Contents**
   - Anchor links to main sections
   - Sticky on desktop (side rail)
   - Collapsible on mobile

3. **Content Sections**
   - Written in accessible prose
   - Subheadings as questions people actually ask
   - Short paragraphs (2-4 sentences)
   - Pull quotes for key points
   - No images—geometric section dividers if needed

4. **Example Structure (ADHD Guide):**
   - What is ADHD, actually?
   - Late diagnosis: why it's more common than you think
   - How ADHD affects daily life
   - ADHD and emotions
   - Relationships, work, and self-worth
   - How counselling can help
   - Finding the right support

5. **Closing**
   - Gentle invitation to reach out
   - Related guides links
   - CTA button

**Design for readability:**
- Max-width ~700px for content column
- Line-height 1.7-1.8 for body
- Generous spacing between sections
- Progress indicator (optional)

### 4.5 Contact Flow

**URL:** `/contact`

**Purpose:** Lower barrier to reaching out through conversational multi-step form.

**Design principles:**
- One question per screen
- Large, clear typography
- Progress indicator (subtle)
- Keyboard navigable (Enter to proceed)
- Back button available
- No distractions—full focus on current question

**Flow:**

**Screen 1: Welcome**
> Thank you for getting in touch.
> 
> I'll ask a few questions to understand what's bringing you here. This takes about 2 minutes.
>
> [Begin →]

**Screen 2: Name**
> What's your first name?
> 
> [Text input]

**Screen 3: What's on your mind**
> In a few sentences, what's bringing you to counselling?
> 
> [Textarea]

**Screen 4: Focus areas**
> Is there a particular area you'd like to explore?
> 
> [Multi-select checkboxes]
> - Anxiety or low mood
> - A major life change
> - Autism or ADHD
> - Trauma
> - Bereavement or loss
> - Living with a health condition
> - Relationship or family difficulties
> - Something else

**Screen 5: Session preference**
> Do you have a preference for how we'd meet?
> 
> [Single select]
> - Online (Zoom)
> - In-person (SW11, London)
> - Either works for me

**Screen 6: Contact details**
> What's the best email to reach you?
> 
> [Email input]
> 
> Phone number (optional)
> [Phone input]

**Screen 7: Anything else**
> Is there anything else you'd like me to know?
> 
> [Textarea - optional]

**Screen 8: Confirmation**
> Thank you, [Name].
> 
> I'll be in touch within [X working days] to arrange a free 20-minute conversation.
> 
> — Nadia

---

## 5. Content Guidelines

### 5.1 Voice & Tone

**Voice attributes:**
- First person ("I work with..." not "Nadia works with...")
- Conversational but not casual
- Warm without being saccharine
- Confident without being salesy
- Acknowledges difficulty of reaching out

**Tone by context:**
- Homepage: Welcoming, reassuring
- About: Personal, authentic
- Guides: Informative, empathetic, accessible
- Contact: Warm, low-pressure

### 5.2 Language Principles

**Do:**
- Use plain English
- Address the reader directly ("you")
- Acknowledge emotions and difficulty
- Be specific rather than vague
- Write short paragraphs

**Don't:**
- Use therapy jargon without explanation
- Sound clinical or detached
- Use aggressive sales language
- Lead with credentials
- Write in passive voice

### 5.3 Headlines

| Instead of... | Try... |
|---------------|--------|
| Professional Counselling Services | A quiet space to figure things out |
| Start Your Healing Journey | Sometimes talking helps |
| Book Your Free Consultation | Let's see if we're a good fit |
| Issues I Treat | What brings people here |
| My Qualifications | A bit about my background |

### 5.4 Handling Sensitive Topics

**Waitlist/limited availability:**
> I work with a small number of clients at any time. This means there's sometimes a short wait, but it also means I can give each person the attention they deserve.

Not:
> Due to high demand, spaces are limited...

**Pricing:**
State clearly and matter-of-factly. Don't apologise or oversell value.

**Serious topics (trauma, bereavement):**
- Acknowledge the weight without dramatising
- Be respectful, not pitying
- Focus on support available, not the problem

---

## 6. SEO Strategy

### 6.1 Keyword Targets

#### Primary Keywords (Homepage)
- counselling southwest london
- therapist clapham
- online counselling london
- MBACP counsellor london

#### Topic Keywords (Guides)
- adhd counselling / adhd therapy / adhd diagnosis support
- autism counselling / autism therapy / late autism diagnosis
- trauma therapy london / trauma counselling
- grief counselling / bereavement counselling london
- counselling for chronic illness / living with cancer support

#### Long-tail Questions (for AEO)
- what does a counsellor do
- how to find a therapist in london
- what is person-centred counselling
- how do I know if I need therapy
- what to expect in first counselling session
- is online therapy as effective as in person
- adhd in adults symptoms
- late autism diagnosis adults
- how to cope with grief
- counselling vs therapy difference

### 6.2 On-Page SEO

#### Title Tags
```
Homepage:    NW Counselling | Online & In-Person Therapy in Southwest London
About:       About Nadia Wilkinson | MBACP Counsellor | NW Counselling
Guides Hub:  Counselling Guides | ADHD, Autism, Trauma & More | NW Counselling
ADHD Guide:  Understanding ADHD | A Comprehensive Guide | NW Counselling
Contact:     Get in Touch | NW Counselling
```

#### Meta Descriptions
- 150-160 characters
- Include primary keyword naturally
- Clear value proposition
- Gentle call to action

**Homepage example:**
> Warm, personal counselling in Southwest London and online. I help adults navigate anxiety, ADHD, autism, grief, and life's difficult transitions. Book a free consultation.

**Guide example (ADHD):**
> A comprehensive guide to understanding ADHD in adults—what it is, how it affects daily life, and how counselling can help. Written by an MBACP-registered counsellor.

#### Heading Structure
- One H1 per page (the main title)
- H2 for major sections
- H3 for subsections within
- Logical hierarchy, no skipping levels

#### Image Optimisation
- Descriptive filenames: `nadia-wilkinson-counsellor-london.jpg`
- Alt text: Descriptive, includes context
- WebP format with JPEG fallback
- Lazy loading below the fold
- Compressed appropriately

### 6.3 Technical SEO

#### Site Speed
- Target: <2.5s LCP (Largest Contentful Paint)
- Optimise images
- Minimal JavaScript
- Efficient CSS
- Consider static site generation

#### Mobile Optimisation
- Mobile-first responsive design
- Touch targets minimum 44px
- No horizontal scroll
- Readable without zooming

#### Core Web Vitals
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

#### Indexing
- XML sitemap at `/sitemap.xml`
- Robots.txt allowing all public pages
- Canonical URLs on all pages
- No duplicate content issues

### 6.4 Local SEO

#### Google Business Profile
- Claim and verify listing
- Accurate NAP (Name, Address, Phone)
- Categories: Counselor, Mental Health Service
- Photos of Nadia and practice space
- Regular posts/updates
- Encourage reviews from clients

#### Local Signals
- Address on website (footer, contact page)
- London-specific content where relevant
- Local schema markup (see Section 7)

### 6.5 Content Strategy for SEO

#### Guides as SEO Assets
Each guide targets a cluster of related keywords:
- Primary keyword in H1 and URL
- Related keywords in H2s
- Long-tail questions as H3s within sections
- Internal links between related guides
- External links to authoritative sources (NHS, BACP, etc.)

#### Content Freshness
- Update guides annually (at minimum)
- Add "Last updated" date
- Review for accuracy and relevance

---

## 7. AEO & Semantic Markup

### 7.1 Understanding AEO

**Answer Engine Optimisation (AEO)** is the practice of structuring content so AI systems (ChatGPT, Google AI Overviews, Perplexity, etc.) can easily extract, understand, and cite it as a direct answer.

**Why it matters:**
- ~65% of Google searches now end without a click
- AI assistants increasingly mediate information discovery
- Being cited as "the answer" is different from ranking well
- Early movers establish authority that compounds over time

**Key difference from SEO:**
- SEO: Optimise to rank in search results
- AEO: Optimise to be selected and cited as the answer

### 7.2 AEO Content Principles

#### Answer-First Structure
- Lead with the direct answer, then expand
- First paragraph should be extractable as a standalone answer
- Use the question as a heading, answer immediately below

**Example:**
```
### What is person-centred counselling?

Person-centred counselling is a form of talk therapy where the counsellor 
creates conditions of empathy, acceptance, and genuineness so the client 
can explore their feelings and find their own answers. Unlike directive 
approaches, the counsellor doesn't give advice or interpret—they trust 
that you know yourself best.

[Expanded explanation follows...]
```

#### Clear, Extractable Statements
- Write sentences that can stand alone
- Avoid pronouns that require context
- Be specific: names, numbers, locations

**Good:** "NW Counselling is based in Southwest London and offers both online and in-person sessions."

**Bad:** "We're based here and offer both options."

#### Structured Information
- Use tables for comparative or categorical information
- Use lists for steps, features, or options
- Use clear headings that signal content

#### Authority Signals
- Cite credentials (MBACP registration)
- Reference authoritative sources (NHS, NICE guidelines)
- Include author/practice information
- Keep information accurate and current

### 7.3 Schema Markup Strategy

Implement JSON-LD structured data in the `<head>` of each page.

#### Homepage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/MedicalBusiness",
  "@id": "https://www.nwcounselling.co.uk/#business",
  "name": "NW Counselling",
  "description": "Private counselling practice offering online and in-person therapy for adults in Southwest London. Specialising in anxiety, ADHD, autism, trauma, and bereavement.",
  "url": "https://www.nwcounselling.co.uk",
  "logo": "https://www.nwcounselling.co.uk/images/logo.png",
  "image": "https://www.nwcounselling.co.uk/images/nadia-wilkinson.jpg",
  "telephone": "+44-XXX-XXX-XXXX",
  "email": "nadia@nwcounselling.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "postalCode": "SW11",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.XXXXX",
    "longitude": "-0.XXXXX"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "London"
    },
    {
      "@type": "Country",
      "name": "United Kingdom",
      "description": "Online sessions available nationwide"
    }
  ],
  "serviceType": ["Counselling", "Psychotherapy", "Talk Therapy"],
  "priceRange": "££",
  "openingHours": ["Mo 09:00-18:00", "Tu 09:00-18:00", "Th 09:00-18:00"],
  "founder": {
    "@type": "Person",
    "@id": "https://www.nwcounselling.co.uk/#nadia",
    "name": "Nadia Wilkinson",
    "jobTitle": "Counsellor",
    "description": "MBACP registered counsellor specialising in anxiety, ADHD, autism, trauma, and bereavement.",
    "memberOf": {
      "@type": "Organization",
      "name": "British Association for Counselling and Psychotherapy",
      "alternateName": "BACP"
    },
    "sameAs": [
      "https://www.bacp.co.uk/profile/394901"
    ]
  },
  "sameAs": [
    "https://www.instagram.com/nwcounselling",
    "https://www.linkedin.com/in/nadiawilkinson"
  ]
}
```

#### Person Schema (for About page and author attribution)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.nwcounselling.co.uk/#nadia",
  "name": "Nadia Wilkinson",
  "givenName": "Nadia",
  "familyName": "Wilkinson",
  "jobTitle": "Counsellor",
  "description": "MBACP registered counsellor based in Southwest London, specialising in anxiety, ADHD, autism, trauma, and bereavement support for adults.",
  "url": "https://www.nwcounselling.co.uk/about",
  "image": "https://www.nwcounselling.co.uk/images/nadia-wilkinson.jpg",
  "email": "nadia@nwcounselling.co.uk",
  "worksFor": {
    "@type": "LocalBusiness",
    "@id": "https://www.nwcounselling.co.uk/#business"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional Certification",
    "name": "MBACP Registration",
    "recognizedBy": {
      "@type": "Organization",
      "name": "British Association for Counselling and Psychotherapy"
    }
  },
  "knowsAbout": [
    "Counselling",
    "Anxiety",
    "ADHD",
    "Autism",
    "Trauma",
    "Bereavement",
    "Person-centred therapy"
  ]
}
```

#### Article Schema (for Guides)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Understanding ADHD: A Comprehensive Guide",
  "description": "A thorough guide to understanding ADHD in adults—what it is, how it affects daily life, and how counselling can help.",
  "author": {
    "@type": "Person",
    "@id": "https://www.nwcounselling.co.uk/#nadia"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.nwcounselling.co.uk/#business"
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.nwcounselling.co.uk/guides/adhd"
  },
  "image": "https://www.nwcounselling.co.uk/images/guides/adhd-guide.jpg",
  "articleSection": "Mental Health Guides",
  "keywords": ["ADHD", "ADHD in adults", "ADHD counselling", "ADHD therapy", "adult ADHD"],
  "wordCount": 2500,
  "timeRequired": "PT12M"
}
```

#### FAQPage Schema (for question sections)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is my problem bad enough for counselling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If something is bothering you, it's enough. You don't need to be in crisis to benefit from counselling. Many people come simply wanting space to think through a situation or understand themselves better."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between counselling and talking to a friend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A counsellor provides a dedicated, confidential space focused entirely on you. Unlike friends, counsellors are trained to listen without judgement and won't share their own problems or give unsolicited advice. The whole session is yours."
      }
    }
  ]
}
```

#### Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Counselling",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://www.nwcounselling.co.uk/#business"
  },
  "name": "Individual Counselling Sessions",
  "description": "50-minute one-to-one counselling sessions available online via Zoom or in-person in Southwest London.",
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Counselling Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online Counselling Session",
          "description": "50-minute session via Zoom"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "In-Person Counselling Session",
          "description": "50-minute session in SW11, London"
        }
      }
    ]
  }
}
```

#### PsychologicalTreatment Schema (for service pages)

```json
{
  "@context": "https://schema.org",
  "@type": "PsychologicalTreatment",
  "name": "Person-Centred Counselling",
  "description": "A form of talk therapy where the counsellor creates conditions of empathy, acceptance, and genuineness so the client can explore their feelings and find their own solutions.",
  "medicalSpecialty": "Psychiatric",
  "relevantCondition": [
    "Anxiety",
    "Depression",
    "ADHD",
    "Autism Spectrum Disorder",
    "Trauma",
    "Grief"
  ]
}
```

#### BreadcrumbList Schema (for all pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.nwcounselling.co.uk"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://www.nwcounselling.co.uk/guides"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Understanding ADHD",
      "item": "https://www.nwcounselling.co.uk/guides/adhd"
    }
  ]
}
```

### 7.4 HTML Semantic Structure

Use semantic HTML5 elements for better AI parsing:

```html
<header>
  <nav aria-label="Main navigation">...</nav>
</header>

<main>
  <article>
    <header>
      <h1>Understanding ADHD</h1>
      <p class="lead">A comprehensive guide...</p>
    </header>
    
    <nav aria-label="Table of contents">
      <ol>...</ol>
    </nav>
    
    <section id="what-is-adhd">
      <h2>What is ADHD?</h2>
      <p>...</p>
    </section>
    
    <section id="symptoms">
      <h2>Common symptoms in adults</h2>
      <p>...</p>
    </section>
    
    <aside>
      <h3>Related guides</h3>
      <ul>...</ul>
    </aside>
  </article>
</main>

<footer>...</footer>
```

### 7.5 AEO-Optimised Content Patterns

#### The "Definition Block"
For key terms AI might need to explain:

```html
<section id="what-is-counselling">
  <h2>What is counselling?</h2>
  <p><strong>Counselling is a form of talk therapy</strong> where you work 
  with a trained professional to explore your thoughts, feelings, and 
  behaviours in a confidential setting. Unlike advice-giving, counselling 
  helps you find your own answers.</p>
</section>
```

#### The "Quick Answer + Depth" Pattern
Lead with extractable answer, then expand:

```html
<section>
  <h2>How long does counselling take?</h2>
  <p><strong>Most people attend counselling for 6-12 sessions</strong>, 
  though this varies based on what you're working through. Some people 
  benefit from short-term focused work; others prefer ongoing support 
  over months or years.</p>
  
  <h3>Factors that affect duration</h3>
  <ul>
    <li>The nature of what you're exploring</li>
    <li>Your goals for therapy</li>
    <li>How frequently you attend</li>
  </ul>
</section>
```

#### The "Comparison Table"
For AI to extract structured comparisons:

```html
<table>
  <caption>Online vs in-person counselling</caption>
  <thead>
    <tr>
      <th>Factor</th>
      <th>Online</th>
      <th>In-person</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Convenience</td>
      <td>No travel required</td>
      <td>Travel to SW11</td>
    </tr>
    <tr>
      <td>Privacy</td>
      <td>Need private space at home</td>
      <td>Dedicated therapy room</td>
    </tr>
  </tbody>
</table>
```

### 7.6 Monitoring AEO Performance

#### Manual Testing
- Search key questions in ChatGPT, Perplexity, Google AI
- Note whether NW Counselling is cited
- Track which content gets referenced

#### Tools
- Google Search Console (featured snippets, AI Overviews)
- HubSpot AI Search Grader (free)
- Semrush/Ahrefs for SERP feature tracking

#### Metrics to Track
- AI Share of Voice (mentions in relevant AI answers)
- Citation rate (links back from AI responses)
- Featured snippet wins
- "People Also Ask" appearances

---

## 8. Technical Requirements

### 8.1 Platform & Hosting

**Technology Stack:**
- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Markup:** HTML5 with semantic elements
- **Package Manager:** pnpm
- **Version Control:** Git with GitHub
- **Deployment:** Vercel (connected to GitHub repository)

**Hosting Approach:**
The site will be built as a Next.js application using the App Router, styled with Tailwind CSS, and deployed to Vercel via GitHub integration. This provides:
- Excellent performance with automatic optimizations
- Simple hosting with zero server maintenance
- High security with automatic HTTPS
- Global CDN distribution
- Automatic deployments from GitHub pushes
- Preview deployments for pull requests

**Deployment Workflow:**
1. Code is pushed to GitHub repository
2. Vercel automatically detects changes
3. Build process runs (Next.js build)
4. Site is deployed to Vercel's edge network
5. Custom domain (if configured) points to Vercel deployment

### 8.2 Tech Stack & Development Setup

#### Core Technologies

| Component | Technology | Version/Details |
|-----------|------------|----------------|
| **Framework** | Next.js | 14+ with App Router |
| **Language** | TypeScript | Latest stable |
| **Styling** | Tailwind CSS | Latest with JIT mode |
| **Markup** | HTML5 | Semantic elements required |
| **Package Manager** | pnpm | Latest stable |
| **Node.js** | Node.js | 18+ (LTS recommended) |
| **Version Control** | Git | With GitHub repository |

#### Development Environment

**Prerequisites:**
- Node.js 18+ (LTS version recommended)
- pnpm installed globally: `npm install -g pnpm`
- Git configured
- Code editor (VS Code recommended with extensions: ESLint, Prettier, Tailwind CSS IntelliSense)

**Project Setup:**
```bash
# Initialize Next.js project with TypeScript and Tailwind
pnpm create next-app@latest --typescript --tailwind --app

# Install additional dependencies
pnpm add [additional packages]

# Development server
pnpm dev

# Production build
pnpm build

# Start production server (local testing)
pnpm start
```

#### Build Configuration

**Next.js Configuration:**
- App Router structure (`app/` directory)
- TypeScript strict mode enabled
- Tailwind CSS configured via `tailwind.config.ts`
- Image optimization enabled (Next.js Image component)
- Static export configuration if needed for fully static deployment

**File Structure:**
```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── guides/
│   ├── contact/
│   └── api/                # API routes
├── components/             # React components
├── lib/                    # Utilities and helpers
├── public/                 # Static assets
├── styles/                 # Global styles (if needed)
├── types/                  # TypeScript type definitions
└── [config files]
```

### 8.3 Forms & Data Handling

#### Contact Form
- Multi-step form with progress indicator
- Client-side validation (gentle, not aggressive)
- Server-side validation via Next.js API route
- Data sent to: Email notification via Resend (see Section 8.14)
- GDPR compliant: Privacy notice, data retention policy
- No permanent storage unless explicitly consented (data sent via email only)

#### Required Fields
- Name (first name minimum)
- Email
- What's bringing you to counselling (textarea)

#### Optional Fields
- Phone number
- Focus areas (checkboxes)
- Session preference
- Additional notes

### 8.4 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Time to Interactive | < 3.5s |

### 8.5 Accessibility Requirements

- WCAG 2.1 AA compliance
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigable (including form)
- Skip links
- Sufficient colour contrast (test with palette)
- Alt text for all images
- Focus indicators visible
- Reduced motion option respected

### 8.6 Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari 14+
- Android Chrome 90+
- Graceful degradation for older browsers

### 8.7 Security

- HTTPS everywhere
- Security headers (CSP, X-Frame-Options, etc.)
- No sensitive data in client-side code
- Form submission rate limiting
- Honeypot fields for spam prevention

### 8.8 Analytics

- Privacy-respecting analytics (Plausible, Fathom, or similar)
- No cookies if possible, or minimal with consent
- Track: Page views, form completions, guide engagement
- Goals: Contact form submissions

### 8.9 Font Loading Strategy

#### Google Fonts Integration

The site uses three Google Fonts:
- **Cormorant Garamond** (Light 300) - Display/Headlines
- **DM Mono** (Regular 400) - Section Labels
- **DM Sans** (Regular 400, Medium 500, Bold 700) - Body/UI

#### Implementation

**Next.js Font Optimization:**
Use Next.js `next/font/google` for automatic font optimization:

```typescript
import { Cormorant_Garamond, DM_Mono, DM_Sans } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})
```

**Font Display Strategy:**
- Use `display: 'swap'` for all fonts to prevent invisible text during font load
- Preload critical fonts (Cormorant Garamond for hero headlines)
- Fallback fonts defined in CSS: Georgia (serif), monospace, system-ui (sans-serif)

**Performance Considerations:**
- Fonts are self-hosted by Next.js (no external requests to Google)
- Automatic subsetting to reduce file size
- Font files are optimized and cached
- Critical font preloading in `<head>`

### 8.10 Social Media & Open Graph

#### Open Graph Meta Tags

All pages must include comprehensive Open Graph tags for social sharing:

**Required OG Tags:**
```html
<meta property="og:title" content="[Page Title] | NW Counselling" />
<meta property="og:description" content="[Meta description]" />
<meta property="og:image" content="https://www.nwcounselling.co.uk/images/og-[page].jpg" />
<meta property="og:url" content="https://www.nwcounselling.co.uk[page-path]" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="NW Counselling" />
<meta property="og:locale" content="en_GB" />
```

**Twitter Card Tags:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Page Title]" />
<meta name="twitter:description" content="[Meta description]" />
<meta name="twitter:image" content="https://www.nwcounselling.co.uk/images/twitter-[page].jpg" />
```

#### Social Sharing Images

**Specifications:**
- Dimensions: 1200x630px (OG) and 1200x600px (Twitter)
- Format: JPEG or PNG
- File size: < 200KB (optimized)
- Content: Include logo, page title, and brand colours
- Naming: `og-homepage.jpg`, `og-about.jpg`, `og-guides-adhd.jpg`, etc.

**Dynamic OG Tags for Guides:**
- Generate OG images dynamically or use template-based approach
- Include guide title and key visual elements
- Maintain brand consistency across all guide images

#### Implementation

Use Next.js Metadata API in App Router:
```typescript
export const metadata: Metadata = {
  openGraph: {
    title: 'Page Title | NW Counselling',
    description: 'Meta description',
    images: ['/images/og-page.jpg'],
    url: 'https://www.nwcounselling.co.uk/page',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Meta description',
    images: ['/images/twitter-page.jpg'],
  },
}
```

### 8.11 Environment Variables & Configuration

#### Required Environment Variables

**Development (.env.local):**
```env
# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@nwcounselling.co.uk
RESEND_TO_EMAIL=nadia@nwcounselling.co.uk

# Error Tracking (Sentry)
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
SENTRY_AUTH_TOKEN=xxxxx
SENTRY_ORG=xxxxx
SENTRY_PROJECT=xxxxx

# Analytics (Plausible/Fathom)
NEXT_PUBLIC_ANALYTICS_ID=xxxxx

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.nwcounselling.co.uk
```

**Production:**
- Set all environment variables in Vercel dashboard
- Never commit `.env.local` to repository
- Include `.env.example` in repository with placeholder values

#### Vercel Environment Variable Setup

1. Navigate to project settings in Vercel dashboard
2. Go to "Environment Variables" section
3. Add variables for Production, Preview, and Development environments
4. Variables are automatically available at build and runtime
5. Restart deployments after adding new variables

#### Configuration Files

**`.env.example`:**
Template file showing required variables (without actual values)

**`next.config.ts`:**
- Environment variable validation
- Image domain configuration
- Redirect rules
- Security headers

### 8.12 Error Handling & Monitoring

#### Error Boundaries

**Next.js App Router Error Handling:**
- `error.tsx` - Route-level error boundaries
- `global-error.tsx` - Root-level error boundary
- `not-found.tsx` - 404 page component

**Error Boundary Implementation:**
```typescript
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

#### 404 Page

**Custom 404 Implementation:**
- Create `app/not-found.tsx` component
- Match brand aesthetic (warm, personal)
- Include navigation back to homepage
- Helpful message: "This page doesn't exist, but I'm here to help"

#### Error Tracking: Sentry

**Integration:**
- Sentry provides excellent Next.js integration
- Free tier available (5,000 events/month)
- Automatic error capture for client and server
- Source maps for production debugging
- Performance monitoring included

**Setup:**
1. Install `@sentry/nextjs` package
2. Run `npx @sentry/wizard@latest -i nextjs`
3. Configure in `sentry.client.config.ts` and `sentry.server.config.ts`
4. Add DSN to environment variables

**Error Types Tracked:**
- Unhandled exceptions
- API route errors
- Form submission failures
- Client-side JavaScript errors
- Server-side rendering errors

#### Form Submission Error Handling

**Client-Side:**
- Validation errors displayed inline
- Network errors show user-friendly message
- Retry mechanism for failed submissions
- Loading states during submission

**Server-Side:**
- API route error handling
- Rate limiting errors
- Email service failures
- Graceful degradation

### 8.13 CI/CD & Deployment

#### Vercel Automatic Deployments

**GitHub Integration:**
1. Connect GitHub repository to Vercel
2. Automatic deployments on push to main branch
3. Preview deployments for all pull requests
4. Branch-specific preview URLs

**Deployment Process:**
1. Code pushed to GitHub
2. Vercel detects changes
3. Runs `pnpm install` and `pnpm build`
4. Deploys to edge network
5. Updates production domain (main branch) or preview URL (PRs)

#### GitHub Actions (Optional)

If additional CI/CD steps needed:
- Run tests before deployment
- Lint and type checking
- Build verification
- Security scanning

**Example Workflow:**
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm type-check
      - run: pnpm test
```

#### Deployment Checklist

Before deploying to production:
- [ ] All tests passing
- [ ] Linting and type checking pass
- [ ] Environment variables configured in Vercel
- [ ] Build completes successfully
- [ ] Preview deployment tested
- [ ] Performance metrics acceptable
- [ ] Error tracking configured
- [ ] Analytics verified

### 8.14 Email Service Integration

#### Resend Integration

**Why Resend:**
- Modern API designed for developers
- Excellent Next.js integration
- Generous free tier (3,000 emails/month)
- Simple React email templates
- Fast delivery and reliable

#### Implementation

**API Route Setup:**
Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact Form Submission from ${data.name}`,
      react: ContactEmailTemplate(data),
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

#### Email Template Design

**Contact Form Notification Email:**
- Professional but warm tone
- Clear structure with all form fields
- Easy to scan and respond to
- Include timestamp and source (website)
- Plain text fallback version

**Email Content Structure:**
```
Subject: New Contact Form Submission from [Name]

Hello Nadia,

You received a new contact form submission:

Name: [Name]
Email: [Email]
Phone: [Phone if provided]

What's bringing them to counselling:
[Message]

Focus areas:
- [Selected areas]

Session preference: [Online/In-person/Either]

Additional notes:
[Notes if provided]

---
Submitted: [Timestamp]
Source: NW Counselling Website
```

#### Notification Setup

- Immediate email notification to Nadia when form submitted
- Confirmation email to user (optional, can be added later)
- Email includes all form data in readable format
- Rate limiting to prevent spam (handled by API route)

### 8.15 Cookie Consent & GDPR

#### Cookie Consent Banner

**Implementation:**
- Privacy-respecting analytics (Plausible/Fathom) may not require consent, but implement banner for transparency
- If using cookie-based analytics, implement consent mechanism
- Simple, non-intrusive banner design matching brand
- Clear explanation of what cookies are used for

**Banner Requirements:**
- Appears on first visit (if cookies used)
- Clear "Accept" and "Decline" options
- Link to privacy policy
- Can be dismissed (remembers preference)
- Stored in localStorage (not a cookie itself)

#### Privacy Policy Integration

**Required Elements:**
- Link to privacy policy in footer (all pages)
- Privacy policy accessible from cookie banner
- Privacy notice on contact form
- Data retention policy clearly stated
- Contact information for data requests

#### GDPR Compliance for Forms

**Contact Form Requirements:**
- Explicit consent checkbox (if storing data beyond email notification)
- Privacy notice link before submit button
- Clear explanation of data usage
- Data retention period stated
- Right to deletion information

**Data Handling:**
- Form submissions sent via email (Resend)
- No permanent storage unless explicitly consented
- User can request data deletion
- Data processed securely (HTTPS, encrypted email)

#### Analytics Consent Handling

**Privacy-First Approach:**
- Use Plausible or Fathom (privacy-respecting, no cookies)
- If cookies required, implement consent before tracking
- Respect "Do Not Track" browser setting
- Provide opt-out mechanism

### 8.16 Code Quality & Development Tools

#### ESLint Configuration

**Next.js Recommended Config:**
```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript"
  ],
  "rules": {
    // Custom rules as needed
  }
}
```

**Additional Plugins:**
- ESLint React Hooks
- ESLint TypeScript
- Tailwind CSS class ordering (optional)

#### Prettier Configuration

**`.prettierrc`:**
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

**Integration:**
- VS Code Prettier extension
- Format on save enabled
- Pre-commit hook (optional) via Husky

#### TypeScript Configuration

**Strict Mode Settings:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### Pre-Commit Hooks (Optional)

**Husky Setup:**
- Run linting before commit
- Run type checking
- Format code with Prettier
- Prevent commits with errors

#### Code Review Guidelines

**Pull Request Requirements:**
- All checks passing (lint, type, tests)
- Code follows project conventions
- No console.logs in production code
- Appropriate error handling
- Accessibility considerations
- Performance impact considered

### 8.17 Image Optimization

#### Next.js Image Component

**Usage:**
Always use Next.js `Image` component instead of `<img>` tag:

```typescript
import Image from 'next/image'

<Image
  src="/images/nadia-wilkinson.jpg"
  alt="Nadia Wilkinson, MBACP registered counsellor"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

**Benefits:**
- Automatic image optimization
- Lazy loading by default
- Responsive images (srcset)
- WebP/AVIF format support
- Reduced layout shift

#### Image Optimization Settings

**`next.config.ts`:**
```typescript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

#### Responsive Image Strategies

**Hero Images:**
- Use `priority` prop for LCP optimization
- Appropriate sizing for viewport
- High quality for hero, optimized for performance

**Content Images:**
- Lazy load below the fold
- Appropriate dimensions (not oversized)
- Alt text always provided

#### Image Formats

**Supported Formats:**
- AVIF (best compression, modern browsers)
- WebP (good compression, wide support)
- JPEG fallback (older browsers)

**Format Selection:**
- Next.js automatically serves best format
- Based on browser support
- No manual format selection needed

#### Image Placeholder Strategy

**Blur Placeholders:**
- Use `placeholder="blur"` with `blurDataURL`
- Improves perceived performance
- Smooth loading experience
- Generated from image or base64 string

### 8.18 Content Management

#### Guide Content Storage

**Approach: Markdown Files in Repository**

**Structure:**
```
/content
  /guides
    adhd.md
    autism.md
    trauma.md
    bereavement.md
    living-with-illness.md
```

**Benefits:**
- Version controlled with code
- Easy to edit (Markdown)
- No CMS overhead
- Fast builds (static generation)
- Full control over content

**Alternative Consideration:**
- If frequent content updates needed, consider headless CMS (Contentful, Sanity)
- For initial launch, Markdown files are recommended

#### Content Update Workflow

**Process:**
1. Edit Markdown file in repository
2. Commit and push to GitHub
3. Vercel automatically rebuilds and deploys
4. Changes live within minutes

**For Non-Technical Users:**
- Markdown is simple to learn
- Can use Markdown editor (Typora, Mark Text)
- Or provide simple editing interface later if needed

#### Version Control for Content

**Git Workflow:**
- All content changes tracked in Git
- Pull requests for content review
- Easy to revert changes
- History of all edits
- Branch strategy for content updates

#### Content Preview/Deployment

**Preview Deployments:**
- Create branch for content changes
- Open pull request
- Preview deployment shows changes
- Review before merging to main
- Automatic deployment on merge

### 8.19 Domain & DNS

#### Domain Registration

**Requirements:**
- Register domain (e.g., `nwcounselling.co.uk`)
- Choose reputable registrar
- Enable auto-renewal
- Privacy protection enabled (if available)

#### DNS Configuration for Vercel

**Vercel Domain Setup:**
1. Add domain in Vercel project settings
2. Vercel provides DNS records to configure
3. Update DNS at domain registrar

**DNS Records:**
- A record or CNAME pointing to Vercel
- Vercel provides exact values
- Propagation takes 24-48 hours typically

#### SSL Certificate

**Automatic via Vercel:**
- Vercel automatically provisions SSL certificates
- Free Let's Encrypt certificates
- Automatic renewal
- HTTPS enforced for all traffic
- No manual configuration needed

#### Custom Domain Setup Process

**Steps:**
1. Purchase/configure domain
2. In Vercel dashboard: Settings → Domains
3. Add custom domain
4. Follow Vercel's DNS configuration instructions
5. Wait for DNS propagation
6. SSL certificate automatically configured
7. Domain verified and active

#### Subdomain Considerations

**Options:**
- `www.nwcounselling.co.uk` (optional)
- Vercel handles both `www` and non-`www`
- Configure redirects as preferred
- SEO considerations: choose one canonical version

### 8.20 Testing Strategy

#### Unit Testing

**Framework: Vitest (Recommended)**
- Fast, Vite-based
- Excellent TypeScript support
- Jest-compatible API
- Good Next.js integration

**What to Test:**
- Utility functions
- Data transformation logic
- Form validation functions
- Helper functions

#### Component Testing

**React Testing Library:**
```typescript
import { render, screen } from '@testing-library/react'
import { Component } from './Component'

test('renders component', () => {
  render(<Component />)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
```

**What to Test:**
- Component rendering
- User interactions
- Form behavior
- Accessibility (via testing-library queries)

#### E2E Testing (Optional)

**Playwright (Recommended):**
- Modern, fast
- Excellent Next.js support
- Cross-browser testing
- Visual regression testing

**Key Test Scenarios:**
- Contact form submission flow
- Navigation between pages
- Mobile responsiveness
- Critical user journeys

#### Form Testing Requirements

**Contact Form Tests:**
- All form steps render correctly
- Validation works as expected
- Submission succeeds
- Error handling displays properly
- Progress indicator updates

#### Accessibility Testing Tools

**Automated:**
- axe DevTools browser extension
- Lighthouse accessibility audit
- WAVE browser extension

**Manual:**
- Keyboard navigation testing
- Screen reader testing (NVDA, VoiceOver)
- Color contrast verification
- Focus management

### 8.21 Version Control Workflow

#### Git Branching Strategy

**Main Branch Workflow:**
- `main` branch for production-ready code
- Feature branches: `feature/description`
- Bug fixes: `fix/description`
- Content updates: `content/description`

**Alternative:**
- `develop` branch for integration (if team grows)
- For solo/small team: `main`-only workflow is sufficient

#### Commit Message Conventions

**Format:**
```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(contact): add multi-step form
fix(guides): correct typo in ADHD guide
docs(readme): update setup instructions
```

#### Pull Request Process

**PR Requirements:**
- Descriptive title and description
- Link to related issue (if applicable)
- Screenshots for UI changes
- All checks passing
- Code review approval
- No merge conflicts

**PR Template:**
- What changed
- Why changed
- How to test
- Screenshots (if UI)

#### Code Review Requirements

**Review Checklist:**
- Code follows project conventions
- No console.logs or debug code
- Appropriate error handling
- Accessibility considered
- Performance impact acceptable
- Tests added/updated (if applicable)
- Documentation updated (if needed)

---

## Appendix A: File Naming Conventions

### Next.js App Router Structure

```
/app
  layout.tsx              # Root layout
  page.tsx                # Homepage (/)
  about/
    page.tsx              # About page (/about)
  guides/
    page.tsx              # Guides hub (/guides)
    adhd/
      page.tsx            # ADHD guide (/guides/adhd)
    autism/
      page.tsx            # Autism guide (/guides/autism)
    [other guides]/
      page.tsx
  contact/
    page.tsx              # Contact form (/contact)
  api/
    contact/
      route.ts            # Contact form API endpoint
  not-found.tsx           # 404 page
  error.tsx               # Error boundary
  global-error.tsx        # Global error boundary

/components
  Header.tsx              # Site header/navigation
  Footer.tsx              # Site footer
  ContactForm.tsx         # Multi-step contact form
  Button.tsx              # Reusable button component
  [ComponentName].tsx     # PascalCase for components

/lib
  utils.ts                # Utility functions
  constants.ts            # Constants and config
  email.ts                # Email service utilities

/types
  index.ts                # TypeScript type definitions
  contact.ts              # Contact form types

/public
  /images
    nadia-wilkinson-counsellor.jpg
    hero-counselling-london.jpg
    icon-connection.svg
    og-homepage.jpg
    og-about.jpg
    og-guides-adhd.jpg
  /fonts                  # If self-hosting fonts
  favicon.ico
  robots.txt
  sitemap.xml

/content
  /guides
    adhd.md               # Markdown content for guides
    autism.md
    trauma.md
    [other guides].md
```

### Naming Conventions

**TypeScript/React Files:**
- Components: `PascalCase.tsx` (e.g., `ContactForm.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `camelCase.ts` or `index.ts` in `/types`
- Pages: `page.tsx` (Next.js convention)
- Layouts: `layout.tsx` (Next.js convention)
- API routes: `route.ts` (Next.js convention)

**Images:**
- Descriptive, lowercase, hyphens: `nadia-wilkinson-counsellor.jpg`
- OG images: `og-[page-name].jpg`
- Icons: `icon-[name].svg`

**CSS/Styling:**
- Tailwind CSS classes (no separate CSS files needed for most cases)
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`

**Content:**
- Markdown files: `kebab-case.md` (e.g., `living-with-illness.md`)
- Frontmatter in Markdown for metadata

**Configuration Files:**
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.env.example` - Environment variables template
- `package.json` - Dependencies and scripts

## Appendix B: Content Checklist

Before publishing any page:

- [ ] H1 present and unique
- [ ] Meta title under 60 characters
- [ ] Meta description 150-160 characters
- [ ] All images have alt text
- [ ] Schema markup implemented and validated
- [ ] Internal links to related content
- [ ] Contact CTA present
- [ ] Mobile responsive
- [ ] Forms tested
- [ ] Spelling and grammar checked
- [ ] Accessibility tested

## Appendix C: Launch Checklist

- [ ] All pages complete and reviewed
- [ ] Contact form tested end-to-end
- [ ] Schema validated (Google Rich Results Test)
- [ ] Mobile testing on real devices
- [ ] Performance tested (Lighthouse)
- [ ] SSL certificate active
- [ ] Analytics installed
- [ ] Google Search Console verified
- [ ] XML sitemap submitted
- [ ] Google Business Profile updated
- [ ] Social sharing images set
- [ ] 404 page created
- [ ] Privacy policy published
- [ ] Old site redirects configured (if applicable)

---

*End of specification document.*

*This document should provide everything needed to design and build the NW Counselling website. All visual decisions, content structure, SEO strategy, and technical requirements are contained within.*
