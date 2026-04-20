"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";

const stats = [
  { number: "1,200+", label: "Properties Sold" },
  { number: "AED 2B+", label: "Transaction Value" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "12+", label: "Years in Dubai" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="bg-navy-900 py-10 lg:py-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={motionContainer}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <div
                className="font-display text-4xl lg:text-5xl font-bold text-gold-400 leading-none"
                style={{ letterSpacing: "-0.03em" }}
              >
                {s.number}
              </div>
              <div className="text-white/50 text-xs font-sans tracking-widest uppercase mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
