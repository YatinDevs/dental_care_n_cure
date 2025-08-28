import { useEffect } from "react";
import { seoConfig, pageSEO } from "../utils/seoConfig";

export const useSEO = (page = "home", additionalTags = {}) => {
  useEffect(() => {
    const pageData = pageSEO[page] || pageSEO.home;
    const fullTitle = `${pageData.title} | ${seoConfig.siteName}`;

    // Update document title
    document.title = fullTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = pageData.description;

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = pageData.keywords;

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${seoConfig.baseUrl}${pageData.canonical}`;

    // Open Graph tags
    const ogTags = [
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: pageData.description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: `${seoConfig.baseUrl}${pageData.canonical}`,
      },
      { property: "og:site_name", content: seoConfig.siteName },
    ];

    // Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: seoConfig.twitterHandle },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: pageData.description },
    ];

    // Create or update all meta tags
    [...ogTags, ...twitterTags].forEach((tag) => {
      let metaTag =
        document.querySelector(`meta[property="${tag.property}"]`) ||
        document.querySelector(`meta[name="${tag.name}"]`);

      if (!metaTag) {
        metaTag = document.createElement("meta");
        if (tag.property) {
          metaTag.setAttribute("property", tag.property);
        } else {
          metaTag.setAttribute("name", tag.name);
        }
        document.head.appendChild(metaTag);
      }

      metaTag.content = tag.content;
    });

    // Add JSON-LD structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.baseUrl,
      logo: `${seoConfig.baseUrl}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: seoConfig.phone,
        contactType: "customer service",
        email: seoConfig.email,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: seoConfig.address,
      },
    };

    // Remove existing structured data if any
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Reset to default title if needed
      document.title = seoConfig.defaultTitle;
    };
  }, [page, additionalTags]);
};
