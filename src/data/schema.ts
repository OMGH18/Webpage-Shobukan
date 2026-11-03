// Données structurées (JSON-LD) partagées. Les @id permettent aux pages de
// référencer l'organisation et l'app sans tout redéclarer.
import { PLAYERS, PRICES, PUBLISHER, SITE, SOCIALS, STORES, UNIVERSES, type Lang } from './product'

export const ORG_ID = `${SITE}/#org`
export const APP_ID = `${SITE}/#app`
export const WEBSITE_ID = `${SITE}/#website`

export function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: PUBLISHER.name,
    url: `${SITE}/`,
    logo: `${SITE}/assets/icon-512.png`,
    email: PUBLISHER.email,
    sameAs: [SOCIALS.tiktokFr, SOCIALS.tiktokEn, SOCIALS.instagram],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: PUBLISHER.email,
      availableLanguage: ['fr', 'en'],
    },
  }
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Shobukan',
    url: `${SITE}/`,
    inLanguage: ['fr', 'en'],
    publisher: { '@id': ORG_ID },
  }
}

export function app(lang: Lang) {
  const fr = lang === 'fr'
  return {
    '@type': ['MobileApplication', 'VideoGame'],
    '@id': APP_ID,
    name: 'Shobukan',
    alternateName: 'Shobukan - Jeu multi anime',
    description: fr
      ? `Jeu mobile de soirée sur le thème du manga et de l'anime : Undercover, Otaku Quiz (solo, même téléphone ou en ligne), Anime Grid quotidienne, mode Expédition et packs personnalisés, sur ${UNIVERSES.length} univers manga.`
      : `Mobile party game about manga and anime: Undercover, Otaku Quiz (solo, same phone or online), a daily Anime Grid, an Expedition mode and custom packs, across ${UNIVERSES.length} manga universes.`,
    url: `${SITE}/`,
    image: `${SITE}/assets/icon-512.png`,
    operatingSystem: 'iOS, Android',
    applicationCategory: 'GameApplication',
    applicationSubCategory: fr ? 'Party game, Quiz' : 'Party game, Trivia',
    genre: fr ? ['Party game', 'Quiz', 'Jeu de déduction'] : ['Party game', 'Trivia', 'Social deduction'],
    gamePlatform: ['iOS', 'Android'],
    playMode: ['SinglePlayer', 'MultiPlayer'],
    numberOfPlayers: { '@type': 'QuantitativeValue', minValue: PLAYERS.min, maxValue: PLAYERS.max },
    inLanguage: ['fr', 'en'],
    isAccessibleForFree: true,
    offers: [
      { '@type': 'Offer', name: fr ? 'Gratuit (avec publicités)' : 'Free (ad-supported)', price: '0', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: fr ? 'Premium mensuel' : 'Premium monthly', price: PRICES.monthly.toFixed(2), priceCurrency: 'EUR', url: `${SITE}${fr ? '/prix/' : '/en/pricing/'}` },
      { '@type': 'Offer', name: fr ? 'Premium annuel' : 'Premium yearly', price: PRICES.yearly.toFixed(2), priceCurrency: 'EUR', url: `${SITE}${fr ? '/prix/' : '/en/pricing/'}` },
    ],
    downloadUrl: [STORES.ios, STORES.android],
    sameAs: [STORES.ios, STORES.android],
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
  }
}

export function faqPage(id: string, items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  }
}

export function webPage(path: string, name: string, lang: Lang) {
  return {
    '@type': 'WebPage',
    '@id': `${SITE}${path}#webpage`,
    url: `${SITE}${path}`,
    name,
    inLanguage: lang,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': APP_ID },
  }
}
