import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { chapters, chapterGroups } from '../content/index.js';
import { loadMarkdown } from '../utils/markdownLoader';

export default function PrintPage() {
  const originalThemeRef = useRef(null);

  // Force light mode for print-friendly rendering; restore on unmount
  useEffect(() => {
    const html = document.documentElement;
    originalThemeRef.current = html.classList.contains('dark') ? 'dark' : 'light';
    html.classList.remove('dark');

    return () => {
      if (originalThemeRef.current === 'dark') {
        html.classList.add('dark');
      }
    };
  }, []);

  return (
    <div className="print-document">
      {/* Screen-only toolbar */}
      <div className="print-toolbar">
        <Link to="/" className="print-toolbar-back">
          <ArrowLeft size={16} />
          Back to Wiki
        </Link>
        <button onClick={() => window.print()} className="print-toolbar-btn">
          <Printer size={16} />
          Print / Save as PDF
        </button>
      </div>

      {/* Cover page */}
      <div className="print-cover">
        <div className="print-cover-inner">
          <h1 className="print-cover-title">MazeBreak</h1>
          <p className="print-cover-subtitle">Game Design Document</p>
          <div className="print-cover-meta">
            <span>v2.0</span>
            <span className="print-cover-separator">|</span>
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Table of contents */}
      <div className="print-toc">
        <h2 className="print-toc-heading">Table of Contents</h2>
        {chapterGroups.map((group) => {
          const groupChapters = group.chapters
            .map((id) => chapters.find((c) => c.id === id))
            .filter(Boolean);

          return (
            <div key={group.group} className="print-toc-group">
              <h3 className="print-toc-group-name">{group.group}</h3>
              <ul className="print-toc-list">
                {groupChapters.map((chapter) => (
                  <li key={chapter.id} className="print-toc-item">
                    <span className="print-toc-chapter-num">
                      {typeof chapter.chapter === 'number'
                        ? String(chapter.chapter).padStart(2, '0')
                        : chapter.chapter}
                    </span>
                    <span className="print-toc-chapter-title">{chapter.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* All chapters, grouped */}
      {chapterGroups.map((group) => {
        const groupChapters = group.chapters
          .map((id) => chapters.find((c) => c.id === id))
          .filter(Boolean);

        return (
          <div key={group.group} className="print-group">
            <h2 className="print-group-title">{group.group}</h2>
            {groupChapters.map((chapter) => {
              const content = loadMarkdown(chapter.file);
              if (!content) return null;

              return (
                <div key={chapter.id} className="print-chapter">
                  <MarkdownRenderer content={content} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
