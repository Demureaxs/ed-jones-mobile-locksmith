import { BaseShell } from '@/components/shell/BaseShell';
import { ServicesIndex } from '@/components/blocks';
import { Metadata } from 'next';
import config from '@/data/config.json';

export const metadata: Metadata = {
  title: `Our Locksmith Services | Security Solutions in ${config.location}`,
  description: `Explore our comprehensive range of locksmith services in ${config.location}, including UPVC repairs, lock upgrades, and emergency entry.`,
};

export default function ServicesPage() {
  return (
    <BaseShell>
      <ServicesIndex services={config.services} />
    </BaseShell>
  );
}
