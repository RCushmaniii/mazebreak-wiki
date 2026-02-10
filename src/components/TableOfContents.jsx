import { useState, useEffect } from 'react';

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!headings || headings.length === 0) return null;

  return (
    <nav className="hidden xl:block fixed right-0 top-14 w-[220px] h-[calc(100vh-3.5rem)] overflow-y-auto py-8 px-4">
      <h4 className="font-heading text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
        On this page
      </h4>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollTo(heading.id)}
              className={`block w-full text-left text-xs py-1 transition-colors ${
                heading.level === 3 ? 'pl-3' : ''
              } ${
                activeId === heading.id
                  ? 'text-accent font-medium'
                  : 'text-text-tertiary hover:text-text-secondary'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
