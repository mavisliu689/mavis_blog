import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { getTagColor } from '@/lib/tagColors';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export default function PostCard({ slug, title, date, excerpt, tags }: PostCardProps) {
  return (
    <ScrollReveal>
      <Link href={`/posts/${slug}`}>
        <article className="group p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-300">
          <time className="text-sm text-[var(--muted)]">{date}</time>
          <h2 className="mt-2 text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h2>
          <p className="mt-2 text-[var(--muted)] leading-relaxed line-clamp-2">
            {excerpt}
          </p>
          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => {
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
        </article>
      </Link>
    </ScrollReveal>
  );
}
