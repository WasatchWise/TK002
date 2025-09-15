
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { DestinationsProvider } from './context/DestinationsContext';
import FullScreenLoader from './components/FullScreenLoader';

// Lazy load pages for code splitting and better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const DestinationListPage = lazy(() => import('./pages/DestinationListPage'));
const DestinationDetailPage = lazy(() => import('./pages/DestinationDetailPage'));

const App: React.FC = () => {
  return (
    <DestinationsProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-slctrips-light">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<FullScreenLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/destinations" element={<DestinationListPage />} />
                <Route path="/destinations/:id" element={<DestinationDetailPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </DestinationsProvider>
  );
};

export default App;
