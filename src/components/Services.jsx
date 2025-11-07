import React from 'react';
import { Cog, Repeat, Ruler, Gauge, Wrench, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Repeat, title: 'Motor Rewinding', desc: 'Precision rewinding for AC/DC motors, pumps, compressors, and generators.' },
    { icon: Ruler, title: 'Balancing & Alignment', desc: 'Dynamic balancing, laser alignment, and vibration analysis.' },
    { icon: Gauge, title: 'Testing & Diagnostics', desc: 'Surge, hi-pot, insulation resistance, and core-loss testing.' },
    { icon: Wrench, title: 'Mechanical Repair', desc: 'Bearing replacement, shaft repair, housing machining, and seals.' },
    { icon: Cog, title: 'Overhauls & Retrofits', desc: 'Efficiency upgrades, rewedge, re-lamination, and rebuilds.' },
    { icon: Truck, title: 'Pickup & Delivery', desc: 'Rapid logistics with secure transport and documented chain of custody.' },
  ];

  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <p className="text-gray-600 mt-2">Complete motor shop capabilities to keep your equipment running.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-lg bg-white border shadow-sm hover:shadow-md transition">
                <Icon className="w-6 h-6 text-blue-600" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold">Why choose us?</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-gray-700">
          <li>Certified technicians with decades of experience</li>
          <li>Documented QA process and warranty on every rewind</li>
          <li>Emergency response with rapid turnarounds</li>
          <li>Transparent pricing and clear timelines</li>
        </ul>
      </section>
    </div>
  );
}
