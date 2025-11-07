import React, { useState } from 'react';
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2">Reach out for quotes, scheduling, or emergency assistance.</p>
        <div className="mt-6 space-y-3 text-gray-700">
          <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-600"/> (123) 456-7890</p>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-600"/> service@prorewind.com</p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600"/> 123 Industrial Park Rd, Springfield, ST</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" disabled={status==='loading'} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 disabled:opacity-70">
          {status==='loading' && <Loader2 className="w-4 h-4 animate-spin"/>}
          {status==='loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status==='success' && <p className="text-green-600 text-sm">Thanks! We’ll be in touch shortly.</p>}
        {status==='error' && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}
