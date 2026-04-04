import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ldcenterprises.in", // <--- Put your actual domain here
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
