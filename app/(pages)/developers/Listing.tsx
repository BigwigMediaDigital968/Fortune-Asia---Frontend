"use client";

const motionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

import DeveloperCard from "@/app/Components/Developers/DeveloperCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getDevelopers } from "@/app/lib/api";

export default function Listing() {
  const {
    data: developersResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["developers"],
    queryFn: () => getDevelopers(),
    placeholderData: (prev) => prev, // 👈 smooth transition
  });

  console.log("Fetched Developers:", developersResponse?.data);
  const developers = developersResponse?.data || developersResponse || [];

  const renderSkeleton = (index: number) => (
    <motion.div
      key={`dev-skel-${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-navy-900 overflow-hidden rounded-lg border border-white/5"
    >
      <div className="aspect-[4/3] bg-slate-200 animate-pulse" />
      <div className="p-6 py-4 space-y-4">
        <div className="h-6 w-3/4 rounded-full bg-slate-200 animate-pulse" />
        <div className="h-4 w-full rounded-full bg-slate-200 animate-pulse" />
        <div className="h-4 w-2/3 rounded-full bg-slate-200 animate-pulse" />
        <div className="grid grid-cols-2 gap-1 py-2 border-y border-white/5">
          <div className="flex flex-col items-center gap-1">
            <div className="h-4 w-16 rounded-full bg-slate-200 animate-pulse" />
            <div className="h-3 w-12 rounded-full bg-slate-200 animate-pulse" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-4 w-16 rounded-full bg-slate-200 animate-pulse" />
            <div className="h-3 w-12 rounded-full bg-slate-200 animate-pulse" />
          </div>
        </div>
        <div className="h-10 w-full rounded-lg bg-slate-200 animate-pulse" />
      </div>
    </motion.div>
  );

  return (
    <>
      <section className="mt-24 max-w-7xl mx-auto px-6 md:px-14">
        {/* Grid of Developer Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={motionContainer}
          className="flex flex-wrap justify-center gap-6"
        >
          {isLoading || error
            ? Array.from({ length: 6 })?.map((_, index) =>
                renderSkeleton(index),
              )
            : developers?.map((developer: any, index: number) => (
                <DeveloperCard
                  key={developer._id || developer.slug}
                  developer={developer}
                  index={index}
                />
              ))}
        </motion.div>

        {/* Footer CTA */}
        <div className="mt-32 text-center bg-white/5 border border-white/10 rounded-[40px] p-16 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-1000" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              Looking for a specific <br />
              <span className="text-gold-400 font-serif italic">
                developer?
              </span>
            </h3>
            <p className="text-white/50 text-xl font-light">
              Our team has relationships with all major developers in Dubai. Let
              us connect you with the right partner for your investment.
            </p>
            <div className="pt-6">
              <Link
                href={"/contact"}
                className="px-12 py-5 bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-[0.4em] rounded-xl hover:bg-white transition-all duration-300 shadow-2xl shadow-gold-400/20 active:scale-95"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
