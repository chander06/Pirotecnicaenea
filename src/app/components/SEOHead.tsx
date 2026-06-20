import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    document.title = 'Pirotecnica Enea Srl | Fuochi d\'Artificio Professionali — Campoleone & Aprilia';

    const metaTags = [
      {
        name: 'description',
        content: 'Pirotecnica Enea Srl — vendita fuochi d\'artificio professionali e libera vendita a Campoleone di Lanuvio e Aprilia. Batterie, razzi, candele romane, scoppio, bengala, spettacoli pirotecnici per matrimoni ed eventi. Rivenditori Jupiter, Piropassione, Gold Dragon, Teanese.',
      },
      {
        name: 'keywords',
        content: 'fuochi d\'artificio, pirotecnica, fuochi artificio Roma, fuochi artificio Aprilia, fuochi artificio Latina, fuochi artificio Campoleone, fuochi artificio Lanuvio, fuochi artificio Anzio, fuochi artificio Nettuno, fuochi artificio Velletri, fuochi artificio Albano, vendita fuochi d\'artificio, batterie pirotecniche, razzi, candele romane, scoppio, bengala, stelline, fontane pirotecniche, girandole, coni pirotecnici, spettacoli pirotecnici matrimonio, spettacoli pirotecnici eventi, libera vendita fuochi, fuochi categoria F2, fuochi categoria F3, mini spettacolo pirotecnico, Pirotecnica Enea, pirotecnica Enea Srl, Jupiter fuochi, Piropassione, Gold Dragon pirotecnica, Teanese, pirotecnica Volpe, Piropassione fuochi, finali tubo, sparapalle, blue moon fuochi, hellfire batteria, magnum scoppio',
      },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'author', content: 'Pirotecnica Enea Srl' },
      { name: 'geo.region', content: 'IT-RM' },
      { name: 'geo.placename', content: 'Campoleone di Lanuvio, Aprilia' },
      { name: 'geo.position', content: '41.6308;12.5897' },
      { name: 'ICBM', content: '41.6308, 12.5897' },
      { name: 'language', content: 'it' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'rating', content: 'general' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.pirotecnicaenea.com/' },
      { property: 'og:title', content: 'Pirotecnica Enea Srl | Fuochi d\'Artificio — Campoleone & Aprilia' },
      { property: 'og:description', content: 'Vendita fuochi d\'artificio professionali e libera vendita. Batterie, razzi, candele romane, scoppio, spettacoli pirotecnici per matrimoni ed eventi. Due punti vendita nel Lazio.' },
      { property: 'og:image', content: 'https://www.pirotecnicaenea.com/og-image.jpg' },
      { property: 'og:locale', content: 'it_IT' },
      { property: 'og:site_name', content: 'Pirotecnica Enea Srl' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Pirotecnica Enea Srl | Fuochi d\'Artificio Professionali' },
      { name: 'twitter:description', content: 'Vendita fuochi d\'artificio, batterie, razzi, candele romane e spettacoli pirotecnici a Campoleone e Aprilia.' },
      { name: 'twitter:image', content: 'https://www.pirotecnicaenea.com/og-image.jpg' },
    ];

    metaTags.forEach(tag => {
      const key = tag.name ? 'name' : 'property';
      const value = tag.name || tag.property;
      let element = document.querySelector(`meta[${key}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.setAttribute('name', tag.name);
        else if (tag.property) element.setAttribute('property', tag.property as string);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.pirotecnicaenea.com/');

    // Sitemap
    let sitemapLink = document.querySelector('link[rel="sitemap"]');
    if (!sitemapLink) {
      sitemapLink = document.createElement('link');
      sitemapLink.setAttribute('rel', 'sitemap');
      sitemapLink.setAttribute('type', 'application/xml');
      sitemapLink.setAttribute('href', '/sitemap.xml');
      document.head.appendChild(sitemapLink);
    }

    // Structured data — LocalBusiness + Store + FAQPage
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Store"],
        "name": "Pirotecnica Enea Srl",
        "legalName": "Pirotecnica Enea Srl",
        "description": "Vendita al dettaglio di fuochi d'artificio professionali e libera vendita: batterie pirotecniche, razzi, candele romane, scoppio, bengala, stelline, fontane, girandole, coni e spettacoli pirotecnici per matrimoni ed eventi.",
        "url": "https://www.pirotecnicaenea.com",
        "email": "pirotecnica.enea@virgilio.it",
        "vatID": "IT11139091000",
        "image": "https://www.pirotecnicaenea.com/og-image.jpg",
        "logo": "https://www.pirotecnicaenea.com/logo.png",
        "priceRange": "€–€€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Credit Card",
        "areaServed": ["Roma", "Latina", "Lazio", "Italia"],
        "sameAs": [
          "https://www.facebook.com/pirotecnicaeneasrl",
          "https://www.instagram.com/pirotecnica.enea/"
        ],
        "location": [
          {
            "@type": "Place",
            "name": "Pirotecnica Enea — Campoleone di Lanuvio",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Enrico Fermi 3b",
              "addressLocality": "Campoleone di Lanuvio",
              "addressRegion": "RM",
              "postalCode": "00075",
              "addressCountry": "IT"
            },
            "telephone": "+390693744301"
          },
          {
            "@type": "Place",
            "name": "Pirotecnica Enea — Aprilia",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Marco Aurelio 26",
              "addressLocality": "Aprilia",
              "addressRegion": "LT",
              "postalCode": "04011",
              "addressCountry": "IT"
            },
            "telephone": "+393924818136"
          }
        ],
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
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catalogo Fuochi d'Artificio",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Batterie Pirotecniche", "description": "Batterie da 16 a 200 colpi, calibro Ø18–Ø20mm" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Razzi", "description": "Razzi Cat. VC e Cat. IV, varie tipologie e confezioni" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Candele Romane e Comete", "description": "Candele romane Cat. F2/F3, comete Ø20mm e Ø30mm" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Scoppio Libera Vendita", "description": "Articoli scoppio Cat. VC/F2: magnum, thunder, falco, lupo, toro, ultra" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Mini Spettacoli Pirotecnici", "description": "Spettacoli da 200 colpi in su, prezzi da €200 a €500" } }
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dove si trovano i negozi di Pirotecnica Enea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pirotecnica Enea Srl ha due punti vendita: Via Enrico Fermi 3b, Campoleone di Lanuvio (RM) 00075 — tel. 06 937 4301; e Via Marco Aurelio 26, Aprilia (LT) 04011 — tel. 392 481 8136."
            }
          },
          {
            "@type": "Question",
            "name": "Vendete fuochi d'artificio di libera vendita?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sì, vendiamo articoli pirotecnici di libera vendita Cat. VD, VE, F1 e F2: scoppi, magnum, pop pop, girandole, bengala, stelline e molto altro."
            }
          },
          {
            "@type": "Question",
            "name": "Organizzate spettacoli pirotecnici per matrimoni?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sì, organizziamo mini spettacoli e spettacoli pirotecnici completi per matrimoni, eventi aziendali e celebrazioni private. Contattaci per un preventivo personalizzato."
            }
          },
          {
            "@type": "Question",
            "name": "Quali brand di fuochi d'artificio vendete?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Siamo rivenditori ufficiali di Jupiter, Pirotecnica Volpe, Piropassione, Gold Dragon, Pirotecnica Europea e Teanese."
            }
          }
        ]
      }
    ];

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}
