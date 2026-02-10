import { UserButton } from '@clerk/clerk-react';
import { Search, Menu, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({ onSearchOpen, onMenuToggle, theme, onThemeToggle }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-bg-secondary/80 backdrop-blur-md border-b border-border flex items-center px-4 gap-3">
      {/* Mobile menu toggle */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <span className="font-heading font-bold text-lg text-text-primary">
          MazeBreak
        </span>
        <span className="hidden sm:inline text-text-tertiary text-sm font-body">
          GDD
        </span>
      </Link>

      {/* Search trigger */}
      <button
        onClick={onSearchOpen}
        className="flex-1 max-w-md mx-auto flex items-center gap-2 px-3 py-1.5 bg-bg-elevated border border-border rounded-lg text-text-tertiary text-sm hover:border-text-tertiary transition-colors cursor-pointer"
      >
        <Search size={16} />
        <span className="flex-1 text-left">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-bg-secondary border border-border rounded text-xs text-text-tertiary">
          Ctrl+K
        </kbd>
      </button>

      {/* Theme toggle */}
      <button
        onClick={onThemeToggle}
        className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-bg-elevated"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* User button */}
      <div className="shrink-0">
        <UserButton
          appearance={{
            elements: {
              avatarBox: 'w-8 h-8',
            },
          }}
        />
      </div>
    </header>
  );
}
