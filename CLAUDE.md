# Regole permanenti per i siti web

- Ogni sito viene caricato su **GitHub** e pubblicato con **Cloudflare** (Pages o Workers static assets). Il deploy non deve MAI dare errori.
- Mantieni sempre una cartella `dist/` pronta per la pubblicazione, senza passaggi di build:
  - `index.html` (sorgente DC con `lang="it"`, meta SEO/Open Graph/JSON-LD statici in `<head>`, fallback `<noscript>`) + `support.js`
  - `_headers` (HSTS, CSP compatibile con unpkg/Google Fonts/Maps, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy, cache)
  - `robots.txt`, `sitemap.xml`, `404.html`, `site.webmanifest`, `.well-known/security.txt`, `assets/` con tutte le immagini referenziate
  - `package.json` nella root con script `build` che non fa nulla (Cloudflare può lanciare `npm run build`)
  - `wrangler.toml` nella root (`[assets] directory = "./dist"`) e `DEPLOY.md` con le istruzioni
- Dopo ogni modifica al sorgente `.dc.html`, rigenera `dist/index.html` e verifica che ogni file referenziato esista in `dist/`.

## Checklist deploy Cloudflare (errori già incontrati — non ripeterli)
- **`package.json` OBBLIGATORIO nella root**: Cloudflare lancia `npm run build` di default; senza `package.json` il build fallisce con `ENOENT ... package.json`. Lo script `build` deve solo verificare che `dist/` sia completa (nessuna dipendenza, nessun `npm install` necessario).
- Il `name` in `wrangler.toml` deve coincidere con il nome del Worker su Cloudflare.
- Impostazioni Pages: preset None · build command `npm run build` (o vuoto) · output directory `dist`. Workers: deploy command `npx wrangler deploy`.
- NON mettere `<noscript>` dentro `<body>` del DC: il runtime lo mostra come testo grezzo. Fallback statico = `<div id="nojs">` dopo `</x-dc>`, nascosto con `html.js #nojs{display:none}` + script inline in `<head>`.
- Non usare `super_inline_html` per `dist/index.html` (genera blob: e template non indicizzabili): copia il sorgente con helmet spostato in `<head>` + `support.js` accanto.
- Prima di consegnare: elenca i file in `dist/` e controlla che ogni `src`/`href` locale esista.
- Niente placeholder visibili in produzione (niente image-slot vuoti): usa fallback grafici curati.
- Sempre: responsive mobile/desktop (menu mobile), accessibilità (focus visibile, reduced-motion, alt), testi in italiano corretti senza refusi né overflow, pagine legali (privacy GDPR, cookie, note legali), SEO e sicurezza.
- Stile preferito: moderno, serio e professionale "tipo Apple", animazioni eleganti (reveal con blur, intro iniziale), colori del brand.

# Progetto Pirotecnica Enea
- Sorgente attuale: `Pirotecnica Enea v2.dc.html` → `dist/index.html`
- Brand: giallo #FFD62E, rosso #C8090F, blu #1F2FA8. Font: Instrument Serif + SF/Helvetica.
- Sedi: Via Enrico Fermi 3b, Campoleone, 00040 Lanuvio (RM) · Via Marco Aurelio 26, 04011 Aprilia (LT)
- Tel 320 670 8992 · 06 937 43 01 · P.IVA 11139091000 · Instagram @pirotecnica.enea
