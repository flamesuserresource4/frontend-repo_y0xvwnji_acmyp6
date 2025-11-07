import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Router from './components/Router.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
