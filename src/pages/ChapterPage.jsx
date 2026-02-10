import { useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import TableOfContents from '../components/TableOfContents';
import useChapterContent from '../hooks/useChapterContent';

export default function ChapterPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { chapter, content, headings, navigation } = useChapterContent(chapterId);

  // Scroll to top on chapter change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId]);

  // Ctrl+[ and Ctrl+] navigation
  const handleKeyDown = useCallback(
    (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '[' && navigation.prev) {
        e.preventDefault();
        navigate(`/chapter/${navigation.prev.id}`);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === ']' && navigation.next) {
        e.preventDefault();
        navigate(`/chapter/${navigation.next.id}`);
      }
    },
    [navigate, navigation]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!chapter || !content) {
    return (
      <div className="text-center py-20">
        <h2 className="font-heading text-xl text-text-secondary mb-2">
          Chapter not found
        </h2>
        <p className="text-text-tertiary mb-4">
          The chapter you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-accent hover:text-accent-hover text-sm">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Table of contents (right sidebar, desktop only) */}
      <TableOfContents headings={headings} />

      {/* Chapter content */}
      <article>
        <MarkdownRenderer content={content} />
      </article>

      {/* Previous/Next navigation */}
      <nav className="flex items-center justify-between mt-12 pt-6 border-t border-border">
        {navigation.prev ? (
          <Link
            to={`/chapter/${navigation.prev.id}`}
            className="group flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            <div>
              <div className="text-xs text-text-tertiary">Previous</div>
              <div>{navigation.prev.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {navigation.next ? (
          <Link
            to={`/chapter/${navigation.next.id}`}
            className="group flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors text-right"
          >
            <div>
              <div className="text-xs text-text-tertiary">Next</div>
              <div>{navigation.next.title}</div>
            </div>
            <ChevronRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </>
  );
}
