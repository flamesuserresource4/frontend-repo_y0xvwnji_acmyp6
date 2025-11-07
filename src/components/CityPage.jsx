import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

const cityContent = {
  springfield: {
    title: 'Springfield Motor Rewinding',
    blurb: 'Trusted by local plants and municipalities for rapid, reliable service.',
  },
  riverton: {
    title: 'Riverton Motor Rewinding',
    blurb: 'Serving Riverton’s industrial corridor with same-day pickup.',
  },
  oakwood: {
    title: 'Oakwood Motor Rewinding',
    blurb: 'Precision rewinds and on-site service for Oakwood businesses.',
  },
  fairview: {
    title: 'Fairview Motor Rewinding',
    blurb: 'Emergency response and scheduled maintenance in Fairview.',
  },
  lakeside: {
    title: 'Lakeside Motor Rewinding',
    blurb: 'Comprehensive motor shop services for Lakeside and beyond.',
  },
};

export default function CityPage() {
  const { city } = useParams();
  const info = cityContent[city] || { title: `${city?.[0]?.toUpperCase()}${city?.slice(1)} Motor Rewinding`, blurb: 'Professional motor rewinding, repair, and testing.' };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center gap-2 text-blue-700 mb-4 text-sm">
        <MapPin className="w-4 h-4" />
        <Link to="/service-area" className="hover:underline">Back to Service Area</Link>
      </div>
      <h1 className="text-3xl font-bold">{info.title}</h1>
      <p className="text-gray-700 mt-2">{info.blurb}</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h2 className="font-semibold">What we offer in this area</h2>
          <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-1">
            <li>Pickup and delivery for motors up to 5,000 lbs</li>
            <li>24/7 emergency rewind service</li>
            <li>On-site removal, installation, and alignment</li>
            <li>Certified testing and warranty</li>
          </ul>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold">Need help right now?</h3>
          <p className="text-gray-700">Call our local team for immediate dispatch.</p>
          <a href="tel:+1234567890" className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">
            <Phone className="w-4 h-4" /> (123) 456-7890
          </a>
        </div>
      </div>
    </div>
  );
}
