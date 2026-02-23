'use client';

import { getTagColor } from '@/lib/tagColors';

interface Props {
  tag: string;
  count?: number;
  active?: boolean;
  onClick?: () => void;
  linked?: boolean;
}

export default function TagChip({ tag, count, active, onClick }: Props) {
  const color = getTagColor(tag);

  return (
    <button
      onClick={onClick}
      className={`tag-chip tag-color ${active ? 'ring-2 ring-offset-1' : ''}`}
      style={{
        '--tag-bg-light': color.bg,
        '--tag-text-light': color.text,
        '--tag-bg-dark': color.darkBg,
        '--tag-text-dark': color.darkText,
        ['--tw-ring-color' as any]: color.text,
      } as React.CSSProperties}
    >
      {tag}
      {count !== undefined && (
        <span className="ml-1 opacity-60">({count})</span>
      )}
    </button>
  );
}
