import { useState, useMemo, useCallback } from 'react';
import buildSearchIndex from '../utils/searchIndex';

export default function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fuse = useMemo(() => buildSearchIndex(), []);

  const search = useCallback(
    (searchQuery) => {
      setQuery(searchQuery);
      if (!searchQuery || searchQuery.length < 2) {
        setResults([]);
        return;
      }
      const fuseResults = fuse.search(searchQuery, { limit: 10 });
      const processed = fuseResults.map((result) => {
        const { item, matches, score } = result;

        // Find the best content match for a snippet
        let snippet = item.description;
        const contentMatch = matches?.find((m) => m.key === 'content');
        if (contentMatch && contentMatch.indices?.length > 0) {
          const [start] = contentMatch.indices[0];
          const snippetStart = Math.max(0, start - 60);
          const snippetEnd = Math.min(item.content.length, start + 100);
          snippet = (snippetStart > 0 ? '...' : '') +
            item.content.slice(snippetStart, snippetEnd).replace(/\n/g, ' ').trim() +
            (snippetEnd < item.content.length ? '...' : '');
        }

        // Find matched heading if available
        const headingMatch = matches?.find((m) => m.key === 'headings');
        let matchedHeading = null;
        if (headingMatch && headingMatch.value) {
          const headingWords = headingMatch.value.split(' ');
          // Try to reconstruct which heading was matched
          const allHeadings = item.content.match(/^#{2,3}\s+(.+)$/gm) || [];
          for (const h of allHeadings) {
            const headingText = h.replace(/^#{2,3}\s+/, '');
            if (headingMatch.value.includes(headingText)) {
              matchedHeading = headingText;
              break;
            }
          }
        }

        return {
          id: item.id,
          title: item.title,
          chapter: item.chapter,
          snippet,
          matchedHeading,
          score,
        };
      });

      setResults(processed);
    },
    [fuse]
  );

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  return { query, results, search, clearSearch };
}
