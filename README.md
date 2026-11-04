# Site Shobukan

Site vitrine de [Shobukan](https://shobukan.djabelsolutions.fr), construit avec [Astro](https://astro.build) et publié sur GitHub Pages.

## Travailler sur le site

```bash
npm install      # une fois
npm run dev      # aperçu local sur http://localhost:4321
npm run build    # génère le site final dans dist/
```

Chaque push sur `main` construit et publie le site automatiquement
(`.github/workflows/deploy.yml`), puis prévient Bing via IndexNow.

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un prix, un lien store, un réseau social, le nombre de joueurs | `src/data/product.ts` (source unique : pages, JSON-LD et `llms.txt` suivent) |
| Les textes de l'accueil | `src/components/HomePage.astro` (FR et EN au même endroit) |
| La page Prix | `src/components/PricingPage.astro` |
| La page Undercover | `src/components/UndercoverPage.astro` |
| Les questions des quiz web | `src/data/quiz-fr.json` et `src/data/quiz-en.json` |
| Le header, le footer, les boutons stores | `src/components/` |
| Les couleurs, les polices | `src/styles/global.css` |
| Confidentialité, CGU, suppression de compte | `public/privacy/`, `public/terms/`, `public/account-deletion/` (HTML brut) |

La fiche produit de référence est dans `docs/produit.md` : tout texte public
(site, stores, annuaires, presse) doit rester cohérent avec elle.

## Fichiers à ne pas casser

- `public/.well-known/apple-app-site-association` : liens d'invitation iOS.
- `src/pages/404.astro` : affiche aussi les invitations `/join/CODE`.
- `public/CNAME` : le nom de domaine.
- `public/aea40d54f8e080aad7444dbc0fd0f931.txt` : la clé IndexNow.

## Chiffres par univers (pages quiz, tuiles)

Les compteurs par univers (questions par difficulté, paires Undercover,
personnages Anime Grid) viennent de `src/data/stats.json`. Pour les mettre à
jour après un import de contenu dans l'app :

```bash
python3 scripts/build-stats.py ../shobukan-app/scripts/csv
```

Les kanji décoratifs des tuiles sont stockés en contours SVG dans
`src/data/kanji.ts` (aucune police japonaise n'est chargée par le visiteur).

## Textes légaux (CGU, confidentialité)

Les pages `/terms/`, `/privacy/` (et `/en/…`) affichent les textes de l'app,
copiés dans `src/data/legal.json`. Après une modification des textes légaux
dans l'app :

```bash
python3 scripts/sync-legal.py ../shobukan-app
```

La page `/account-deletion/` est propre au site (exigence Google Play) :
son texte est dans `src/components/LegalPage.astro`.
