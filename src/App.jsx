import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import VastgoedAgency from './pages/VastgoedAgency';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="business" element={<VastgoedAgency />} />
          <Route path="business-page" element={<VastgoedAgency />} />
          <Route path="agency" element={<VastgoedAgency />} />
          <Route path="vastgoed" element={<VastgoedAgency />} />
          <Route path="vastgoed-properties" element={<VastgoedAgency />} />
          <Route path="vastgoed-agency" element={<VastgoedAgency />} />
          <Route path="vastgoed-group" element={<VastgoedAgency />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}