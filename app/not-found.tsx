'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-[#020617] min-h-screen relative flex items-center justify-center overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
          alt="Dubai Skyline"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gold-500 font-serif italic text-8xl md:text-[12rem] leading-none opacity-20 block mb-4">
            404
          </span>
          
          <div className="space-y-4 -mt-12 md:-mt-20">
            <h1 className="text-white text-3xl md:text-5xl font-light tracking-tight">
              Page Not <span className="font-serif italic text-gold-400">Found</span>
            </h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md mx-auto">
              The exclusive property or page you are looking for has been moved, renamed, or is currently off-market.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-950 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-gold-500/20"
            >
              <Home size={16} />
              Return Home
            </motion.a>
          </div>

          
        </motion.div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <p className="text-white/5 text-[10px] uppercase tracking-[1em] [writing-mode:vertical-lr] font-bold">
          FORTUNE ASIA REALTY
        </p>
      </div>
    </div>
  );
};

export default NotFound;