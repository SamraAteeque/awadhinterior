import { notFound } from 'next/navigation';
import BlogPosts from '@/app/JsonData/BlogPosts.json';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  return BlogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BlogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Awadh Interior Designer`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BlogPosts.find(p => p.slug === slug);

  if (!post) notFound();

  const related = BlogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return <BlogPostClient post={post} related={related} />;
}
