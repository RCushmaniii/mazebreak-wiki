import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, Hash } from 'lucide-react';
import useSearch from '../hooks/useSearch';

export default function SearchModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { query, results, search, clearSearch } = useSearch();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      clearSearch();
      setSelectedIndex(0);
    }
  }, [isOpen, clearSearch]);

  const handleNavigate = useCallback(
    (result) => {
      navigate(`/chapter/${result.id}`);
      onClose();
    },
    [navigate, onClose]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        handleNavigate(results[selectedIndex]);
      } else if (e.key === 'Escape') {
        onClose();
      }
    },
    [results, selectedIndex, handleNavigate, onClose]
  );

  const handleInputChange = (e) => {
    search(e.target.value);
    setSelectedIndex(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-bg-secondary border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={20} className="text-text-tertiary shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search the GDD..."
            className="flex-1 bg-transparent text-text-primary text-base outline-none placeholder:text-text-tertiary"
          />
          {query && (
            <button
              onClick={() => {
                clearSearch();
                inputRef.current?.focus();
              }}
              className="text-text-tertiary hover:text-text-secondary"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-flex px-2 py-0.5 bg-bg-elevated border border-border rounded text-xs text-text-tertiary">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {query.length < 2 && (
            <div className="px-4 py-8 text-center text-text-tertiary text-sm">
              Start typing to search the GDD...
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="px-4 py-8 text-center text-text-tertiary text-sm">
              No results found for "{query}"
            </div>
          )}

          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => handleNavigate(result)}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                index === selectedIndex
                  ? 'bg-accent/10'
                  : 'hover:bg-bg-elevated'
              } ${index > 0 ? 'border-t border-border/50' : ''}`}
            >
              <FileText
                size={18}
                className="text-text-tertiary shrink-0 mt-0.5"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-text-primary">
                    {typeof result.chapter === 'number'
                      ? `${result.chapter}. `
                      : `${result.chapter}. `}
                    {result.title}
                  </span>
                </div>
                {result.matchedHeading && (
                  <div className="flex items-center gap-1 mt-0.5 text-xs text-accent">
                    <Hash size={12} />
                    {result.matchedHeading}
                  </div>
                )}
                <p className="mt-1 text-xs text-text-tertiary line-clamp-2 leading-relaxed">
                  {result.snippet}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="flex items-center gap-4 px-4 py-2 border-t border-border text-xs text-text-tertiary">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-bg-elevated border border-border rounded">
                ↑↓
              </kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-bg-elevated border border-border rounded">
                ↵
              </kbd>
              Open
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
