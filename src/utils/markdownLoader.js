const markdownModules = import.meta.glob('../content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function loadMarkdown(filename) {
  const raw = markdownModules[`../content/${filename}`];
  if (!raw) return null;

  // Strip frontmatter
  const content = raw.replace(/^---[\s\S]*?---\n/, '');
  return content;
}

export function extractHeadings(markdown) {
  if (!markdown) return [];
  const headings = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;

  while ((match = regex.exec(markdown)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: match[2]
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-'),
    });
  }

  return headings;
}
