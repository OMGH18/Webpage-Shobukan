// Source de vérité du site : tous les faits publics sur Shobukan viennent d'ici
// (pages, JSON-LD, llms.txt). Si un chiffre change, on le change ici d'abord,
// puis dans docs/produit.md et sur les stores.

import stats from './stats.json'

export const SITE = 'https://shobukan.djabelsolutions.fr'

export const APP_STORE_ID = '6778133739'

export const STORES = {
  iosFr: `https://apps.apple.com/fr/app/shobukan-jeu-multi-anime/id${APP_STORE_ID}`,
  ios: `https://apps.apple.com/app/id${APP_STORE_ID}`,
  android: 'https://play.google.com/store/apps/details?id=com.shobukan.app',
} as const

/** Lien Google Play tracé : la source apparaît dans la Play Console. */
export function androidLink(medium: string): string {
  return `${STORES.android}&referrer=${encodeURIComponent(`utm_source=site&utm_medium=${medium}`)}`
}

export function iosLink(lang: Lang): string {
  return lang === 'fr' ? STORES.iosFr : STORES.ios
}

export const SOCIALS = {
  tiktokFr: 'https://www.tiktok.com/@shobukan.app',
  tiktokEn: 'https://www.tiktok.com/@shobukangame',
  instagram: 'https://www.instagram.com/shobukan.app/',
} as const

export const PUBLISHER = {
  name: 'Djabel Solutions',
  email: 'support@djabelsolutions.fr',
  country: 'FR',
} as const

/** Prix de référence en France (identiques sur iOS et Android). */
export const PRICES = {
  monthly: 10,
  yearly: 90,
  yearlyPerMonth: 7.5,
  creatorCredit: 1.99,
  /** Packs de cartes du Mode Histoire (achat unique, accès à vie) : 2,99 € à 4,99 €. */
  storyPackFrom: 2.99,
  freeHostedGames: 5,
} as const

/** Volume de contenu dans l'app (arrondi vers le bas pour rester vrai). */
export const CONTENT = {
  questions: { fr: 2000, en: 1300 },
  wordPairs: { fr: 250, en: 300 },
} as const

export const PLAYERS = { min: 1, max: 12, undercoverMin: 3, undercoverMax: 8, quizMax: 12 } as const

export type Lang = 'fr' | 'en'

export interface Universe {
  id: string
  /** Segment d'URL des pages quiz FR. */
  slug: string
  /** Segment d'URL des pages quiz EN, si différent. */
  slugEn?: string
  fr: string
  en: string
  /** Kanji décoratif affiché en filigrane sur les tuiles. */
  kanji: string
  /** Dégradé repris de l'app (lib/content/universeArt.ts). */
  colors: readonly [string, string, string]
}

