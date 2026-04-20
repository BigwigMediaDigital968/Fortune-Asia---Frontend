"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          alt="Dubai skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/80" />
      </div>

      <div className="relative z-10 py-20 lg:py-28 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={motionContainer}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Ready to Start?</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-white font-semibold max-w-2xl"
            style={{
              fontSize: "clamp(2rem,4.5vw,3.75rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Your Dubai Property Journey{" "}
            <em className="text-gold-300 not-italic">Starts Here</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-white/60 max-w-lg text-base leading-relaxed"
          >
            Whether you're buying, renting, or investing — our team is ready to
            guide you every step of the way.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/properties"
              className="px-8 py-4 bg-gold-400 text-navy-900 text-xs font-sans font-semibold tracking-widest uppercase rounded hover:brightness-105 transition-all duration-200"
            >
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/40 text-white text-xs font-sans font-semibold tracking-widest uppercase rounded hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              Speak to an Agent
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
