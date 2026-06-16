import type { BreadcrumbItem, FaqItem } from "@/lib/site";
import { siteConfig, services } from "@/lib/site";

export function dentistSchema(path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": `${siteConfig.baseUrl}/#dentist`,
    name: siteConfig.name,
    url: `${siteConfig.baseUrl}${path}`,
    image: `${siteConfig.baseUrl}/images/og-ribeiro-naves.svg`,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    areaServed: ["Taguatinga", "Brasília", "Distrito Federal"],
    medicalSpecialty: ["Dentistry", "Oral Implantology", "Cosmetic Dentistry", "Orthodontics"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamentos odontológicos",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.shortTitle,
          description: service.description,
          url: `${siteConfig.baseUrl}/${service.slug}`
        }
      }))
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    sameAs: [siteConfig.social.instagram]
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.baseUrl}${item.href}`
    }))
  };
}
