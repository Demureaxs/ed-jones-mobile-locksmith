import { BaseShell } from '@/components/shell/BaseShell';
import { Container } from '@/components/ui/Container';
import { Metadata } from 'next';
import config from '@/data/config.json';
import { hubs } from '@/data/seoData';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Cpu, Car, Unlock, Shield, Wrench, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: `Professional Locksmith & Auto Security Services`,
  description: `Discover our range of locksmith and vehicle security services in Bargoed, Cardiff, and South Wales. 24/7 lockout help, module coding, and van deadlocks.`,
};

// Map slug to Lucide icon
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'locksmith': Wrench,
  'auto-locksmith': Car,
  'emergency-locksmith': Unlock,
  'car-security': Shield,
  'ecu-programming': Cpu,
};

export default function ServicesPage() {
  return (
    <BaseShell>
      <div className="bg-gray-50 flex-1 w-full">
        {/* Short Hero */}
        <div className="relative rounded-2xl overflow-hidden mx-3 sm:mx-4 mt-3 sm:mt-4 h-[40vh] min-h-[350px] max-h-[450px] mb-12 sm:mb-16">
          <Image
            src="https://big-c-locksmith.co.uk/wp-content/uploads/auto-locksmith-scaled.jpg"
            alt={`Comprehensive Auto Locksmith & Security Services`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75 z-10" />
          <div className="absolute inset-0 z-30 container mx-auto max-w-7xl flex flex-col justify-end pb-8 sm:pb-12 px-4 md:px-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our Professional Security & Lock Services
            </h1>
            <p className="text-gray-300 mt-4 text-base sm:text-lg md:text-xl max-w-2xl border-l-2 border-(--brand-orange) pl-4">
              From emergency lockouts and key programming to ECU coding and commercial fleet security, we provide premium mobile services across South Wales.
            </p>
          </div>
        </div>

        <Container className="pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hubs.map((hub) => {
              const Icon = iconMap[hub.slug] || ShieldCheck;
              return (
                <div
                  key={hub.slug}
                  className="bg-white border border-gray-200 p-8 rounded-2xl hover:border-(--brand-orange) hover:shadow-2xl transition-all ease-in-out duration-500 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-(--brand-orange)/10 flex items-center justify-center mb-6 group-hover:bg-(--brand-orange) transition-all ease-in-out duration-500">
                      <Icon className="w-6 h-6 text-(--brand-orange) group-hover:text-white transition-all ease-in-out duration-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-(--brand-orange) transition-colors">
                      {hub.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {hub.shortSummary}
                    </p>
                    
                    {/* Bullet list of GMB services */}
                    <ul className="mb-8 space-y-2">
                      {hub.microServices.slice(0, 3).map((ms, idx) => (
                        <li key={idx} className="flex items-center text-sm font-semibold text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--brand-orange) mr-2 flex-shrink-0" />
                          {ms.name}
                        </li>
                      ))}
                      {hub.microServices.length > 3 && (
                        <li className="text-xs text-gray-400 font-bold uppercase tracking-wider pl-3.5">
                          + {hub.microServices.length - 3} more services
                        </li>
                      )}
                    </ul>
                  </div>
                  <Link href={`/services/${hub.slug}`}>
                    <button className="w-full cursor-pointer bg-gray-50 hover:bg-black text-gray-900 hover:text-white font-bold py-3 px-6 rounded-xl transition-all ease-in-out duration-500 group-hover:shadow-lg">
                      Explore Service
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>

        {/* Trust Indicators Section */}
        <section className="bg-white py-24">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Partner With {config.businessName}?
              </h2>
              <p className="text-gray-500 text-lg">
                We combine certified locksmith expertise with transparent pricing and rapid mobile response.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 text-(--brand-orange)">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Professionals</h3>
                <p className="text-gray-500">All engineers undergo extensive training and strict background checks for your complete security.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 text-(--brand-orange)">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Response</h3>
                <p className="text-gray-500">Our regional dispatch fleet ensures we reach most calls across the service area in 30-45 minutes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 text-(--brand-orange)">
                  <svg className="w-8 h-8 fill-current text-(--brand-orange)" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-500">We establish fixed pricing and verify quotes before any work is performed. Zero hidden fees.</p>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </BaseShell>
  );
}
