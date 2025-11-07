import React from 'react';
import { Clock, PhoneCall } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-blue-700 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 emergency motor rewinding and repair</p>
        <a href="tel:+1234567890" className="inline-flex items-center gap-2 font-semibold hover:underline">
          <PhoneCall className="w-4 h-4" /> (123) 456-7890
        </a>
      </div>
    </div>
  );
}
