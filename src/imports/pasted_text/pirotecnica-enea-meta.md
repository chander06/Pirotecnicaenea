# Metadati SEO e Schema.org per Pirotecnica Enea

## TASK 1 — META TAGS & STRUCTURED DATA

### Meta Tags da aggiungere in `<head>`

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.pirotecnicaenea.com/">
<meta property="og:title" content="Pirotecnica Enea | Fuochi d'Artificio Professionali in Italia">
<meta property="og:description" content="Spettacoli pirotecnici professionali per matrimoni, eventi aziendali e celebrazioni in tutta Italia. Oltre 30 anni di esperienza. Preventivo gratuito.">
<meta property="og:image" content="https://www.pirotecnicaenea.com/og-image.jpg">
<meta property="og:locale" content="it_IT">
<meta property="og:site_name" content="Pirotecnica Enea">
 
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Pirotecnica Enea | Fuochi d'Artificio">
<meta name="twitter:description" content="Spettacoli pirotecnici professionali in tutta Italia. Preventivo gratuito.">
<meta name="twitter:image" content="https://www.pirotecnicaenea.com/og-image.jpg">
```

### Structured Data: LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pirotecnica Enea Srl",
  "description": "Azienda specializzata in spettacoli pirotecnici e fuochi d'artificio professionali per eventi in tutta Italia",
  "url": "https://www.pirotecnicaenea.com",
  "telephone": "+393206708992",
  "email": "pirotecnica.enea@virgilio.it",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Enrico Fermi 3b",
    "addressLocality": "Campoleone di Lanuvio",
    "addressRegion": "RM",
    "postalCode": "00075",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[OPZIONALE - da aggiungere se disponibile]",
    "longitude": "[OPZIONALE - da aggiungere se disponibile]"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "15:30",
      "closes": "19:30"
    }
  ],
  "priceRange": "€€",
  "sameAs": [
    "https://www.facebook.com/pirotecnicaeneasrl",
    "https://www.instagram.com/pirotecnica.enea/"
  ]
}
```

### Sitemap reference da aggiungere in `<head>`

```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
```

---

## INFORMAZIONI COMPLETE AZIENDA

### Dati Sede Principale
- **Nome:** Pirotecnica Enea Srl - Sede Principale
- **Indirizzo:** Via Enrico Fermi 3b
- **Città:** Campoleone di Lanuvio (RM)
- **CAP:** 00075
- **Telefono:** +39 06 937 4301
- **URL Google Maps:** https://www.google.com/maps/search/?api=1&query=Via+Enrico+Fermi+3b+Campoleone+di+Lanuvio+RM

### Dati Sede Secondaria
- **Nome:** Pirotecnica Enea Srl - Sede Secondaria
- **Indirizzo:** Via Marco Aurelio 26
- **Città:** Aprilia (LT)
- **CAP:** 04011
- **Telefono:** +39 392 481 8136
- **URL Google Maps:** https://www.google.com/maps/search/?api=1&query=Via+Marco+Aurelio+26+Aprilia+LT

### Contatti Generali
- **Telefono Generale:** +39 320 670 8992
- **Email:** pirotecnica.enea@virgilio.it
- **Sito Web:** https://www.pirotecnicaenea.com
- **P.IVA:** 11139091000

### Social Media
- **Facebook:** https://www.facebook.com/pirotecnicaeneasrl
- **Instagram:** https://www.instagram.com/pirotecnica.enea/

### Orari di Apertura
- **Lunedì - Sabato:** 9:00 - 13:00 / 15:30 - 19:30
- **Domenica:** Chiuso (aperto su appuntamento in periodi festivi)

---

## TASK 2 — FIX HEADING HIERARCHY (H1, H2, H3)

On the homepage:
- There must be EXACTLY ONE `<h1>` tag. If none exists, wrap the main hero headline in `<h1>`.
  Suggested text: "Spettacoli Pirotecnici Professionali in Tutta Italia"
  OR keep the existing hero text but make it an `<h1>`.
- All section titles must be `<h2>` tags (not styled divs or paragraphs).
- All service/card titles must be `<h3>` tags.
- Do NOT change any visual styling — only change the HTML tag type.

On all other pages:
- Each page must have one `<h1>` that includes the page's primary keyword.
  Example for the services page: `<h1>I Nostri Servizi Pirotecnici</h1>`
  Example for contacts page: `<h1>Contatta Pirotecnica Enea — Preventivo Gratuito</h1>`

---

## TASK 3 — ADD ALT TEXT TO ALL IMAGES

Go through every `<img>` tag on the site.
If alt="" is empty or missing, add a descriptive alt text in Italian.
Examples:
  - Fireworks photo: alt="spettacolo di fuochi d'artificio professionale"
  - Wedding fireworks: alt="fuochi d'artificio per matrimonio"
  - Team/staff photo: alt="team Pirotecnica Enea, pirotecnici professionisti"
  - Logo: alt="Pirotecnica Enea - logo"
