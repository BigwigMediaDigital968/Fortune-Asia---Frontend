"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import Image from "next/image";


const clients = [
  {
    name: "Berger",
    logo: "https://new-projects-media.propertyfinder.com/developer/3fadc15f-708b-4d93-90bc-4aa9086d16f2/logo/image/LYPK0EVx4_03jTZaAXVs0uzJmaEcb8ZHyQCtXsh-VwQ=/original.png",
  },
  {
    name: "Mitsubishi Electric",
    logo: "https://new-projects-media.propertyfinder.com/developer/e1382d70-227a-426e-8d67-13b2f82825f3/logo/image/klpCYzPMEz_wMpR_Pd8e1lNb_qIQAs40XZx-454Z99Q=/original.png",
  },
  {
    name: "Omaxe",
    logo: "https://new-projects-media.propertyfinder.com/developer/ed7b3710-df22-48d2-a24e-bc851decdd71/logo/image/EM8YMgV30X6M18CGEZq8jkyr-VU5kZMrpFCRCA56N2U=/original.png",
  },
  {
    name: "JBM Group",
    logo: "https://new-projects-media.propertyfinder.com/developer/3107cb51-c1a3-4b32-8d7f-7825a7b70b6d/logo/image/QtgYF6BURNz9wf7lkS3oCrw9OuogMZM6OVRPq4OcE70=/original.png",
  },
  {
    name: "Apple",
    logo: "https://new-projects-media.propertyfinder.com/developer/5af69aab-1109-4813-9be2-32f7ec383404/logo/image/Swu1wfiJ9DBIxxBMJ29ycjMf9gR30WBDZFmzNHnPww4=/original.png",
  },
  {
    name: "Metso",
    logo: "https://new-projects-media.propertyfinder.com/developer/bdc1000f-62d0-4ee5-a491-177be9beb62e/logo/image/7iD-Xy5auUkyIIRKNwsz8_0UnbDjtjycu9lS4n3wKt0=/original.png",
  },
];

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

  // Continuous loop to highlight logos one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 2500); // Changes every 2.5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    // Deep Navy Background
    <section className="bg-navy-950 py-10 md:py-20 overflow-hidden selection:bg-gold-400/30">
      <div className="max-w-[1320px] mx-auto px-6 text-center">

        {/* Modernized Heading with Gold Accent */}
        <div className="mb-20 max-w-2xl mx-auto">
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

        {/* 3x2 Grid for Desktop, stacks on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clients.map((client, index) => {
            const isActive = activeIndex === index;

            return (

              <motion.div
                key={index}
                variants={itemVariants}
                // Subtle scale and border glow on hover
                whileHover={{ scale: 1.03, borderColor: "#d4a435" }}
                className={`group relative flex items-center justify-center p-5 max-w-[300px] aspect-[5/3] rounded-[2rem] bg-white/5 border border-white/10  transition-all duration-300 hover:shadow-[0_20px_50px_rgba(212,164,53,0.08)] cursor-pointer ${isActive ? "shadow-[0_20px_50px_rgba(212,164,53,0.08)] !border-[#d4a435]" : "shadow-[0_20px_50px_rgba(0,0,0,0.1)]"}`}
              >
                {/* Optional slight glass gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent  group-hover:opacity-100 transition-opacity rounded-[2rem] ${isActive ? "opacity-100" : "opacity-0"}`} />

                {/* Logo Container with specific Grayscale-to-Color logic */}
                <div className="relative w-full h-full flex items-center justify-center transition-all duration-500">

                  {/* 1. Default Grayscale State */}
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo grayscale`}
                    fill
                    className={`object-contain opacity-40 group-hover:opacity-0 transition-opacity duration-500 filter grayscale ${isActive ? "opacity-0" : ""}`}
                    unoptimized
                  />

                  {/* 2. Overlaid Color State (Visible on Hover) */}
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo color`}
                    fill
                    className={`object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isActive ? "opacity-100" : ""}`}
                    unoptimized
                  />
                </div>

                {/* Decorative accent for luxury feel */}
                <div className={`absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent group-hover:opacity-100 transition-opacity ${isActive ? "opacity-100" : "opacity-0 "}`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

