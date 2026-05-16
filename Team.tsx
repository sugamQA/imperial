"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MotionCard from './UI/MotionCard';

export default function Team() {
  const leadership = [
    { name: "Ambika Prasad Paudel", role: "Chairman", type: "Leadership" },
    { name: "Bipin Timalsina", role: "Chief Investment Officer (CIO)", type: "Leadership" },
    { name: "Sabina Rana", role: "Board Member", type: "Board" },
    { name: "Shiva Singh Karki", role: "Board Member", type: "Board" },
    { name: "Bhagirath Sapkota", role: "Board Member", type: "Board" },
    { name: "Narayan Prasad Paudel", role: "Board Member", type: "Board" },
    { name: "Bodh Raj Devkota", role: "Board Member", type: "Board" },
  ];

  const specialists = [
    { name: "Sudikshya Adhikari", role: "Legal Specialist", type: "Expert" },
    { name: "Amrit Aryal", role: "Investment Analyst", type: "Expert" },
    { name: "Bikesh Shrestha", role: "Finance Specialist", type: "Expert" },
  ];

  return (
    <section className="py-24 bg-white text-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gold-500">Leadership</span>
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Driven by a collective of industry veterans and specialized analysts committed to institutional excellence.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-navy-800">Executive Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, i) => (
              <MotionCard key={i} className="bg-gray-50 border-gray-200 group hover:border-gold-500 transition-all">
                <div className="aspect-square w-full bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                  <img src={`https://i.pravatar.cc/300?u=${member.name}`} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-gold-600 font-medium text-sm">{member.role}</p>
              </MotionCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-navy-800">Specialists & Analysts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {specialists.map((member, i) => (
              <MotionCard key={i} className="bg-navy-900 text-white border-gold-500/30 group hover:bg-navy-800 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold-500">
                    <img src={`https://i.pravatar.cc/150?u=${member.name}`} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-gold-400 font-medium text-sm">{member.role}</p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
