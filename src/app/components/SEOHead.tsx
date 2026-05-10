import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Set page title
    document.title = 'Pirotecnica Enea | Fuochi d\'Artificio Professionali in Italia';

    // Create or update meta tags
    const metaTags = [
      { name: 'description', content: 'Spettacoli pirotecnici professionali per matrimoni, eventi aziendali e celebrazioni in tutta Italia. Oltre 30 anni di esperienza. Preventivo gratuito.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.pirotecnicaenea.com/' },
      { property: 'og:title', content: 'Pirotecnica Enea | Fuochi d\'Artificio Professionali in Italia' },
      { property: 'og:description', content: 'Spettacoli pirotecnici professionali per matrimoni, eventi aziendali e celebrazioni in tutta Italia. Oltre 30 anni di esperienza. Preventivo gratuito.' },
      { property: 'og:image', content: 'https://www.pirotecnicaenea.com/og-image.jpg' },
      { property: 'og:locale', content: 'it_IT' },
      { property: 'og:site_name', content: 'Pirotecnica Enea' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Pirotecnica Enea | Fuochi d\'Artificio' },
      { name: 'twitter:description', content: 'Spettacoli pirotecnici professionali in tutta Italia. Preventivo gratuito.' },
      { name: 'twitter:image', content: 'https://www.pirotecnicaenea.com/og-image.jpg' },
    ];

    metaTags.forEach(tag => {
      const key = tag.name ? 'name' : 'property';
      const value = tag.name || tag.property;
      let element = document.querySelector(`meta[${key}="${value}"]`);

      if (!element) {
        element = document.createElement('meta');
        if (tag.name) {
          element.setAttribute('name', tag.name);
        } else if (tag.property) {
          element.setAttribute('property', tag.property);
        }
        document.head.appendChild(element);
      }

      element.setAttribute('content', tag.content);
    });

    // Add sitemap link
    let sitemapLink = document.querySelector('link[rel="sitemap"]');
    if (!sitemapLink) {
      sitemapLink = document.createElement('link');
      sitemapLink.setAttribute('rel', 'sitemap');
      sitemapLink.setAttribute('type', 'application/xml');
      sitemapLink.setAttribute('href', '/sitemap.xml');
      document.head.appendChild(sitemapLink);
    }

    // Add structured data for LocalBusiness
    const structuredData = {
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
    };

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
