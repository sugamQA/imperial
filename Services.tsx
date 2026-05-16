"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, TrendingUp, Search } from 'lucide-react';
import MotionCard from './UI/MotionCard';

export default function Services() {
  const services = [
    {
      title: "Private Equity",
      desc: "We unlock value, optimize operations, and drive sustainable growth for established enterprises.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-navy-900",
      text: "text-white"
    },
    {
      title: "Venture Capital",
      desc: "Providing critical capital and strategic guidance to innovative startups and high-growth businesses.",
      icon: <Rocket className="w-8 h-8" />,
      color: "bg-gold-500",
      text: "text-navy-900"
    },
    {
      title: "Growth Acceleration",
      desc: "Scaling potential-driven companies through resources, mentorship, and operational excellence.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-gray-200",
      text: "text-navy-900"
    },
    {
      title: "Market Analysis",
      desc: "Utilizing rigorous research and deep market analysis to make data-driven investment decisions.",
      icon: <Search className="w-8 h-8" />,
      color: "bg-navy-800",
      text: "text-white"
    }
  ];

  return (
    <section id="strategy" className="py-24 bg-gray-50 text-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What We <span className="text-gold-500">Do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Combining strategic capital with deep operational expertise to transform businesses and generate sustainable value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <MotionCard
              key={i}
              className={`${service.color} ${service.text} border-0 shadow-xl group overflow-hidden relative`}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            >
              <div className="relative z-10">
                <div className="mb-6 p-3 inline-block rounded-lg bg-white/10 backdrop-blur-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{service.desc}</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
