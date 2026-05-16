"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center font-bold text-navy-900 text-lg">I</div>
              <span className="text-xl font-bold tracking-tight">IMPERIAL<span className="text-gold-500">FUND</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              A premier private equity and venture capital firm committed to driving innovation and sustainable growth across Nepal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-navy-800 text-gray-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-navy-800 text-gray-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-navy-800 text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
            </div
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#strategy" className="text-gray-400 hover:text-white transition-colors">Investment Strategy</Link></li>
              <li><Link href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Vacancies</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Legal Notices</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-gold-500" />
                <span>Metro Park, Lazimpat, Kathmandu</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-gold-500" />
                <span>info@imperialfund.com.np</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-gold-500" />
                <span>01 4547882 / 9851449199</span>
              </li>
            </ul>
          </div>
        </div

        <div className="pt-8 border-t border-navy-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Imperial Innovation Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
