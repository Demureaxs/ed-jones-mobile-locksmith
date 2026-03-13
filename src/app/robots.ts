import { MetadataRoute } from 'next';
import config from '@/data/config.json';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = config.url || 'https://ed-jones-mobile-locksmith-cardiff.co.uk';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
