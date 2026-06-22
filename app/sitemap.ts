import type { MetadataRoute } from "next";

const BASE_URL = "https://restiqhealth.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/capabilities", priority: 0.9, changeFrequency: "monthly" },
    { path: "/who-we-serve", priority: 0.8, changeFrequency: "monthly" },
    { path: "/past-performance", priority: 0.8, changeFrequency: "monthly" },
    { path: "/leadership", priority: 0.7, changeFrequency: "monthly" },
    { path: "/certifications", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/sitemap", priority: 0.4, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
