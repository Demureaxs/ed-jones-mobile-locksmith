import { BaseShell } from '@/components/shell/BaseShell';
import { Container } from '@/components/ui/Container';
import config from '@/data/config.json';
import { hubs, locations } from '@/data/seoData';
import { replacePlaceholders } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Siren, Phone, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return hubs.map((hub) => ({
    serviceSlug: hub.slug,
  }));
}

interface PageProps {
  params: Promise<{ serviceSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { serviceSlug } = await params;
  const hub = hubs.find((h) => h.slug === serviceSlug);

  if (!hub) {
    return { title: 'Service Not Found' };
  }

  const description = replacePlaceholders(hub.metaDescription, 'Cardiff & South Wales', '');

  return {
    title: hub.title,
    description: description,
  };
}

export default async function HubPage({ params }: PageProps) {
  const { serviceSlug } = await params;
  const hub = hubs.find((h) => h.slug === serviceSlug);

  if (!hub) {
    notFound();
  }

  // General service area text replacements
  const generalLocation = 'Cardiff & South Wales';
  const htmlContent = replacePlaceholders(hub.richBaseContent, generalLocation, '');

  // LocalBusiness Schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.businessName,
    telephone: config.phone,
    email: config.email,
    url: `${config.url}/services/${hub.slug}`,
    image: `${config.url}/ejml-logo.png`,
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
    description: replacePlaceholders(hub.metaDescription, generalLocation, ''),
  };

  return (
    <BaseShell>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="bg-gray-50 flex-1 w-full">
        {/* Hub Page Hero */}
        <div className="relative rounded-2xl overflow-hidden mx-3 sm:mx-4 mt-3 sm:mt-4 h-[45vh] min-h-[380px] max-h-[500px] mb-8">
          <Image
            src="https://big-c-locksmith.co.uk/wp-content/uploads/auto-locksmith-scaled.jpg"
            alt={`${hub.title} - ${config.businessName}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75 z-10" />
          <div className="absolute inset-0 z-30 container mx-auto max-w-7xl flex flex-col justify-end pb-8 sm:pb-12 px-4 md:px-6">
            <Link
              href="/services"
              className="inline-flex items-center text-(--brand-orange) font-medium text-sm hover:text-white transition-all ease-in-out duration-500 mb-6 bg-white/10 w-fit px-4 py-1.5 rounded-full"
            >
              &larr; Back to Services
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {hub.title}
              </h1>
              <p className="text-gray-300 mt-4 text-base sm:text-lg md:text-xl border-l-2 border-(--brand-orange) pl-4">
                {replacePlaceholders(hub.shortSummary, generalLocation)}
              </p>
            </div>
          </div>
        </div>

        <Container className="pt-8 pb-20">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-(--brand-orange) prose-strong:text-gray-900 prose-li:marker:text-[--brand-orange]">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </div>

              {/* Granular GMB Services Block */}
              <div className="mt-16 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
                  Mapped services in this category
                </h2>
                <div className="space-y-8">
                  {hub.microServices.map((ms, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-full bg-(--brand-orange)/10 flex items-center justify-center shrink-0 text-(--brand-orange)">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{ms.name}</h3>
                          {ms.price && (
                            <span className="text-sm font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full border border-gray-200">
                              {ms.price}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 leading-relaxed">{ms.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div>
              <div className="sticky top-32 mt-8 lg:mt-0 space-y-8">
                {/* 24/7 Hotline Block */}
                <div className="bg-black p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                  <Siren className="w-12 h-12 text-(--brand-orange) mx-auto mb-4 relative z-10 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2 text-white relative z-10">Emergency Help</h3>
                  <p className="text-gray-400 mb-6 text-sm relative z-10">
                    Locked out or need urgent key services? We operate a mobile workshop 24 hours a day.
                  </p>
                  <Link href={`tel:${config.phone}`}>
                    <button className="w-full cursor-pointer rounded-full bg-(--brand-orange) hover:bg-white text-white hover:text-black font-bold h-14 text-lg transition-all ease-in-out duration-500 relative z-10 shadow-xl shadow-(--brand-orange)/20">
                      Call Now
                    </button>
                  </Link>
                </div>

                {/* Quick Trust Checklist */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Guaranteed Service</h3>
                  <ul className="space-y-3">
                    {[
                      'DBS Checked Technicians',
                      'No Hidden Call-Out Fees',
                      '12 Months Warranty Parts/Labor',
                      'Dealer Diagnostic Hardware',
                      'Fast Regional Response',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm font-semibold text-gray-700">
                        <CheckCircle2 className="w-4.5 h-4.5 text-(--brand-orange) mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Areas We Cover grid */}
        <section className="bg-white border-t border-gray-200 py-16">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
              <p className="text-gray-500">
                Choose your local area below to get a dedicated localized service response, direct map directions, and custom response times.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${hub.slug}/${loc.slug}`}
                  className="group flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-(--brand-orange) hover:bg-white transition-all ease-in-out duration-300"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-(--brand-orange) transition-colors">
                    {loc.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-(--brand-orange) group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </BaseShell>
  );
}
