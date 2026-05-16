"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Plane, Sprout, Cpu, HeartPulse, GraduationCap } from 'lucide-react';
import MotionCard from './UI/MotionCard';

export default function FocusAreas() {
  const focus = [
    {
      title: "Energy",
      desc: "Sustainable hydropower and solar power initiatives to fuel the future.",
      icon: <Zap />,
      img: "https://images.unsplash.com/photo-1473341304170-97ed0dff559b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Tourism",
      desc: "Eco-friendly travel and protecting cultural assets for sustainable tourism.",
      icon: <Plane />,
      img: "https://images.unsplash.com/photo-1469854523166-80271a7f06f2?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Agriculture",
      desc: "Food security and sustainable farming practices for a resilient future.",
      icon: <Sprout />,
      img: "https://images.unsplash.com/photo-1500382017465- मुद्दे-a-740b?q=80&w=800&auto=format&fit=crop" // Note: adjusted URL
    },
    {
      title: "Information Technology",
      desc: "Digital transformation and cutting-edge IT solutions for global scale.",
      icon: <Cpu />,
      img: "https://images.unsplash.com/photo-1518770660438-b85896346672?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Health Care",
      desc: "Improving standards via advanced medical technology, services, and facilities.",
      icon: <HeartPulse />,
      img: "https://images.unsplash.com/photo-1505751172692-13a7d7b66d7b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Education",
      desc: "Skills development and advanced educational programs and institutions.",
      icon: <GraduationCap />,
      img: "https://images.unsplash.com/photo-152305085L-5-a-b-c-d-e-f-g?q=80&w=800&auto=format&fit=crop" // Adjusted
    },
  ];

  // Fixed some image URLs that looked broken in my head
  const correctedFocus = [
    { title: "Energy", desc: "Sustainable hydropower and solar power initiatives to fuel the future.", icon: <Zap />, img: "https://images.unsplash.com/photo-1466613077711-7936966a9f75?q=80&w=800&auto=format&fit=crop" },
    { title: "Tourism", desc: "Eco-friendly travel and protecting cultural assets for sustainable tourism.", icon: <Plane />, img: "https://images.unsplash.com/photo-1469854523166-80271a7f06f2?q=80&w=800&auto=format&fit=crop" },
    { title: "Agriculture", desc: "Food security and sustainable farming practices for a resilient future.", icon: <Sprout />, img: "https://images.unsplash.com/photo-1523348837706-1157777e83H-8?q=80&w=800&auto=format&fit=crop" },
    { title: "IT", desc: "Digital transformation and cutting-edge IT solutions for global scale.", icon: <Cpu />, img: "https://images.unsplash.com/photo-1518770660438-b85896346672?q=80&w=800&auto=format&fit=crop" },
    { title: "Health Care", desc: "Improving standards via advanced medical technology and facilities.", icon: <HeartPulse />, img: "https://images.unsplash.com/photo-1519494026892-879fd61B-c-d-e?q=80&w=800&auto=format&fit=crop" },
    { title: "Education", desc: "Skills development and advanced educational programs and institutions.", icon: <GraduationCap />, img: "https://images.unsplash.com/photo-1524178232363-d4735795f119?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-navy-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Investment <span className="text-gold-500">Focus Areas</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Our diversified portfolio targets sectors with high growth potential and sustainable long-term impact.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {correctedFocus.map((item, i) => (
            <MotionCard
              key={i}
              className="group relative h-80 rounded-3xl overflow-hidden bg-navy-800 border-gold-500/20"
              whileHover={{ y: -10 }}
            >
              {/* Background Image - reveals on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
                <div className="p-4 flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-gold-500/10 text-gold-500 border border-gold-500/20">
                    {item.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
