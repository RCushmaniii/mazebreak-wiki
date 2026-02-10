import Fuse from 'fuse.js';
import { chapters } from '../content/index.js';

const markdownModules = import.meta.glob('../content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function buildSearchIndex() {
  const documents = chapters.map((chapter) => {
    const raw = markdownModules[`../content/${chapter.file}`];
    if (!raw) return null;

    const content = raw.replace(/^---[\s\S]*?---\n/, '');
    const headings = [...content.matchAll(/^#{2,3}\s+(.+)$/gm)].map((m) => m[1]);

    return {
      id: chapter.id,
      title: chapter.title,
      description: chapter.description,
      headings: headings.join(' '),
      content: content,
      chapter: chapter.chapter,
    };
  }).filter(Boolean);

  return new Fuse(documents, {
    keys: [
      { name: 'title', weight: 3 },
      { name: 'headings', weight: 2 },
      { name: 'description', weight: 1.5 },
      { name: 'content', weight: 1 },
    ],
    threshold: 0.35,
    ignoreLocation: true,
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 2,
  });
}

export default buildSearchIndex;
