export const SITE_CONFIG = {
  name: 'NW Counselling',
  tagline: 'Online counselling for adults across the UK',
  email: 'nadia@nwcounselling.co.uk',
  phone: '',
  address: {
    locality: 'London',
    region: 'Greater London',
    country: 'GB',
  },
  credentials: 'BACP Member #394901',
  sessionLength: '50 minutes',
  sessionFee: '£80',
  url: 'https://www.nwcounselling.co.uk',
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/guides', label: 'Guides' },
] as const

export const SPECIALISMS = [
  { id: 'anxiety', label: 'Anxiety or low mood' },
  { id: 'life-change', label: 'A major life change' },
  { id: 'adhd-autism', label: 'Autism or ADHD' },
  { id: 'trauma', label: 'Trauma' },
  { id: 'bereavement', label: 'Bereavement or loss' },
  { id: 'health', label: 'Living with a health condition' },
  { id: 'relationships', label: 'Relationship or family difficulties' },
  { id: 'other', label: 'Something else' },
] as const

export const SESSION_PREFERENCES = [
  { id: 'online', label: 'Online (Zoom or Google Meet)' },
] as const

export const GUIDES = [
  {
    slug: 'understanding-adhd-guide',
    title: 'Adult ADHD Guide: Signs, Late Diagnosis & Emotional Impact',
    description: 'What does ADHD actually feel like? A clear guide to adult ADHD signs, late diagnosis, emotional struggles, and how counselling can help.',
    readingTime: '8 min read',
  },
  {
    slug: 'autism',
    title: 'Understanding Autism',
    description: 'Exploring autism in adults, particularly late diagnosis, and navigating life with a new understanding of yourself.',
    readingTime: '14 min read',
  },
  {
    slug: 'trauma',
    title: 'Working Through Trauma',
    description: 'Understanding trauma responses—past and recent—and how therapy can support healing.',
    readingTime: '10 min read',
  },
  {
    slug: 'bereavement',
    title: 'Grief & Bereavement',
    description: 'Navigating loss, grief, and the complex emotions that come with bereavement.',
    readingTime: '11 min read',
  },
  {
    slug: 'living-with-illness',
    title: 'Living with Illness',
    description: 'Finding support when living with chronic illness or a new health diagnosis.',
    readingTime: '9 min read',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'Is my problem or issue bad enough to need counselling?',
    answer: "If something is bothering you, that's enough. You don't need to be in crisis—counselling can simply be a space to reflect, explore patterns, and make life feel a bit more fulfilling.",
  },
  {
    question: 'How is counselling different to talking with a friend or family member?',
    answer: "The session is entirely focused on you. Unlike conversations with friends, there's no advice-giving or judgement—just space to explore what's on your mind with someone trained to listen.",
  },
  {
    question: 'Will you give me advice and tell me what to do?',
    answer: "No. I believe you know what's best for you. My role is to help you explore your thoughts and feelings so your own way forward becomes clearer.",
  },
  {
    question: 'What if I feel it\'s not working or making any difference?',
    answer: "Tell me honestly. We can talk about what's not working and find the best path forward together—whether that's adjusting our approach or helping you find different support.",
  },
] as const
