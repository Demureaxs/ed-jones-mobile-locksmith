import { BaseShell } from '@/components/shell/BaseShell';
import { DemoHome } from '@/components/blocks';
import { Metadata } from 'next';
import config from '@/data/config.json';

export const metadata: Metadata = {
  title: `${config.businessName} | 24/7 Emergency Locksmith in ${config.location}`,
  description: `Locked out? Need a lock change? ${config.businessName} provides rapid, professional residential and commercial locksmith services across ${config.location}.`,
};

export default function Home() {
  return (
    <BaseShell>
      <DemoHome />
    </BaseShell>
  );
}
