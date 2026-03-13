import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import config from '@/data/config.json';
import { Analytics } from '@vercel/analytics/next';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(config.url || 'https://ed-jones-mobile-locksmith-cardiff.co.uk'),
  title: {
    default: `${config.businessName} | Expert Auto Locksmith in ${config.location}`,
    template: `%s | ${config.businessName}`,
  },
  description: `${config.businessName} provides 24/7 emergency auto locksmith services, transponder key programming, module coding, and key remapping in ${config.location}. Fast response, safely back on the road.`,
  keywords: [
    `Auto Locksmith ${config.location}`,
    `Car Key Replacement ${config.location}`,
    'Emergency Auto Locksmith',
    'Module Coding',
    'Key Remapping',
    'Vehicle Entry',
  ],
  openGraph: {
    title: `${config.businessName} | Expert Auto Locksmith in ${config.location}`,
    description: `Professional 24/7 auto locksmith services in ${config.location}. Car key replacement, module coding, and key remapping.`,
    url: config.url || 'https://ed-jones-mobile-locksmith-cardiff.co.uk',
    siteName: config.businessName,
    images: [
      {
        url: '/logo.png', // Fallback to logo if no specific OG image is set
        width: 800,
        height: 600,
        alt: `${config.businessName} Logo`,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${config.businessName} | Expert Auto Locksmith in ${config.location}`,
    description: `Professional 24/7 auto locksmith services in ${config.location}. Car key replacement, module coding, and key remapping.`,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate LocalBusiness JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.businessName,
    telephone: config.phone,
    email: config.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address?.split(',')[0]?.trim() || '',
      addressLocality: config.addressLocality,
      postalCode: config.address?.match(/[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}/i)?.[0] || '',
      addressCountry: 'UK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: config.geo.latitude,
      longitude: config.geo.longitude,
    },
    openingHours: config.openingHours,
    makesOffer: config.services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.summary,
      },
    })),
  };

  return (
    <html lang='en'>
      <head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className={`${figtree.variable} font-sans antialiased min-h-screen bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
