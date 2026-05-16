"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MotionCard from './UI/MotionCard';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden bg-white text-navy-900">
      {/* Parallax Background Element */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-375260702979?q=80&w=1000&auto=format&fit=crop"
          alt="Office"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A Private Equity & Venture Capital <span className="text-gold-500">Powerhouse</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Established on 2081 Baisakh 12, Imperial Innovation Fund is a dedicated
                private equity and venture capital firm specifically designed to support
                and amplify the growth of Nepalese enterprises.
              </p>
              <p>
                Our team brings a multidisciplinary breadth of knowledge across
                <span className="text-navy-900 font-semibold"> insurance, banking, hospitality, and capital markets</span>,
                allowing us to navigate complex market dynamics and unlock untapped value.
              </p>
              <p className="font-medium italic text-navy-800">
                "We don't just invest capital; we invest strategic foresight."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MotionCard className="bg-navy-900 text-white border-gold-500/30">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mb-4 text-navy-900 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-2">Visionary Strategy</h3>
              <p className="text-gray-400 text-sm">Prioritizing innovation and future growth over short-term gains.</p>
            </MotionCard>
            <MotionCard className="bg-gray-100 text-navy-900 border-gray-300">
              <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-2">Ethical Growth</h3>
              <p className="text-gray-500 text-sm">Balancing measured risks with sustainable, long-term returns.</p>
            </MotionCard>
            <MotionCard className="bg-gray-100 text-navy-900 border-gray-300">
              <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-500 text-sm">Leveraging diversification to maintain stability in volatile markets.</p>
            </MotionCard>
            <MotionCard className="bg-gold-500 text-navy-900 border-white shadow-xl">
              <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">4</div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-navy-800 text-sm">Deep domain knowledge in multiple key economic sectors.</p>
            </MotionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
