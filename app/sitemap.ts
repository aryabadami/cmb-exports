import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cmbexports.com";
  return [
    "",
    "/home",
    "/about",
    "/products",
    "/products/sona-masoori-gold",
    "/products/sona-masoori-silver",
    "/products/lachkari-kolam",
    "/markets",
    "/certifications",
    "/contact",
  ].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    }));
}
