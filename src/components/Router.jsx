import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Services from './Services.jsx';
import ServiceArea from './ServiceArea.jsx';
import Contact from './Contact.jsx';
import CityPage from './CityPage.jsx';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service-area" element={<ServiceArea />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/area/:city" element={<CityPage />} />
    </Routes>
  );
}
