import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { chapters, chapterGroups } from '../content/index.js';

function ChapterIcon({ name, size = 16 }) {
  const Icon = Icons[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [collapsedGroups, setCollapsedGroups] = useState({});

  const toggleGroup = (groupName) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const currentChapterId = location.pathname.startsWith('/chapter/')
    ? location.pathname.split('/chapter/')[1]
    : null;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-14 left-0 bottom-0 w-[280px] bg-bg-secondary border-r border-border z-50 overflow-y-auto transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <nav className="py-4">
          {chapterGroups.map((group) => {
            const isCollapsed = collapsedGroups[group.group];
            const groupChapters = group.chapters
              .map((id) => chapters.find((c) => c.id === id))
              .filter(Boolean);

            return (
              <div key={group.group} className="mb-1">
                {/* Group header */}
                <button
                  onClick={() => toggleGroup(group.group)}
                  className="w-full flex items-center gap-2 px-4 py-2 text-xs font-heading font-semibold text-text-tertiary uppercase tracking-wider hover:text-text-secondary transition-colors"
                >
                  {isCollapsed ? (
                    <ChevronRight size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                  {group.group}
                </button>

                {/* Chapter links */}
                {!isCollapsed && (
                  <div className="space-y-0.5">
                    {groupChapters.map((chapter) => {
                      const isActive = currentChapterId === chapter.id;
                      return (
                        <Link
                          key={chapter.id}
                          to={`/chapter/${chapter.id}`}
                          onClick={onClose}
                          className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-md text-sm transition-all duration-150 ${
                            isActive
                              ? 'bg-accent/10 text-accent border-l-2 border-accent'
                              : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                          }`}
                        >
                          <ChapterIcon
                            name={chapter.icon}
                            size={16}
                          />
                          <span className="truncate">{chapter.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
