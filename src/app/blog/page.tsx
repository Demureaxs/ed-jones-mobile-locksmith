import { BaseShell } from '@/components/shell/BaseShell';
import { BlogIndex } from '@/components/blocks';
import { Metadata } from 'next';
import config from '@/data/config.json';

export const metadata: Metadata = {
  title: `Vehicle Security Advice & News | ${config.location} Auto Locksmith Blog`,
  description: `Expert tips, vehicle security advice, and auto locksmith news from the team at ${config.businessName} in ${config.location}.`,
};

export default function BlogPage() {
  return (
    <BaseShell>
      <BlogIndex posts={config.blogPosts} />
    </BaseShell>
  );
}