Do NOT change any src, class, or style attributes.

---

## TASK 4 — ADD FAQ SECTION (Rich Snippet Schema)

Find a suitable location on the homepage (below services, before contacts).
Insert a new FAQ section — keep the visual style consistent with the existing site design.
Use an accordion or simple Q&A layout. Mark it up with FAQPage schema.

```html
<section id="faq" aria-label="Domande frequenti">
  <h2>Domande Frequenti</h2>
 
  <div itemscope itemtype="https://schema.org/FAQPage">
 
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">Quanto costa uno spettacolo pirotecnico?</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Il costo varia in base alla durata, tipologia e location dell'evento. Offriamo preventivi personalizzati e gratuiti. Contattateci per un'offerta su misura.</p>
      </div>
    </div>
 
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">Cosa include uno show pirotecnico per matrimoni?</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Il servizio comprende sopralluogo, progettazione coreografica, montaggio, spettacolo in sicurezza e rimozione materiali. Tutto gestito da pirotecnici certificati.</p>
      </div>
    </div>
 
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">Pirotecnica Enea è autorizzata e assicurata?</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Sì. Operiamo in piena conformità con le normative italiane ed europee, con tutte le autorizzazioni ministeriali e copertura assicurativa per ogni tipo di evento.</p>
      </div>
    </div>
 
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">Con quanto anticipo bisogna prenotare i fuochi d'artificio?</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Consigliamo di contattarci almeno 30–60 giorni prima dell'evento per garantire disponibilità e ottenere le necessarie autorizzazioni comunali.</p>
      </div>
    </div>
 
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">Operate anche fuori dalla vostra regione?</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Sì, Pirotecnica Enea opera in tutta Italia. Contattaci per uno spettacolo nella tua città: nessuna destinazione è troppo lontana.</p>
      </div>
    </div>
 
  </div>
</section>
```

---

## TASK 5 — ADD REVIEW SCHEMA TO TESTIMONIALS

If the site already has a testimonials/reviews section, wrap each review with this schema markup.
Do NOT change the visual design — only add the invisible schema attributes.

```html
<div itemscope itemtype="https://schema.org/Review">
  <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
    <meta itemprop="ratingValue" content="5">
    <meta itemprop="bestRating" content="5">
  </div>
  <p itemprop="reviewBody">[Testo della recensione esistente]</p>
  <span itemprop="author" itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">[Nome del cliente esistente]</span>
  </span>
</div>
```

If there is NO reviews section, add one with 3 placeholder reviews styled consistently with the rest of the site.

---

## TASK 6 — VERIFY / ADD NAP IN FOOTER

Check the footer. It must contain — in plain visible text (NOT as an image):
  - Company name: Pirotecnica Enea Srl
  - Full address (street, city, province, postal code)
  - Phone number (clickable: href="tel:+393206708992")
  - Email (clickable: href="mailto:[EMAIL]")
 
This NAP (Name, Address, Phone) must match 100% with the Google Business Profile.
If it's already there as text, leave it. If it's in an image, replace it with text.

**NOTA:** Il footer attuale contiene già i dati NAP corretti. Verificare che corrispondano esattamente al profilo Google Business.

---

## TASK 7 — ADD SITEMAP LINK AND ROBOTS REFERENCE

In the footer, add a small text link:
```html
<a href="/sitemap.xml">Sitemap</a>
```

The robots.txt file should already exist at:
  https://www.pirotecnicaenea.com/robots.txt
 
If it does not exist, create it with:
```
User-agent: *
Allow: /
Sitemap: https://www.pirotecnicaenea.com/sitemap.xml
```

---

## TASK 8 — PAGE SPEED / CORE WEB VITALS NOTES

Add these annotations as developer notes (do not change live visuals):
  - All images: convert to WebP format, add width and height attributes
  - Lazy load all below-fold images: loading="lazy"
  - Hero image: add fetchpriority="high" and loading="eager"
  - All fonts: preload the main display font in `<head>`:
    ```html
    <link rel="preload" as="font" href="/fonts/InstrumentSerif.woff2" crossorigin>
    ```

---

## IMPORTANT RULES

✗ Do NOT change the visual design, layout, colors, or fonts
✗ Do NOT remove any existing content
✗ Do NOT add new pages or sections beyond what is listed above
✓ Only add/update HTML tags, attributes, and the FAQ + Reviews sections
✓ The domain is pirotecnicaenea.com (NOT .it)
✓ All NAP data MUST match exactly with Google Business Profile

---

## DATI COMPLETI ✅

Tutti i dati aziendali sono stati verificati e aggiornati:
1. ✅ Email aziendale: pirotecnica.enea@virgilio.it
2. ✅ CAP sede principale: 00075 (Campoleone di Lanuvio)
3. ✅ CAP sede secondaria: 04011 (Aprilia)
4. ⚠️ Coordinate GPS: opzionali - da aggiungere se disponibili dal Google Business Profile
5. ✅ P.IVA: 11139091000
