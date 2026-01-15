'use client'

import ADHDChemistry from '@/components/diagrams/ADHDChemistry'
import ADHDIceberg from '@/components/diagrams/ADHDIceberg'

interface GuideContentProps {
  htmlContent: string
  slug: string
}

export default function GuideContent({ htmlContent, slug }: GuideContentProps) {
  // For the ADHD guide, we insert diagrams at specific placeholder markers
  if (slug === 'understanding-adhd-guide') {
    // Split content at diagram placeholder divs (using class-based markers)
    const parts = htmlContent.split(/<div class="(__DIAGRAM_CHEMISTRY__|__DIAGRAM_ICEBERG__)"><\/div>/i)
    
    return (
      <article className="prose prose-lg max-w-none">
        {parts.map((part, index) => {
          // Check if this part is a diagram marker
          if (part === '__DIAGRAM_CHEMISTRY__') {
            return <ADHDChemistry key={`diagram-${index}`} />
          }
          if (part === '__DIAGRAM_ICEBERG__') {
            return <ADHDIceberg key={`diagram-${index}`} />
          }
          // Regular HTML content
          if (part.trim()) {
            return (
              <div 
                key={`content-${index}`}
                dangerouslySetInnerHTML={{ __html: part }} 
              />
            )
          }
          return null
        })}
      </article>
    )
  }

  // Default: render content without diagrams
  return (
    <article
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
