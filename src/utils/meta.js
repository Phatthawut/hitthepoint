export function updateMetaTags(meta) {
  // Update title
  document.title = meta.title || "Hit The Point - Professional Digital Agency";

  // Update meta tags
  const tags = {
    description:
      meta.description ||
      "Hit The Point - Professional Digital Agency specializing in web design, development, and digital marketing solutions.",
    keywords:
      meta.keywords ||
      "digital agency, web design, web development, digital marketing, SEO, Bangkok, Thailand",
    "og:title": meta.title || "Hit The Point - Professional Digital Agency",
    "og:description":
      meta.description ||
      "Hit The Point - Professional Digital Agency specializing in web design, development, and digital marketing solutions.",
    "og:image": meta.image || "https://hitthepoint.com/hit-the-point-logo.webp",
    "og:url": meta.url || "https://hitthepoint.com",
    "twitter:title":
      meta.title || "Hit The Point - Professional Digital Agency",
    "twitter:description":
      meta.description ||
      "Hit The Point - Professional Digital Agency specializing in web design, development, and digital marketing solutions.",
    "twitter:image":
      meta.image || "https://hitthepoint.com/hit-the-point-logo.webp",
    "twitter:url": meta.url || "https://hitthepoint.com",
  };

  // Update or create meta tags
  Object.entries(tags).forEach(([name, content]) => {
    let element = document.querySelector(
      `meta[name="${name}"], meta[property="${name}"]`
    );
    if (!element) {
      element = document.createElement("meta");
      if (name.startsWith("og:")) {
        element.setAttribute("property", name);
      } else {
        element.setAttribute("name", name);
      }
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  });

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", meta.url || "https://hitthepoint.com");
}
