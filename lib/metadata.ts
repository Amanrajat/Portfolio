import type { Metadata } from "next";
import { profile, seoConfig } from "@/data/profile";

export function absoluteUrl(path: string): string {
  return new URL(path, seoConfig.siteUrl).toString();
}

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(seoConfig.siteUrl),
    title: {
      default: seoConfig.title,
      template: `%s | ${profile.name}`,
    },
    description: seoConfig.description,
    keywords: [...seoConfig.keywords],
    authors: [{ name: profile.name, url: seoConfig.siteUrl }],
    creator: profile.name,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: seoConfig.siteUrl,
      title: seoConfig.title,
      description: seoConfig.description,
      siteName: `${profile.name} — Portfolio`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoConfig.title,
      description: seoConfig.description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    ...overrides,
  };
}
