import PropertyData from './JsonData/Propertys.json';
import BlogPosts from './JsonData/BlogPosts.json';

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = 'https://awadhinteriordesigner.in';

  const propertyUrls = PropertyData.map((property) => ({
    url: `${baseUrl}/properties/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogUrls = BlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    // ── Core pages ──
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/properties`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },

    // ── Blog ──
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...blogUrls,

    // ── Location pages — high priority for local SEO ──
    { url: `${baseUrl}/service-areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/interior-designer-in-azamgarh`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/interior-designer-in-varanasi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/interior-designer-in-lucknow`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/interior-designer-in-gorakhpur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/interior-designer-in-mau`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // ── Service-type landing pages ──
    { url: `${baseUrl}/home-interior-design`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/modular-kitchen-designs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/commercial-interior-designers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ── Legal ──
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },

    ...propertyUrls,
  ];
}
