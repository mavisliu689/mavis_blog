'use client';

import { useState } from 'react';
import PostCard from './PostCard';
import TagChip from './TagChip';

const POSTS_PER_PAGE = 6;

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

interface Props {
  posts: PostMeta[];
  tags: { tag: string; count: number }[];
}

export default function HomeClient({ posts, tags }: Props) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = posts.filter((post) => {
    const matchSearch =
      !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchTag = !activeTag || post.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paged = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  // Reset to page 1 when filters change
  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
    setPage(1);
  };

  return (
    <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="gradient-text">Blog</span>
        </h1>
        <p className="mt-3 text-[var(--muted)] text-lg">
          Thoughts on technology, design, and life.
        </p>
      </section>

      {/* Search */}
      <div className="relative mb-6">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => handleTagClick(null)}
          className={`tag-chip ${!activeTag ? 'ring-2 ring-[var(--accent)]' : ''}`}
          style={{
            background: !activeTag ? 'var(--accent-bg)' : 'var(--card-bg)',
            color: !activeTag ? 'var(--accent)' : 'var(--muted)',
            border: '1px solid var(--card-border)',
          }}
        >
          All
        </button>
        {tags.map(({ tag, count }) => (
          <TagChip
            key={tag}
            tag={tag}
            count={count}
            active={activeTag === tag}
            onClick={() => handleTagClick(activeTag === tag ? null : tag)}
          />
        ))}
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-5">
        {paged.length > 0 ? (
          paged.map((post) => <PostCard key={post.slug} {...post} />)
        ) : (
          <p className="text-center text-[var(--muted)] py-12">
            No posts found {search && `for "${search}"`}{activeTag && ` with tag "${activeTag}"`}
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1.5 text-sm rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-9 h-9 text-sm rounded-lg border transition-colors ${
                n === page
                  ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                  : 'border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1.5 text-sm rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
