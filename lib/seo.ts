import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/og-ribeiro-naves.svg"
}: SeoInput): Metadata {
  const url = new URL(path, siteConfig.baseUrl).toString();
  const imageUrl = new URL(image, siteConfig.baseUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} em Taguatinga, Brasília`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },
    other: {
      "whatsapp:title": title,
      "whatsapp:description": description
    }
  };
}
