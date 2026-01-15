import { SITE_CONFIG, FAQ_ITEMS } from './constants'

const baseUrl = SITE_CONFIG.url

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'additionalType': 'https://schema.org/MedicalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'NW Counselling',
    description:
      'Private online counselling practice offering therapy for adults across the UK. Specialising in anxiety, ADHD, autism, trauma, and bereavement.',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: `${baseUrl}/images/nadia-wilkinson.jpg`,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
      description: 'Online sessions available nationwide',
    },
    serviceType: ['Counselling', 'Psychotherapy', 'Talk Therapy', 'Online Therapy'],
    priceRange: '££',
    openingHours: ['Mo 09:00-18:00', 'Tu 09:00-18:00', 'Th 09:00-18:00'],
    founder: {
      '@type': 'Person',
      '@id': `${baseUrl}/#nadia`,
      name: 'Nadia Wilkinson',
      jobTitle: 'Counsellor',
      description:
        'MBACP registered counsellor specialising in anxiety, ADHD, autism, trauma, and bereavement.',
      memberOf: {
        '@type': 'Organization',
        name: 'British Association for Counselling and Psychotherapy',
        alternateName: 'BACP',
      },
    },
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#nadia`,
    name: 'Nadia Wilkinson',
    givenName: 'Nadia',
    familyName: 'Wilkinson',
    jobTitle: 'Counsellor',
    description:
      'MBACP registered counsellor offering online therapy across the UK, specialising in anxiety, ADHD, autism, trauma, and bereavement support for adults.',
    url: `${baseUrl}/about`,
    image: `${baseUrl}/images/nadia-wilkinson.jpg`,
    email: SITE_CONFIG.email,
    worksFor: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business`,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'MBACP Registration',
      recognizedBy: {
        '@type': 'Organization',
        name: 'British Association for Counselling and Psychotherapy',
      },
    },
    knowsAbout: [
      'Counselling',
      'Anxiety',
      'ADHD',
      'Autism',
      'Trauma',
      'Bereavement',
      'Person-centred therapy',
      'Online therapy',
    ],
  }
}

export function getArticleSchema(guide: {
  title: string
  description: string
  slug: string
  readingTime: string
}) {
  const wordCount = parseInt(guide.readingTime) * 200 // Approximate words from reading time

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${guide.title}: A Comprehensive Guide`,
    description: guide.description,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/#nadia`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#business`,
    },
    datePublished: '2026-01-15',
    dateModified: '2026-01-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/guides/${guide.slug}`,
    },
    articleSection: 'Mental Health Guides',
    keywords: getGuideKeywords(guide.slug),
    wordCount,
    timeRequired: `PT${parseInt(guide.readingTime)}M`,
  }
}

function getGuideKeywords(slug: string): string[] {
  const keywordMap: Record<string, string[]> = {
    adhd: ['ADHD', 'ADHD in adults', 'ADHD counselling', 'ADHD therapy', 'adult ADHD', 'late ADHD diagnosis'],
    autism: ['Autism', 'autism in adults', 'autism counselling', 'late autism diagnosis', 'autistic adults'],
    trauma: ['Trauma', 'trauma therapy', 'trauma counselling', 'PTSD', 'complex trauma'],
    bereavement: ['Grief', 'bereavement', 'grief counselling', 'bereavement support', 'loss'],
    'living-with-illness': ['Chronic illness', 'health diagnosis', 'illness counselling', 'chronic health'],
  }
  return keywordMap[slug] || []
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Counselling',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business`,
    },
    name: 'Online Counselling Sessions',
    description:
      '50-minute one-to-one online counselling sessions via Zoom or Google Meet, available across the UK.',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Counselling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Online Counselling Session',
            description: '50-minute session via Zoom or Google Meet',
          },
        },
      ],
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
