import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import config from '@/data/config.json';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(config.url || 'https://btn-locksmith-brighton.co.uk'),
  title: {
    default: `${config.businessName} | Expert Locksmith in ${config.location}`,
    template: `%s | ${config.businessName}`,
  },
  description: `${config.businessName} provides 24/7 emergency locksmith services, lock replacements, UPVC repairs, and security solutions in ${config.location}. Fast response, no call-out fee.`,
  keywords: [
    `Locksmith ${config.location}`,
    'Emergency Locksmith',
    'UPVC Repairs',
    'Lock Replacement',
    `Auto Locksmith ${config.location}`,
    '24/7 Locksmith',
  ],
  openGraph: {
    title: `${config.businessName} | Expert Locksmith in ${config.location}`,
    description: `Professional 24/7 locksmith services in ${config.location}. UPVC repairs, lock replacements, and emergency entry.`,
    url: config.url || 'https://btn-locksmith-brighton.co.uk',
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
    title: `${config.businessName} | Expert Locksmith in ${config.location}`,
    description: `Professional 24/7 locksmith services in ${config.location}. UPVC repairs, lock replacements, and emergency entry.`,
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
      <body className={`${figtree.variable} font-sans antialiased min-h-screen bg-background`}>{children}</body>
    </html>
  );
}