export const UNIVERSES: readonly Universe[] = [
  { id: 'naruto', kanji: '忍', slug: 'naruto', fr: 'Naruto', en: 'Naruto', colors: ['#FFB34F', '#E57E32', '#AC4F29'] },
  { id: 'one_piece', kanji: '海', slug: 'one-piece', fr: 'One Piece', en: 'One Piece', colors: ['#75B9E0', '#428FBF', '#245B89'] },
  { id: 'dragon_ball', kanji: '龍', slug: 'dragon-ball', fr: 'Dragon Ball', en: 'Dragon Ball', colors: ['#FFE782', '#EFB754', '#DC7D42'] },
  { id: 'my_hero_academia', kanji: '個', slug: 'my-hero-academia', fr: 'My Hero Academia', en: 'My Hero Academia', colors: ['#9BE9A9', '#368E6D', '#1D5871'] },
  { id: 'bleach', kanji: '魂', slug: 'bleach', fr: 'Bleach', en: 'Bleach', colors: ['#FA796F', '#D83D4C', '#96243D'] },
  { id: 'jujutsu_kaisen', kanji: '呪', slug: 'jujutsu-kaisen', fr: 'Jujutsu Kaisen', en: 'Jujutsu Kaisen', colors: ['#AE96EC', '#7052AF', '#414D92'] },
  { id: 'demon_slayer', kanji: '刃', slug: 'demon-slayer', fr: 'Demon Slayer', en: 'Demon Slayer', colors: ['#65C7B2', '#2D8C7A', '#235262'] },
  { id: 'attack_on_titan', kanji: '巨', slug: 'attaque-des-titans', slugEn: 'attack-on-titan', fr: "L'Attaque des Titans", en: 'Attack on Titan', colors: ['#D5CAA1', '#A99A70', '#8C755B'] },
  { id: 'hunter_x_hunter', kanji: '念', slug: 'hunter-x-hunter', fr: 'Hunter x Hunter', en: 'Hunter x Hunter', colors: ['#8ED982', '#52976F', '#68509F'] },
  { id: 'death_note', kanji: '神', slug: 'death-note', fr: 'Death Note', en: 'Death Note', colors: ['#DE5961', '#A22C3D', '#622033'] },
  { id: 'jojo', kanji: '奇', slug: 'jojo', fr: 'JoJo', en: "JoJo's Bizarre Adventure", colors: ['#F6D18C', '#D786B1', '#AB76B8'] },
  { id: 'fullmetal_alchemist', kanji: '鋼', slug: 'fullmetal-alchemist', fr: 'Fullmetal Alchemist', en: 'Fullmetal Alchemist', colors: ['#E78B76', '#B14C4F', '#6D3654'] },
  { id: 'chainsaw_man', kanji: '悪', slug: 'chainsaw-man', fr: 'Chainsaw Man', en: 'Chainsaw Man', colors: ['#F3AC5D', '#C3693D', '#844B44'] },
  { id: 'one_punch_man', kanji: '拳', slug: 'one-punch-man', fr: 'One Punch Man', en: 'One Punch Man', colors: ['#FFE989', '#DAAD46', '#BC6245'] },
  { id: 'spy_x_family', kanji: '家', slug: 'spy-x-family', fr: 'Spy x Family', en: 'Spy x Family', colors: ['#F5B9CF', '#C279A1', '#6D8B91'] },
  { id: 'tokyo_ghoul', kanji: '喰', slug: 'tokyo-ghoul', fr: 'Tokyo Ghoul', en: 'Tokyo Ghoul', colors: ['#D58DB9', '#A44D84', '#5D477F'] },
  { id: 'black_clover', kanji: '葉', slug: 'black-clover', fr: 'Black Clover', en: 'Black Clover', colors: ['#91C894', '#4F976F', '#376F6A'] },
  { id: 'kingdom', kanji: '王', slug: 'kingdom', fr: 'Kingdom', en: 'Kingdom', colors: ['#DFC287', '#B58B50', '#946044'] },
]

export function quizPath(u: Universe, lang: Lang): string {
  return lang === 'fr' ? `/quiz/${u.slug}/` : `/en/quiz/${u.slugEn ?? u.slug}/`
}

export function universeName(u: Universe, lang: Lang): string {
  return lang === 'fr' ? u.fr : u.en
}

export function formatPrice(value: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-IE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value)
}


export interface UniverseStats {
  easy: number
  medium: number
  hard: number
  /** Total de questions quiz actives dans l'app. */
  questions: number
  /** Paires de mots Undercover. */
  pairs: number
  /** Personnages jouables dans l'Anime Grid (0 si l'univers n'y est pas). */
  grid: number
}

/** Volume de contenu de l'app pour un univers (src/data/stats.json, régénéré par scripts/build-stats.py). */
export function universeStats(u: Universe, lang: Lang): UniverseStats {
  const s = (stats as Record<string, { grid: number; fr?: Record<string, number>; en?: Record<string, number> }>)[u.id]
  const d = s?.[lang] ?? { easy: 0, medium: 0, hard: 0, pairs: 0 }
  return { easy: d.easy, medium: d.medium, hard: d.hard, questions: d.easy + d.medium + d.hard, pairs: d.pairs, grid: s?.grid ?? 0 }
}
