
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationListPage from './pages/DestinationListPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CreateCaseFilePage from './pages/CreateCaseFilePage';
import UpgradePage from './pages/UpgradePage';
import DossierPage from './pages/DossierPage';
import DossierListPage from './pages/DossierListPage';
import MapRoomPage from './pages/MapRoomPage';
import FieldKitPage from './pages/FieldKitPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slctrips-light">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationListPage />} />
            <Route path="/destinations/:id" element={<DestinationDetailPage />} />
            <Route path="/dossiers" element={<DossierListPage />} />
            <Route path="/dossier/:id" element={<DossierPage />} />
            <Route path="/create-case/:id" element={<CreateCaseFilePage />} />
            <Route path="/upgrade" element={<UpgradePage />} />
            <Route path="/map-room" element={<MapRoomPage />} />
            <Route path="/field-kit" element={<FieldKitPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;