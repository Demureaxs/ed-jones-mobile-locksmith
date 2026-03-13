import { BaseShell } from '@/components/shell/BaseShell';
import { DemoHome } from '@/components/blocks';
import { Metadata } from 'next';
import config from '@/data/config.json';

export const metadata: Metadata = {
  title: `${config.businessName} | 24/7 Mobile Auto Locksmith in ${config.location}`,
  description: `Locked out of your vehicle? Need module coding? ${config.businessName} provides rapid, professional auto locksmith and key remapping services across ${config.location}.`,
};

export default function Home() {
  return (
    <BaseShell>
      <DemoHome />
    </BaseShell>
  );
}
