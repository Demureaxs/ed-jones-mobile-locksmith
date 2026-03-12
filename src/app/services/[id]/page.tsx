import { BaseShell } from '@/components/shell/BaseShell';
import { ServiceDetail } from '@/components/blocks';
import config from '@/data/config.json';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return config.services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = config.services.find((s) => s.id === id);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title}`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = config.services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <BaseShell>
      <ServiceDetail service={service} />
    </BaseShell>
  );
}
