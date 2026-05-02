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

import PropertyCard from "@/app/Components/Buy/PropertyCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "@/app/lib/properties";

export default function Listing() {
  const {
    data: properties = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(),
    placeholderData: (prev) => prev, // 👈 smooth transition
  });

  console.log("Fetched Properties:", properties);

  return (
    <>
      <section className="mt-24 max-w-7xl mx-auto px-6 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-gold-400 font-bold text-xs uppercase tracking-[0.4em]">
              Our Full Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white leading-tight">
              Elite Real Estate <br />
              <span className="font-serif italic text-gold-400">
                Discoveries
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Showing {properties.length} exceptional opportunities across
              Dubai's most prestigious communities.
            </p>
          </div>
        </div>

        {/* Grid of Floating Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={motionContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {properties?.map((property: any, index: number) => (
            <PropertyCard key={property._id} property={property} index={index} />
          ))}
        </motion.div>

        {/* Footer CTA */}
        <div className="mt-32 text-center bg-white/5 border border-white/10 rounded-[40px] p-16 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-1000" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              Can't find what <br />
              <span className="text-gold-400 font-serif italic">
                you're looking for?
              </span>
            </h3>
            <p className="text-white/50 text-xl font-light">
              Our advisors have access to exclusive, off-market opportunities
              that aren't listed publicly. Let us find your perfect match.
            </p>
            <div className="pt-6">
              <Link
                href={"/contact"}
                className="px-12 py-5 bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-[0.4em] rounded-xl hover:bg-white transition-all duration-300 shadow-2xl shadow-gold-400/20 active:scale-95"
              >
                Contact an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
