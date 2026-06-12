const SITE_URL = "https://kaytarechiam.vercel.app";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-06-12"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
