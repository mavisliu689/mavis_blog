const TAG_COLORS = [
  { bg: '#fef3c7', text: '#92400e', darkBg: '#451a03', darkText: '#fcd34d' }, // amber
  { bg: '#fee2e2', text: '#991b1b', darkBg: '#450a0a', darkText: '#fca5a5' }, // terracotta
  { bg: '#ecfccb', text: '#3f6212', darkBg: '#1a2e05', darkText: '#bef264' }, // sage
  { bg: '#e2e8f0', text: '#334155', darkBg: '#1e293b', darkText: '#94a3b8' }, // slate
  { bg: '#ffedd5', text: '#9a3412', darkBg: '#431407', darkText: '#fdba74' }, // copper
  { bg: '#cffafe', text: '#155e75', darkBg: '#164e63', darkText: '#67e8f9' }, // ocean
  { bg: '#ede9fe', text: '#5b21b6', darkBg: '#2e1065', darkText: '#c4b5fd' }, // plum
  { bg: '#fef9c3', text: '#854d0e', darkBg: '#422006', darkText: '#fde047' }, // sand
];

// Deterministic color based on tag name
export function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length];
}
