import type { Metadata } from 'next';
import { getPostBySlug, getAllSlugs } from '@/lib/posts';
import { getTagColor } from '@/lib/tagColors';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — Mavis Liu`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
        ← Back
      </Link>
      <header className="mt-6 mb-8">
        <time className="text-sm text-[var(--muted)]">{post.date}</time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{post.title}</h1>
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => {
              const color = getTagColor(tag);
              return (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-full font-medium tag-color"
                  style={{
                    '--tag-bg-light': color.bg,
                    '--tag-text-light': color.text,
                    '--tag-bg-dark': color.darkBg,
                    '--tag-text-dark': color.darkText,
                  } as React.CSSProperties}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        )}
      </header>
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
