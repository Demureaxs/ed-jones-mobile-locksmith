import { MetadataRoute } from 'next';
import config from '@/data/config.json';
import { hubs, locations } from '@/data/seoData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.url || 'https://ed-jones-mobile-locksmith-cardiff.co.uk';

  // Base routes
  const routes = ['', '/services', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Parent Hub routes
  const hubRoutes = hubs.map((hub) => ({
    url: `${baseUrl}/services/${hub.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Child Spoke routes
  const spokeRoutes: MetadataRoute.Sitemap = [];
  for (const hub of hubs) {
    for (const loc of locations) {
      spokeRoutes.push({
        url: `${baseUrl}/services/${hub.slug}/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  // Dynamic Blog routes
  const blogRoutes = config.blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.publishedAt || new Date()),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...routes, ...hubRoutes, ...spokeRoutes, ...blogRoutes];
}

