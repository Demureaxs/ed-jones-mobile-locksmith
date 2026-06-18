import { BaseShell } from '@/components/shell/BaseShell';
import { Container } from '@/components/ui/Container';
import config from '@/data/config.json';
import { hubs, locations } from '@/data/seoData';
import { replacePlaceholders, generateGeoText, getLocalTestimonials } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Siren, Phone, ShieldCheck, CheckCircle2, MapPin, Navigation } from 'lucide-react';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function generateStaticParams() {
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const hub of hubs) {
    for (const loc of locations) {
      params.push({
        serviceSlug: hub.slug,
        locationSlug: loc.slug,
      });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ serviceSlug: string; locationSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { serviceSlug, locationSlug } = await params;
  const hub = hubs.find((h) => h.slug === serviceSlug);
  const location = locations.find((l) => l.slug === locationSlug);

  if (!hub || !location) {
    return { title: 'Service or Location Not Found' };
  }

  const title = `${hub.title} in ${location.name}`;
  const description = replacePlaceholders(hub.metaDescription, location.name, location.postcode);

  return {
    title,
    description,
  };
}

export default async function SpokePage({ params }: PageProps) {
  const { serviceSlug, locationSlug } = await params;
  const hub = hubs.find((h) => h.slug === serviceSlug);
  const location = locations.find((l) => l.slug === locationSlug);

  if (!hub || !location) {
    notFound();
  }

  const postcodeStr = location.postcode ? ` (${location.postcode})` : '';
  const serviceInLocationTitle = `${hub.title} in ${location.name}`;

  // Localized Content
  const htmlContent = replacePlaceholders(hub.richBaseContent, location.name, location.postcode);
  const geoRoutingText = generateGeoText(location, hub.title);
  const localReviews = getLocalTestimonials(location.name);

  // Dynamic Opening Paragraph (Unique to Location Spoke)
  const openingParagraph = `Looking for trusted ${hub.title.toLowerCase()} in ${location.name}${postcodeStr}? Ed Jones Mobile Locksmith provides rapid-response vehicle entry, transponder key coding, remote fob replacement, and commercial lock security directly to your driveway or roadside coordinates. Our fully equipped mobile workshops carry advanced diagnostic programmers and mechanical key cutters to resolve any lockout or security emergency in ${location.name} without the long wait times or premium fees of main dealerships.`;

  // Service Schema with areaServed
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceInLocationTitle,
    description: replacePlaceholders(hub.metaDescription, location.name, location.postcode),
    provider: {
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
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: location.name,
    },
  };

  return (
    <BaseShell>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="bg-gray-50 flex-1 w-full">
        {/* Spoke Page Hero */}
        <div className="relative rounded-2xl overflow-hidden mx-3 sm:mx-4 mt-3 sm:mt-4 h-[45vh] min-h-[380px] max-h-[500px] mb-8">
          <Image
            src="https://big-c-locksmith.co.uk/wp-content/uploads/auto-locksmith-scaled.jpg"
            alt={`${hub.title} in ${location.name} - ${config.businessName}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75 z-10" />
          <div className="absolute inset-0 z-30 container mx-auto max-w-7xl flex flex-col justify-end pb-8 sm:pb-12 px-4 md:px-6">
            <Link
              href={`/services/${hub.slug}`}
              className="inline-flex items-center text-(--brand-orange) font-medium text-sm hover:text-white transition-all ease-in-out duration-500 mb-6 bg-white/10 w-fit px-4 py-1.5 rounded-full"
            >
              &larr; Back to {hub.title}
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {serviceInLocationTitle}
              </h1>
              <p className="text-gray-300 mt-4 text-base sm:text-lg md:text-xl border-l-2 border-(--brand-orange) pl-4">
                Rapid, professional mobile locksmith response in {location.name} and surrounding areas.
              </p>
            </div>
          </div>
        </div>

        <Container className="pt-8 pb-20">
          {/* Top Info Grid (Opening Paragraph + Map Embed) */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-(--brand-orange) rounded-full"></span>
                  <span className="text-(--brand-orange) font-bold tracking-widest uppercase text-xs">
                    Local Service Hub
                  </span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  {openingParagraph}
                </p>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                  <Navigation className="w-6 h-6 text-(--brand-orange) shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Response & Driving Route</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {geoRoutingText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[300px] rounded-3xl overflow-hidden border border-gray-100 shadow-xs">
              <iframe
                title={`Map of ${location.name}, UK`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  location.name + ', UK'
                )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Rich Body Content */}
              <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-(--brand-orange) prose-strong:text-gray-900 prose-li:marker:text-[--brand-orange]">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </div>

              {/* Granular GMB Services Block */}
              <div className="mt-16 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
                  Services Offered in {location.name}
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
                        <p className="text-gray-500 leading-relaxed">
                          {replacePlaceholders(ms.description, location.name)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div>
              <div className="sticky top-32 space-y-8">
                {/* 24/7 Hotline Block */}
                <div className="bg-black p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                  <Siren className="w-12 h-12 text-(--brand-orange) mx-auto mb-4 relative z-10 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2 text-white relative z-10">Emergency Help</h3>
                  <p className="text-gray-400 mb-6 text-sm relative z-10">
                    Need immediate lockout help or key cutting in {location.name}? Contact our mobile technician.
                  </p>
                  <Link href={`tel:${config.phone}`}>
                    <button className="w-full cursor-pointer rounded-full bg-(--brand-orange) hover:bg-white text-white hover:text-black font-bold h-14 text-lg transition-all ease-in-out duration-500 relative z-10 shadow-xl shadow-(--brand-orange)/20">
                      Call Now
                    </button>
                  </Link>
                </div>

                {/* Local Office / Service Area Info */}
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xs">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-(--brand-orange)" />
                    Service Area Details
                  </h3>
                  <div className="space-y-4 text-sm font-medium text-gray-600">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Area:</span>
                      <span className="text-gray-900 font-bold">{location.name}</span>
                    </div>
                    {location.postcode && (
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span>Postcode coverage:</span>
                        <span className="text-gray-900 font-bold">{location.postcode}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Base Connection:</span>
                      <span className="text-gray-900 font-bold">via {location.keyRoute}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Operation Hours:</span>
                      <span className="text-gray-900 font-bold">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Localized Testimonials Section */}
        {localReviews.length > 0 && (
          <section className="bg-white border-t border-b border-gray-200 py-16">
            <Container className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Local Drivers Say in {location.name}
              </h2>
              <p className="text-gray-500 mb-12 max-w-xl mx-auto">
                Real customer feedback from car owners and business fleets we have helped in {location.name}.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {localReviews.map((review, idx) => (
                  <TestimonialCard key={idx} review={review} />
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Other Areas Grid */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Areas We Service</h2>
              <p className="text-gray-500">
                Need service elsewhere? We cover these locations within the South Wales area:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {locations
                .filter((loc) => loc.slug !== location.slug)
                .slice(0, 10)
                .map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/services/${hub.slug}/${loc.slug}`}
                    className="p-3 rounded-xl border border-gray-200 bg-white text-center font-semibold text-gray-700 hover:border-(--brand-orange) hover:text-(--brand-orange) transition-all duration-300 block"
                  >
                    {loc.name}
                  </Link>
                ))}
            </div>
          </Container>
        </section>
      </div>
    </BaseShell>
  );
}
