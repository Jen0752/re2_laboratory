import { CATEGORIES } from '../data/markers'

const SPRITE_BASE = './re2_map_laboratory_ui/sprites'

// Unique categories (dedup by id)
const SPRITE_SHEETS = [...new Set(CATEGORIES.map(cat => `${SPRITE_BASE}/${cat.id}.webp`))]

export function preloadFilterIcons(): void {
  SPRITE_SHEETS.forEach(sheetPath => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = sheetPath
    document.head.appendChild(link)
  })
}
