"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Image from "next/image";
import DevelopersSection from "./DevelopersSection";

export default function Developers() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    // Deep Navy Background
    <>
      <section className="bg-navy-950 py-10 md:py-20 overflow-hidden selection:bg-gold-400/30">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          {/* Modernized Heading with Gold Accent */}
          <div className="mb-10 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
            >
              Our Partners
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight"
            >
              Our Valued Developers
            </motion.h2>
          </div>

          <DevelopersSection />
        </div>
      </section>
    </>
  );
}
