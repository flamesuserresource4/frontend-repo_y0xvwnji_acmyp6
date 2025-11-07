import React from 'react';
import { CheckCircle, Wrench, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Industrial Electric Motor Rewinding & Repair</h1>
            <p className="mt-4 text-white/90 text-lg">Fast, precise, and reliable rewinding for AC/DC motors, pumps, compressors, and generators. Keeping your operation running with minimal downtime.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="px-5 py-3 bg-white text-blue-700 font-semibold rounded-md shadow hover:shadow-md">Get a Quote</Link>
              <Link to="/services" className="px-5 py-3 bg-blue-800/60 border border-white/20 rounded-md hover:bg-blue-800/80">View Services</Link>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-white/90">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> 24/7 emergency response</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> ISO-grade testing</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Pickup & delivery</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Warranty on all rewinds</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              <Feature icon={Wrench} title="Precision Rewinding" desc="Rewinding for fractional to large-frame motors with calibrated coil data." />
              <Feature icon={Zap} title="Efficiency Upgrades" desc="Improve performance, reduce heat, and extend motor lifespan." />
              <Feature icon={Shield} title="Quality Assurance" desc="Surge, hi-pot, insulation, and vibration testing on every job." />
              <Feature icon={Wrench} title="On-Site Service" desc="Field service crews for removal, installation, and alignment." />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Industries We Serve</h2>
        <p className="text-gray-600 mt-2">Manufacturing, water treatment, HVAC, agriculture, food processing, and more.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {['Manufacturing', 'Municipal', 'HVAC', 'Agriculture', 'Food & Beverage', 'Mining'].map((tag) => (
            <div key={tag} className="p-4 rounded-lg border bg-white shadow-sm">{tag}</div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-4 rounded-lg bg-white/10">
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-white/90">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold">Need emergency motor rewinding?</h3>
          <p className="text-gray-600">Call our 24/7 line and we’ll dispatch a technician immediately.</p>
        </div>
        <a href="tel:+1234567890" className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold shadow hover:bg-blue-700">Call (123) 456-7890</a>
      </div>
    </div>
  );
}
