"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Image from "next/image";
import { ArrowRight, Briefcase, Medal, Play } from "lucide-react";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className=" text-white py-10 mt-10 sm:mt-0 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT COLUMN: Layered Image Gallery */}
        <div className="lg:col-span-6 relative flex justify-center">

          {/* Main Large Image (Left, with Video Icon) */}
          <div className="flex justify-center">


            <div className="relative -left-20 z-10 w-72 h-[420px] rounded-3xl border-2 border-[#131a3d]">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                alt="Team discussing career options"
                fill
                className="object-cover rounded-3xl"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-[#5176fc] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Play className="text-white text-xl translate-x-0.5" />
                </button>
              </div>
              <div className="absolute h-full w-20 border-l-2 border-dashed border-[#131a3d] rounded-3xl pointer-events-none" />
              {/* Golden/Orange Badge (Top Right) */}
              <div className="absolute top-[-40px] -left-24 z-20 bg-gold-400 p-4 sm:p-6 rounded-2xl w-44 text-center shadow-2xl">
                <h3 className="text-2xl sm:text-5xl font-extrabold text-[#050616]">30+</h3>
                <p className="text-[10px] uppercase font-semibold text-[#050616] tracking-widest mt-1">
                  Years Of Experience
                </p>
              </div>

              {/* Secondary Inset Image (Bottom Right) */}
              <div className="absolute bottom-[-30px] -right-50 z-20 w-64 h-[280px] rounded-3xl overflow-hidden border-2 border-[#131a3d]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                  alt="Group workspace"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>




            {/* Decorative Dashed Line (Far Left) */}
          </div>
        </div>

        {/* RIGHT COLUMN: Text & Info */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-[#fcad51] font-bold text-[10px] uppercase tracking-[0.3em] block mb-2">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-lg mb-6">
              Find Your  <span className="text-gold-400">Dream Property </span> in Dubai
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg mb-10">
              Discover exceptional properties across Dubai with our exclusive listings and expert guidance. Whether you're buying, investing, or renting, we help you secure the perfect property and build your future.                                </p>
          </motion.div>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start max-w-lg group">
              <div className="w-14 h-14 aspect-square bg-white/5 rounded-2xl flex items-center justify-center text-[#fcad51] border border-white/5 group-hover:bg-[#fcad51] group-hover:text-white transition-all cursor-pointer">
                <Medal size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Premium Properties Across Dubai</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Explore a wide range of handpicked apartments, villas, and commercial spaces in prime locations and world-class communities.                                        </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start max-w-lg group">
              <div className="w-14 h-14 aspect-square bg-white/5 rounded-2xl flex items-center justify-center text-[#fcad51] border border-white/5 group-hover:bg-[#fcad51] group-hover:text-white transition-all cursor-pointer">
                <Briefcase size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">The Perfect Property For Your Lifestyle
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Our expert advisors match you with properties that fit your budget, preferences, and long-term goals—ensuring the right choice every time.                                        </p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-12 cursor-pointer px-10 py-4 rounded-lg border border-white text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group hover:bg-white hover:text-navy-950 transition-all"
          >
            <Link href={"/properties"} className="flex items-center gap-2">
              Explore Properties
              <ArrowRight className="text-[9px] translate-y-[0.5px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
