import fs from 'fs'
import path from 'path'
import sanitizeHtml from 'sanitize-html'
import { GUIDES } from './constants'

export function getGuideContent(slug: string): string | null {
  try {
    const filePath = path.join(process.cwd(), 'content', 'guides', `${slug}.md`)
    const content = fs.readFileSync(filePath, 'utf8')
    return content
  } catch {
    return null
  }
}

export function getGuideBySlug(slug: string) {
  const guide = GUIDES.find((g) => g.slug === slug)
  if (!guide) return null

  const content = getGuideContent(slug)
  return {
    ...guide,
    content,
    lastUpdated: 'January 2026',
  }
}

export function getAllGuideSlugs() {
  return GUIDES.map((guide) => guide.slug)
}

// Sanitization config for guide content
const sanitizeConfig: sanitizeHtml.IOptions = {
  allowedTags: ['h2', 'h3', 'p', 'ul', 'li', 'strong', 'em', 'hr', 'div', 'span'],
  allowedAttributes: {
    '*': ['class', 'style'],
    'div': ['class', 'style', 'data-diagram'],
  },
  allowedStyles: {
    '*': {
      'font-family': [/.*/],
      'font-weight': [/.*/],
    },
  },
}

// Simple markdown to HTML parser for basic formatting
export function parseMarkdown(markdown: string): string {
  let html = markdown

  // Remove the first h1 (we render it separately)
  html = html.replace(/^# .+\n\n/, '')

  // Convert diagram comment markers to class-based divs that survive sanitization
  html = html.replace(
    /<!--\s*DIAGRAM:\s*chemistry\s*-->/gi,
    '<div class="__DIAGRAM_CHEMISTRY__"></div>'
  )
  html = html.replace(
    /<!--\s*DIAGRAM:\s*iceberg\s*-->/gi,
    '<div class="__DIAGRAM_ICEBERG__"></div>'
  )

  // Headers (mt-12 for spacing between sections)
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mb-3 mt-8" style="font-family: DM Sans, sans-serif">$1</h3>')
  
  // First, replace all h2s with a placeholder that has margin
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl md:text-3xl mb-4 mt-12" style="font-family: Cormorant Garamond, Georgia, serif; font-weight: 300">$1</h2>')
  
  // Then, remove the margin from the first h2 (appears after removing the h1)
  html = html.replace(
    /<h2 class="text-2xl md:text-3xl mb-4 mt-12"/,
    '<h2 class="text-2xl md:text-3xl mb-4"'
  )

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 mb-2">$1</li>')
  html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul class="list-disc mb-6 text-muted-brown">$&</ul>')

  // Paragraphs
  html = html.replace(/^(?!<[hulo]|---)([\w""'\[].*?)$/gm, '<p class="mb-4 text-muted-brown leading-relaxed">$1</p>')

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-12 border-sage-mist/50" />')

  // Clean up empty paragraphs
  html = html.replace(/<p[^>]*>\s*<\/p>/g, '')

  // Sanitize HTML to prevent XSS attacks
  return sanitizeHtml(html, sanitizeConfig)
}
