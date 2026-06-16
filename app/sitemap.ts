import type { MetadataRoute } from "next";
import { blogPosts, services, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/sobre-a-clinica", "/contato", "/blog"];
  const serviceRoutes = services.map((service) => `/${service.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const routes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/blog/") ? 0.6 : 0.8
  }));
}
