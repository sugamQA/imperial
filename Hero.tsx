"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-900 text-white">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-navy-700/40 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-gold-500/10 text-gold-400 text-sm font-semibold border border-gold-500/20 mb-6"
          >
            Partner in Growth
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Empowering <span className="text-gradient">Innovation</span> <br />
            Driving Prosperity
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Strategic capital and mentorship for the boldest enterprises.
            <span className="text-white font-medium block mt-2">
              Think Fresh. Work Faster. Grow Smarter. Save Money.
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all"
            >
              Explore Strategies <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 hover:border-gold-500 px-8 py-4 rounded-full font-bold transition-all"
            >
              Learn More
            </motion.button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16">
            {[
              { icon: <TrendingUp className="text-gold-500" />, label: "Growth", value: "Smarter" },
              { icon: <ShieldCheck className="text-gold-500" />, label: "Security", value: "Stable" },
              { icon: <Zap className="text-gold-500" />, label: "Speed", value: "Faster" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <div className="mb-2">{item.icon}</div>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{item.label}</span>
                <span className="text-sm font-bold">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content: 3D Rotating Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center perspective-1000"
        >
          <motion.div
            animate={{
              rotateY: [0, 10, -10, 0],
              rotateX: [0, 5, -5, 0],
              y: [0, -20, 0]
            }}
            transition={{
              rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 7, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{
              scale: 1.15,
              rotateY: 360,
              rotateX: 360,
              transition: { duration: 1, ease: "circOut" }
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
            className="relative w-72 h-96 md:w-96 md:h-[500px] cursor-pointer"
          >
            {/* The 3D "Card" Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] border-4 border-gold-500/30 group-hover:border-gold-500 transition-all">
              <img
                src="https://images.unsplash.com/photo-148640623a166-47556869a87e?q=80&w=1000&auto=format&fit=crop"
                alt="Corporate Growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating 3D accents around the card */}
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold-500/20 blur-2xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-navy-700/30 blur-2xl"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
