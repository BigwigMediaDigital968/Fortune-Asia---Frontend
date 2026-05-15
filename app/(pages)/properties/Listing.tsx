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

import PropertyCard, { PropertyCardSkeleton } from "@/app/Components/Buy/PropertyCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "@/app/lib/properties";
import { ArrowRight, Eye, Square } from "lucide-react";

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
            {isLoading ? (<>
              <div className=" w-md gap-2 mb-2 animate-pulse">
                <div className="h-6 w-full bg-white/10 rounded" />
                <div className="h-4 mt-2 w-full bg-white/10 rounded" />
              </div>
            </>) : (
              <>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  Showing {properties.length} exceptional opportunities across
                  Dubai's most prestigious communities.
                </p>
              </>
            )}
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

          {isLoading ? (
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <PropertyCardSkeleton key={index} />
              ))}
            </>
          ) : (
            <>
            {properties?.map((property: any, index: number) => (
              <PropertyCard key={property._id} property={property} index={index} />
            ))}
            <PlotsRedirectCard/>
            </>
          )}
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

const PlotsRedirectCard = ({ index = 0 }) => {
  // Static dummy data for the redirection card
  const staticData = {
    propertyName: "Exclusive Land Portfolio",
    propertyType: "Premium Plots",
    tagline: "Prime opportunities in strategic locations",
    ctaDescription: "Discover curated investment-grade land parcels for bespoke residential and commercial development.",
    image: "https://images.unsplash.com/photo-1617449512807-7401d38e5c29?q=80&w=1074&auto=format&fit=crop",
    isFeatured: true
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-navy-900 overflow-hidden rounded-2xl border border-white/5 hover:border-gold-400/30 transition-all duration-500 shadow-2xl hover:shadow-gold-500/10 max-w-sm w-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={staticData.image}
          alt={staticData.propertyName}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

        {/* Category Badge */}
        <div className="absolute top-5 left-5 px-4 py-1.5 bg-[#020617]/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
          {staticData.propertyType}
        </div>

        {/* Featured Badge */}
        {false && staticData.isFeatured && (
          <div className="absolute bottom-5 left-5 px-3 py-1 bg-gold-500 text-[#020617] text-[10px] font-bold uppercase tracking-tight rounded-sm">
            Featured Collection
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 py-6">
        <div className="items-start mb-6">
          <h3 className="text-2xl font-serif text-white group-hover:text-gold-400 transition-colors mb-2">
            {staticData.propertyName}
          </h3>
          <p className="text-gold-500 font-bold text-sm tracking-tight">
            {staticData.tagline}
          </p>
        </div>

        {/* Informational Content for Redirection */}
        <div className="py-1 border-y border-white/10">
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            {staticData.ctaDescription}
          </p>
        </div>

        {/* Action Button */}
        <Link
          href={"/plots"}
          className="w-full mt-4 py-3 bg-white/5 hover:bg-gold-400 border border-white/10 hover:border-gold-400 text-white hover:text-navy-950 font-bold text-[10px] uppercase tracking-[0.2em] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
        >
          <Eye size={16} />
          Explore Land Bank
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-2 transition-transform duration-300"
          />
        </Link>
      </div>
    </motion.div>
  );
};