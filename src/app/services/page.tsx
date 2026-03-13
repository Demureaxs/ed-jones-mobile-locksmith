import { BaseShell } from '@/components/shell/BaseShell';
import { ServicesIndex } from '@/components/blocks';
import { Metadata } from 'next';
import config from '@/data/config.json';

export const metadata: Metadata = {
  title: `Our Auto Locksmith Services | Vehicle Solutions in ${config.location}`,
  description: `Explore our comprehensive range of auto locksmith services in ${config.location}, including module coding, key remapping, and emergency vehicle entry.`,
};

export default function ServicesPage() {
  return (
    <BaseShell>
      <ServicesIndex services={config.services} />
    </BaseShell>
  );
}
