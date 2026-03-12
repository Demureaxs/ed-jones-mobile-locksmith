import { BaseShell } from '@/components/shell/BaseShell';
import { BlogPost } from '@/components/blocks';
import config from '@/data/config.json';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return config.blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = config.blogPosts.find((p) => p.id === id);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = config.blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <BaseShell>
      <BlogPost post={post} />
    </BaseShell>
  );
}
