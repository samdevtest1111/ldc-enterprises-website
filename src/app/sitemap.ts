import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ellicyenterprises.com", // <--- Put your actual domain here
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
