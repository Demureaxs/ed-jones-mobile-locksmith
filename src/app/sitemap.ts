import { MetadataRoute } from 'next';
import config from '@/data/config.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.url || 'https://ed-jones-mobile-locksmith-cardiff.co.uk';

  // Base routes
  const routes = ['', '/services', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes = config.services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic Blog routes
  const blogRoutes = config.blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.publishedAt || new Date()),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...blogRoutes];
}
