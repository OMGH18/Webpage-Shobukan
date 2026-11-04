import type { Lang } from '../data/product'

// Textes partagés entre les pages (header, footer, boutons stores).
export const ui = {
  fr: {
    skip: 'Aller au contenu',
    nav: { modes: 'Modes', quiz: 'Quiz manga', undercover: 'Undercover', pricing: 'Prix', download: 'Télécharger' },
    navLabel: 'Navigation principale',
    langSwitch: 'English',
    stores: {
      iosSmall: "Télécharger dans l'",
      iosBig: 'App Store',
      androidSmall: 'Disponible sur',
      androidBig: 'Google Play',
      note: 'Gratuit · iPhone & Android · Français et anglais',
    },
    footer: {
      tagline: 'Le party game manga, entre amis.',
      game: 'Le jeu',
      help: 'Aide',
      follow: 'Suivre Shobukan',
      privacy: 'Confidentialité',
      terms: "Conditions d'utilisation",
      deletion: 'Suppression de compte',
      contact: 'Contact',
      legal:
        "Shobukan est un jeu de culture manga indépendant, édité par Djabel Solutions. Il n'est affilié, sponsorisé ni approuvé par aucun éditeur de manga ou d'anime. Les noms d'œuvres et de personnages cités appartiennent à leurs ayants droit respectifs.",
    },
    cta: {
      title: 'Ta prochaine soirée manga commence ici.',
      body: 'Télécharge Shobukan gratuitement et lance ta première partie en moins d’une minute.',
    },
  },
  en: {
    skip: 'Skip to content',
    nav: { modes: 'Modes', quiz: 'Anime quiz', undercover: 'Undercover', pricing: 'Pricing', download: 'Download' },
    navLabel: 'Main navigation',
    langSwitch: 'Français',
    stores: {
      iosSmall: 'Download on the',
      iosBig: 'App Store',
      androidSmall: 'Get it on',
      androidBig: 'Google Play',
      note: 'Free · iPhone & Android · English and French',
    },
    footer: {
      tagline: 'The manga party game for friends.',
      game: 'The game',
      help: 'Help',
      follow: 'Follow Shobukan',
      privacy: 'Privacy',
      terms: 'Terms of use',
      deletion: 'Account deletion',
      contact: 'Contact',
      legal:
        'Shobukan is an independent manga trivia game published by Djabel Solutions. It is not affiliated with, sponsored or endorsed by any manga or anime publisher. Titles and character names belong to their respective owners.',
    },
    cta: {
      title: 'Your next anime night starts here.',
      body: 'Download Shobukan for free and start your first game in under a minute.',
    },
  },
} as const

export function t(lang: Lang) {
  return ui[lang]
}

/** Équivalences FR ⇄ EN des pages qui existent dans les deux langues. */
export const ROUTES = {
  home: { fr: '/', en: '/en/' },
  pricing: { fr: '/prix/', en: '/en/pricing/' },
  undercover: { fr: '/undercover-manga/', en: '/en/undercover-anime/' },
  quiz: { fr: '/quiz/', en: '/en/quiz/' },
} as const
