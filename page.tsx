"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import FocusAreas from '@/components/FocusAreas';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FocusAreas />
      <Team />
      <Footer />
    </main>
  );
}
