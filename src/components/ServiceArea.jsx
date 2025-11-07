import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  const cities = ['Springfield', 'Riverton', 'Oakwood', 'Fairview', 'Lakeside'];
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Our Service Area</h1>
      <p className="text-gray-600 mt-2">We serve industrial and commercial clients across the metro area and surrounding counties.</p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cities.map((city) => (
          <Link key={city} to={`/area/${city.toLowerCase()}`} className="p-5 rounded-lg border bg-white shadow-sm hover:shadow-md transition flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{city}</span>
          </Link>
        ))}
      </div>
      <div className="mt-10 p-6 bg-blue-50 rounded-lg">
        <h2 className="font-semibold">Don’t see your city?</h2>
        <p className="text-gray-700">Give us a call — we often travel further for planned projects and emergencies.</p>
      </div>
    </div>
  );
}
