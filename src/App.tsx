import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FleetPage from './pages/FleetPage';
import LicencesPage from './pages/LicencesPage';
import AchievementsPage from './pages/AchievementsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/licences" element={<LicencesPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;