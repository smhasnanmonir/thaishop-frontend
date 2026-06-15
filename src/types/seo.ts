// SEO domain types — used by src/components/seo/* and the layouts.

export interface SEOMeta {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface JsonLdProduct {
  "@context": "https://schema.org";
  "@type": "Product";
  name: string;
  description: string;
  image: string[];
  sku?: string;
  brand?: { "@type": "Brand"; name: string };
  offers: {
    "@type": "Offer";
    priceCurrency: string;
    price: number;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
  };
}

export interface JsonLdBreadcrumb {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface JsonLdOrg {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}
