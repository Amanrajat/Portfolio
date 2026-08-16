import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { seoConfig } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: seoConfig.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${seoConfig.siteUrl}/projects`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${seoConfig.siteUrl}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
