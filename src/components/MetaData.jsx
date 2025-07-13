import { useEffect } from 'react';

const SEO = ({ 
  title,
  description,
  keywords,
  author = "Robbanie Hillaly Kurniadien",
  image = "/images/og-image.png",
  url = ""
}) => {
  const siteUrl = "https://loxyland.web.id"; // Ganti dengan domain Anda
  const fullUrl = `${siteUrl}${url}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Function to update or create meta tag
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Indonesian');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${siteUrl}${image}`, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Robbanie Hillaly Portfolio', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', `${siteUrl}${image}`, true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

  }, [title, description, keywords, author, image, fullUrl, siteUrl]);

  return null; // Component ini tidak render apapun
};

export default SEO;