import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, MapPin, Phone } from 'lucide-react';

const NavLink = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Wrench className="w-6 h-6 text-blue-600" />
          <span className="font-semibold text-lg">Pro Rewind Motors</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" icon={Home} label="Home" />
          <NavLink to="/services" icon={Wrench} label="Services" />
          <NavLink to="/service-area" icon={MapPin} label="Service Area" />
          <NavLink to="/contact" icon={Phone} label="Contact" />
        </nav>
      </div>
    </header>
  );
}
