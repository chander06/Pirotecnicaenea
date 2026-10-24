# Deploy — Pirotecnica Enea

Il sito pubblicato è **solo la cartella `dist/`**. I file `.dc.html` nella root sono i sorgenti di design.

## Cloudflare Pages (da GitHub)
1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → scegli il repo.
2. Framework preset: **None** · Build command: **(vuoto)** oppure `npm run build` (verifica soltanto che dist/ sia completa) · Build output directory: **dist**
3. Deploy, poi Custom domains → `pirotecnicaenea.com` (redirect `www` → dominio principale con una Redirect Rule).

## Cloudflare Workers (da GitHub)
Create → Import a repository → nessun build command, deploy command `npx wrangler deploy` (usa `wrangler.toml`, assets = `./dist`).

## Contenuto di dist/
- index.html — sito (SEO, Open Graph, JSON-LD, fallback noscript) · support.js — runtime
- _headers — sicurezza (HSTS, CSP, X-Frame-Options…) e cache
- robots.txt · sitemap.xml · 404.html · site.webmanifest · .well-known/security.txt · assets/

## Foto prodotti
Carica le immagini in `dist/assets/prodotti/` e imposta `photo:'assets/prodotti/nome.jpg'` nel sorgente, poi rigenera dist.
