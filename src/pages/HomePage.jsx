import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { chapters, chapterGroups } from '../content/index.js';

function ChapterIcon({ name, size = 20 }) {
  const Icon = Icons[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-2">
          MazeBreak
        </h1>
        <p className="text-lg text-text-secondary mb-1">
          Game Design Document
        </p>
        <p className="text-sm text-text-tertiary">
          v2.0 — Single source of truth for all game design decisions
        </p>
      </div>

      {/* Chapter groups */}
      {chapterGroups.map((group) => {
        const groupChapters = group.chapters
          .map((id) => chapters.find((c) => c.id === id))
          .filter(Boolean);

        return (
          <div key={group.group} className="mb-8">
            <h2 className="font-heading text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
              {group.group}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {groupChapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  to={`/chapter/${chapter.id}`}
                  className="group flex items-start gap-3 p-4 bg-bg-secondary border border-border rounded-lg hover:border-text-tertiary hover:bg-bg-elevated transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="shrink-0 p-2 bg-bg-elevated rounded-md text-text-tertiary group-hover:text-accent transition-colors">
                    <ChapterIcon name={chapter.icon} size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-text-tertiary font-mono">
                        {typeof chapter.chapter === 'number'
                          ? String(chapter.chapter).padStart(2, '0')
                          : chapter.chapter}
                      </span>
                      <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
                        {chapter.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-text-tertiary line-clamp-2">
                      {chapter.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
