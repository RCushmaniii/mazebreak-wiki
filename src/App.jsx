import { Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';

function App() {
  return (
    <>
      <SignedOut>
        <div className="min-h-screen bg-bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold text-text-primary mb-2">
              MazeBreak
            </h1>
            <p className="text-text-secondary mb-8">Game Design Document</p>
            <SignIn routing="hash" />
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chapter/:chapterId" element={<ChapterPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </SignedIn>
    </>
  );
}

export default App;
