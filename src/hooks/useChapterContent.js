import { useMemo } from 'react';
import { chapters } from '../content/index.js';
import { loadMarkdown, extractHeadings } from '../utils/markdownLoader';

export default function useChapterContent(chapterId) {
  const chapter = useMemo(
    () => chapters.find((c) => c.id === chapterId),
    [chapterId]
  );

  const content = useMemo(() => {
    if (!chapter) return null;
    return loadMarkdown(chapter.file);
  }, [chapter]);

  const headings = useMemo(() => {
    if (!content) return [];
    return extractHeadings(content);
  }, [content]);

  // Find previous and next chapters
  const navigation = useMemo(() => {
    if (!chapter) return { prev: null, next: null };
    const idx = chapters.findIndex((c) => c.id === chapterId);
    return {
      prev: idx > 0 ? chapters[idx - 1] : null,
      next: idx < chapters.length - 1 ? chapters[idx + 1] : null,
    };
  }, [chapter, chapterId]);

  return { chapter, content, headings, navigation };
}
