import { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchModal from './SearchModal';
import useTheme from '../hooks/useTheme';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Ctrl+K to open search
  const handleKeyDown = useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      setSearchOpen(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header
        onSearchOpen={() => setSearchOpen(true)}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content area */}
      <main className="pt-14 lg:pl-[280px] xl:pr-[220px] min-h-screen">
        <div className="max-w-content mx-auto px-6 py-8 sm:px-8">
          {children}
        </div>
      </main>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}
