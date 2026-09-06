# $MISHKA · Community landing page

Bilingual static landing-page source for the MISHKA community on TON, with project
information, photo and video galleries, and references to community transparency material.
The original Russian and English product content is preserved.

**Status:** static frontend source. The page describes a charity-oriented initiative;
this repository does not independently verify donations, transaction routing, receipts,
beneficiaries, or the current operation of the token and external channels.

## Implementation highlights

- HTML / CSS / vanilla JavaScript with RU and EN dictionaries and a language switcher.
- Language detection and persistence using `localStorage` key `mishka.lang`.
- Contract copy control, lightbox, sticky navigation, and scroll-reveal behavior.
- Local video files and posters with viewport-aware preloading / playback.
- Responsive layout, browser media APIs, and lazy-loaded gallery images.

## Source map

| File | Responsibility |
| --- | --- |
| [index.html](index.html) | Page structure, media references, and translation attributes |
| [styles.css](styles.css) | Cream-and-gold visual system and responsive layout |
| [i18n.js](i18n.js) | RU / EN dictionaries, language detection, and persistence |
| [script.js](script.js) | Copy control, lightbox, media behavior, and navigation |
| [assets/](assets/) | Mascot / gallery images, video files, posters, favicon, and receipt image |

## Local preview

Requirements: Python 3 and a modern browser. From the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. There is no package installation or build step.
If Node.js is already installed, `npx serve .` is an alternative that may download a package.
Use localhost or HTTPS for clipboard checks; video behavior also depends on browser autoplay policy.

## Content maintenance

- Edit both `I18N.ru` and `I18N.en` in `i18n.js` when changing translated copy.
- For an additional locale, copy a dictionary, translate its values, add a `data-lang`
  button, and register its language code in `SUPPORTED`.
- Keep the local `v1..v4.mp4` files and matching JPG posters aligned with their cards.
- Update the `?v=N` query versions in `index.html` when publishing changed JS / CSS.
- Preserve media attribution. Review personal information in receipt imagery before redistribution;
  the existing receipt asset is retained by this documentation-only change.

## Hosting reference

The deployable artifact is the static directory and `assets/`. Existing options include
GitHub Pages (branch `main`, root directory), Netlify (empty build command, publish `.`),
Vercel (static / Other preset), or an existing nginx static directory.
For nginx, retain `index.html` as the index and preserve video / image paths; configure
cache policy to match asset versioning. Deployment settings and live availability need separate verification.

## Community and contract references

[Telegram](https://t.me/mishka_charity) · [X](https://x.com/mishka_charity) ·
[Existing TON contract reference](https://tonviewer.com/EQBuwtx2m-F6_niT6r5UD4xjD0j6__nOohNKlb3U-gKybuZb).
These links preserve the original project references; they are not validation of financial claims.

## Existing risk notice

> `$MISHKA` — мем-токен с благотворительной механикой. Сайт **не является инвестиционным предложением**. Покупать стоит только то, что готов потерять — лучше относиться к этому как к донату.

## Verification and rights

Documentation checks cover local references, entrypoints, and JavaScript syntax. There is no
automated test suite or deployment workflow. Browser / device QA, hosted availability, and
financial or charity verification are outside this pass. Photos, video, branding, and Google Fonts
retain their owners' rights; the repository does not contain a separate license file.
