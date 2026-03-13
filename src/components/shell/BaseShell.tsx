import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import config from '@/data/config.json';

interface BaseShellProps {
  children: React.ReactNode;
}

export function BaseShell({ children }: BaseShellProps) {
  const { businessName, phone, address } = config;

  return (
    <div className='flex min-h-screen bg-gray-50 flex-col relative'>
      {/* ── Scrolling Promo Banner ─────────────────────────────────── */}
      <div className='bg-(--dark-bg) text-white py-2.5 overflow-hidden'>
        <div className='flex animate-marquee whitespace-nowrap'>
          {[...Array(2)].map((_, i) => (
            <div key={i} className='flex items-center gap-8 mx-4'>
              <span className='text-sm font-medium tracking-wide'>
                24/7 Emergency Locksmith —{' '}
                <Link href={`tel:${phone}`} className='text-(--brand-orange) font-semibold hover:underline'>
                  Call Now!
                </Link>
              </span>
              <span className='text-(--brand-orange)'>✦</span>
              <span className='text-sm font-medium tracking-wide'>
                Free Security Assessment —{' '}
                <Link href='/services' className='text-(--brand-orange) font-semibold hover:underline'>
                  Book Today!
                </Link>
              </span>
              <span className='text-(--brand-orange)'>✦</span>
              <span className='text-sm font-medium tracking-wide'>
                Lock Replacement from <span className='text-(--brand-orange) font-bold'>£100!</span>
              </span>
              <span className='text-(--brand-orange)'>✦</span>
              <span className='text-sm font-medium tracking-wide'>
                New Customer Discount — <span className='text-(--brand-orange) font-bold'>20% Off</span>
              </span>
              <span className='text-(--brand-orange)'>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Default Header / Navigation (Absolute top underneath the banner) */}
      <div className='absolute top-11 left-0 w-full z-50 px-2 sm:px-6 pt-6 sm:pt-10 pb-6 pointer-events-none'>
        <header className='container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6 pointer-events-auto'>
          <div className='flex-1 flex items-center justify-between gap-4 pr-8'>
            {/* Logo */}
            <div className='relative -left-4 mt-3 sm:left-0'>
              {/* <div className='absolute top-9 left-0 w-[142px] h-16 bg-white rounded-2xl -z-10 shadow-lg'></div> */}
              <Link href='/' className='flex items-center p-1.5 rounded-xl shadow-lg z-10 transition-all ease-in-out duration-500 hover:scale-[1.02]'>
                <Image
                  src='/ejml-logo.png'
                  alt={`${businessName} - Expert Locksmiths in Cardiff`}
                  width={400}
                  height={400}
                  className='h-40 sm:-ml-6 w-auto object-cover'
                  priority
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className='hidden md:flex items-center gap-8 text-sm font-bold tracking-wide'>
              <Link href='/' className='text-white hover:text-(--brand-orange) transition-all ease-in-out duration-500 drop-shadow-md'>
                Home
              </Link>
              <Link href='/services' className='text-white hover:text-(--brand-orange) transition-all ease-in-out duration-500 drop-shadow-md'>
                Services
              </Link>
              <Link href='/blog' className='text-white hover:text-(--brand-orange) transition-all ease-in-out duration-500 drop-shadow-md'>
                Blog
              </Link>
            </nav>
          </div>

          {/* CTA Button */}
          <div className='flex block items-center gap-3'>
            <Link href={`tel:${phone}`}>
              <button className='cursor-pointer group inline-flex items-center gap-3 bg-white border border-transparent hover:border-white rounded-full pl-5 pr-1.5 py-1.5 text-sm font-bold text-gray-900 transition-all ease-in-out duration-500 shadow-xl'>
                CONTACT US
                <span className='w-8 h-8 rounded-full bg-(--brand-orange) group-hover:bg-black flex items-center justify-center transition-all ease-in-out duration-500'>
                  <Phone className='h-4 w-4 text-white group-hover:rotate-12 transition-all ease-in-out duration-500' />
                </span>
              </button>
            </Link>
          </div>
        </header>
      </div>

      {/* ── Main Content ───────────────────────────────────────────── */}
      <main className='flex-1 flex flex-col pt-0'>{children}</main>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className='bg-(--dark-bg) text-white mx-4 mb-4 rounded-3xl overflow-hidden mt-6'>
        {/* Top CTA */}
        <div className='container mx-auto max-w-7xl px-4 md:px-10 md:py-20'>
          <div className='grid md:grid-cols-2 gap-16 items-start'>
            {/* Left - Experts blurb */}
            <div>
              <div className='mb-8'>
                <div className='relative'>
                  {/* <div className='absolute top-9 left-0 w-[142px] h-16 z-0 bg-white rounded-2xl shadow-lg'></div> */}
                  <Link
                    href='/'
                    className='relative flex items-center p-1.5 rounded-xl shadow-lg z-20 transition-all ease-in-out duration-500 hover:scale-[1.02]'
                  >
                    <Image
                      src='/ejml-logo.png'
                      alt={`${businessName} in Cardiff`}
                      width={400}
                      height={400}
                      className='h-40 -ml-8 w-auto object-cover'
                      priority
                    />
                  </Link>
                </div>
              </div>
              <h4 className='text-2xl font-bold tracking-tight mb-4'>Certified Locksmith Experts</h4>
              <p className='text-gray-400 text-[15px] leading-relaxed max-w-md'>
                At <span className='font-bold text-white'>{businessName}</span>, we take pride in having a team of highly trained, DBS-checked
                locksmith professionals dedicated to your security and peace of mind across the local area.
              </p>

              {address && (
                <div className='flex items-start gap-4 mt-10'>
                  <div className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-gray-800'>
                    <MapPin className='w-4 h-4 text-(--brand-orange)' />
                  </div>
                  <div>
                    <h5 className='text-white font-bold mb-2 tracking-wide'>Service Area</h5>
                    <div className='flex flex-col gap-0.5'>
                      {address
                        .split(',')
                        .flatMap((part) => {
                          const trimmed = part.trim();
                          const postcodeMatch = trimmed.match(/(.*?)\s+([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2})$/i);
                          if (postcodeMatch) {
                            return [postcodeMatch[1].trim(), postcodeMatch[2].trim()];
                          }
                          return [trimmed];
                        })
                        .filter((part) => part.toLowerCase() !== 'inggris raya' && part.length > 0)
                        .map((line, idx) => (
                          <p key={idx} className='text-gray-400 text-sm leading-relaxed'>
                            {line}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right - Let's Talk */}
            <div className='md:pl-10 md:border-l border-gray-800'>
              <h4 className='text-2xl font-bold mb-4 tracking-tight'>Let&apos;s Talk Security Solutions</h4>
              <p className='text-gray-400 text-[15px] leading-relaxed mb-8 max-w-md'>
                Whether you need emergency lockout help right now, a quote for new British Standard locks, or a full home security assessment, our
                friendly team is ready to assist.
              </p>
              <Link href={`tel:${phone}`}>
                <button className='cursor-pointer group inline-flex items-center gap-4 bg-(--brand-orange) text-white rounded-full px-8 py-4 text-sm font-bold tracking-wider hover:bg-[#e55020] transition-all ease-in-out duration-500 shadow-lg shadow-(--brand-orange)/20'>
                  GET STARTED NOW
                  <span className='w-8 h-8 rounded-full bg-white/20 group-hover:bg-white flex items-center justify-center transition-all ease-in-out duration-500'>
                    <ArrowRight className='w-4 h-4 text-white group-hover:text-(--brand-orange) -rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-500' />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800/80 bg-black/20'>
          <div className='container mx-auto max-w-7xl px-4 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6'>
            {/* Nav links */}
            <nav className='flex items-center gap-8 text-sm font-semibold tracking-wide'>
              <Link href='/' className='text-gray-400 hover:text-white transition-all ease-in-out duration-500'>
                Home
              </Link>
              <Link href='/services' className='text-gray-400 hover:text-white transition-all ease-in-out duration-500'>
                Services
              </Link>
              <Link href='/blog' className='text-gray-400 hover:text-white transition-all ease-in-out duration-500'>
                Blog
              </Link>
            </nav>
            <p className='text-sm text-gray-500 font-medium'>
              © {new Date().getFullYear()} {businessName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
