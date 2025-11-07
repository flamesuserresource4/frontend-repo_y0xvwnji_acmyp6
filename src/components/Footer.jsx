import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-3">Pro Rewind Motors</h4>
          <p className="text-sm text-gray-400">Specialists in electric motor rewinding, repair, and maintenance for industrial, commercial, and agricultural clients.</p>
        </div>
        <div>
          <h5 className="font-semibold text-white mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/">Home</Link></li>
            <li><Link className="hover:text-white" to="/services">Services</Link></li>
            <li><Link className="hover:text-white" to="/service-area">Service Area</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white mb-3">Contact</h5>
          <p className="text-sm text-gray-400">123 Industrial Park Rd<br/>Springfield, ST 12345</p>
          <p className="text-sm mt-2"><a className="hover:text-white" href="tel:+1234567890">(123) 456-7890</a></p>
          <p className="text-sm"><a className="hover:text-white" href="mailto:service@prorewind.com">service@prorewind.com</a></p>
        </div>
        <div>
          <h5 className="font-semibold text-white mb-3">Follow Us</h5>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded bg-white/10 hover:bg-white/20"><Facebook className="w-4 h-4"/></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded bg-white/10 hover:bg-white/20"><Instagram className="w-4 h-4"/></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded bg-white/10 hover:bg-white/20"><Twitter className="w-4 h-4"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs text-gray-400">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Pro Rewind Motors. All rights reserved.</span>
          <span>Licensed • Insured • 24/7 Emergency Service</span>
        </div>
      </div>
    </footer>
  );
}
